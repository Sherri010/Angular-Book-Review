angular
  .module('BookReview',['ngRoute'])
  .config(config)
  .controller('BookIndexController', BookIndexController);



config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books.html',
      controllerAs: 'bookcontrol',
      controller: 'BookIndexController'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}



BookIndexController.$inject = ['$http']
function BookIndexController( $http ){
  var vm = this;
  vm.books=[];
  $http({
    method: 'GET',
    url:'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
      vm.books = response.data.books;
  },function errorCallback(response) {
      console.log('There was an error getting the data', response);
  });
}
