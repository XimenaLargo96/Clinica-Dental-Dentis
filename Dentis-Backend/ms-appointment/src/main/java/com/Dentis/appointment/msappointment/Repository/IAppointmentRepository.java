package com.Dentis.appointment.msappointment.Repository;

import com.Dentis.appointment.msappointment.Model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAppointmentRepository extends JpaRepository<Appointment, Long> {

List<Appointment> findByPatientId(Long patientId);

}
