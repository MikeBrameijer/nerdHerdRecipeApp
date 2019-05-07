function FiltersController() {
    const ctrl = this;

    ctrl.filters = [{
        filterName: "DIET",
        categories: [{
            name: "balanced"
            },
            {
            name: "high-protein"
            },
            {
            name: "high-fiber"
            },
            {
            name: "low-fat"
            },
            {
            name: "low-carb"
            },
            {
            name: "low-sodium"
            }
        ]
    },
    {
        filterName: "HEALTH",
        categories: [{
            name: "dairy-free"
            },
            {
            name: "gluten-free"
            },
            {
            name: "keto-friendly"
            },
            {
            name: "paleo"
            },
            {
            name: "peanut-free"
            },
            {
            name: "vegetarian"
            }
        ]
    }
    
    ]
     
  }
  
  angular
  .module('RecipeApp')
  .component('filters', {
    template: `
    <div class="filterContainer">
    <div class="filterMasterCard">
        <div class="filterCard" ng-repeat="filter in $ctrl.filters">
            <div class="filterButton">
                <h4>{{filter.filterName}}</h4>
                <i class="material-icons redIcon">keyboard_arrow_down</i>
            </div>
            <div class="filterDropdown">
                <div ng-repeat="category in filter.categories">
                    <p>{{category.name}}</p>
                </div>
            <div>
        </div>
    </div>
    </div>
    `, 
    controller: FiltersController,
    bindings: {
    //   getList: '&',
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    }
});
