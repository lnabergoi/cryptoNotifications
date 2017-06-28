angular.module('starter')

.controller('NotificationsCtrl', function($scope,$ionicModal, Price, LocalForgeUtilies, GlobalConstant) {

	this.initialize = function() {
    	$scope.mediaUrl=GlobalConstant.CRIPTOCOMPARE_MEDIA_URL;
    	$scope.notificationGroupByCoin= [];
    	$scope.loadNotifications();

  	};



  	$scope.loadNotifications = function() {
    	LocalForgeUtilies.getValue('Notifications').then (function(value) {
      		console.log(value);
      		$scope.notificationGroupByCoin=value;
      		/*_.forEach(value, function(object) {
  				if ($scope.notificationGroupByCoin.length === 0 || _.findIndex($scope.notificationGroupByCoin, ['coinId', object.coin.Id]) < 0){
  					$scope.notificationGroupByCoin[$scope.notificationGroupByCoin.length] = {'coin': object.coin, 'coinId': object.coin.Id, 'notifications' : [{'currency':object.currency, 'operator': object.operator, 'price': object.price }] };
  				}else{
  					$scope.notificationGroupByCoin[_.findIndex($scope.notificationGroupByCoin, {'coinId': object.coin.Id})].notifications.push({'currency':object.currency, 'operator': object.operator, 'price': object.price });
  				}
			});*/
   		},function(error){
       		console.error(error);   
   		});
  	};

  	$scope.removeNotification = function ( coinIndex, notificationIndex){
  		  			var a =coinIndex;
  		  			var b =notificationIndex;
  		if ($scope.notificationGroupByCoin[coinIndex].notifications.length === 1){
  			$scope.notificationGroupByCoin.splice(coinIndex,1);
  		}else{
  			$scope.notificationGroupByCoin[coinIndex].notifications.splice(notificationIndex,1);
  		}
  		 LocalForgeUtilies.setValue($scope.notificationGroupByCoin,'Notifications');
  	};


  	this.initialize();

})