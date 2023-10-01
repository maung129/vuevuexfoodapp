import axiosClient from "../axiosClient";

export function searchMeals({commit},keyword){
    axiosClient.get(`/search.php?s=${keyword}`)
    .then(({data})=>{
        commit('setSearchedMeals',data.meals)
    })
    .catch(e=>console.log(e.message))
}

export function searchMealsByLetter({commit},letter){
    axiosClient.get(`/search.php?f=${letter}`)
    .then(({data})=>{
        commit('setMealsByLetter',data.meals)
    }).catch(e=>console.log(e.message))
}

export function searchMealsByIngredient({commit},ingredient){
    axiosClient.get(`/filter.php?i=${ingredient}`)
    .then(({data})=>{
        commit('setMealsByIngredients',data.meals)
    })
}