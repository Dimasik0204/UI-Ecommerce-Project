
const allCourses = document.getElementById('allCourses')

async function getAllCourses(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    
    const courses = result.map (function (course) {
        return `
                <li >      
                     <a href ="allCourses.html?course=Desserts"><h2>${course.course}</h2></a>
                  
                </li>`
   
    })
    allCourses.innerHTML = courses.join('') 
    
       
} 
getAllCourses()

/*
allCourses.innerHTML =  `<li > 
                             <a href ="allCourses.html><h2>${courses.course}</h2></a>
                             </li>`
                             */
/*
   <a href ="allCourses.html?course=MainCourse"><h2>${course.course}</h2></a>
                     <a href ="allCourses.html?course=Breakfast"><h2>${course.course}</h2></a>
                     <a href ="allCourses.html?course=Snacks"><h2>${course.course}</h2></a>
                     <a href ="allCourses.html?course=SideDishes"><h2>${course.course}</h2></a>
                     <a href ="allCourses.html?course=Lunch"><h2>${course.course}</h2></a>
                     <a href ="allCourses.html?course=Soup"><h2>${course.course}</h2></a>
*/