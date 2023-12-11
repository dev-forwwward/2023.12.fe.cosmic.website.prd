// Old scroller
function transitionSideBarContent() {
  var tl_sideBarContent = gsap.timeline();

  tl_sideBarContent.from(".side-content", {
    duration: 1.0,
    translateX: "100%",
    opacity: 0,
    delay: 0.1,
    ease: "power2.out",
  });

  tl_sideBarContent.from(".side-content .text-wrapper", {
    duration: 1.0,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out",
  });
}
//transitionSideBarContent();

// New scroller
let loops = gsap.utils.toArray(".text-wrapper").map((line, i) => {
  const links = line.querySelectorAll(".company-name");
  return ScrollerLoop(links, {
    repeat: -1,
    speed: 1 + i * 0.5,
    reversed: true,
    paddingTop: parseFloat(gsap.getProperty(links[0], "marginTop", "px")),
  });
});

let currentScroll = 0;
let scrollDirection = 1;

//Scroller Direction on Scroll Action
document.querySelector(".scroller").addEventListener("scroll", () => {
  console.log("scrolling");
  let direction = window.pageYOffset > currentScroll ? 1 : -1;
  if (direction !== scrollDirection) {
    loops.forEach((tl) =>
      gsap.to(tl, { timeScale: direction, overwrite: true })
    );
    scrollDirection = direction;
  }
  currentScroll = window.pageYOffset;
});

function ScrollerLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startY = items[0].offsetTop,
    times = [],
    heights = [],
    yPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalHeight,
    curY,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "y" to "yPercent" to make things responsive, and populate the heights/yPercents Arrays to make lookups faster.
    yPercent: (i, el) => {
      let h = (heights[i] = parseFloat(gsap.getProperty(el, "height", "px")));
      yPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "y", "px")) / h) * 100 +
          gsap.getProperty(el, "yPercent")
      );
      return yPercents[i];
    },
  });
  gsap.set(items, { y: 0 });
  totalHeight =
    items[length - 1].offsetTop +
    (yPercents[length - 1] / 100) * heights[length - 1] -
    startY +
    items[length - 1].offsetHeight *
      gsap.getProperty(items[length - 1], "scaleY") +
    (parseFloat(config.paddingTop) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curY = (yPercents[i] / 100) * heights[i];
    distanceToStart = item.offsetTop + curY - startY;
    distanceToLoop =
      distanceToStart + heights[i] * gsap.getProperty(item, "scaleY");
    tl.to(
      item,
      {
        yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          yPercent: snap(
            ((curY - distanceToLoop + totalHeight) / heights[i]) * 100
          ),
        },
        {
          yPercent: yPercents[i],
          duration:
            (curY - distanceToLoop + totalHeight - curY) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
