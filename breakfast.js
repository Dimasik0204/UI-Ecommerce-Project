const breakfastPage = document.getElementById('breakfastPage')

async function getBreakfastPage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const breakfastSection = result.filter (function(breakfast) {
            return breakfast.course === 'Breakfast'
        })
        const breakfastDisplay = breakfastSection.map (function (breakfastRecipie) {
            return `
                    <li > 
                        <img src = ${breakfastRecipie.photoUrl} />
                        <h2>${breakfastRecipie.title}</h2>
                        <h3>${breakfastRecipie.cuisine}</h3>
                        <p>${breakfastRecipie.description}</p>                             
                    </li>`
        })
        breakfastPage.innerHTML = breakfastDisplay.join('')
           
} 
getBreakfastPage()
