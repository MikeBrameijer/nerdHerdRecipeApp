function FavoritesPageController(recipeService) {
    const ctrl = this;
    ctrl.favoriteArray = recipeService.favoriteArray;
    // console.log(favoriteArray);
   
  ctrl.setRemoveFavorites = (removeParam) => {
    recipeService.setRemoveFavorites(removeParam)
    console.log("you removed it!");
  }

 
  }
  
  angular
  .module('RecipeApp')
  .component('favoritesPage', {
    template: `
    <div class="contentContainer">
    <div class="cardContainer">
        <div ng-repeat="recipe in $ctrl.favoriteArray" class="fullCard">
          <div class="imageCard">
            <div class="favorite" ng-click="$ctrl.setRemoveFavorites(recipe)">
                <i class="material-icons favoriteIcon whiteIcon">remove_circle</i>
                <i class="material-icons favoriteIcon redIcon">remove_circle_outline</i>
                  
              </div>
              <img class="foodImage" src="{{recipe.img}}" alt="food">
              </div>
              <div class="informationCard">
                <h2 class="cardDefault cardParams cardHeader cardSpacing">{{recipe.label}}</h2>
                <div class="cardStats">
                  <p class="cardDefault rightBorder">Calories:
                    <span class="cardParams">{{recipe.calories | number:0}}</span>
                  </p>
                  <p class="cardDefault">Servings:
                    <span class="cardParams">{{recipe.servings}}</span>
                  </p>
                </div>
                <p class="cardDefault cardSpacing">Ingredients Needed:
                  <span class="cardParams">{{recipe.ingredients}}</span>
                </p>
                <div class="showMore">
                  <button class="showButton" ng-hide="showme" ng-click="showme=true">More Info</button>
                  <button class="showButton" ng-show="showme" ng-click="showme=false">Show Less</button>
                  <div ng-hide="showme"></div>
                  <div class="showMoreCard" ng-show="showme">
                    <p class="cardDefault">Source: 
                      <span class="cardParams">{{recipe.source}}</span>
                    </p>
                    <p class="cardDefault">URL: <a href="{{recipe.url}}" target="_blank" class="cardParams">View the recipe</a>
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>`, // or use templateUrl
    controller: FavoritesPageController,
    // bindings: {
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    // }
});