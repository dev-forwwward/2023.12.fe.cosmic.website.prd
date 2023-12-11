// Accordion Settings
const accSettings_team = {
  speed: 300, // Animation speed
  oneOpen: true, // Close all other accordion items if true
  offsetAnchor: true, // Activate scroll to top for active item
  offsetFromTop: 180, // In pixels – Scroll to top at what distance
  scrollTopDelay: 400, // In Milliseconds – Delay before scroll to top

  classes: {
    accordion_team: "js-accordion-team",
    header_team: "js-accordion-header-team",
    item_team: "js-accordion-item-team",
    body_team: "js-accordion-body-team",
    icon_team: "js-accordion-icon-team",
    active_team: "active-team"
  }
};

const prefix_team = accSettings_team.classes;

const accordion_team = (function () {
  const accordionElem_team = $(`.${prefix_team.accordion_team}`);
  const accordionHeader_team = accordionElem_team.find(
    `.${prefix_team.header_team}`
  );
  const accordionItem_team = $(`.${prefix_team.item_team}`);
  const accordionBody_team = $(`.${prefix_team.body_team}`);
  const accordionIcon_team = $(`.${prefix_team.icon_team}`);
  const activeClass_team = prefix_team.active_team;

  return {
    // pass configurable object literal
    init: function (settings) {
      accordionHeader_team.on("click", function () {
        accordion_team.toggle($(this));
        if (accSettings_team.offsetAnchor) {
          setTimeout(() => {
            $("html").animate(
              {
                scrollTop: $(this).offset().top - accSettings_team.offsetFromTop
              },
              accSettings_team.speed
            );
          }, accSettings_team.scrollTopDelay);
        }
      });

      $.extend(accSettings_team, settings);

      // ensure only one accordion_team is active if oneOpen is true
      if (
        settings.oneOpen &&
        $(`.${prefix_team.item_team}.${activeClass_team}`).length > 1
      ) {
        $(`.${prefix_team.item_team}.${activeClass_team}:not(:first)`)
          .removeClass(activeClass_team)
          .find(`.${prefix_team.header_team} > .${prefix_team.icon_team}`)
          .removeClass(activeClass_team);
      }
      // reveal the active accordion_team bodies
      $(`.${prefix_team.item_team}.${activeClass_team}`)
        .find(`> .${prefix_team.body_team}`)
        .show();
    },

    toggle: function ($this) {
      if (
        accSettings_team.oneOpen &&
        $this[0] !=
          $this
            .closest(accordionElem_team)
            .find(
              `> .${prefix_team.item_team}.${activeClass_team} > .${prefix_team.header_team}`
            )[0]
      ) {
        $this
          .closest(accordionElem_team)
          .find(`> .${prefix_team.item_team}`)
          .removeClass(activeClass_team)
          .find(accordionBody_team)
          .slideUp(accSettings_team.speed);
        $this
          .closest(accordionElem_team)
          .find(`> .${prefix_team.item_team}`)
          .find(`> .${prefix_team.header_team} > .${prefix_team.icon_team}`)
          .removeClass(activeClass_team);
      }

      // show/hide the clicked accordion_team item
      $this
        .closest(accordionItem_team)
        .toggleClass(`${activeClass_team}`)
        .find(`> .${prefix_team.header_team} > .${prefix_team.icon_team}`)
        .toggleClass(activeClass_team);
      $this.next().stop().slideToggle(accSettings_team.speed);
    }
  };
})();

$(document).ready(function () {
  accordion_team.init(accSettings_team);
});

$(function () {
  var $this = $(".js-accordion-team");
  window.setTimeout(function () {
    $this.addClass("new-style");
  }, 5000); //<-- Delay in milliseconds
});
