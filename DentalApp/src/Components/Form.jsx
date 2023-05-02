
export default function Form() {
  return (
    <>
    <form id="registro" className="row g-3 needs-validation">
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" id="pacienteNombre" placeholder="Ingrese su nombre" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" placeholder="Ingrese su apellido" id="pacienteApellido" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Dni</label>
            <input type="number" className="form-control" placeholder="dni" id="pacienteDni" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Fecha de Alta</label>
            <input type="date" className="form-control" id="pacienteAlta" required />
            <div className="invalid-feedback">
              Please provide a valid date.
            </div>
          </div>

          <div className="col-md-12">
            <div>
              <label  className="form-label">Domicilio</label>
            </div>
            <div className="d-flex justify-content-evenly">
              <input type="text" className="form-control me-2" placeholder="Calle" id="domicilioCalle" required />
              <input type="number" className="form-control me-2" placeholder="Numero" id="domicilioNumero" required />
              <input type="text" className="form-control me-2" placeholder="Localidad" id="domicilioLocalidad" required />
              <input type="text" className="form-control" placeholder="Provincia" id="domicilioProvincia" required />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-dark" type="submit">Registrar</button>
          </div>
        </form>
    </>
  )
}
