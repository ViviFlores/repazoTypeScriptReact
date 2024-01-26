import { useEffect, useState} from "react";

export const ComponenteUseEffect = () => {

    const [valor, setValor] = useState(false);

    const cambiarValor=()=>{
        setValor(!valor);
    }

    //useEffect(codigoAEjecutar, listaDependencias);
    //1 parámetro es una función
    //2 parámetro - dependencia
    useEffect(()=>{
        //código que deseo que se ejecute
        console.log('Desde useEffect')
    },[valor]);
    //cuando no se coloca el 2 parámetro el useEffect siempre se ejecuta
    //cuando el 2 parámetro es un areglo vacío, sólo se ejecuta la primera vez que se renderiza pampágina
  return (
    <div>
        <h3>Hook - UseEffect</h3>
        <button onClick={cambiarValor}>Cambiar</button>
    </div>
  )
}
