const snacksPage = document.getElementById('snacksPage')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
console.log(recipeId)

async function getSnacksPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const snacksSection = result.filter (function(snack) {
            return snack.course === 'Snacks and Sandwiches'
        })
        const snacksDisplay = snacksSection.map (function (SnacksAndSandwichesRecipie) {
            return `
            <li>
            <a href ="ShowAlldetails.html?recipeId=${SnacksAndSandwichesRecipie.id}"><img src = ${SnacksAndSandwichesRecipie.photoUrl} /></a>
                <h2>${SnacksAndSandwichesRecipie.title}</h2>
                <h3>${SnacksAndSandwichesRecipie.cuisine}</h3>
                <p>${SnacksAndSandwichesRecipie.description}</p>
                <h1>${SnacksAndSandwichesRecipie.id}</h1>
            </li>`
        })
        snacksPage.innerHTML = snacksDisplay.join('')
           
} 
getSnacksPage()
