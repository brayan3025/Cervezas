// Función para cargar productos
async function cargarProductos() {
  try {
      const response = await fetch('productos.json');
      const data = await response.json();
      const productos = data.products;
      mostrarProductos(productos);
  } catch (error) {
      console.error('Error al cargar los productos:', error);
  }
}

// Función para mostrar productos en el HTML
function mostrarProductos(productos) {
  const contenedor = document.getElementById('Cervezas');
  contenedor.innerHTML = ''; // Limpiar contenido existente

  productos.forEach(producto => {
      const cervezaHTML = `
          <div class="Cerveza" data-aos="fade-up">
              <img src="Imagen/${producto.img}" alt="${producto.name}">
              <h3>${producto.name}</h3>
              <p>${producto.description}</p>
              <p>$${producto.price.toLocaleString()}</p>
              <button class="glowbutton" onclick="addToCart(this)">AGREGAR</button>
          </div>
      `;
      contenedor.innerHTML += cervezaHTML;
  });
}

// Llamar a la función para cargar los productos al cargar la página
document.addEventListener('DOMContentLoaded', cargarProductos);
