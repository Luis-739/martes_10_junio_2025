//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

console.log(productos);

const precios_menores = productos.filter(producto => producto.precio <100)

console.log("Los precios menores de $100 son: ");
console.log(precios_menores);

precios_menores.sort((a,b) => {
    return b.nombre.localeCompare(a.nombre);
})

console.log("Ordenados alfabeticamente en orden descendente:");
console.log(precios_menores);

const nombre_productos = productos.map(producto => {
    return producto.nombre}
);

console.log("Nombres de productos:");
console.log(nombre_productos);

const categoria_unica = productos.reduce((acum, categoria_uni) => { categoria == "Electrónica"
});

console.log("Productos de la categoria electronicos: " , categoria_unica);
