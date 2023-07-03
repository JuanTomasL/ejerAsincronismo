let container = document.getElementById("container")

fetch('https://fakestoreapi.com/products')
    .then(
        res=>res.json()
    )
    .then(json  => {console.log(json)
                json.forEach (items => {
                 container.innerHTML +=  `<div class="etiqueta">
                    <h2>${items.title}</h2>
                    <img src="${items.image}" alt="articulos" class:"art">
                    <p>${items.description}</p>
                    <p class="precio"> PRICE: $${items.price}</p>
                </div>
                    `
                })
       }
    )
            
            
                
            