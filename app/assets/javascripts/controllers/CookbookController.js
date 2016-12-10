(function(){
  function CookbookController($scope, CookbookService, RecipeService, UserService, GlobalListService, ShoppingListService, Auth, $rootScope) {

///////// DECLARATIONS /////////

    var ctrl = this

    // $scope.$on('updateList', function(data){
    //   debugger;
    // })

    var updateList = function(user){
      $scope.user = user
      $scope.cookbookRecipes = user.cookbook.recipes;
      // if (RecipeService.recipe){
      //   $scope.recipe = updateIngredients(RecipeService.recipe)
      // }
    }

    // var updateIngredients = function(recipe){
    //   recipe.ingredients.forEach(function(ingredient){
    //     ingredient.added = false;
    //     UserService.user.shoppingList.ingredients.forEach(function(item){
    //       if(item.food === ingredient.food){
    //         ingredient.added = true;
    //       }
    //     })
    //   })
    //   return recipe
    // }

    // ctrl.showCookbookRecipe = RecipeService.showRecipe
    ctrl.showCookbookRecipe = function(recipe){
      // debugger;
      $rootScope.$emit('showRecipe', recipe)
      // updateIngredients(recipe)
      // $scope.recipe = RecipeService.recipe = CookbookService.alreadyInCookbook(recipe);
    }    

///////// PAGE SETUP /////////

    $scope.recipe = RecipeService.recipe;

    if(UserService.user === undefined){
      Auth.currentUser().then(function(user){
        updateList(GlobalListService.updateLists(user))
      })
    } else {
      updateList(GlobalListService.updateLists(UserService.user))
    }

///////// UPDATE COOKBOOK /////////

    // $scope.addRecipe = function(recipe){
    //   CookbookService.addToCookbook(UserService.user.cookbook.id, recipe)
    //     .success(function(user){
    //       updateList(GlobalListService.updateLists(user))
    //       recipe.bookmarked = true
    //     })
    // }

    // $scope.removeRecipe = function(recipe){
    //   CookbookService.removeFromCookbook(UserService.user.cookbook.id, recipe)
    //     .success(function(user){
    //       updateList(GlobalListService.updateLists(user))
    //       recipe.bookmarked = false;
    //     })
    // }

///////// UPDATE SHOPPING LIST /////////

    // ctrl.addToShoppingList = function(ingredient){
    //   ingredient.added = true;
    //   ShoppingListService.updateShoppingList('PUT', UserService.user.shoppingList.id, ingredient.id)
    //     .success(function(user){
    //       updateList(GlobalListService.updateLists(user))
    //     })
    // }

    // ctrl.removeFromShoppingList = function(ingredient){
    //   ingredient.added = false;
    //   ShoppingListService.updateShoppingList('DELETE', UserService.user.shoppingList.id, ingredient.id)
    //     .success(function(user){
    //       updateList(GlobalListService.updateLists(user))
    //     })
    // }
  }

  CookbookController.$inject = ['$scope', 'CookbookService', 'RecipeService', 'UserService', 'GlobalListService', 'ShoppingListService', 'Auth', '$rootScope']

  angular
  .module('foodEase')
  .controller('CookbookController', CookbookController)
  
}())