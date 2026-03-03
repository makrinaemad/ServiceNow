   app.service('UserService', function($http) {
    var apiLink = "https://jxciyjcjfmsovpkvjbhe.supabase.co/rest/v1/user";
    var apiKey = "sb_publishable_A0mawq7zZCEO8tcz0pfwfw_xaJiSNNT";
    var headers = {
        'apikey': apiKey,
        'Authorization': 'Bearer ' + apiKey
    };
    this.getStudents = function() {
        return $http.get(apiLink, { headers: headers });
    };

    this.addStudent = function(studentData) {
        return $http.post(apiLink, studentData, { headers: headers });
    };
    this.deleteStudent = function(studentId) {
        return $http.delete(apiLink + '?id=eq.' + studentId, { headers: headers });
    };
    this.editStudent = function(studentId, studentData) {
        return $http.patch(apiLink + '?id=eq.' + studentId, studentData, { headers: headers });
    };
    this.getStudentById = function(studentId) {
        return $http.get(apiLink + '?id=eq.' + studentId, { headers: headers });
    };

});