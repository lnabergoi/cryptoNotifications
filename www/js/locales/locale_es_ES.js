(function() {
  'use strict';
  'ngInject';

  function Config($translateProvider) {
    $translateProvider.translations('es_ES', {
      TotalCoinSupply: 'Cantidad Toatal',
      coinsList: 'Lista Monedas',
      notifications:'Notificaciones',
      coin:'Cryptomoneda',
      favorites:'Favoritos',
      notificationForm:'Crear Notificacion',
      close:'Cerrar',
      Delete:'Borrar',
      setUpNotification:'Crear Alerta',
      notificationText:'Crea un notificacion cuando el precio  sea:',
      value:'Valor',
      price:'Precio',
      choseACurrency: 'Elige una moneda',
      refreshText:'Arrastra para refrescar ...',
      setup:'Ajustes',
      notifications:'Notificaciones'
 
    });

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en_US');
  }

  angular.module('starter').config(Config);
})();
