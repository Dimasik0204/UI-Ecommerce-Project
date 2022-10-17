

const search = document.getElementById ('search')
const menu = document.getElementById('menu')
const desserts = document.getElementById('desserts')
const displayDessertsButton = document.getElementById('displayDessertsButton')


search.addEventListener('click', async function searchOrders (){
    let url = `https://api.sampleapis.com/recipes/recipes`
    let response = await fetch (url) 
    let result = await response.json()

    console.log(result)
})

async function getAllMenus () {
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log (result)
    const menuDisplay = result.map (function (recipies) {
        return `
                <li > 
                    <img src = ${recipies.photoUrl} />
                    <h2>${recipies.title}</h2>
                    <h3>${recipies.course}</h3>
                    <h3>${recipies.cuisine}</h3>
                    <p>${recipies.description}</p>
                                    
                </li>`
    })

    menu.innerHTML = menuDisplay.join('')   
}

displayDessertsButton.addEventListener ('click', async function (){
  
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
        desserts.innerHTML = dessertsDisplay.join('')    
})
