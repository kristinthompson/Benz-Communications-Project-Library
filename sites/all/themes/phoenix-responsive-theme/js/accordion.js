/**
 * @file
 * Adds accordion functionality to any element with the library-accordion class.
 *
 * The purpose of using this rather than jQuery UI accordion is to make it as
 * easy as possible to apply this behavior to both a view and custom body HTML.
 *
 * To add accordion functionality to a view, edit the format settings of the
 * given display. Add "library-accordion" as the "Row class" option value. After
 * the rows are given that class, this JS should take care of the rest.
 *
 * To add accordion functionality within custom HTML, wrap each individual item
 * in an element (such as a div) that has the class "library-accordion". The
 * wrapper should have at least two elements inside of it. The first element
 * will become the header that toggles visibility when clicked. The rest will be
 * wrapped in an element that is toggled when that header is clicked.
 */

(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.libraryAccordion = {
  attach: function(context, settings) {
    // Add accordion behavior to each accordion with the library-accordion class.
    $('.library-accordion', context).once('library-accordion', function () {
      var $accordion = $(this);

      // The first element inside of the wrapper becomes the header. If there is
      // only one element (such as a node template container output by a view
      // mode template in a view) inside the wrapper, the first child of that
      // element will become the header.
      var $accordionChildren = $accordion.children();
      if ($accordionChildren.size() === 1) {
        $accordionChildren = $accordionChildren.children();
      }
      var $accordionHeader = $accordionChildren.first();
      $accordionHeader.addClass('library-accordion-header');

      // Everything that isn't the header becomes the body.
      $accordionChildren.not($accordionHeader).wrapAll('<div class="library-accordion-body" />');

      // The visibility of the body is toggled when the header is clicked.
      $('.library-accordion-body').hide();
      $accordionHeader.bind('click', function (event) {
        event.preventDefault();
        $accordion.toggleClass('library-accordion--expanded');
        $accordion.find('.library-accordion-body').slideToggle(100);
      });
    });
  }
};

})(jQuery, Drupal, this, this.document);