
const search = document.getElementById ('search')
const menu = document.getElementById('menu')
const allCourses = document.getElementById('allCourses')
const displaySearch = document.getElementById('displaySearch')

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


async function getAllCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)


    const courses = result.map (function (course) {
        return `
        <li > 
        <a href ="ShowAlldetails.html?recipeId=${dessertRecipie.id}"><img src = ${dessertRecipie.photoUrl} /></a>
        <h2>${dessertRecipie.title}</h2>
        <h3>${dessertRecipie.cuisine}</h3>
        <p>${dessertRecipie.description}</p>
        <h1>${dessertRecipie.id}</h1>                      
    </li>`
    })
    dessertPage.innerHTML = dessertsDisplay.join('')
       
} 
getAllCourses()

searchButton.addEventListener('click', async function (){
    const inputBox = document.getElementById("inputBox").value


    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const filteredRecipes = result.filter ((function(recipe){
        return recipe.title.toLowerCase().includes(inputBox.toLowerCase()) ||
               recipe.course.toLowerCase().includes(inputBox.toLowerCase()) ||
               recipe.cuisine.toLowerCase().includes(inputBox.toLowerCase()) ||
               recipe.mainIngredient.toLowerCase().includes(inputBox.toLowerCase()) 
    }))
    console.log (filteredRecipes)
    const showResult = filteredRecipes.map (function (search) {
        return `
                <li>
                    <img src = ${search.photoUrl} />
                    <h2>${search.title}</h2>
                    <h3>${search.cuisine}</h3>
                    <h3>${search.coarse}</h3>
                    <p>${search.description}</p>
                </li>`
    })
    displaySearch.innerHTML = showResult.join('')

})
 

/*
if (result.filter(i => (i === inputBox)).length) {
        console.log('Found');
      } else {
        console.log('Not Found');
      }
 */   


/*
    const searchBy  = result.filter (function(course) {
        return course.course === inputBox || course.cuisine === inputBox || course.title == inputBox
        
    })
    const showResult = searchBy.map (function (search) {
        return `
                <li>
                    <img src = ${search.photoUrl} />
                    <h2>${search.title}</h2>
                    <h3>${search.cuisine}</h3>
                    <h3>${search.coarse}</h3>
                    <p>${search.description}</p>
                </li>`
    })

    var detail = result.filter(item => !item.includes(inputBox))
    console.log(detail)
    
    
    console.log(searchBy)
  */  







