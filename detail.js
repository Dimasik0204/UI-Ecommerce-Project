

const detailDiv =document.getElementById("detailDiv")




async function showAllDetailPage(){
  
    const url = 'https://api.sampleapis.com/recipes/recipes/5'
    let response = await fetch (url) 
    let result = await response.json()
    console.log(result)

    
})

        
showAllDetailPage()
