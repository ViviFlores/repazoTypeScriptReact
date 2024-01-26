// atajo para generar componente rafc

export const Funciones = () => {
    //funciones deben especificar el tipo de dato de retorno
    const sumar=(num1: number, num2: number) : number =>{ // funciòn con parámetros
        return num1+num2;
    }

  return (
    <div>
        <h3>Funciones</h3>
        <span>El resultado es: {sumar(5,2)}</span>
    </div>
  )
}


