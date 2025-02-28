export default function productsListArray() {
  return fetch("https://dummyjson.com/products")
    .then(data => data.json())
    .then(data => data.products)
}