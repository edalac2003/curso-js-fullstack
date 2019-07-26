'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spafelizApp').directive('footerSection',  footerSection);

function footerSection() {
  var directive = {
    // template: '<div> <ng-transclude></ng-transclude> </div>',
    templateUrl: './views/partial.footer.html',
    restrict: 'EAC',  //Element, Attribute, Class
    link: link
    // transcude : true
  }


  return directive;

  //Si el scope no tiene el signo $, es el scope virtual
  function link(scope, element, attrs) {
    scope.team = attrs.author;
    // element.text('this is the footerSection.directive directive');
  }

};