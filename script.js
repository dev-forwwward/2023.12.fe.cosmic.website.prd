console.clear();
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//-----------------------------------------------
// Smooth Scroller (scrollerProxy)

function smoothScroller() {
  const scroller = document.querySelector(".scroller");
  const bodyScrollBar = Scrollbar.init(scroller, {
    damping: 0.08,
    delegateTo: document,
    alwaysShowTracks: true
  });

  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }

      return bodyScrollBar.scrollTop;
    }
  });

  bodyScrollBar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: scroller });

  // scroll to position 0 on logo click
  let logoLink = document.querySelector(".page-about .logo a");
  logoLink.addEventListener("click", function (e) {
    e.preventDefault();
    bodyScrollBar.scrollTop = 0;
  });
}

smoothScroller();

//-----------------------------------------------
// Side Scroller -- OLD PLACEHOLDER - no longer in use
function sideScroller() {
  let scrollAmount = document.querySelector(
    "#scroller .text-wrapper .company-name"
  ).offsetHeight;
  gsap.to("#scroller .text-wrapper", {
    duration: 6,
    repeat: -1,
    ease: "none",
    top: "+=" + scrollAmount / 6 + "px"
  });
}
