function RecipeService($http, $q) {
    const service = this;
    service.favoriteArray = []

    service.key = 'cc5720c46e1eecba3eaca90c761a2fd8';
    service.id = 'f246321d';

    service.getData = (search, diet, health) => {
        let url = 'https://api.edamam.com/search';
        let apiParam = {
            q: search,
            app_id: service.id,
            app_key: service.key,
            to: 30,
        }
        if(diet != ""){
            apiParam.diet = diet;
        }
        if(health != ""){
            apiParam.health = health;
        }
        return $q(function (resolve, reject) {
            $http({
                url: url,
                method: 'GET',
                params: apiParam,

            })
                .then((response) => {
                    console.log("it worked!!!!!!")
                    console.log(response)
                    resolve(response.data.hits);
                })
                .catch((err) => {  
                    console.log("it didnt work")
                    console.log(err);
                    reject(error);
                })
        })
    }
    service.setFavorites = (favoriteParam) =>{
        service.favoriteArray.push(favoriteParam);
    }
    service.setRemoveFavorites = (removeParam) =>{
        service.favoriteArray.splice(service.favoriteArray.indexOf(removeParam), 1);
    }
}

angular
    .module('RecipeApp')
    .service('recipeService', RecipeService);