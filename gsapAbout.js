console.clear();
gsap.registerPlugin(ScrollTrigger);

//-----------------------------------------------
// Session Storage

// get session storage var - this var is initialized the moment a tab is opened for the first time
let sessionInit = sessionStorage.getItem("sessionInit");
let preloader = document.querySelector(".preloader");

// check if storage var exists - if it doesn't, then this is the first time the tab is loaded
// show intro preloader
if (sessionInit == null) {
  gsap.fromTo(
    ".preloader",
    {
      y: 0
    },
    {
      duration: 1.1,
      y: "-=100%",
      delay: 2,
      ease: "power4.out"
    }
  );
  sessionStorage.setItem("sessionInit", true);
  console.log("initializing session.");
} else {
  if (preloader) {
    preloader.style.display = "none";
    preloader.remove();
  }
  console.log("page reloaded - tab session already initialized");
}

//--
// "Click me" OnClick at Footer Redirect to Contact Page
if (document.querySelector(".h2-about-connect")) {
  document.querySelector(".h2-about-connect").onclick = function () {
    location.href = "https://cosmic-dev.webflow.io/connect";
  };
}

//--

function intro() {
  var tl_about = gsap.timeline();

  tl_about.from(".circle-glow___", {
    duration: 2.5,
    css: {
      width: "0"
    },
    opacity: 0,
    delay: 0.1,
    ease: "power2.out"
  });

  tl_about.from(
    ".container-hemlet-about",
    {
      duration: 3.5,
      opacity: 0,
      delay: 0.5,
      ease: "power2.out"
    },
    "<"
  );

  tl_about.from(
    ".bottom-bar",
    {
      duration: 1.0,
      translateY: "100%",
      opacity: 0,
      delay: 0.5,
      ease: "power2.out"
    },
    "<"
  );
}
intro();

// Slide 2 - helmet zoom-in
function aboutGSAP() {
  /*
  gsap.timeline({
    scrollTrigger: {
      trigger: ".section-one",
      start: "top top",
      end: "bottom top",
      onEnter: addMouseText,
      onLeave: removeMouseText,
      onEnterBack: addMouseText,
      onLeaveBack: removeMouseText
    }
  });
*/

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-one",
        start: "center top",
        end: "bottom top",
        scrub: 1.5
      }
    })
    .to(".bottom-bar", {
      opacity: 0,
      y: "120%",
      duration: 1
    })
    .from(".dark-overlay", {
      x: "-=100vw",
      duration: 1
    })
    .from(".section-two .h1-about", {
      opacity: 0,
      x: "-120%",
      duration: 1
    })
    .to(".section-two h1", {
      scrollTrigger: {
        trigger: ".section-two",
        start: "top top",
        end: () => "+=" + innerHeight,
        pin: true,
        pinSpacing: "margin"
      }
    });

  // Slide 3 - helmet zoom-in
  /*
  .from(".section-three-about .h4", {
      opacity: 0,
      x: "-100%",
      y: "120%",
      duration: 1
    })
    .from(".section-three-about .pill-link", {
      opacity: 0,
      y: "200%",
      duration: 1
    })
    */
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-two",
        start: "center top",
        end: "top top",
        scrub: 1.5
      }
    })
    .to(
      ".dark-overlay",
      {
        duration: 1,
        css: {
          backdropFilter: "blur(20px)"
        }
      },
      "<"
    );

  gsap.from(".section-three-about h4", {
    scrollTrigger: {
      trigger: ".section-three-about",
      start: "top top",
      end: "+=150%",
      toggleActions: "play reverse play reverse",
      pin: true,
      pinSpacing: "margin",
      pinnedContainer: ".section-three-about"
    },
    y: "-150%",
    opacity: 0
  });

  gsap.from(".section-three-about .pill-link", {
    scrollTrigger: {
      trigger: ".section-three-about",
      start: "top top",
      end: "+=150%",
      toggleActions: "play reverse play reverse",
      pin: true,
      pinSpacing: "margin",
      pinnedContainer: ".section-three-about"
    },
    delay: 1,
    duration: 0.8,
    y: "-200%",
    stagger: 0.25,
    opacity: 0
  });
  /*  gsap.to(".section-three-about h4", {
    scrollTrigger: {
      trigger: ".section-three-about",
      toggleActions: "play reverse play reverse",
      start: "top top",
      scrub: true,
      pin: false
    },
    duration: 0.8,
    y: "-200%",
    opacity: 0
  });

  gsap.to(".section-three-about .pill-link", {
    scrollTrigger: {
      trigger: ".section-three-about",
      toggleActions: "play reverse play reverse",
      start: "top top",
      scrub: true,
      pin: false
    },
    y: "-200%",
    opacity: 0
  });*/

  // Slide 4
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-four",
        toggleActions: "restart pause resume reverse"
        /*onEnter: addMouseText,
        onLeave: removeMouseText,
        onEnterBack: addMouseText,
        onLeaveBack: removeMouseText */
      }
    })
    .from(".section-four .block-1-contact .h2", {
      opacity: 0,
      y: "-50px",
      duration: 0.3
    })
    .from(".section-four .block-1-contact .h3", {
      opacity: 0,
      y: "-50px",
      duration: 0.3
    })
    .from(".section-four .line", {
      x: "-120%",
      duration: 0.7
    })
    .from(
      ".section-four .block-2-contact .label",
      {
        opacity: 0,
        y: "-50px",
        duration: 0.3
      },
      "<"
    )
    .from(".section-four .block-2-contact .mail-link", {
      opacity: 0,
      y: "-50px",
      duration: 0.3
    })
    .from(
      ".section-four .block-3-contact .office-wrapper .label",
      {
        opacity: 0,
        y: "-50px",
        duration: 0.3
      },
      "<"
    )
    .from(".section-four .block-3-contact .office-wrapper .list-contact", {
      opacity: 0,
      y: "-50px",
      duration: 0.3
    })
    .from(
      ".section-four .block-3-contact .social-wrapper .label",
      {
        opacity: 0,
        y: "-50px",
        duration: 0.3
      },
      "<"
    )
    .from(".section-four .block-3-contact .social-wrapper .list-contact", {
      opacity: 0,
      y: "-50px",
      duration: 0.3
    })
    .from(
      ".section-four .block-3-contact .icon-helmet-footer",
      {
        opacity: 0,
        y: "-50px",
        duration: 0.3
      },
      "<"
    )
    .from(
      ".block-4-contact",
      {
        opacity: 0,
        y: "50px",
        duration: 1
      },
      "<"
    );
}
aboutGSAP();
