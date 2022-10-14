const search = document.getElementById ('search')





search.addEventListener('click', async function searchOrders (){
    let url = `https://api.escuelajs.co/api/v1/products`
    let response = await fetch (url) 
    let result = await response.json()

    console.log(result)
})