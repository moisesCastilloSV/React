import React from 'react';

function Header({titulo})
{    // todo lo que va dentro   return es lo que se visualiza 
    return (
    <h1 id="encabezado" className="encabezado">{titulo}</h1>
    )
}

export default Header;