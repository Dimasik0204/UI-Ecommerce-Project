const sidePage = document.getElementById('sidePage')

async function getSidetPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const sideSection = result.filter (function(sides) {
            return sides.course === 'Side Dishes'
        })
        const sideDisplay = sideSection.map (function (sideRecipie) {
            return `
                    <li > 
                        <img src = ${sideRecipie.photoUrl} />
                        <h2>${sideRecipie.title}</h2>
                        <h3>${sideRecipie.cuisine}</h3>
                        <p>${sideRecipie.description}</p>                             
                    </li>`
        })
        sidePage.innerHTML = sideDisplay.join('')
           
} 
getSidetPage()
