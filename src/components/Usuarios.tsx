import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { Usuario, UsuariosListado } from "../interfaces/interfaceUsuarios";

export const Usuarios = () => {

    const [users, setUsers] = useState<Usuario[]>([]);  //arreglo vacio

    useEffect(()=>{
        //llamar el API - petición http get
        reqResApi.get<UsuariosListado>('/users')
        .then(resp =>{
            //console.log(resp.data.data) // arreglo de objetos
            setUsers(resp.data.data)
        })
        .catch(err => console.log(err))
    },[]);

    //Método que muestra los usuarios en la tabla
    const itemUsuario=({id, email, first_name, last_name, avatar}:Usuario)=>{
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} 
                    alt={first_name}
                    style={{
                        width:30,
                        borderRadius:7
                    }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

  return (
    <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {/* recorrer el vector : map - funcion que itera cada valor del vector */}
                {
                    users.map((usuario)=>itemUsuario(usuario))
                }
            </tbody>
        </table>
    </>
  )
}
