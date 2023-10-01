<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class=" max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid:cols-3 text-lg py-2">
            <div>
               <strong class="font-bold">Category:</strong>  {{ meal.strCategory }}
            </div>
            <div>
               <strong class="font-bold">Area:</strong>  {{ meal.strArea }}
            </div>
            <div>
               <strong class="font-bold">Tags:</strong>  {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                  <template v-for="(el, ind) of new Array(20)" :key="ind">
                    <li v-if="meal[`strIngredient${ind + 1}`]">
                    {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                    </li>
                  </template>
                </ul>
              </div>
              <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                  <template v-for="(el, ind) of new Array(20)" :key="ind">
                    <li v-if="meal[`strMeasure${ind + 1}`]">
                    {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                    </li>
                  </template>
                </ul>
              </div>
            <div class="mt-4 flex flex-col justify-around items-start">
                <YoutubeButton :href="meal.strYouTube"/>
                <a
                :href="meal.strSource"
                target="_blank"
                class=" px-3 py-3 rounded border-2 border-slate-700 transition-colors hover:bg-slate-700 hover:text-slate-100"
              >
                View Original Source
              </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axiosClient from "../axiosClient";
import YoutubeButton from '../components/YoutubeButton.vue'
    const props = defineProps({
        id:Number
    })

    const meal = ref({});

    onMounted(()=>{
        axiosClient.get(`/lookup.php?i=${props.id}`)
        .then(({data})=>{
            meal.value = data.meals[0] || {};
        })
    })
</script>

<style>

</style>