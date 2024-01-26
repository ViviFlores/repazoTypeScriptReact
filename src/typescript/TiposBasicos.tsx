export const TiposBasicos=()=>{
    //implementación de lógica
    //let nombre : string | number='Viviana';
    //nombre=123;
    //let nombre: string = 'Viviana';
    const nombre: string = 'Viviana';
    const edad: number = 31;
    const donanteOrganos: boolean = true;
    //arreglos
    const poderes: string[] = ['velocidad', 'volar', 'invisible'];
    //añadir elemento
    poderes.push('fuerza');

    return(
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {donanteOrganos ? 'donante' : 'no donante'}
            <br/>
            {poderes.join(', ')}
        </div>
    )
}

//export default TiposBasicos;