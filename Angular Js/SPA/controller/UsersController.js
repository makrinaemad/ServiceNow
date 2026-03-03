app.controller('UsersController', function($scope,UserService) {
    $scope.students = [];
       UserService.getStudents().then(function(response) {
                $scope.students = response.data;
                console.log($scope.students);
        });

           $scope.loadingComplete = false;
           $scope.render=false;
                $scope.renderTable = function() {
                    $scope.loadingComplete = true;
                    UserService.getStudents().then(function(response) {
                        $scope.students = response.data;
                    }).finally(function() {
                        $scope.loadingComplete = false; 
                    });
                };

             $scope.renderTable();

                $scope.submitForm = function() {
                    let newStudent = {
                        name: $scope.name,
                        email: $scope.email
                    };

                    UserService.addStudent(newStudent).then(function(response) {
                        $scope.name = "";
                        $scope.email = "";
                        $scope.submitform.$setUntouched();
                        $scope.renderTable();
                    }).catch(function(error) {
                        console.error("Error adding student:", error);
                    });
                };
                $scope.delete = function($index) {
                    let studentId = $scope.students[$index].id; 
                    UserService.deleteStudent(studentId).then(function(response) {
                        $scope.renderTable();
                    }).catch(function(error) {
                        console.error("Error deleting student:", error);
                    });
                };
                $scope.edit = function($index) {
                    let studentId = $scope.students[$index].id; 
                    let updatedData = {
                        name: prompt("Enter new name:", $scope.students[$index].name),
                        email: prompt("Enter new email:", $scope.students[$index].email)
                    };
                    UserService.editStudent(studentId, updatedData).then(function(response) {
                        $scope.renderTable();
                    }).catch(function(error) {
                        console.error("Error editing student:", error);
                    });
                };

});