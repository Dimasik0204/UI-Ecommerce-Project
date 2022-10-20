const breakfastPage = document.getElementById('breakfastPage')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
console.log(recipeId)

async function getBreakfastPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const breakfastSection = result.filter (function(breakfast) {
            return breakfast.course === 'Breakfast'
        })
        const breakfastDisplay = breakfastSection.map (function (breakfastRecipie) {
            return `
            <li>
            <a href ="ShowAlldetails.html?recipeId=${breakfastRecipie.id}"><img src = ${breakfastRecipie.photoUrl} /></a>
                <h2>${breakfastRecipie.title}</h2>
                <h3>${breakfastRecipie.cuisine}</h3>
                <p>${breakfastRecipie.description}</p>
                <h1>${breakfastRecipie.id}</h1>
            </li>`
        })
        breakfastPage.innerHTML = breakfastDisplay.join('')
           
} 
getBreakfastPage()
