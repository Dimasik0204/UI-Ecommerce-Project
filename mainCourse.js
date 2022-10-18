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
        const mainCourseDisplay = mainCourseSection.map (function (mainRecipie) {
            return `
                    <li > 
                        <img src = ${mainRecipie.photoUrl} />
                        <h2>${mainRecipie.title}</h2>
                        <h3>${mainRecipie.cuisine}</h3>
                        <p>${mainRecipie.description}</p>                             
                    </li>`
        })
        mainCoursePage.innerHTML = mainCourseDisplay.join('')
           
} 
getMainCoursePage()
