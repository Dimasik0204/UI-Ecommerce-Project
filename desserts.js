


const dessertPage = document.getElementById('dessertPage')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
console.log(recipeId)




async function getDesertPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const dessertSection = result.filter (function(dessert) {
            return dessert.course === 'Desserts'
        })
        const dessertsDisplay = dessertSection.map (function (dessertRecipie) {
            return `
            <li > 
            <a href ="ShowAlldetails.html?recipeId=${dessertRecipie.id}"><img src = ${dessertRecipie.photoUrl} /></a>
            <h2>${dessertRecipie.title}</h2>
            <h3>${dessertRecipie.cuisine}</h3>
            <p>${dessertRecipie.description}</p>
            <h1>${dessertRecipie.id}</h1>                      
        </li>`
        })
        dessertPage.innerHTML = dessertsDisplay.join('')
           
} 
getDesertPage()

