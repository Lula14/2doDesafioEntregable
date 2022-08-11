let nombreUsuario = (prompt("Ingrese su nombre"));
{ alert('Bienvenid@')}
function verNombreUsuario() {

    console.log('Bienvenid@', nombreUsuario)

   
}

function creoID() { return parseInt(Math.random() * 1000) }

const productos = [
    {
        nombre: 'Cat Chow',
        id: creoID(),
        precio: "$100"
    },
    {
        nombre: 'Dogui',
        id: creoID(),
        precio: "$200"
    },
    {
        nombre: 'Pro PLan',
        id: creoID(),
        precio: "$300"
    },
    {
        nombre: 'Royal Canin',
        id: creoID(),
        precio: "$400"
    },
    {
        nombre: 'Old Prince',
        id: creoID(),
        precio: "$500"
    },
    {
        nombre: 'Pedigree',
        id: creoID(),
        precio: "$600"
    },
    {
        nombre: 'Balanced',
        id: creoID(),
        precio: "$700"
    },
    {
        nombre: 'Whiskas',
        id: creoID(),
        precio: "$800"
    },
    {
        nombre: 'Eukanuba',
        id: creoID(),
        precio: "$900"
    },
]



console.log(productos)
console.log(productos.length)
console.table(productos)

for (let index = 0; index < 9; index++) {
    alert(productos[index].nombre);

}

for (let producto of productos) { 
    console.table(producto)

}

function encontrarProducto() {
    let prod = prompt("Ingresa el producto a buscar:")

        const resultado = productos.find(producto => producto.nombre === prod)
         console.log(resultado)
         alert ('Tenemos Stock!')
         
         
}


/*
const buscarProducto = (prompt('Ingrese un producto de los mostrados anteriormente'))
function encontrarProducto() {
    for (const producto of productos) {
        if (producto.nombre.includes(buscarProducto)) {
            console.log('El producto: ' + producto.nombre + ' esta en nuestra base')
            alert('Tenemos stock del producto');
            break
        }
        else {
            console.log('El producto buscado NO esta en nuestra base')
            alert('No contamos con el producto buscado');
            break
        }

    }
}*/
verNombreUsuario()
encontrarProducto()
creoID()

