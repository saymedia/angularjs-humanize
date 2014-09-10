(function( angular, humanize ) {
  'use strict';

  angular.module('angular-humanize', []).
    filter('filesize', function () {
      return function ( input ) {
        if ( isNaN(parseInt(input)) ) { return input; }
        return humanize.filesize(parseInt(input));
      };
    }).
    filter('ordinal', function () {
      return function ( input ) {
        if ( parseInt(input) !== input ) { return input; }
        return humanize.ordinal(input);
      };
    }).
    filter('naturalDay', function () {
      return function ( input ) {
        if ( parseInt(input) !== input ) { return input; }
        return humanize.naturalDay(input);
      };
    }).
    filter('relativeTime', function () {
      return function ( input ) {
        if ( parseInt(input) !== input ) { return input; }
        return humanize.relativeTime(input);
      };
    });

}( angular, window.humanize ));
