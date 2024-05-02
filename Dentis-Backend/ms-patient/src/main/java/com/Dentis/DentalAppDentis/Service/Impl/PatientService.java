package com.Dentis.DentalAppDentis.Service.Impl;

import com.Dentis.DentalAppDentis.Feign.AppointmentFeignClient;
import com.Dentis.DentalAppDentis.Model.Appointment;
import com.Dentis.DentalAppDentis.Model.Patient;
import com.Dentis.DentalAppDentis.Repository.IPatientRepository;
import com.Dentis.DentalAppDentis.Service.IPatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PatientService implements IPatientService {

private final IPatientRepository patientRepository;

private final AppointmentFeignClient appointmentFeignClient;

    @Override
    public Patient CreatePatient(Patient patient) {
        return patientRepository.save(patient);
    }
    @Override
    public Optional<Patient> getPatientById(Long id) {
        return patientRepository.findById(id);
    }

    @Override
    public List<Patient> getAllPatients() {
        return null;
    }

    @Override
    public Patient updatePatient(Patient patient) {
        return null;
    }

    @Override
    public void deletePatient(Long id) {

    }

    @Override
    public Optional<Patient> getPatientWithAppointments(Long patientId) {
        Optional<Patient> patient = getPatientById(patientId);
        List<Appointment> appointments = appointmentFeignClient.getAppointmentsByPatient(patientId);
        patient.ifPresent(value -> value.setAppointmentsId(appointments));
        return patient;
    }
}
