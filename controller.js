var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController',
    function MyController($scope, $http) {
        $http.get('data.json').then(function (response) {
            $scope.data = response.data;
            $scope.artistOrder = 'name';
        });
    });

myControllers.controller('DetailsController', function($scope, $http, $routeParams){
    $http.get("data.json").then(function(response){
       $scope.data = response.data;
       $scope.artistId = $routeParams.itemId;
       
       if ($routeParams.itemId == 0) {
           $scope.prevItemdisplay = false;
           
       }else{
           $scope.prevItemdisplay = true;

           $scope.prevItem = Number($routeParams.itemId) - 1;
        }
       


        if ($routeParams.itemId < $scope.data.length - 1) {
            $scope.nextItemdisplay = true;
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItemdisplay = false;

            
        }


    });
    
    
    
    
    
        
});    