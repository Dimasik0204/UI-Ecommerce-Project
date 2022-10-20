const mainCoursePage = document.getElementById('mainCoursePage')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
console.log(recipeId)

async function getMainCoursePage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const mainCourseSection = result.filter (function(main) {
            return main.course === 'Main Course'
        })
        const mainCourseDisplay = mainCourseSection.map (function (mainCourseRecipie) {
            return `
            <li>
            <a href ="ShowAlldetails.html?recipeId=${mainCourseRecipie.id}"><img src = ${mainCourseRecipie.photoUrl} /></a>
                <h2>${mainCourseRecipie.title}</h2>
                <h3>${mainCourseRecipie.cuisine}</h3>
                <p>${mainCourseRecipie.description}</p>
                <h1>${mainCourseRecipie.id}</h1>
            </li>`
        })
        mainCoursePage.innerHTML = mainCourseDisplay.join('')
           
} 
getMainCoursePage()
