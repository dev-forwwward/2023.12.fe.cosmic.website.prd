var tabletSize = 991;

//initial window size check on page load
windowSizeCheck();

//check for window resize
window.onresize = windowSizeCheck;

//ensure the script only runs in non touchscreen-only devices
function windowSizeCheck() {
  if (window.innerWidth > tabletSize) {
    mouseInteraction();
  }
}

function mouseInteraction() {
  //-----------------------------------------------
  // Mouse Interaction
  // ball displacement in relation to mouse
  gsap.set(".mouse", { xPercent: -50, yPercent: -55 });

  // store .mouse div as "ball"
  const ball = document.querySelector(".mouse");

  // store half the window's total dimensions
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  // create mouse object and set initial coordinates to center of screen
  const mouse = { x: pos.x, y: pos.y };

  const speed = 0.18;

  // set x-position and y-position changer functions to change them easily
  const xSet = gsap.quickSetter(ball, "x", "px");
  const ySet = gsap.quickSetter(ball, "y", "px");

  // update object "mouse" coordinates with user mouse coordinates
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  // within gsap's own frame counter...
  gsap.ticker.add(() => {
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    // update coordinates variables
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    // update mouse ball position with updated coordinates
    xSet(pos.x);
    ySet(pos.y);

    // add rotation
    gsap.to(".mouse", {
      rotation: (mouse.x - pos.x) * dt
    });
  });

  //-----------------------------------------------
  // Mouse text animation & 'Connect' field on-hover color change

  // Track  mouse size - 0 for default small size - 1 for larger size with text
  let mouseSize = 0;

  let mouseText = document.querySelector(".mouse div");
  let prevMouseText;

  let connectField = document.querySelector(".connect-field");
  let connectPageGreen = document.querySelector(".section-one-connect");
  let connectText = false;

  let noHoverElements = document.querySelectorAll(".no-hover");
  let scrollSection = document.querySelectorAll(".scroll-section");

  let clickMe = document.querySelectorAll(".click-me");

  let delay = 6000;

  function scaleMouseDown() {
    gsap.fromTo(
      ball,
      {
        scale: 1
      },
      {
        scale: 0.2,
        duration: 0.25
      }
    );

    gsap.to(mouseText, {
      scale: 0.2,
      duration: 0.2
    });

    changeMouseText("");
    mouseSize = 0;
  }

  function scaleMouseUp() {
    gsap.to(ball, {
      scale: 1,
      duration: 0.25
    });

    gsap.to(mouseText, {
      scale: 1,
      duration: 0.2
    });

    mouseSize = 1;
  }

  function changeMouseText(text) {
    mouseText.textContent = text;
  }

  /* No hover section */
  if (noHoverElements) {
    noHoverElements.forEach((noHover) => {
      noHover.addEventListener("mouseenter", () => {
        prevMouseText = mouseText.textContent;
        if (prevMouseText != "") {
          scaleMouseDown();
        }

        changeMouseText("");
        prevMouseText = mouseText.textContent;
      });
    });

    noHoverElements.forEach((noHover) => {
      noHover.addEventListener("mouseleave", () => {
        //prevMouseText = mouseText.textContent;
        if (prevMouseText != "" || connectText) {
          scaleMouseUp();
        }

        if (connectText) {
          changeMouseText("Connect");
        } else {
          // this already happens by default in any "Onleave" case
          changeMouseText(prevMouseText);
          prevMouseText = mouseText.textContent;
        }
      });
    });
  }

  function ScrollSectionCheck() {
    scrollSection.forEach((elements) => {
      elements.addEventListener("mouseenter", () => {
        //prevMouseText = mouseText.textContent;
        if (mouseSize === 0) {
          scaleMouseUp();
        }
        changeMouseText("Scroll");
        prevMouseText = mouseText.textContent;
      });
    });

    scrollSection.forEach((elements) => {
      elements.addEventListener("mouseleave", () => {
        //prevMouseText = mouseText.textContent;
        if (prevMouseText == "" && mouseSize == 1) {
          scaleMouseDown();
        }
        changeMouseText(prevMouseText);
        prevMouseText = mouseText.textContent;
      });
    });
  }

  /* About Page */
  let aboutPage = document.querySelector(".page-about");
  let contactGreenZone = document.querySelector(".h2-about-connect");
  let contactText = document.querySelector(".h2-about-connect");

  /* "Scroll" sections */
  /* Run if on a scroll element on the About Page (but only after having ran the initial mouse size delay)
  // OR on any scroll element not in the About Page */
  if (scrollSection && (delay == 0 || aboutPage == null)) {
    ScrollSectionCheck();
  }
  /* -- */

  // Any time the About page is loaded, keep the cursor small for the duration of the
  // 'delay' var value (in milliseconds) before expanding it to scroll
  if (aboutPage) {
    scaleMouseDown();
    changeMouseText("");

    setTimeout(function () {
      if (delay != 0) {
        scaleMouseUp();
        changeMouseText("Scroll");
        delay = 0;
      }
      ScrollSectionCheck();
    }, delay);

    ScrollTrigger.create({
      trigger: document.querySelector(".section-one"),
      onLeave: function () {
        prevMouseText = mouseText.textContent;
        if (mouseSize == 1) {
          scaleMouseDown();
        }
        changeMouseText("");
        delay = 0;
      },
      onEnterBack: function () {
        prevMouseText = mouseText.textContent;
        if (prevMouseText == "" && mouseSize == 0) {
          scaleMouseUp();
        }
        changeMouseText("Scroll");
      }
    });
  }

  if (contactGreenZone) {
    contactGreenZone.addEventListener("mouseenter", () => {
      contactText.style.color = "var(--lime-green)";
      prevMouseText = mouseText.textContent;
      changeMouseText("Click me");

      if (mouseSize === 0) {
        scaleMouseUp();
      }
    });

    contactGreenZone.addEventListener("mouseleave", () => {
      contactText.style.color = "var(--white)";
      prevMouseText = mouseText.textContent;
      changeMouseText("");
      if (prevMouseText != "") {
        scaleMouseDown();
      }
    });

    /* - Currently not in use
    connectField.addEventListener("mouseenter", () => {
      if (mouseSize === 0) {
        scaleMouseUp();
      }
      changeMouseText("Connect");
      connectText = true;
      prevMouseText = mouseText.textContent;
    });

    connectField.addEventListener("mouseleave", () => {
      changeMouseText(prevMouseText);
      if (mouseSize === 1 && prevMouseText === "") {
        scaleMouseDown();
      }
      connectText = false;
      prevMouseText = mouseText.textContent;
    });
    */
  }

  /* Team Page */

  if (clickMe) {
    scaleMouseDown();

    clickMe.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        if (!item.parentElement.classList.contains("active-team")) {
          prevMouseText = mouseText.textContent;
          changeMouseText("Click me");
          scaleMouseUp();
        }
      });

      item.addEventListener("mouseleave", () => {
        if (prevMouseText == "" && mouseSize == 1) {
          scaleMouseDown();
        }
        prevMouseText = mouseText.textContent;
      });
    });

    clickMe.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.parentElement.classList.contains("active-team")) {
          prevMouseText = mouseText.textContent;
          changeMouseText("");
          if (prevMouseText != "") {
            scaleMouseDown();
          }
        } else {
          prevMouseText = mouseText.textContent;
          changeMouseText("Click me");
          scaleMouseUp();
        }
      });
    });
  }

  /* Connect Page */
  let connectLogo = document.querySelector(".page-connect .logo");
  let connectNav = document.querySelector(".page-connect .desktop-menu");

  if (connectLogo && connectNav) {
    connectLogo.addEventListener("mouseenter", () => {
      gsap.to(ball, {
        duration: 0.1,
        css: {
          background: "var(--black)"
        }
      });
    });
    connectNav.addEventListener("mouseenter", () => {
      gsap.to(ball, {
        duration: 0.1,
        css: {
          background: "var(--black)"
        }
      });
    });
  }

  if (connectPageGreen) {
    connectPageGreen.addEventListener("mouseenter", () => {
      gsap.to(ball, {
        duration: 0.1,
        css: {
          background: "var(--black)"
        }
      });
    });

    connectPageGreen.addEventListener("mouseleave", () => {
      gsap.to(ball, {
        duration: 0.1,
        css: {
          background: "var(--lime-green)"
        }
      });
    });
  }
}
