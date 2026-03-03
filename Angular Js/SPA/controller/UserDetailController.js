app.controller('UserDetailController', function($scope, $routeParams, UserService) {
    var userId = $routeParams.id;
    $scope.user = {};
    UserService.getStudentById(userId).then(function(response) {
        $scope.user = response.data[0];
        console.log($scope.user);
    }).catch(function(error) {
        console.error("Error fetching user details:", error);
    });
});