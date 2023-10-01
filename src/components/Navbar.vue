<template>
    <header class="shadow h-16 flex items-center justify-between bg-white p-12">
        
            <router-link :to="{name:'home'}" class="font-bold text-2xl">Home</router-link>
           
            <div class="flex items-center gap-1">
                <router-link :to="{name:'byName'}" class="inline-flex items-center px-2 py-9 h-full transition-colors hover:bg-slate-300 hover:text-black hover:font-bold">Search Meals</router-link>
                <router-link :to="{name:'ingredients'}" class="inline-flex items-center px-2 py-9 h-full transition-colors hover:bg-slate-300 hover:text-black hover:font-bold">Meals by Ingredients</router-link>
                <router-link :to="{name:'byLetter'}" class=" inline-flex items-center px-2 py-9 h-full transition-colors hover:bg-slate-300 hover:text-black hover:font-bold">Meals by Letter</router-link>
            </div>
       
    </header>
</template>

<script setup>

</script>

<style>

</style>