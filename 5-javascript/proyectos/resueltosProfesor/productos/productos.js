let products = [];

function addProduct() {
  let nombre = document.getElementById("nombre").value;
  let precio = parseFloat(document.getElementById("precio").value);
  let regexNombre = /^[a-zA-Z\s]+$/;
  let regexPrecio = /^\d+(\.\d{1,2})?$/;
  try {
    if (!regexNombre.test(nombre)) {
      throw new Error("El nombre solo puede contener letras y espacios.");
    }
    if (!regexPrecio.test(precio.toString())) {
      throw new Error(
        "El precio debe ser un número válido con hasta dos decimales."
      );
    }
    if (precio < 0) {
      throw new Error("El precio no puede ser negativo.");
    }

    let product = { nombre, precio };
    products.push(product);
    displayProducts();

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
  } catch (error) {
    alert("Error al agregar el producto: " + error.message);
  }
}

function displayProducts() {
  let productList = document.getElementById("productos-lista");
  productList.innerHTML = ""; // Limpiar la lista antes de mostrar los productos

  products.map((product) => {
    let listItem = document.createElement("tr");
    listItem.innerHTML = `
      <td>${product.nombre}</td>
      <td>${product.precio.toFixed(2)}</td>
    `;
    productList.appendChild(listItem);
  });

}


let formulario = document.getElementById("producto-form");
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario
  addProduct();
});