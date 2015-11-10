let HomeController = function($scope) {
  $scope.home = 'Home Page';
  $scope.about = 'About Page';
  $scope.contact = 'Contact Page';


};

HomeController.$inject = ["$scope"];

export default HomeController;