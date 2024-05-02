package com.Dentis.appointment.msappointment.Controller;

import com.Dentis.appointment.msappointment.Model.Appointment;
import com.Dentis.appointment.msappointment.Service.Impl.AppointmentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentServiceImpl appointmentService;

    @PostMapping
    public ResponseEntity<Appointment> saveAppointment (@RequestBody Appointment appointment){
        return ResponseEntity.ok(appointmentService.createAppointment(appointment));
    }

    @GetMapping("/patients/{patientId}")
    public ResponseEntity<List<Appointment>> listAppointmentsByPatient(@PathVariable Long patientId){
        return ResponseEntity.ok(appointmentService.getAppointmentsByPatient(patientId));
    }
}
