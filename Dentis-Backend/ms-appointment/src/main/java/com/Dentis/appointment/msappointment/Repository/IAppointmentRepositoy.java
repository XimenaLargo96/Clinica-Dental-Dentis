package com.Dentis.appointment.msappointment.Repository;

import com.Dentis.appointment.msappointment.Model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAppointmentRepositoy extends JpaRepository<Appointment, Long> {
}
