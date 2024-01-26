import { useState } from "react" //importamos hook

// rafc + enter
export const Contador = () => {

    // hook - useState
    //primer valor: valor inicial
    //segundo valor: el valor que va a cambiar al valro inicial
    const[valor, setValor]=useState(0);

    const contador=(num:number)=>{
        setValor(valor+num)
    }

    //const contador2=(num:number)=>{
    //    setValor(valor-num)
    //}

  return (
    <div>
        <h3>Contador: <small>{valor}</small></h3>
        <button className="btn btn-primary"
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>contador(-1)}>-1</button>
    </div>
  )
}
