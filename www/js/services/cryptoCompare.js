(function() {
  'use strict';
  'ngInject';

  function CoinListService($resource, GlobalConstant) {
    return $resource(GlobalConstant.CRIPTOCOMPARE_API_URL + '/coinlist/', {}, {
      'queryAll': {
        method: 'GET',
        params: {},
      }
      
    });
  }

  angular.module('starter.services').factory('CoinList', CoinListService);
})();

(function() {
  'use strict';
  'ngInject';

  function PriceService($resource, GlobalConstant) {
    return $resource(GlobalConstant.CRIPTOCOMPARE_MINAPI_URL + '/price/', {}, {
      'query': {
        method: 'GET',
        params: {coinSymbol: '@coinSymbol'},
        url: GlobalConstant.CRIPTOCOMPARE_MINAPI_URL + '/price?fsym=:coinSymbol&tsyms=BTC,USD,EUR'
      }
      
    });
  }

  angular.module('starter.services').factory('Price', PriceService);
})();