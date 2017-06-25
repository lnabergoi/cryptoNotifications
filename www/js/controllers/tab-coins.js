angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CoinsCtrl', function($scope, Chats, CoinList,CoinListCache, GlobalConstant, $ionicFilterBar) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  this.initialize = function() {
    $scope.mediaUrl=GlobalConstant.CRIPTOCOMPARE_MEDIA_URL;
    $scope.loadItems();
  };

  $scope.doRefresh = function(){
    CoinList.queryAll({}, function(data){
      CoinListCache.setList(data.Data);
      $scope.coins=_.valuesIn(data.Data);
    });
  };

  $scope.CoinDettails = function(){
    CoinListCache.saveId(id);
  };


  $scope.loadItems = function() {
   
      $scope.coins=_.valuesIn(CoinListCache.getList());

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


  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  this.initialize();
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
