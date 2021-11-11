class Producto {
    constructor(nombre, categoria, descripcion, precio, destacado, stock, sku, id){
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.destacado = destacado;
        this.stock = stock;
        this.sku = sku;
        this.id = id;
        }
    }
const arrProductos = [];    

    arrProductos.push (new Producto ('MSI B450-A PRO MAX', 'Informatica', 'MSI motherboards have tons of convenient and smart design features, such as convenient pin-header keep out zone, friendly SATA & USB location and so on, so DIY users can pick and choose any gaming rig they want.Excellent cooling. Enhanced performance', 21482, true, 10, 'INF1025M', 1));
    arrProductos.push (new Producto ('HP ProBook 455R G6 9VX50ES R3-3200U 8GB - 256GB SSD 15', 'Informatica', '39.6 cm (15.6") Notebook, Windows 10 Pro. Display: 1920 x 1080, IPS. AMD Ryzen 3 3200U 2x 2.60 GHz. AMD Radeon Vega 3 Mobile Shared Memory. 32 GB RAM, 256 GB SSD. USB 3.1 Gen1 Typ C, 2x USB 3.1 Gen1, Wi-Fi 5 (802.11ac)', 284050, true, 4, 'INF1890N', 2));
    arrProductos.push (new Producto ('Microsoft Office 2019 Home & Business', 'Informatica', 'Windows, Mac OS. Standard -Full Version. Serial number without disc', 18900, false, 80, 'INF9800S', 3));

const verProductos = () => {
    let visual = '';
    for (const itProducto of arrProductos) {
        visual += `Producto: ${itProducto.nombre}\nPrecio: $${itProducto.precio}\nID: ${itProducto.id}\n\n\n`
    }
    return visual;
}

const comprar = () => {
    const compra = prompt(`Ingresa ID del producto a comprar\n\n ${verProductos()}`);
    const productoEncontrado = arrProductos.find(producto => producto.id === compra);
    console.log(productoEncontrado)
}

let opciones;

do{
    opciones = Number(prompt(`Ingrese su eleccion:
    1- Ver Productos
    2- Comprar
    3- Salir`));
    switch (opciones) {
        case 1:
            const valorRec = verProductos();
            alert(valorRec);
            break;
        case 2:
            comprar();
            break;
        case 3:
            alert('Gracias por pasar por nuestra tienda')
            break;
        default:
            alert('Opcion incorrecta')
            break;
    }

} while(opciones !== 3);