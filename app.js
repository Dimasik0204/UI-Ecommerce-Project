



const search = document.getElementById ('search')
const menu = document.getElementById('menu')


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




/*

getAllMenues(function(menues){
console.log(menues)
})
*/