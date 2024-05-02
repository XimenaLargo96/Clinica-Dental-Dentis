package com.Dentis.appointment.msappointment.Service.Impl;

import com.Dentis.appointment.msappointment.Model.Appointment;
import com.Dentis.appointment.msappointment.Repository.IAppointmentRepository;
import com.Dentis.appointment.msappointment.Service.IAppoinmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements IAppoinmentService {

    private final IAppointmentRepository appointmentRepository;

    @Override
    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> getAppointmentsByPatient(Long patientId) {
        return appointmentRepository.findByPatientId(patientId);
    }
}
