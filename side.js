const sidePage = document.getElementById('sidePage')

async function getSidetPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const sideSection = result.filter (function(sides) {
            return sides.course === 'Side Dishes'
        })
        const sideDisplay = sideSection.map (function (SideDishesRecipie) {
            return `
            <a href ="ShowAlldetails.html?recipeId=${SideDishesRecipie.id}"><img src = ${SideDishesRecipie.photoUrl} /></a>
            <h2>${SideDishesRecipie.title}</h2>
            <h3>${SideDishesRecipie.cuisine}</h3>
            <p>${SideDishesRecipie.description}</p>
            <h1>${SideDishesRecipie.id}</h1>
        </li>`
        })
        sidePage.innerHTML = sideDisplay.join('')
           
} 
getSidetPage()
