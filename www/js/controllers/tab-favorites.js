angular.module('starter')

.controller('FavoritesCtrl', function($scope, Chats, LocalForgeUtilies,CoinListCache, GlobalConstant, $ionicFilterBar) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.$on('$ionicView.loaded', function () {
    $scope.loadFavorites();
  });

 /* $scope.$on('$ionicView.enter', function(e) {
    $scope.loadFavorites();
  });*/

  this.initialize = function() {
    $scope.mediaUrl=GlobalConstant.CRIPTOCOMPARE_MEDIA_URL;
  };

  $scope.CoinDettails = function(){
    CoinListCache.saveId(id);
  };


  $scope.loadFavorites = function() {
    LocalForgeUtilies.getValue('Favorites').then (function(value) {
      $scope.coins=value;
      //CoinListCache.setList(value);
      console.log(value);


    },function(error){
       console.error(error);   
    });
  };


   $scope.showFilterBar = function () {
    var filterBarInstance = $ionicFilterBar.show({
      cancelText: "<i class='ion-ios-close-outline'></i>",
      items: $scope.coins,
      update: function (filteredItems, filterText) {
        $scope.coins = filteredItems;
      }
    });
  };

  $scope.remove = function(coin) {
    LocalForgeUtilies.getValue('Favorites').then (function(value) {

      if (_.findIndex(value, {'Id': coin.Id})>=0 ){
        value.splice(_.findIndex(value, {'Id': coin.Id}),1);
        LocalForgeUtilies.setValue(value,'Favorites');
      }
      $scope.coins=value;
    },function(error){
      console.error(error);   
    });

  };



  this.initialize();
})

