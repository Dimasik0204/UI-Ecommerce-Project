const soupPage = document.getElementById('soupPage')

async function getSouptPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const soupSection = result.filter (function(soups) {
            return soups.course === 'Soup'
        })
        const soupDisplay = soupSection.map (function (soupRecipie) {
            return `
                    <li > 
                        <img src = ${soupRecipie.photoUrl} />
                        <h2>${soupRecipie.title}</h2>
                        <h3>${soupRecipie.cuisine}</h3>
                        <p>${soupRecipie.description}</p>                             
                    </li>`
        })
        soupPage.innerHTML = soupDisplay.join('')
           
} 
getSouptPage()
