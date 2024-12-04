import products from "@products/productsObject";
function FindProducts(productName) {
  const product = products.newArrival.find(
    (product) => product.productName === productName
  );
  return product;
}

export default FindProducts;
