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
    $scope.backToform1 = function(){
        $scope.formfirst = true;
        $scope.formsecond = false;
    }
    $scope.submitForm = function(){
      $scope.formsecond = true;
      $scope.formfirst = false;
      console.log("$scope.formData.firstname",$scope.formData.firstname);
      $scope.formData = {
          firstname   : $scope.formData.firstname,
          lastname    : $scope.formData.lastname,
          number      : $scope.formData.number,
          email       : $scope.formData.email,
          college     : $scope.formData.collegeDetails,
          otp         : 555555  
      }
      $scope.formDataSave = $scope.formData;
      console.log("====formDataSave===",$scope.formDataSave);
      console.log("======$scope.formData=====",JSON.stringify($scope.formData));
    }

    $scope.register = function(){
      $scope.dummyTitle   = "others"; //dummy value title
      $scope.dummyClinic  = "others"  //dummy value clinic
      $scope.registerData = {
          data        : $scope.formDataSave,
          gender      : $scope.registerData.gender,
          college     : $scope.registerData.speciality,
          speciality  : $scope.registerData.degree,
          title       : $scope.dummyTitle,    
          clinic      : $scope.dummyClinic,  
          state       : $scope.registerData.statemedicalcouncil,
          mcinumber   : $scope.registerData.mci_number 
      }
      $scope.registeredData = $scope.registerData;
      console.log("=====registeredData======",$scope.registeredData);
      console.log("=====$scope.registerData======",JSON.stringify($scope.registerData));
    }
    $(document).ready(function() {
 
        $("#owl-demo").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          autoPlay: true,   
          slideSpeed : 300,
          paginationSpeed : 400,
     
          items : 5, 
          itemsDesktop : false,
          itemsDesktopSmall : [979,3],
          itemsTablet: [768,2],
          itemsMobile : [479,1]
     
        });

        $("#owl-two").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          autoPlay: true,   
          slideSpeed : 500,
          paginationSpeed : 400,
          singleItem:true,
          stopOnHover: true
     
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
        });
        $("#testimonials").owlCarousel({
          //navigation : false, // Show next and prev buttons
          autoPlay: true,   
          slideSpeed : 300,
          paginationSpeed : 400,
     
          items : 3, 
          //itemsDesktop : false,
          //itemsDesktopSmall : [979,3],
          //itemsTablet: [768,2],
          //itemsMobile : [479,1]
        })

        // $(window).scroll(function() {
        //    var winScroll = $(window).scrollTop();
        //    var finalScrll = winScroll / 100;           
        //    $("#toScroll").css('backgroundPosition': 0+'px' +finalScrll+'px');          
        // });
 
    });
}