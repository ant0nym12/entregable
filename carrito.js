let carrito = [];

function añadirAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";  // Limpiar el carrito

    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio * item.cantidad}</td>
        `;
        cartItems.appendChild(row);
    });

    document.getElementById("total-price").innerText = total;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-nombre');
        const productPrice = parseFloat(button.getAttribute('data-precio'));
        
        const producto = {
            id: productId,
            nombre: productName,
            precio: productPrice,
            cantidad: 1
        };

        añadirAlCarrito(producto);
    });
});
