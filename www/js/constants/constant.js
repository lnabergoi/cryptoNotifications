(function() {
    'use strict';
    /*jshint newcap: false */

    function GlobalConstant() {
        return {
            BASE_URL : '../bo-cd',
            CRIPTOCOMPARE_API_URL : 'https://www.cryptocompare.com/api/data',
            CRIPTOCOMPARE_MEDIA_URL : 'https://www.cryptocompare.com/',
            CRIPTOCOMPARE_MINAPI_URL:'https://min-api.cryptocompare.com/data'

           


        };
    }

    angular.module('starter').constant('GlobalConstant', GlobalConstant());

})();