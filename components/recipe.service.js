function RecipeService($http, $q) {
    const service = this;

    service.key = 'cc5720c46e1eecba3eaca90c761a2fd8';
    service.id = 'f246321d';

    service.getData = (search) => {
        let url = 'https://api.edamam.com/search';
        return $q(function (resolve, reject) {
            $http({
                url: url,
                method: 'GET',
                params: {
                    q: search,
                    app_id: service.id,
                    app_key: service.key,
                    to: 30,
                    // DishType: "lunch",
                    diet: "low-carb"
                },

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
}

angular
    .module('RecipeApp')
    .service('recipeService', RecipeService);