
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

displayMainCourseButton.addEventListener ('click', async function (){
  
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
            <img src = ${MainCourseRecipie.photoUrl} />
            <h2>${MainCourseRecipie.title}</h2>
            <h3>${MainCourseRecipie.cuisine}</h3>
            <p>${MainCourseRecipie.description}</p>
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
    const LunchDisplay = LunchSection.map (function (LunchRecipie) {
        return `
        <li>
            <img src = ${LunchRecipie.photoUrl} />
            <h2>${LunchRecipie.title}</h2>
            <h3>${LunchRecipie.cuisine}</h3>
            <p>${LunchRecipie.description}</p>
        </li>`
    })
    Lunch.innerHTML = LunchDisplay.join('')
})

displayBreakfastButton.addEventListener ('click', async function (){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const BreakfastSection = result.filter (function(Breakfast) {
        return Breakfast.course === 'Breakfast'
    })
    const BreakfastDisplay = BreakfastSection.map (function (BreakfastRecipie) {
        return `
        <li>
            <img src = ${BreakfastRecipie.photoUrl} />
            <h2>${BreakfastRecipie.title}</h2>
            <h3>${BreakfastRecipie.cuisine}</h3>
            <p>${BreakfastRecipie.description}</p>
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
            <img src = ${SnacksAndSandwichesRecipie.photoUrl} />
            <h2>${SnacksAndSandwichesRecipie.title}</h2>
            <h3>${SnacksAndSandwichesRecipie.cuisine}</h3>
            <p>${SnacksAndSandwichesRecipie.description}</p>
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
            <img src = ${SideDishesRecipie.photoUrl} />
            <h2>${SideDishesRecipie.title}</h2>
            <h3>${SideDishesRecipie.cuisine}</h3>
            <p>${SideDishesRecipie.description}</p>
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
            <img src = ${SoupRecipie.photoUrl} />
            <h2>${SoupRecipie.title}</h2>
            <h3>${SoupRecipie.cuisine}</h3>
            <p>${SoupRecipie.description}</p>
        </li>`
    })
    Soup.innerHTML = SoupDisplay.join('')
})




/*

getAllMenues(function(menues){
console.log(menues)
})
*/