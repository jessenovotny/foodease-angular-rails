(function(){
  function SearchService($http){
    this.getRecipes = function(query, user){
      var url = 'https://api.edamam.com/search?q=' + query;
      url += '&from=0&to=50'
      url += '&alt=json-in-script&callback=JSON_CALLBACK'
      if(user){
        user.healthLabels.forEach(function(label){
          url += '&health=' + label.label
        })
      }
      return $http({
        url: url,
        method: 'jsonp'
      })
    }
  }
  SearchService.$inject = ['$http']

  angular
    .module('reciPlease')
    .service('SearchService', SearchService);
}());