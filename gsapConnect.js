function pageTransitionConnect() {
  var tl_connect = gsap.timeline();

  tl_connect.from(
    ".section-one-connect",
    {
      duration: 1.0,
      translateY: "-100%",
      opacity: 0,
      delay: 0.1,
      ease: "power2.out"
    },
    "<"
  );

  tl_connect.from(".contact-heading", {
    duration: 0.5,
    translateX: -50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });

  tl_connect.from(".outline-logo-connect", {
    duration: 1.0,
    translateY: "100%",
    opacity: 0,
    delay: 0.1,
    ease: "power2.out"
  });

  tl_connect.from(
    ".col-two-connect",
    {
      duration: 0.5,
      translateY: "100%",
      opacity: 0,
      delay: 0.5,
      ease: "power2.out"
    },
    "<"
  );

  tl_connect.from(
    ".col-three-connect",
    {
      duration: 1.0,
      translateY: "100%",
      opacity: 0,
      delay: 0.3,
      ease: "power2.out"
    },
    "<"
  );
}

pageTransitionConnect();
