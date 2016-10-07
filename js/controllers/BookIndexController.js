






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
