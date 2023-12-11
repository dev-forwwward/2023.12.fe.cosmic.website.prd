function pageTransitionIdeas() {
  var tl_ideasPost = gsap.timeline();

  tl_ideasPost.from(".section-one-post", {
    duration: 1.0,
    translateY: "-100%",
    opacity: 0,
    delay: 0.1,
    ease: "power2.out"
  });

  tl_ideasPost.from(".h3-post", {
    duration: 0.5,
    translateX: -50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });

  tl_ideasPost.from(
    ".paragraph-post",
    {
      duration: 0.5,
      translateX: -50,
      opacity: 0,
      delay: 0.5,
      ease: "power2.out"
    },
    "<"
  );

  tl_ideasPost.from(
    ".tag-post",
    {
      duration: 0.5,
      translateX: -50,
      opacity: 0,
      delay: 0.5,
      ease: "power2.out"
    },
    "<"
  );

  tl_ideasPost.from(
    ".col-two-post, .col-three-post",
    {
      duration: 1.0,
      opacity: 0,
      delay: 0.3,
      ease: "power2.out"
    },
    "<"
  );
}

pageTransitionIdeas();
