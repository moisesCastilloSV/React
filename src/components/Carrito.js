import React from 'react';
import './Carrito.css';
import Producto from './Producto';

const Carrito = ({carrito,addProductocarrito}) => (
<div className="carrito">
    <h2>Tu Carrito De Compras</h2>

    {carrito.length === 0
    ?
    <p>No hay elementos en el Carrito</p>
    : carrito.map(producto => (
      <Producto 
       key ={producto.id}
       producto={producto}
       carrito={carrito}
       addProductocarrito={addProductocarrito}
       />
    ))}
</div>

  );

 
export default Carrito;