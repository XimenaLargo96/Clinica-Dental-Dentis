package com.Dentis.DentalAppDentis.Service.Impl;


import com.Dentis.DentalAppDentis.Model.Patient;
import com.Dentis.DentalAppDentis.Repository.IPatientRepository;
import com.Dentis.DentalAppDentis.Service.IPatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PatientService implements IPatientService {

private final IPatientRepository patientRepository;
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

}
