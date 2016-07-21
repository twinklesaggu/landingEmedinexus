/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', MasterCtrl]);

function MasterCtrl($scope) {
    $scope.myInterval = 3000;
    $scope.formData = {};
    $scope.registerData = {};
    $scope.formfirst = true;
    $scope.formsecond = false;
    $scope.submitForm = function(){
        $scope.formsecond = true;
        $scope.formfirst = false;
        console.log("$scope.formData.firstname",$scope.formData.firstname);
        $scope.formData = {
            firstname   : $scope.formData.firstname,
            lastname    : $scope.formData.lastname,
            number      : $scope.formData.number,
            email       : $scope.formData.email,
            college    : formData.collegeDetails,
            otp         : 555555  
        }
        $scope.formDataSave = $scope.formData;
        console.log("====formDataSave===",$scope.formDataSave);
        console.log("======$scope.formData=====",JSON.stringify($scope.formData));
    }

    $scope.register = function(){
        $scope.registerData = {
            gender       : $scope.registerData.gender,
            data        : $scope.formDataSave,
            college     : $scope.registerData.collegeDetails,
            speciality  : $scope.registerData.speciality,
            title       : $scope.registerData.title,
            clinic      : $scope.registerData.clinic,
            state       : $scope.registerData.state
        }
        $scope.registeredData = $scope.registerData;
        console.log("=====registeredData======",$scope.registeredData);
        console.log("=====$scope.registerData======",JSON.stringify($scope.registerData));
    }
    $scope.slides =[ 
        {
            image: 'img/media-one.jpg'
        },
        {
            image: 'img/media-one.jpg'
        },
        {
            image: 'img/media-one.jpg'
        },
        {
            image: 'img/media-one.jpg'
        },
        {
            image: 'img/media-one.jpg'
        },
    ]
}