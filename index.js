//* Mercado Pago Finance
//* Elementos en la plataforma
//  funciones -> esEntero tickerValido cantidad 

//? Ingreso a la plataforma
let usuario = prompt("Ingrese su usuario");
console.log("Usuario " + usuario);
let salida = "¡Hola " + usuario + "!";
alert(salida);

//! Declaraciones
let ticker;
let opcion = "0";
let cantidad;
let precio_final;

let AAPL = 13790;
let KO = 9430;

//! Compra de CEDEARs
ticker = tickerValido();
cantidad = cantidadCompra();

//Number.isInteger(cantidad)

//! Venta
switch(ticker){
    case "AAPL":
        precio_final = cantidad * (AAPL + (AAPL*0.005));
        break;
    case "KO":
        precio_final = cantidad * (KO + (KO*0.005));
        break;
    default:
        break;
}

//! Alerts
console.log("Precio Final: $" + precio_final);
alert("Compra: " + cantidad + "x " + ticker + " $" + precio_final);

//! Fucniones
function tickerValido(){
    let valor;
    do{
        ticker = prompt("¿Que CEDEARs desea comprar? (AAPL, KO)");
        switch(ticker){
            case "AAPL":
                valor = 1;
                break;
            case "KO":
                valor = 1;
                break;
            default:
                valor = 0;
                break;
        }
    }while(valor == 0);
    return ticker;
}

function cantidadCompra(){
    let cant;
    do{
        cant = prompt("¿Cantidad de CEDEARs que desea comprar? (Numero enteros). Comision CEDEARs 0.50%");
        while(cant % 1 != 0){
            cant = prompt("¿Cantidad de CEDEARs que desea comprar? (Numero enteros). Comision CEDEARs 0.50%");
        }
    }while(cant < 1);
    return cant;
}
