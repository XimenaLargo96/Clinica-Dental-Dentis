package com.Dentis.DentalAppDentis.Service;

import com.Dentis.DentalAppDentis.Model.Patient;

import java.util.List;
import java.util.Optional;

public interface IPatientService {

 Optional<Patient> getPatientById (Long id);

 List<Patient> getAllPatients();

 Patient updatePatient(Patient patient);

 void deletePatient(Long id);
}
