import {createRouter,createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealDetail from '../views/MealDetail.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Ingredients from '../views/Ingredients.vue'


const routes = [
    {
        path:"/",
        component:DefaultLayout,
        children:[
            {
                path:"/",
                name:'home',
                component:Home
            },
            {
                path:"/by-name/:name?",
                name:'byName',
                component:MealsByName,
                props:true
            },
            {
                path:"/by-letter/:letter?",
                name:'byLetter',
                component:MealsByLetter,
                props:true 
            },
            {
                path:"/ingredients",
                name:'ingredients',
                component:Ingredients,
                
            },
            {
                path:"/by-ingredient/:ingredient",
                name:'byIngredient',
                component:MealsByIngredients,
                props:true
            },
            {
                path:"/meal/:id",
                name:'mealDetails',
                component:MealDetail,
                props:true
            }
        ]
    },
    {
        path:'/guest',
        component:GuestLayout
    }
    
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;