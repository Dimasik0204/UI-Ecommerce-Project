const lunchPage = document.getElementById('lunchPage')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
console.log(recipeId)

async function getLunchPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const lucnhSection = result.filter (function(lunch) {
            return lunch.course === 'Lunch'
        })
        const lunchDisplay = lucnhSection.map (function (lunchRecipie) {
            return `
            <li>
            <a href ="ShowAlldetails.html?recipeId=${lunchRecipie.id}"><img src = ${lunchRecipie.photoUrl} /></a>
                <h2>${lunchRecipie.title}</h2>
                <h3>${lunchRecipie.cuisine}</h3>
                <p>${lunchRecipie.description}</p>
                <h1>${lunchRecipie.id}</h1>
            </li>`
        })
        lunchPage.innerHTML = lunchDisplay.join('')
           
} 
getLunchPage()
