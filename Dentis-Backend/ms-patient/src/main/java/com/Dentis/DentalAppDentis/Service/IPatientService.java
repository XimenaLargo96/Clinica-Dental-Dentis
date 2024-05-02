package com.Dentis.DentalAppDentis.Service;

import com.Dentis.DentalAppDentis.Model.Patient;
import java.util.List;
import java.util.Optional;

public interface IPatientService {

 Patient CreatePatient(Patient patient);
 Optional<Patient> getPatientById (Long id);

 List<Patient> getAllPatients();

 Patient updatePatient(Patient patient);

 void deletePatient(Long id);

Optional<Patient> getPatientWithAppointments(Long patientId);
}
