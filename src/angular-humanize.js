(function( angular ) {
  'use strict';

  angular.module('angular-humanize', []).
    filter('humanizeFilesize', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return humanize.filesize(input);
      };
    }).
    filter('humanizeOrdinal', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return humanize.ordinal(input);
      };
    }).
    filter('humanizeNaturalDay', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return humanize.naturalDay(input);
      };
    }).
    filter('humanizeRelativeTime', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return humanize.relativeTime(input);
      };
    });

}( angular ));
