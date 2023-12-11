function pageTransitionPortfolio() {
  var tl_ideas = gsap.timeline();

  tl_ideas.from(".h4-portfolio", {
    duration: 0.5,
    translateX: -50,
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
  });

  tl_ideas.from(".h3-subtitle-partners", {
    duration: 0.5,
    translateX: -50,
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
  });

  tl_ideas.from(".list-partner-wrapper", {
    duration: 1.5,
    translateX: "-50%",
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
  });

  tl_ideas.from(
    ".collection-item-partner",
    {
      duration: 1.5,
      translateX: "-50%",
      opacity: 0,
      delay: 0.3,
      ease: "power2.out",
      stagger: 0.3
    },
    "<"
  );
}

pageTransitionPortfolio();
