package com.Dentis.appointment.msappointment.Service;

import com.Dentis.appointment.msappointment.Model.Appointment;

import java.util.List;

public interface IAppoinmentService {

  Appointment createAppointment (Appointment appointment);

  List<Appointment> getAppointmentsByPatient (Long patientId);

}
