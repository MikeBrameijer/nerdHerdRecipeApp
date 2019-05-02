function RecipeListController(recipeService) {
    const ctrl = this;

    ctrl.getList = () =>{
      recipeService.getData();
    }

 
  }

  
  angular
  .module('RecipeApp')
  .component('recipeList', {
    template: `
    <div>testing</div>`, // or use templateUrl
    controller: RecipeListController,
    // bindings: {
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    // }
});