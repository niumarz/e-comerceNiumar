const productos = [
    {
      id: 1,
      nombre: 'Apple Imac',
      precio: 899,
      unidades: 25
    },
    {
      id: 2,
      nombre: 'Apple Iphone 11 pro',
      precio: 299,
      unidades: 15
    },
    {
      id: 3,
      nombre: 'Auriculares Inalambricos',
      precio: 39,
      unidades: 44
    },
    {
        id: 4,
        nombre: 'Carcasa de PC ATX',
        precio: 299,
        unidades: 10
    },
    {
        id: 5,
        nombre: 'Laptop Dynabook Satelite',
        precio: 197,
        unidades: 31
    },
    {
        id: 6,
        nombre: 'Apple Iphone 11 Pro',
        precio: 299,
        unidades: 2
    },
    {
        id: 7,
        nombre: 'Pantalla Samsung 40pulgadas',
        precio: 322,
        unidades: 4
    },
    {
        id: 8,
        nombre: 'PC Dell Optiplex',
        precio: 197,
        unidades: 13
    },
    {
        id: 9,
        nombre: 'Pc Gamer',
        precio: 465,
        unidades: 18
    },
    {
        id: 10,
        nombre: 'PlayStation 4',
        precio: 215,
        unidades: 48
    },
    {
        id: 11,
        nombre: 'Smartphone Android',
        precio: 187,
        unidades: 4
    },
    {
        id: 12,
        nombre: 'Teclado mouse inalambrico',
        precio: 99,
        unidades: 12
    },


  ]
  
  function pintarProductos() {

    let html = ''

    console.log('antes de la comprar')

    for(let producto of productos) {
      console.log(producto.id, producto.nombre, producto.unidades)
    }

    console.log('Pintando en el DOM', html)
  }
  
  pintarProductos()
  