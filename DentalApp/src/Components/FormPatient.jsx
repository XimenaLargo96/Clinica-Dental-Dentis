export default function Form() {
  return (
    <>
      <form>
        <div className="div-input">
          <label>Nombre </label>
          <input
            type="text"
            id="pacienteNombre"
            placeholder="Ingrese su nombre"
            required
          />
        </div>

        <div className="div-input">
          <label>Apellido </label>
          <input
            type="text"
            placeholder="Ingrese su apellido"
            id="pacienteApellido"
            required
          />
        </div>

        <div className="div-input">
          <label>Dni </label>
          <input
            type="text"
            placeholder="ingrese su dni"
            id="pacienteDni"
            required
          />
        </div>

        <div className="div-input">
          <label>Fecha de Alta </label>
          <input type="date" id="pacienteAlta" required />
        </div>

        <div>
          <div>
            <label>Domicilio</label>
          </div>
          <div>
            <input
              type="text"
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
