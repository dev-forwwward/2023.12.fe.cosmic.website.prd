function pageTransitionPortfolio() {
  var tl_portfolio = gsap.timeline();

  tl_portfolio.from(".h4-portfolio", {
    duration: 0.5,
    translateX: -50,
    opacity: 0,
    delay: 1.7
  });

  tl_portfolio.from(".list-partner-wrapper .collection-item-partner", {
    duration: 0.5,
    translateY: 50,
    opacity: 0,
    delay: 0.3,
    stagger: 0.3
  });
}

pageTransitionPortfolio();
