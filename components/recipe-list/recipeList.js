function RecipeListController(recipeService) {
  const ctrl = this;
  ctrl.recipesList = [];

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
            bookmark: spot.bookmarked
          }
          ctrl.recipesList.push(recipeObj);
        })
      })
      .catch((err) => {
        console.log("it didnt work")
        console.log(err);
      });
  }

  


}


angular
  .module('RecipeApp')
  .component('recipeList', {
    template: `
    <search-criteria get-list="$ctrl.getList(que)"></search-criteria>
    <div class="contentContainer">
    <div class="cardContainer">
        <div ng-repeat="recipe in $ctrl.recipesList" class="fullCard">
          <div class="imageCard">
            <div class="favorite">
                <i class="material-icons favoriteIcon whiteIcon">favorite</i>
                <i class="material-icons favoriteIcon greenIcon">favorite_border</i>
                  
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