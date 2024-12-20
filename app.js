function addToCart(productId) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    let productoExistente = carrito.find(producto => producto.id === productId);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({
            id: productId,
            nombre: `Producto Ecológico ${productId}`,
            precio: 100,
            cantidad: 1
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto añadido al carrito');
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        let productId = button.getAttribute('data-id');
        addToCart(productId);
    });
});

function renderCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    let carritoContainer = document.getElementById('carrito-contenido');
    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>No hay productos en tu carrito.</p>';
    } else {
        carrito.forEach(producto => {
            let productoHTML = `
                <div>
                    <h5>${producto.nombre}</h5>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Precio: $${producto.precio * producto.cantidad}</p>
                </div>
            `;
            carritoContainer.innerHTML += productoHTML;
        });
    }
}

if (window.location.pathname.includes('carrito.html')) {
    renderCarrito();
}
