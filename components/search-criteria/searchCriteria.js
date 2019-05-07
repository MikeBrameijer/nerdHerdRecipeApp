function SearchCriteriaController() {
    const ctrl = this;

    ctrl.getSearch = (search) =>{
        ctrl.getList({
          que:search
        });
    }
     
  }
  
  angular
  .module('RecipeApp')
  .component('searchCriteria', {
    template: `
    
    <div class="searchCard">
      <div class="topNative">
        <img src="https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1280.jpg">
      </div>
      <div class="searchInput">
        <input class="searchBox" ng-model="$ctrl.searchVar" placeholder="what do you want to eat"/>
        <div class="searchBack"></div>
        <button class="searchButton" ng-click="$ctrl.getSearch($ctrl.searchVar)"> Search Now </button>
       </div>
    </div>
    `, 
    controller: SearchCriteriaController,
    bindings: {
      getList: '&',
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    }
});
