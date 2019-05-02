function SearchCriteriaController(recipeService) {
    const ctrl = this;

    ctrl.getSearch = (search) =>{
        recipeService.getData(search);
    }
     
  }
  
  angular
  .module('RecipeApp')
  .component('searchCriteria', {
    template: `
    <hr>
    <input ng-model="$ctrl.searchVar" placeholder="what do you want to eat"/>
    <button ng-click="$ctrl.getSearch($ctrl.searchVar)"> Search Now </button>
    `, 
    controller: SearchCriteriaController,
    // bindings: {
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    // }
});