function pageTransitionIdeas() {
  var tl_ideas = gsap.timeline();

  tl_ideas.from(".circle-glow___", {
    duration: 1.5,
    css: {
      width: "1vw",
      height: "1vw"
    },
    opacity: 0,
    delay: 0.1,
    ease: "power2.out"
  });

  tl_ideas.from(".h4-ideas", {
    duration: 0.5,
    translateX: -50,
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
  });

  tl_ideas.from(".list-ideas-wrapper", {
    duration: 1.5,
    translateX: "-50%",
    opacity: 0,
    delay: 0.3,
    ease: "power2.out"
  });

  tl_ideas.from(
    ".collection-item-ideas",
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

pageTransitionIdeas();
