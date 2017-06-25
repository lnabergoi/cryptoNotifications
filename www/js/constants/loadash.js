
(function() {
    'use strict';
    /*jshint newcap: false */
    

    angular.constant('starter').constant('_',['$window',
      	function($window) {
        // place lodash include before angular
        return $window._;
    	}
    ]);

})();