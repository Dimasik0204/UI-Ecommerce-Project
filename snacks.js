const snacksPage = document.getElementById('snacksPage')

async function getSnacksPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const snacksSection = result.filter (function(snack) {
            return snack.course === 'Snacks and Sandwiches'
        })
        const snacksDisplay = snacksSection.map (function (snacksRecipie) {
            return `
                    <li > 
                        <img src = ${snacksRecipie.photoUrl} />
                        <h2>${snacksRecipie.title}</h2>
                        <h3>${snacksRecipie.cuisine}</h3>
                        <p>${snacksRecipie.description}</p>                             
                    </li>`
        })
        snacksPage.innerHTML = snacksDisplay.join('')
           
} 
getSnacksPage()
