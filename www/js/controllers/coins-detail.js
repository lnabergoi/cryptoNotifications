
angular.module('starter')

.controller('CoinDetailCtrl', function($scope, $stateParams, $ionicModal, CoinListCache, Price, LocalForgeUtilies, GlobalConstant) {

  	this.initialize = function() {
  		$scope.mediaUrl=GlobalConstant.CRIPTOCOMPARE_MEDIA_URL;

		$scope.coin = CoinListCache.getcoin($stateParams.coinId);

		LocalForgeUtilies.getValue('Favorites').then (function(value) {
			var a= _.findIndex(value, {'Id': $scope.coin.Id}) ;
          	if  (value===undefined || value===null || _.findIndex(value, {'Id': $scope.coin.Id}) < 0){			
				$scope.coin.favorite=false;
			}else{
				$scope.coin.favorite=true;
			}
          	console.log(value);

        },function(error){
            console.error(error);   
        });





		Price.query({coinSymbol: $scope.coin.Name},function(data){
			$scope.coin.Prices=data;
		});
	};


	$scope.clickFavorites= function(){
		if ($scope.coin.favorite ===false){
			$scope.coin.favorite=true;
			$scope.saveToFavorites($scope.coin);
		}else{
			$scope.coin.favorite=false;
			$scope.removeFromFavorites($scope.coin);
		}
	};

	$scope.saveToFavorites= function(coin){
		LocalForgeUtilies.setValueArray(coin,'Favorites');
	};

	$scope.removeFromFavorites= function(coin){

		LocalForgeUtilies.getValue('Favorites').then (function(value) {

          	if (_.findIndex(value, {'Id': coin.Id})>=0 ){
          		value.splice(_.findIndex(value, {'Id': coin.Id}),1);
				LocalForgeUtilies.setValue(value,'Favorites');
			}

        },function(error){
            console.error(error);   
        });	
	};


//Modal Notification

	$ionicModal.fromTemplateUrl('templates/modals/notification-form.html',{
	    scope: $scope,
	    animation:'slide-in-up'
	}).then(function(notificationFormCtrl){
	    $scope.notificationFormCtrl= notificationFormCtrl;
	});

	$scope.openModalNorificationForm=function(){
	  	$scope.notificationFormCtrl.show();
	};


	this.initialize();
});
