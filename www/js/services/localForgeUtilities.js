(function() {
  'use strict';
  'ngInject';

  function LocalForgeUtiliesService($localForage) {
    return {

      getValue: function(inputName){
        return localforage.getItem(inputName);
      /*  localforage.getItem(inputName).then (function(value) {
          return value;
          console.log(inputName + ' search');
        },function(error){
            console.error(error);   
        });*/
      },

      setValue: function(input,inputName){
        localforage.setItem(inputName, input).then(function(value) {
          console.log(value + ' was added!');
        }, function(error) {
          console.error(error);
        });
      },

      setValueArray: function(input,inputName){

        localforage.getItem(inputName).then (function(value) {
          if(value!==null){
            value.push(input);
          }else{
            value=[];
            value[0]=input;
          }

          localforage.setItem(inputName, value).then(function(value) {
              console.log(value + ' was added!');
          }, function(error) {
              console.error(error);
          });
        },function(error){
            console.error(error);
        });
      }
 
    };
  }

  angular.module('starter.services').factory('LocalForgeUtilies', LocalForgeUtiliesService);
})();