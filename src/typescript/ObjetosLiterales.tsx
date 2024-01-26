export const ObjetosLiterales = () =>{

    //interfaces: estructura y reglas de validación del objeto
    interface Persona{
        nombreCompleto: string;
        edad: number;
        direccion: Direccion;  //objeto anidado
    }

    interface Direccion{
        pais: string;
        casaNumero: number;
    }

    // objeto de tipo Persona
    const persona : Persona={
        nombreCompleto: 'Viviana',
        edad: 31,
        direccion:{
            pais:'Ecuador',
            casaNumero:365
        }
    }

    //instanciar la interface - no es permitido
    //const personaInterface=new Persona();

    //acceder a un valor del objeto
    //persona.nombreCompleto='Viviana Flores';

    return(
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}