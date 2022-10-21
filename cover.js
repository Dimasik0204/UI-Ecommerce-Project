const searchButton = document.getElementById('searchButton')
const displaySearch = document.getElementById('displaySearch')



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