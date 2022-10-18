const mainCoursePage = document.getElementById('mainCoursePage')

async function getMainCoursePage(){
  
        const url = 'https://api.sampleapis.com/recipes/recipes'
        let response = await fetch (url) 
        let result = await response.json()
        console.log(result)

        const mainCourseSection = result.filter (function(main) {
            return main.course === 'Main Course'
        })
        const mainCourseDisplay = mainCourseSection.map (function (maintRecipie) {
            return `
                    <li > 
                        <img src = ${maintRecipie.photoUrl} />
                        <h2>${maintRecipie.title}</h2>
                        <h3>${maintRecipie.cuisine}</h3>
                        <p>${maintRecipie.description}</p>                             
                    </li>`
        })
        mainCoursePage.innerHTML = mainCourseDisplay.join('')
           
} 
getMainCoursePage()
