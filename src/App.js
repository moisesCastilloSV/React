import React , {Fragment,useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {


  //crear listado de productos

  const[productos, saveProductos]=useState([
    {id:1, nombre: 'Camisa ReactJS', precio:50 },
    {id:2, nombre: 'Camisa ReactJS1', precio:40 },
    {id:3, nombre: 'Camisa ReactJS2', precio:30 },
    {id:4, nombre: 'Camisa ReactJS3', precio:20 },
    {id:5, nombre: 'Camisa ReactJS4', precio:10 },
  ]);

  // state para carritos de compra 
  const [carrito,addProductocarrito]=useState([]);


  //obtener fecha
  const fecha = new Date().getFullYear();


  return (
    <Fragment>
      <Header
      titulo='Tienda Virtual'
      
      />

      <h1>Lista de Productos</h1>

      {productos.map(producto => (
        <Producto 
         key ={producto.id}
         producto={producto}
         carrito={carrito}
         productos={productos}
         addProductocarrito={addProductocarrito}
        />
      ))}

      <Carrito
      carrito={carrito}
      addProductocarrito={addProductocarrito}
      />




      <Footer
      fecha={fecha}
      />

    </Fragment>
  );
}

export default App;
