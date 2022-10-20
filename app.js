
const search = document.getElementById ('search')
const menu = document.getElementById('menu')
const desserts = document.getElementById('desserts')
const displayDessertsButton = document.getElementById('displayDessertsButton')
const MainCourse = document.getElementById('MainCourse')
const displayMainCourseButton = document.getElementById('displayMainCourseButton')
const lunch = document.getElementById('Lunch')
const displayLunchButton = document.getElementById('displayLunchButton')
const Breakfast = document.getElementById('Breakfast')
const displayBreakfastButton = document.getElementById('displayBreakfastButton')
const SnacksAndSandwiches = document.getElementById('SnacksAndSandwiches')
const displaySnacksAndSandwichesButton = document.getElementById('displaySnacksAndSandwichesButton')
const SideDishes = document.getElementById('SideDishes')
const DisplaySideDishesButton = document.getElementById('DisplaySideDishesButton')
const Soup = document.getElementById('Soup')
const DisplaySoupButton = document.getElementById('DisplaySoupButton')
const allCourses = document.getElementById('allCourses')
const searchButton = document.getElementById('searchButton')
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
                        <a href ="ShowAlldetails.html?recipeId=${dessertRecipie.id}"><img src = ${dessertRecipie.photoUrl} /></a>
                        <h2>${dessertRecipie.title}</h2>
                        <h3>${dessertRecipie.cuisine}</h3>
                        <p>${dessertRecipie.description}</p>
                        <h1>${dessertRecipie.id}</h1>                      
                    </li>`
        })
        desserts.innerHTML = dessertsDisplay.join('')    
})

displayMainCourseButton.addEventListener ('click', async function (){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const MainCourseSection = result.filter (function(MainCourse) {
        return MainCourse.course === 'Main Course'
    })
    const MainCourseDisplay = MainCourseSection.map (function (MainCourseRecipie) {
        return `
        <li>
        <a href ="ShowAlldetails.html?recipeId=${MainCourseRecipie.id}"><img src = ${MainCourseRecipie.photoUrl} /></a>
            <h2>${MainCourseRecipie.title}</h2>
            <h3>${MainCourseRecipie.cuisine}</h3>
            <p>${MainCourseRecipie.description}</p>
            <h1>${MainCourseRecipie.id}</h1>
        </li>`
    })
    MainCourse.innerHTML = MainCourseDisplay.join('')
})

displayLunchButton.addEventListener ('click', async function (){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const LunchSection = result.filter (function(Lunch) {
        return Lunch.course === 'Lunch'
    })
    const LunchDisplay = LunchSection.map (function (lunchRecipie) {
        return `
        <li>
        <a href ="ShowAlldetails.html?recipeId=${lunchRecipie.id}"><img src = ${lunchRecipie.photoUrl} /></a>
            <h2>${lunchRecipie.title}</h2>
            <h3>${lunchRecipie.cuisine}</h3>
            <p>${lunchRecipie.description}</p>
            <h1>${lunchRecipie.id}</h1>
        </li>`
    })
    lunch.innerHTML = LunchDisplay.join('')
})

displayBreakfastButton.addEventListener ('click', async function (){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const BreakfastSection = result.filter (function(Breakfast) {
        return Breakfast.course === 'Breakfast'
    })
    const BreakfastDisplay = BreakfastSection.map (function (breakfastRecipie) {
        return `
        <li>
        <a href ="ShowAlldetails.html?recipeId=${breakfastRecipie.id}"><img src = ${breakfastRecipie.photoUrl} /></a>
            <h2>${breakfastRecipie.title}</h2>
            <h3>${breakfastRecipie.cuisine}</h3>
            <p>${breakfastRecipie.description}</p>
            <h1>${breakfastRecipie.id}</h1>
        </li>`
    })
    Breakfast.innerHTML = BreakfastDisplay.join('')
})

displaySnacksAndSandwichesButton.addEventListener ('click', async function (){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const SnacksAndSandwichesSection = result.filter (function(SnacksAndSandwiches) {
        return SnacksAndSandwiches.course === 'Snacks and Sandwiches'
    })
    const SnacksAndSandwichesDisplay = SnacksAndSandwichesSection.map (function (SnacksAndSandwichesRecipie) {
        return `
        <li>
        <a href ="ShowAlldetails.html?recipeId=${SnacksAndSandwichesRecipie.id}"><img src = ${SnacksAndSandwichesRecipie.photoUrl} /></a>
            <h2>${SnacksAndSandwichesRecipie.title}</h2>
            <h3>${SnacksAndSandwichesRecipie.cuisine}</h3>
            <p>${SnacksAndSandwichesRecipie.description}</p>
            <h1>${SnacksAndSandwichesRecipie.id}</h1>
        </li>`
    })
    SnacksAndSandwiches.innerHTML = SnacksAndSandwichesDisplay.join('')
})

DisplaySideDishesButton.addEventListener ('click', async function (){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const SideDishesSection = result.filter (function(SideDishes) {
        return SideDishes.course === 'Side Dishes'
    })
    const SideDishesDisplay = SideDishesSection.map (function (SideDishesRecipie) {
        return `
        <li>
        <a href ="ShowAlldetails.html?recipeId=${SideDishesRecipie.id}"><img src = ${SideDishesRecipie.photoUrl} /></a>
            <h2>${SideDishesRecipie.title}</h2>
            <h3>${SideDishesRecipie.cuisine}</h3>
            <p>${SideDishesRecipie.description}</p>
            <h1>${SideDishesRecipie.id}</h1>
        </li>`
    })
    SideDishes.innerHTML = SideDishesDisplay.join('')
})

DisplaySoupButton.addEventListener ('click', async function (){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const SoupSection = result.filter (function(Soup) {
        return Soup.course === 'Soup'
    })
    const SoupDisplay = SoupSection.map (function (SoupRecipie) {
        return `
        <li>
        <a href ="ShowAlldetails.html?recipeId=${SoupRecipie.id}"><img src = ${SoupRecipie.photoUrl} /></a>
            <h2>${SoupRecipie.title}</h2>
            <h3>${SoupRecipie.cuisine}</h3>
            <p>${SoupRecipie.description}</p>
            <h1>${SoupRecipie.id}</h1>
        </li>`
    })
    Soup.innerHTML = SoupDisplay.join('')
})


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







