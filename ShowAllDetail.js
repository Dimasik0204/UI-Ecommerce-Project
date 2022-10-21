document.getElementById('detailDiv')

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
console.log(recipeId)
async function ShowAllDetailPage(){
  
    const url = `https://api.sampleapis.com/recipes/recipes/${recipeId}`
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    document.getElementById('detailDiv').innerHTML = ` <h2>${result.course}</h2>
    <h2>${result.title}</h2>
    <img src=${result.photoUrl}/>
    <h2>${result.cuisine}</h2>
    <h2>${result.directions}</h2>
    <h2>${result.mainIngredient}</h2>
    <h2>${result.calories}</h2>
    <h2>${result.carbohydrate}</h2>
    `
}


ShowAllDetailPage()

