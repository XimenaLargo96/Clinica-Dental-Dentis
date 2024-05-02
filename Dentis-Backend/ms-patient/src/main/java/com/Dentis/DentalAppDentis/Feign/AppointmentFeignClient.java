package com.Dentis.DentalAppDentis.Feign;

import com.Dentis.DentalAppDentis.Model.Appointment;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "ms-appointment")
public interface AppointmentFeignClient {

    @GetMapping("/api/v1/appointments/patients/{patientId}")
    List<Appointment> getAppointmentsByPatient(@PathVariable Long patientId);
}
