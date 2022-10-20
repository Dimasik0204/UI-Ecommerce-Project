const soupPage = document.getElementById('soupPage')

async function getSouptPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const soupSection = result.filter (function(soups) {
            return soups.course === 'Soup'
        })
        const soupDisplay = soupSection.map (function (SoupRecipie) {
            return `
            <li>
            <a href ="ShowAlldetails.html?recipeId=${SoupRecipie.id}"><img src = ${SoupRecipie.photoUrl} /></a>
                <h2>${SoupRecipie.title}</h2>
                <h3>${SoupRecipie.cuisine}</h3>
                <p>${SoupRecipie.description}</p>
                <h1>${SoupRecipie.id}</h1>
            </li>`
        })
        soupPage.innerHTML = soupDisplay.join('')
           
} 
getSouptPage()
