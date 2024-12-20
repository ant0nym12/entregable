// Función para agregar un producto al carrito en localStorage
function addToCart(productId, productName, productPrice) {
    // Obtener el carrito actual desde localStorage o crear uno vacío si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar si el producto ya está en el carrito
    let productoExistente = carrito.find(producto => producto.id === productId);

    if (productoExistente) {
        // Si el producto ya existe en el carrito, aumentamos su cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no existe, lo agregamos con cantidad 1
        carrito.push({
            id: productId,
            nombre: productName,
            precio: productPrice,
            cantidad: 1
        });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar un mensaje de éxito
    alert(`${productName} añadido al carrito`);
}

// Configurar los eventos de los botones "Añadir al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obtener los datos del producto
        let productId = button.getAttribute('data-id');
        let productName = button.getAttribute('data-nombre');
        let productPrice = parseFloat(button.getAttribute('data-precio'));

        // Añadir el producto al carrito
        addToCart(productId, productName, productPrice);
    });
});
