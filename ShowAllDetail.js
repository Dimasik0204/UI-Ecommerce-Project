const detailDiv = document.getElementById('detailDiv')

const qString = window.location.search;
const urlParams = new URLSearchParams(qString);
const recipeId = urlParams.get('recipeId')
console.log(recipeId)
async function ShowAllDetailPage(){
  
    const url = `https://api.sampleapis.com/recipes/recipes/${recipeId}`
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    document.getElementById('detailDiv').innerHTML = ` 
    <h1 class='bold' >Course: </h1>
    <h2>${result.course}</h2>
    <h2 class='bold'>Title:</h2> 
    <h2>${result.title}</h2>
    <img src=${result.photoUrl}/>
    <h3 class='bold'>Cuisine: </h3>
    <h4>${result.cuisine}</h2>
    <h3 class='bold'>Directions: </h3>
    <h4>${result.directions}</h2>
    <h3 class='bold'>Main Ingredients: </h3>
    <h4>${result.mainIngredient}</h2>
    <h3 class='bold'>Calories: </h3>
    <h4>${result.calories}</h2>
    <h3 class='bold'>Carbohydrate: </h3>
    <h4>${result.carbohydrate}</h2>
    `
}


ShowAllDetailPage()