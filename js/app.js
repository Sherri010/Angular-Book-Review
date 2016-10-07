angular
  .module('BookReview', [])
  .controller('BookIndexController', BookIndexController);

BookIndexController.$inject = ['$http']
function BookIndexController( $http ){
  var vm = this;
   vm.books=[];
  //               _id: "57f8052905c4b811001940be",
  //               title: "The Four Hour Workweek",
  //               author: "Tim Ferriss",
  //               image: "https://cloud.githubusercontent.com/assets/7833470/10892117/865b465a-8156-11e5-834b-9c4172d4b0fe.jpg",
  //               releaseDate: "April 1, 2007",
  //           },{
  //              _id: "57f8052905c4b811001940bd",
  //               title: "Around the World in 80 Days",
  //               author: "Jules Verne",
  //               image: "https://cloud.githubusercontent.com/assets/7833470/10892118/865bee3e-8156-11e5-9634-cd7bcd3d6d4f.jpg",
  //               releaseDate: "January 30, 1873"
  //           },{
  //               _id: "57f8052905c4b811001940c0",
  //               title: "Hankleberry Finn",
  //               author: "Hank Hill",
  //               image: "https://media.giphy.com/media/xDRq2yipbOWDC/giphy.gif",
  //               releaseDate: "April 10, 1984"
  //           }];
  $http({
    method: 'GET',
    url:'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
      vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
}
