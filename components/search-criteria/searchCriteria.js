function SearchCriteriaController() {
  const ctrl = this;
  ctrl.dietVal = "";
  ctrl.healthVal = ""; 

  ctrl.dietFilter = ["Balanced", "High-Protein", "High-Fiber", "Low-Fat", "Low-Carb", "Low-Sodium"]
  ctrl.healthFilter = ["Dairy-Free", "Gluten-Free", "Keto-Friendly", "Paleo", "Peanut-Free", "Vegetarian"]

  ctrl.getSearch = (search, diet, health) => {
    ctrl.getList({
      que: search,
      diet: diet.toLowerCase(),
      health: health.toLowerCase()
    });
  }

}

angular
  .module('RecipeApp')
  .component('searchCriteria', {
    template: `
    
    <div class="searchCard">
      <div class="topNative">
        <img class="topNativeImage" src="Assets/Header_Placeholder.jpg">
      </div>
      <div class="searchInput">
        <input class="searchBox" ng-model="$ctrl.searchVar" placeholder="what do you want to eat"/>
        <div class="searchBack"></div>
        <button class="searchButton" ng-click="$ctrl.getSearch($ctrl.searchVar, $ctrl.dietVal, $ctrl.healthVal)"> Search Now </button>
       </div>
    </div>

    <div class="filterContainer">
    <div class="filterMasterCard">
    <select ng-model="$ctrl.dietVal">
      <option value="" selected>-- DIET --</option>
      <option ng-repeat="item in $ctrl.dietFilter" value="{{item}}">{{item}}</option>
    </select>

    <select ng-model="$ctrl.healthVal">
      <option value="" selected>-- HEALTH --</option>
      <option ng-repeat="item in $ctrl.healthFilter" value="{{item}}">{{item}}</option>
    </select>

        <div class="filterCard" ng-repeat="filter in $ctrl.filters">
            <div class="filterButton">
                <h4 ng-model="$ctrl.diet">{{filter.filterName}}</h4>
                <i class="material-icons redIcon">keyboard_arrow_down</i>
            </div>
            <div class="filterDropdown">
                <select ng-options="categorie.name for categorie in filter.categories">
                    // <p ng-click="$ctrl.addValue(category.value, filter.filterName)">{{category.name}}</p>
                </select>
            <div>
        </div>
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
