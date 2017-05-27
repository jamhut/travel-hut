
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on("load", function() {
      Waypoint.refreshAll();  // Call the GLOBAL Waypoint object that is attached to the browser
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: that.headerTriggerElement[0], // [0] is a DOM el
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    var downThreshold = "20%";
    var upThreshold = "-65%";
    this.pageSections.each(function() {
      var currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
          var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
          that.headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: downThreshold
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
          var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
          that.headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: upThreshold
      });
    });
  }
}

export default StickyHeader;
