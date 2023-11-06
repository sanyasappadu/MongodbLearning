//put the db.json file at root diectory

// step:1 npm init -y (cmd)

// step:2 npm install json-server (cmd)

// step:3 add the below line in package.json file inside scripts
//      "serve-json": "json-server --watch db.json"

// step:4 to run the application 
//      npm run serve-json (cmd)


// get requests 
// http://localhost:3000/reviews
// http://localhost:3000/products
// http://localhost:3000/products/3
// http://localhost:3000/reviews/2

// filtering
// http://localhost:3000/products?price=30000
// http://localhost:3000/products?price=30000&discount.type=shipping

// sorting
// http://localhost:3000/products?_sort=price   
// http://localhost:3000/products?_sort=price&_order=desc   
// http://localhost:3000/products?_sort=price,title&_order=desc,asc

// pagination
// http://localhost:3000/products?_page=1&_limit=2
// http://localhost:3000/products?_page=2&_limit=2


// operators
// http://localhost:3000/products?price_gte=3000&price_lte=7000
// http://localhost:3000/products?id_ne=1
// http://localhost:3000/products?title_like=^p

// full text search
// http://localhost:3000/products?q=in

// Relationships
// http://localhost:3000/products?_embed=reviews
// http://localhost:3000/products/1?_embed=reviews
// http://localhost:3000/reviews?_expand=product
// http://localhost:3000/reviews/1?_expand=product

// post data to json 
// POST request http://localhost:3000/products   raw    json
// {
//     "id": 8,
//     "title": "wood-products",
//     "price": 220000,
//     "description": "wood goods",
//     "discount":{
//         "type":"shipping"
//     }
// }


//PUT PATCH AND DELETE requests contain id of the item
// PUT request  http://localhost:3000/products/8
// {
//     "id": 8,
//     "title": "wood-products",
//     "price": 220,
//     "description": "wood goods",
//     "discount":{
//         "type":"shipping"
//     }
// }

// PATCH request http://localhost:3000/products/8
// {
//     "price": 2230
// }



//DELETE
//POST http://localhost:3000/products
// {
//     "id": 9,
//     "title": "wood-products",
//     "price": 1000,
//     "description": "goods",
//     "discount": {
//         "type": "shipping-onlone"
//     }
// }
//DELETE  request http://localhost:3000/products/9
//body not needed


//CONFIGURATION
//       "serve-json": "json-server --watch db.json --port 4000"
//        npm run serve-json

//create routes.json file 
//{
//    "/api/v1/*": "/$1"
//    "/products/:title": "/products?title=:title"
// }
// http://localhost:4000/api/v1/products same as http://localhost:4000/products



// to generate random data "serve-json": "json-server --watch data.js --port 4000 --routes routes.json"
// http://localhost:4000/students/1