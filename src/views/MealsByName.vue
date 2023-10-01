<template>
   <div>
    <div class="p-10">
      <input type="text" class="rounded w-full border-2 border-gray-300" placeholder="search for meals..." v-model="keyword" @change="searchMeals">
    </div>
    <Meals :meals="meals" />
   </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

    const route = useRoute();
    const keyword = ref("");
    function searchMeals(){
      store.dispatch('searchMeals',keyword.value);
    }
    const meals = computed(()=>{
      return store.state.searchedMeals
    })

    onMounted(()=>{
      keyword.value = route.params.name;
      if(keyword.value){
        searchMeals();
      }
    })
</script>

<style>

</style>