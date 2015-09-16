angular.module('main')
    .controller('testController', ['$scope', function ($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
}]);

angular.module('main')
    .controller('filterController', function ($scope, $http) {

    //    $scope.names = "";

        $scope.lname = "";
        $scope.gridOptions = {
            data: 'names'
        };

        $scope.filter = function () {
            $http.get("https://my.ncarb.org/Public/api/certification/search?pageSize=20&page=0&lastName=" + $scope.lname + "&firstName=&city=&stateCode=&countryCode=&orderBy=name")
    .success(function (response) {
       // gridOptions.data.length = 0;
       // angular.copy(response.data, $scope.names);
       // $scope.gridOptions.data = response.data;

        $scope.names = [];
         $scope.names = response.data;
        
       // $scope.gridOptions.data = [];

      //  $timeout(function () {
         //   $scope.gridOptions.data = response.data;
     //   });

    });
        };
         $scope.filter();
        


    });

