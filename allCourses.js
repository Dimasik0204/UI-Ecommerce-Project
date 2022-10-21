
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
                <li class= "removedot"> 
                <a href ="ShowAlldetails.html?recipeId=${mainRecipie.id}"><img class= "dotimg" src = ${mainRecipie.photoUrl} /></a>
                    <h2>${mainRecipie.title}</h2>
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
                <li class= "removedot"> 
                    <a href ="ShowAlldetails.html?recipeId=${breakfastRecipie.id}"><img class= "dotimg" src = ${breakfastRecipie.photoUrl} /></a>
                    <h2>${breakfastRecipie.title}</h2>       
                    <h3>
                    <h4>
                    <h5>
                    <h6>                   
                </li>      
                `

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
                <li class= "removedot"> 
                    <a href ="ShowAlldetails.html?recipeId=${sideRecipie.id}"><img class= "dotimg" src = ${sideRecipie.photoUrl} /></a>
                    <h2>${sideRecipie.title}</h2>                         
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
                <li class= "removedot"> 
                    <a href ="ShowAlldetails.html?recipeId=${dessertRecipie.id}"><img class= "dotimg" src = ${dessertRecipie.photoUrl} /></a>
                    <h2>${dessertRecipie.title}</h2>                           
                </li>`
    })
    desserts.innerHTML = dessertPage.join('')
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
                <li class= "removedot"> 
                    <a href ="ShowAlldetails.html?recipeId=${lunchtRecipie.id}"><img class= "dotimg" src = ${lunchtRecipie.photoUrl} /></a>
                    <h2>${lunchtRecipie.title}</h2>                           
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
                <li class= "removedot"> 
                    <a href ="ShowAlldetails.html?recipeId=${snackRecipie.id}"><img class= "dotimg" src = ${snackRecipie.photoUrl} /></a>
                    <h2>${snackRecipie.title}</h2>                         
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
                <li class= "removedot"> 
                    <a href ="ShowAlldetails.html?recipeId=${soupRecipie.id}"><img class= "dotimg" src = ${soupRecipie.photoUrl} /></a>
                    <h2>${soupRecipie.title}</h2>                         
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