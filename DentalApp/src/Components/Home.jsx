import Card from "./Card"

export default function Home() {
  return (
    <>
    <h1>Bienvenido a la clinica dental Dentist</h1>
    <div className='card-grid'>
     <Card img="../images/odontologo.jpg" title={"Odontologos"} description={"Gestionar odontologos"} />
     <Card img="../images/paciente.jpg" title={"Pacientes"} description={"Gestionar Pacientes"} />
     <Card img="../images/turno.png" title={"Turnos"} description={"Gestionar Turnos"} />
    </div>
  </>
  )
}
