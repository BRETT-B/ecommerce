ecommerceApp.controller('registerController', function($scope, $location, $http, $cookies){

    var apiPath = 'http://localhost:3000'
    $scope.register = function(){
        console.log($scope.username);
        $http
            .post(apiPath + '/register', {
                username: $scope.username,
                password: $scope.password,
                password2: $scope.password2,
                email: $scope.email
        })
            .then(function successCallback(response){
                console.log(response);
                if(response.data.message == 'added'){
                    // $location.path('/options');
                }
            },function errorCallback(response){
                console.log(response);
        });
    };
});