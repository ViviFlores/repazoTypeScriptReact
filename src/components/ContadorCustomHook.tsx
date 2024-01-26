import { useCounter } from "../hook/useCounter";

export const ContadorCustomHook = () => {

  //Destructurar el objeto
  const {valor, contador} = useCounter(100);

  return (
    <div>
        <h3>Contador con custom hook: <small>{valor}</small></h3>
        <button className="btn btn-primary"
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>contador(-1)}>-1</button>
    </div>
  )
}
