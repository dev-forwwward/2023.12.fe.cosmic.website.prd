function pageTransitionTeam() {
  var tl_team = gsap.timeline();

  tl_team.from(".pattern-team", {
    duration: 1.5,
    translateY: "100%",
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });

  tl_team.from(".circle-glow___", {
    duration: 1.5,
    css: {
      width: "0"
    },
    opacity: 0,
    delay: 0.1,
    ease: "power2.out"
  });

  tl_team.from(".h4-team", {
    duration: 0.5,
    translateX: -50,
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
  });

  tl_team.from(
    ".js-accordion-team .js-accordion-item-team",
    {
      duration: 1.0,
      translateY: 0,
      opacity: 0,
      delay: 0.3,
      ease: "power2.out",
      stagger: 0.3
    },
    "<"
  );

  tl_team.from(
    ".bottom-bar-full",
    {
      duration: 0.5,
      translateY: "100%",
      opacity: 0,
      delay: 0.1,
      ease: "power2.out"
    },
    "<"
  );

  tl_team.from(
    ".container-hemlet-team",
    {
      duration: 2.5,
      opacity: 0,
      delay: 0.1,
      ease: "power2.out"
    },
    "<"
  );
}

pageTransitionTeam();
