gsap.registerPlugin(ScrollTrigger);

/******MENU****/
var menuIsOpen = false;
var $body = $("body");

// menu animation

var $menuButton = $(".trigger-mobile");

var menuTimeline = gsap.timeline({
  onStart: function () {
    $body.addClass("menu-opened");
    //$menuButton.addClass("white");
  },
  onReverseComplete: function () {
    $body.removeClass("menu-opened");
    //$menuButton.removeClass("white");
  }
});

menuTimeline
  .to(
    ".mobile-menu",
    {
      duration: 0.1,
      css: {
        height: "100vh"
      },
      ease: "ease.out"
    },
    "<"
  )
  .to(".mobile-menu-body-bg", {
    delay: 0.3,
    duration: 0.6,
    css: {
      left: "0vw"
    },
    ease: "power2.out"
  })
  .from(".outer-menu-shape-rounded", {
    delay: 0.1,
    duration: 0.5,
    css: {
      bottom: "-100vw"
    },
    ease: "power2.out"
  })
  .to(
    ".mobile-menu-item",
    {
      delay: 0.3,
      duration: 0.4,
      css: {
        left: "0vw"
      },
      opacity: 0,
      stagger: 0.1,
      ease: "ease.out"
    },
    "<"
  );

menuTimeline.pause();

var toggleMenu = function () {
  $menuButton.toggleClass("open");
  if (menuIsOpen) {
    menuIsOpen = false;
    menuTimeline.reverse();
  } else {
    menuIsOpen = true;
    menuTimeline.play();
  }
};

//Open menu
$menuButton.click(function () {
  toggleMenu();
});

// MENU DARK

$(".trigger-mobile").on("click", function (e) {
  $("body").toggleClass(" mobile-menu-light"); //you can list several class names
  e.preventDefault();
});
