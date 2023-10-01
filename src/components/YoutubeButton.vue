<template>
    <div class="p-2 flex justify-between">
        <a :href="href" target="_blank" class="px-3 py-2 rounded border-2 border-red-700 transition-colors hover:bg-red-700 hover:text-slate-100">
            YouTube
        </a>
        
      </div>
</template>

<script setup>
    const props = defineProps({
       href:String
    })
</script>

<style>

</style>