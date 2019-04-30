function MyParentController() {
    const ctrl = this;
  
  }
  
  angular
  .module('RecipeApp')
  .component('myParent', {
    template: `
        <b>My List</b><br>
        <my-child ng-repeat="person in $ctrl.list" me="person" on-delete="$ctrl.deletePerson(person)" on-update="$ctrl.updatePerson(person, prop, value)">
        </my-child>`, // or use templateUrl
    controller: MyParentController
  });