<template>
   <template>
      <div class="p-8 pb-0 text-slate-500">
        <h1 class="text-4xl font-bold mb-4">Today's Hot Meals</h1>
      </div>
      <Meals :meals="meals" />
    </template>
    
</template>

<script setup>
import { onMounted,ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient'


const meals = ref([]);

onMounted(()=>{
   for(let i=0;i<10;i++){
      axiosClient.get('/random.php').then(({data})=>meals.value.push(data.meals[0]))
   }
    
})

     
</script>

<style>

</style>