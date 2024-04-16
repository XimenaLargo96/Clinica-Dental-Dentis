package com.Dentis.appointment.msappointment.Service.Impl;

import com.Dentis.appointment.msappointment.Model.Appointment;
import com.Dentis.appointment.msappointment.Repository.IAppointmentRepositoy;
import com.Dentis.appointment.msappointment.Service.IAppoinmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements IAppoinmentService {

    private final IAppointmentRepositoy appointmentRepositoy;

    @Override
    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepositoy.save(appointment);
    }
}
