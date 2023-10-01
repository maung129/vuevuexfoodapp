<template>
    <div class="bg-white shadow-md rounded-lg">
        <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
         <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-lg object-cover h-56 w-full">
        </router-link>
         <div class="p-3">
           <h3 class="p-2 font-semibold">{{ meal.strMeal }}</h3>
           <!-- <p class="p-2 mb-4 h-20">{{ meal.strInstructions }}</p> -->
           <div class="p-2 flex justify-between">
             <YoutubeButton :href="meal.strYoutube"/>  
             <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}" style="height:48px" class="px-3 py-3 rounded border-2 border-slate-700 transition-colors mt-1 hover:bg-slate-700 hover:text-slate-100">
               View Detail
             </router-link>
           </div>
         </div>
     </div>
     
     <!-- .substring(0,100)+"..." -->
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue'

const {meal} = defineProps({
    meal:Object
})

</script>

<style>

</style>