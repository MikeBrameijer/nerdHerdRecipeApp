function FiltersController() {
    const ctrl = this;

    ctrl.filters = [{
        filterName: "Filter 1",
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
    },
    {
        filterName: "Filter 2",
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
    },
    {
        filterName: "Filter3",
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
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
                <ul class="filterLists">
                    <li class="filterListItem">{{filter.option1}}</li>
                    <li class="filterListItem">{{filter.option2}}</li>
                    <li class="filterListItem">{{filter.option3}}</li>
                </ul>
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
