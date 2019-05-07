function FiltersController() {
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
