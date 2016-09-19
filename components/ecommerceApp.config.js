ecommerceApp.config(function($routeProvider){
	$routeProvider
        .when('/', {
            templateUrl: 'components/home/homeView.html',
            controller: 'homeController'
        })
        .when('/register', {
            templateUrl: 'components/register/registerView.html',
            controller: 'registerController'
        })
        .when('/login', {
            templateUrl: 'components/login/loginView.html',
            controller: 'loginController'
        })
        // .when('/delivery', {
        //     templateUrl: 'components/delivery/deliveryView.html',
        //     controller: 'deliveryController'
        // })
        // .when('/options', {
        //     templateUrl: 'components/options/optionsView.html',
        //     controller: 'optionsController'
        // })
        // .when('/payment', {
        //     templateUrl: 'components/payment/paymentView.html',
        //     controller: 'paymentController'
        // })
        .otherwise({
            redirectTo: "/"
        });
});
