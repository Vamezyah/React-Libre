import React from 'react';

const Resultado = ({total, cantidad, plazo}) => {
    return ( 
        <div className="resultado">
            <h2>Cotización:</h2>
            <p>La cantidad solicitada es: $ {cantidad}</p>
            <p>A pagar en:  {plazo} Meses</p>
            <p>Su pago mensual será de: $ {(total / plazo).toFixed(2)}</p>
            <p>Total a pagar con intereses: $ {(total.toFixed(2))}</p>
        </div>
    );
}
 
export default Resultado;