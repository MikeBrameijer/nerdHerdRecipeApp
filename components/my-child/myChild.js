function MyChildController() {
    const ctrl = this;
 
  }
  
  angular.module('RecipeApp').component('myChild', {
    template: `
    <hr>
    <div>
      Name: {{$ctrl.me.name}}<br>
      Age: {{$ctrl.me.age}} <button ng-click="$ctrl.update('age', $ctrl.me.age+1)">Add 1</button><br>
      <button ng-click="$ctrl.delete()">Delete</button>
    </div>`, // or use templateUrl
    controller: MyChildController,
    // bindings: {
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    // }
});