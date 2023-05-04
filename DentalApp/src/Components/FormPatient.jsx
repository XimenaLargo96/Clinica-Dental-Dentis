import { useState } from "react";

export default function Form() {

  const [values, setValues] = useState({
    name:'',
    lastName:'',
    dni:'',
    date:'',
  })

  const onHandlerChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  //Validaciones
  const validField = (field) => {
    return (field.length > 3)
  }

  const onSubmitForm = (e) =>{
    e.preventDefault();
    if (validField(values.name) && validField(values.lastName) && validField(values.dni)) {
      alert('form enviado')
    }
    else{
      alert('campos incorrectos')
    }
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="div-input">
          <label>Nombre </label>
          <input
            type="text"
            name="name"
            id="pacienteNombre"
            placeholder="Ingrese su nombre"
            required
            onChange={onHandlerChange}
          />
        </div>

        <div className="div-input">
          <label>Apellido </label>
          <input
            type="text"
            name="lastName"
            placeholder="Ingrese su apellido"
            id="pacienteApellido"
            required
            onChange={onHandlerChange}
          />
        </div>

        <div className="div-input">
          <label>Dni </label>
          <input
            type="text"
            name="dni"
            placeholder="ingrese su dni"
            id="pacienteDni"
            required
            onChange={onHandlerChange}
          />
        </div>

        <div className="div-input">
          <label>Fecha de Alta </label>
          <input 
          type="date" 
          name="date"
          id="pacienteAlta" 
          required 
          onChange={onHandlerChange}
          />
        </div>

        <div>
          <div>
            <label>Domicilio</label>
          </div>
          <div>
            <input
              type="text"
              name="addres"
              placeholder="Calle"
              id="domicilioCalle"
              required
            />
            <input
              type="number"
              placeholder="Numero"
              id="domicilioNumero"
              required
            />
            <input
              type="text"
              placeholder="Localidad"
              id="domicilioLocalidad"
              required
            />
            <input
              type="text"
              placeholder="Provincia"
              id="domicilioProvincia"
              required
            />
          </div>
        </div>
        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
    </>
  );
}
