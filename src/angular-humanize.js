(function( angular ) {
  'use strict';

  angular.module('angular-humanize', []).
    filter('humanizeFilesize', function () {
      return function () {
        var args = Array.prototype.slice.call(arguments);
        args[0] = parseInt(args[0])
        if ( isNaN(args[0]) ) { return args[0]; }
        return humanize.filesize.apply(null, args);
      };
    }).
    filter('humanizeNumberFormat', function () {
      return function () {
        var args = Array.prototype.slice.call(arguments);
        args[0] = parseInt(args[0])
        if ( isNaN(args[0]) ) { return args[0]; }
        return humanize.numberFormat.apply(null, args);
      };
    }).
    filter('humanizeOrdinal', function () {
      return function ( input ) {
        if ( isNaN(input) ) { return input; }
        return humanize.ordinal(input);
      };
    }).
    filter('humanizeInt', function () {
      return function ( input ) {
        if ( parseInt(input) !== input ) { return input; }
        return humanize.numberFormat(input, 0);
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
