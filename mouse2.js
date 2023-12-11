/*const cursorDotBelow = document.querySelector(".cursor-dot-below");
const cursorDotAbove = document.querySelector(".cursor-dot-above");
const cursorDotScroll = document.querySelector(".cursor-text-scroll");
const cursorDotConnect = document.querySelector(".cursor-text-connect");
let scale = 1;
console.log("this is the second mouse script");
function mousemoveHandler(e) {
  const target = e.target;
  const tl_cursor = gsap.timeline({
    defaults: {
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out"
    }
  });

  if (target.closest(".section-one")) {
    tl_cursor
      .to(cursorDotBelow, {
        opacity: 0,
        scale: 1
      })
      .to(
        cursorDotScroll,
        {
          opacity: 1,
          scale: 6
        },
        "-=0.5"
      );
  } else {
    if (target.classList.contains("line-animation")) {
      scale = 4;
    } else {
      scale = 1;
    }

    tl_cursor
      .to(cursorDotBelow, {
        opacity: 1,
        scale: scale
      })
      .to(
        cursorDotScroll,
        {
          opacity: 0
        },
        "-=0.5"
      );
  }
}

function mouseleaveHandler() {
  gsap.to(cursorDotBelow, {
    opacity: 0
  });
}

document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseleave", mouseleaveHandler);

let connect = document.getElementsByClassName("block-1-contact")[0];

connect.addEventListener("mouseenter", () => {
  gsap.to(".block-1-contact h2", {
    css: {
      color: "#ccff00"
    },
    duration: 0.5
  });
});

connect.addEventListener("mouseleave", () => {
  gsap.to(".block-1-contact h2", { color: "white", duration: 0.5 });
});*/

/*

let connect = document.getElementsByClassName("block-1-contact")[0];

connect.addEventListener("mouseenter", () => {
  gsap.to(".cursor", { backgroundColor: "var(--lime-green)", duration: 0 });
  gsap.to(".block-1-contact", { color: "var(--lime-green)", duration: 0 });
});

connect.addEventListener("mouseleave", () => {
  gsap.to(".cursor", { backgroundColor: "var(--white)", duration: 0 });
  gsap.to(".block-1-contact", { color: "var(--white)", duration: 0 });
});

function addMouseText() {
  let mouseText = document.querySelector(
    ".cursor-text-connect .inner-dot-text"
  );
  mouseText.textContent = "Connect";
}

function removeMouseText() {
  let mouseText = document.querySelector(
    ".cursor-text-connect .inner-dot-text"
  );
  mouseText.textContent = "";
}
*/
