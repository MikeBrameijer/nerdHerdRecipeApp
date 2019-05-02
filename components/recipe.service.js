function RecipeService($http, $q) {
    const service = this;
 
    service.key = 'cc5720c46e1eecba3eaca90c761a2fd8'; // Fill in here
    service.id = 'f246321d'; // Fill in here
    service.token = '';

    service.getData = (search) =>{
        let url = 'https://api.edamam.com/search';
        return $q(function (resolve, reject){
            $http({
                            url: url,
                            // method: 'GET',
                            params: {
                                q: search,
                                app_id: service.id,
                                app_key: service.key
                            },

        })
        .then((response) => {
            console.log("it worked!!!!!!s")
            console.log(response)
            resolve();
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