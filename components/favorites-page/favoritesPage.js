function FavoritesPageController() {
    const ctrl = this;
 
  }
  
  angular
  .module('RecipeApp')
  .component('favoritesPage', {
    template: `
    <hr>
    <div>
      <p>Dem FAVORITES</p>
    </div>`, // or use templateUrl
    controller: FavoritesPageController,
    // bindings: {
    //   me: '<',
    //   onDelete: '&',
    //   onUpdate: '&'
    // }
});