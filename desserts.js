


const dessertPage = document.getElementById('dessertPage')





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
                        <img src = ${dessertRecipie.photoUrl} />
                        <h2>${dessertRecipie.title}</h2>
                        <h3>${dessertRecipie.cuisine}</h3>
                        <p>${dessertRecipie.description}</p>                             
                    </li>`
        })
        dessertPage.innerHTML = dessertsDisplay.join('')
           
} 
getDesertPage()

