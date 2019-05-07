function SearchCriteriaController() {
    const ctrl = this;

    ctrl.filters = [{
      filterName: "DIET",
      categories: [{
          name: "Balanced",
          value: "balanced"
          },
          {
          name: "High-Protein",
          value: "high-protein"
          },
          {
          name: "High-Fiber",
          value: "high-fiber"
          },
          {
          name: "Low-Fat",
          value: "low-fat"
          },
          {
          name: "Low-Carb",
          value: "low-carb"
          },
          {
          name: "Low-Sodium",
          value: "low-sodium"
          }
      ]
  },
  {
      filterName: "HEALTH",
      categories: [{
          name: "Dairy-Free",
          value: "dairy-free"
          },
          {
          name: "Gluten-Free",
          value: "gluten-free"
          },
          {
          name: "Keto-Friendly",
          value: "keto-friendly"
          },
          {
          name: "Paleo",
          value: "paleo"
          },
          {
          name: "Peanut-Free",
          value: "peanut-free"
          },
          {
          name: "Vegetarian",
          value: "vegetarian"
          }
      ]
  }]

  ctrl.addValue = function(filterVal, filterName) {
    console.log(filterVal);
    console.log(filterName);

    if (filterName === "HEALTH") {
        let healthVal = filterVal;
    }
    if (filterName === "DIET") {
        let dietVal = filterVal;
    }
}

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
    
    <div class="filterContainer">
    <div class="filterMasterCard">
        <div class="filterCard" ng-repeat="filter in $ctrl.filters">
            <div class="filterButton">
                <h4>{{filter.filterName}}</h4>
                <i class="material-icons redIcon">keyboard_arrow_down</i>
            </div>
            <div class="filterDropdown">
                <div ng-repeat="category in filter.categories">
                    <p ng-click="$ctrl.addValue(category.value, filter.filterName)">{{category.name}}</p>
                </div>
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
