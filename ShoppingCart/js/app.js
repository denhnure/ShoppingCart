'use strict';

var storeApp = angular.module('AngularStore', ['ngRoute']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/store', {
				templateUrl: 'partials/store.htm',
				controller: storeController
			}).
			when('/products/:productSku', {
				templateUrl: 'partials/product.htm',
				controller: storeController
			}).
			when('/cart', {
				templateUrl: 'partials/shoppingCart.htm',
				controller: storeController
			}).
			otherwise({
				redirectTo: '/store'
			});
}]);

storeApp.factory("DataService", function() {
	var myStore = new Store();
	var myCart = new ShoppingCart("AngularStore");
	
	myCart.addCheckoutParameters("PayPal", "your PayPal merchant account Id");
	myCart.addCheckoutParameters("Google", "your Google merchant account Id", {
		ship_method_name_1: "UPS Next Day Air",
		ship_method_price_1: "20.00",
		ship_method_currency_1: "USD",
		ship_method_name_2: "UPS Ground",
		ship_method_price_2: "15.00",
		ship_method_currency_2: "USD",
	});
	
	return {
		store: myStore,
		cart: myCart
	};
});