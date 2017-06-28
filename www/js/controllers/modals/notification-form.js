angular.module('starter')

.controller('notificationFormCtrl', function($scope, Chats, LocalForgeUtilies) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.operators=[{ symbol: '>', name : 'over'},{symbol : '<', name : 'under'}];
  $scope.notification={};
  $scope.erroR ={active: false};

  $scope.notificationCurrencyChange=function(input){

    _.forEach($scope.coin.Prices, function(value, key) {
      if (value === input){
        $scope.notification.currency=key;
      }
    });
  };

  //$scope.notification.price= $scope.coin.Prices;
  $scope.createNotification= function(){
    $scope.validate();
    if ($scope.erroR.active=== false){

      /* $scope.notification.coin =$scope.coin;
      LocalForgeUtilies.setValueArray($scope.notification,'Notifications');
      $scope.notificationFormCtrl.hide(); */

      /*--------*/

        LocalForgeUtilies.getValue('Notifications').then (function(value) {
          if (value === null || value.length === 0 || _.findIndex(value, ['coinId', $scope.coin.Id]) < 0){
            LocalForgeUtilies.setValueArray({'coin': $scope.coin, 'coinId': $scope.coin.Id, 'notifications' : [{'currency':$scope.notification.currency, 'operator': $scope.notification.operator, 'price': $scope.notification.price }] },'Notifications')
            //$scope.notificationGroupByCoin[value.length] = {'coin': object.coin, 'notifications' : [{'currency':object.currency, 'operator': object.operator, 'price': object.price }] };
          }else{
            value[_.findIndex(value, {'coinId': $scope.coin.Id})].notifications.push({'currency': $scope.notification.currency, 'operator': $scope.notification.operator, 'price': $scope.notification.price });
            LocalForgeUtilies.setValue(value, 'Notifications');
          }         
      });
      $scope.notificationFormCtrl.hide();
    }
  };
  
  $scope.closeModaNotificationForm = function() {
    $scope.notificationFormCtrl.hide();
  };

  $scope.resetError= function(){
    $scope.erroR.active= false;
    delete $scope.erroR.message;
  }
  $scope.validate=function(){
    if ($scope.notification.operator ===undefined || $scope.notification.operator=== null){
      $scope.erroR.message= 'choseAOperator';
      $scope.erroR.active= true;
    }else if($scope.notification.currency ===undefined || $scope.notification.currency === null ){
      $scope.erroR.message= 'choseACurrency';
      $scope.erroR.active= true;
    }else if ($scope.notification.price ===undefined || $scope.notification.price ===null){      
      $scope.erroR.message= 'choseAValue';
      $scope.erroR.active= true;
    }
  };

})

