import { useEffect, useReducer } from "react"

//interface
interface ReducerState{
    valid: boolean,
    token: string | null,
    username: string,
    name: string,
    password: string, 
}

const initialState : ReducerState = {
    valid: true,
    token: null,  //string - null
    username: '',
    name:'',
    password:'',
}

//Valores para la accion de login
type LoginActionPayload={
    username: string,
    name: string,
    password: string
}

//Definir acciones
type ReducerAction=
    {type: 'logout'}
    | {type: 'login', payload: LoginActionPayload};


const authReducer=(state: ReducerState, action:ReducerAction): ReducerState=>{
    switch (action.type) {
        case 'logout':
            return{
                valid: false,
                token: null,
                username:'',
                name:'',
                password:''
            }
        case 'login':
            //Destructurar objeto
            const {username,name,password} = action.payload;
            return{
                valid: false,
                token: 'dsjkfhsdjkhfdks67687687',
                username: username,
                name: name,
                password: password
            }
        default:
            return state;
    }
}

export const Login = () => {

    //Desestructurar el objeto: uso de  las propiedades o claves
    const [{valid, token, name}, dispatch] = useReducer(authReducer, initialState);

    //utilizo el useEffect para cambiar despues de unos segundos el estado del useReducer
    useEffect(()=>{
        //Función de tiempo
        setTimeout(()=>{
            //codigo q se ejecuta
            dispatch({type:'logout'})
        }, 1500)
    },[]);

    //Métodos para los botones
    const login=()=>{
        dispatch({
            type: 'login',
            payload:{
                username: 'vflores',
                name: 'Viviana Flores',
                password: '12345'
            }
        })
    }

    const logout=()=>{
        dispatch({type:'logout'})
    }

    //Si valid == true aparece el texo de validando....
    if (valid){
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

  return (
    <div>
        <h3>Login</h3>
        {
            (token == null)
            ? <div className="alert alert-danger">No autenticado...</div>
            : <div className="alert alert-success">Autenticado con {name}</div>
        }
        
        {
            (token == null)
            ? <button className="btn btn-primary"
            onClick={login}>Login</button>
            : <button className="btn btn-danger"
            onClick={logout}>Logout</button>
        }
    </div>
  )
}
