const deleteProduct = document.getElementById("productDelete");
// console.log(deleteProduct);
if (deleteProduct) {
  console.log(deleteProduct);
  deleteProduct.addEventListener("click", (e) => {
    console.log(e.target.dataset.productId);
    fetch(`http://localhost:3000/product/${e.target.dataset.productId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => window.location.reload());
    // e.preventDefault();
  });
}
