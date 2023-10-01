<template>
  <div>
    <div class="flex flex-col p-8">
   
      <div class="flex justify-center items-center gap-2 ">
          <router-link :to="{name:'byLetter',params:{letter}}" v-for="letter of letters" :key="letter" class="w-2 h-2 text-xl mr-2 flex items-center justify-center hover:text-red-900 hover:scale-150 transition-all">{{ letter }}</router-link>
      </div>
      
     </div>
     <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed,onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

  const route = useRoute();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const selectedLetter = ref(route.params.letter)

  watch(route,()=>{
    store.dispatch('searchMealsByLetter',route.params.letter)
    selectedLetter.value = route.params.letter;
  })

  onMounted(()=>{
    store.dispatch('searchMealsByLetter',route.params.letter)
  })
  const meals = computed(()=>{
    return store.state.mealsByLetter;
  })

</script>

<style>

</style>