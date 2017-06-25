(function() {
  'use strict';
  'ngInject';

  function Config($translateProvider) {
    $translateProvider.translations('en_US', {
      TotalCoinSupply: 'Total Coin Supply',
      coinsList: 'Coins List',
      notifications:'Notifications',
      coin:'Cryptocoin',
      favorites:'Favorites',
      notificationForm:'Create Notification',
      close:'Close',
      Delete:'Delete',
      setUpNotification:'Set up Allert',
      notificationText:'Create a Allert when the pice is:',
      value:'Value',
      price:'Price',
      choseACurrency: 'Choose a currecy',
      refreshText:'Pull to refresh...'
 
    });

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en_US');
  }

  angular.module('starter').config(Config);
})();
