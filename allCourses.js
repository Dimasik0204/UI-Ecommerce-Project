
const mainCourses = document.getElementById('mainCourses')
const breakfast = document.getElementById('breakfast')
const desserts = document.getElementById('desserts')
const sideDishes = document.getElementById('sideDishes')
const lunch = document.getElementById('lunch')
const snack = document.getElementById('snack')
const soup = document.getElementById('soup')





const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const course = urlParams.get('course')
console.log(course)

async function showMainCourse(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const courses= result.filter (function(sortedCourse) {
        return sortedCourse.course === course
    })
    console.log(courses)

    const mainCoursesPage = courses.map (function (mainRecipie) {
        return `
                <li > 
                <a href ="ShowAlldetails.html?recipeId=${mainRecipie.id}"><img src = ${mainRecipie.photoUrl} /></a>
                    <h2>${mainRecipie.title}</h2>
                    <h3>${mainRecipie.cuisine}</h3>
                    <p>${mainRecipie.description}</p>                             
                </li>`
    })
    mainCourses.innerHTML = mainCoursesPage.join('')
}
showMainCourse()


async function showBreakfastCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const courses= result.filter (function(sortedCourse) {
        return sortedCourse.course === course
    })
    console.log(courses)

    const breakfastPage = courses.map (function (breakfastRecipie) {
        return `
                <li > 
                    <a href ="ShowAlldetails.html?recipeId=${breakfastRecipie.id}"><img src = ${breakfastRecipie.photoUrl} /></a>
                    <h2>${breakfastRecipie.title}</h2>
                    <h3>${breakfastRecipie.cuisine}</h3>
                    <p>${breakfastRecipie.description}</p>                             
                </li>`
    })
    breakfast.innerHTML = breakfastPage.join('')
}
showBreakfastCourses()

async function showSideCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const courses= result.filter (function(sortedCourse) {
        return sortedCourse.course === course
    })
    console.log(courses)

    const sidePage = courses.map (function (sideRecipie) {
        return `
                <li > 
                    <a href ="ShowAlldetails.html?recipeId=${sideRecipie.id}"><img src = ${sideRecipie.photoUrl} /></a>
                    <h2>${sideRecipie.title}</h2>
                    <h3>${sideRecipie.cuisine}</h3>
                    <p>${sideRecipie.description}</p>                             
                </li>`
    })
    sideDishes.innerHTML = sidePage.join('')
}
showSideCourses()

async function showDessertCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const courses= result.filter (function(sortedCourse) {
        return sortedCourse.course === course
    })
    console.log(courses)

    const dessertPage = courses.map (function (dessertRecipie) {
        return `
                <li > 
                    <a href ="ShowAlldetails.html?recipeId=${dessertRecipie.id}"><img src = ${dessertRecipie.photoUrl} /></a>
                    <h2>${dessertRecipie.title}</h2>
                    <h3>${dessertRecipie.cuisine}</h3>
                    <p>${dessertRecipie.description}</p>                             
                </li>`
    })
    dessert.innerHTML = dessertPage.join('')
}
showDessertCourses()

async function showLunchCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const courses= result.filter (function(sortedCourse) {
        return sortedCourse.course === course
    })
    console.log(courses)

    const lunchPage = courses.map (function (lunchtRecipie) {
        return `
                <li > 
                    <a href ="ShowAlldetails.html?recipeId=${lunchtRecipie.id}"><img src = ${lunchtRecipie.photoUrl} /></a>
                    <h2>${lunchtRecipie.title}</h2>
                    <h3>${lunchtRecipie.cuisine}</h3>
                    <p>${lunchtRecipie.description}</p>                             
                </li>`
    })
    lunch.innerHTML = lunchPage.join('')
}
showLunchCourses()

async function showSnackCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const courses= result.filter (function(sortedCourse) {
        return sortedCourse.course === course
    })
    console.log(courses)

    const snackPage = courses.map (function (snackRecipie) {
        return `
                <li > 
                    <a href ="ShowAlldetails.html?recipeId=${snackRecipie.id}"><img src = ${snackRecipie.photoUrl} /></a>
                    <h2>${snackRecipie.title}</h2>
                    <h3>${snackRecipie.cuisine}</h3>
                    <p>${snackRecipie.description}</p>                             
                </li>`
    })
    snack.innerHTML = snackPage.join('')
}
showSnackCourses()

async function showSoupCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    const courses= result.filter (function(sortedCourse) {
        return sortedCourse.course === course
    })
    console.log(courses)

    const soupPage = courses.map (function (soupRecipie) {
        return `
                <li > 
                    <a href ="ShowAlldetails.html?recipeId=${soupRecipie.id}"><img src = ${soupRecipie.photoUrl} /></a>
                    <h2>${soupRecipie.title}</h2>
                    <h3>${soupRecipie.cuisine}</h3>
                    <p>${soupRecipie.description}</p>                             
                </li>`
    })
    soup.innerHTML = soupPage.join('')
}
showSoupCourses()





/*
const courses= result.filter (function(sortedCourse) {
    return sortedCourse.course === course
 })
*/
/*
document.getElementById('mainCourses').innerHTML = ` <h2>${result.course}</h2>
    <h2>${result.title}</h2>
    <img src=${result.photoUrl}/>
    <h2>${result.cuisine}</h2>
    <h2>${result.directions}</h2>
    <h2>${result.mainIngredient}</h2>
    <h2>${result.calories}</h2>
    <h2>${result.carbohydrate}</h2>
    `

*/