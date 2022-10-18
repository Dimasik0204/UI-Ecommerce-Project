const lunchPage = document.getElementById('lunchPage')

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
                    <li > 
                        <img src = ${lunchRecipie.photoUrl} />
                        <h2>${lunchRecipie.title}</h2>
                        <h3>${lunchRecipie.cuisine}</h3>
                        <p>${lunchRecipie.description}</p>                             
                    </li>`
        })
        lunchPage.innerHTML = lunchDisplay.join('')
           
} 
getLunchPage()
