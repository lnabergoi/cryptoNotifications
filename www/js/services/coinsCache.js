(function() {
  'use strict';
  'ngInject';

  function CoinListCacheService() {

    var listCoins={};
    var id;
    return {
      setList: function(input){
        listCoins= input;
      },
 

      setId: function(input){
        input= id;
      },

      getId: function(){return id},

      getList: function(){ return listCoins},

      getcoin: function (input){ 
        var id=_.findKey(listCoins, { 'Id': input});
        return listCoins[id]}
      
    };
  }

  angular.module('starter.services').factory('CoinListCache', CoinListCacheService);
})();
