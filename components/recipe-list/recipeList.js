function RecipeListController(recipeService) {
  const ctrl = this;
  ctrl.recipesList = [];

  ctrl.addFavorite = (favoriteParam) => {
    recipeService.setFavorites(favoriteParam);
    console.log("you clicked it");
  }


  ctrl.getList = (search) => {
    recipeService.getData(search)
      .then((recipes) => {
        ctrl.recipesList = []
        console.log("it worked!!!!!!")
        console.log(recipes)
        let listFromApi = recipes;
        listFromApi.forEach(function (spot, index){
          let recipeObj = {
            label: spot.recipe.label,
            img: spot.recipe.image,
            calories: spot.recipe.calories,
            ingredients: spot.recipe.ingredients.length,
            servings: spot.recipe.yield,
            bookmark: spot.bookmarked,
            url: spot.recipe.url,
            source: spot.recipe.source
          }
          ctrl.recipesList.push(recipeObj);
        })
      })
      .catch((err) => {
        console.log("it didnt work")
        console.log(err);
      });
  }

  ctrl.showMore = (recipe) => {
    ctrl.showMore = !ctrl.showMore 

    console.log(ctrl.showMore);
  };

  


}


angular
  .module('RecipeApp')
  .component('recipeList', {
    template: `
    <search-criteria get-list="$ctrl.getList(que)"></search-criteria>
    <filters></filters>
    <div class="contentContainer">
      <div class="cardContainer">
          <div ng-repeat="recipe in $ctrl.recipesList" class="fullCard">
            <div class="imageCard">
              <div class="favorite" ng-click="$ctrl.addFavorite(recipe); favorite=true">
                  <i ng-hide="favorite" class="material-icons favoriteIcon whiteIcon" >favorite</i>
                  <i ng-show="favorite" class="material-icons favoriteIcon redIcon" >favorite</i>
                  <i class="material-icons favoriteIcon redIcon">favorite_border</i>
                    
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
    </div>
  `, // or use templateUrl
    controller: RecipeListController,
    // bindings: {
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    // }
  });