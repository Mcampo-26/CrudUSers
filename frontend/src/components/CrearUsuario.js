import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CrearUsuario = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    correo: "",
  };
  let {id} = useParams();
  const [subId, setsubId] = useState(id??"");

  const [usuario, setUsuario] = useState(valorInicial);
  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    // console.log(usuario);
    //crear la logica para la peticion post
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    };
    await axios.post("http://localhost:4000/api/usuarios", newUser);
    setUsuario({ ...valorInicial })
  };

// funcion para actualizar el usuario
const actualizarUser = async (e) => {
e.preventDefault();
const newUSer={
  nombre:usuario.nombre,
  apellido:usuario.apellido,
  edad:usuario.edad,  
  telefono:usuario.telefono,
  correo:usuario.correo,  
}
await axios.put(`http://localhost:4000/api/usuarios/` + subId,newUSer);
setUsuario({...valorInicial})
setsubId('')
}


  //logica para hacer un put a la api
  const obtUno = async(valorId)=>{
    const res = await axios.get(
      `http://localhost:4000/api/usuarios/` + valorId)
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      edad: res.data.edad,
      telefono: res.data.telefono,
      correo: res.data.correo,
    })
  }
  useEffect(()=>{
    if (subId !==''){
      obtUno(subId);
    }
  },[subId]);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h2 className="text-center text-uppercase font-weight-bold mb-4 ">
            Crear Usuario
          </h2>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el nombre del usuario"
              required
              name="nombre"
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el apellido del usuario"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Edad:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa la edad del usuario"
              required
              name="edad"
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Teléfono:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa el teléfono del usuario"
              required
              name="telefono"
              value={usuario.telefono}
              onChange={capturarDatos}
            />
          </div>
          <div className="mb-3">
            <label>Correo:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el correo del usuario"
              required
              name="correo"
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>
          <button className="btn btn-primary form-control">Guardar Usuario</button>
        </form>
        <form onSubmit={actualizarUser}>
          <button className="btn btn-danger form-control mt-2">
Actualizar Usuario
          </button>
        </form>
      </div>
    </div>
  );
};
export default CrearUsuario;
