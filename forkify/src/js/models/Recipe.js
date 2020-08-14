import axios from 'axios';


export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        const numIngredients = this.ingredients.length;
        const periods = Math.ceil(numIngredients / 3);
        this.time = periods * 15;
    }

    calcServings() {
        // To keep it simple
        this.servings = 4;
    }

    parseIngredients() {

        const unitsLong = ['tablespoons', 'tablespoon',
            'ounces', 'ounce',
            'teaspoons', 'teaspoon',
            'cups',
            'pounds'
        ];
        const unitsShort = ['tbsp', 'tbsp',
            'oz', 'oz',
            'tsp', 'tsp',
            'cup',
            'pound'
        ];
        const newIngredients = this.ingredients.map(el => {
            // 1. Uniform Units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            // 2. Remove paranthesis
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3. Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            // for each element in array we test, if that element is present in the unitsShort
            const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            let objIngredient;
            if (unitIndex > -1) {
                // There is a unit in the ingredient
                // Ex. 4 1/2 cups. arrCount is [4, 1/2] => eval("4 + 1/2") = 4.5
                // Ex. 4 cups. arrCount is [4]
                // Ex . 1-1/2 cups arrCount is [1-1/2] => eval("1+1/2") = 1.5
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    // Just showcasing 'eval'
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }
                objIngredient = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }
            } else if (parseInt(arrIng[0], parseInt)) { // =? NaN resolve to false
                // There is NO unit, but 1st element is a number
                objIngredient = {
                    count: parseInt(arrIng[0]),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ') // Means ingredient: ingredient in ES6
                }
            } else if (unitIndex === -1) {
                // There is NO unit
                objIngredient = {
                    count: 1,
                    unit: '',
                    ingredient // Means ingredient: ingredient, This is a short hand way introduced in ES6
                }
            }

            return objIngredient;
        });
        this.ingredients = newIngredients;
    }
}