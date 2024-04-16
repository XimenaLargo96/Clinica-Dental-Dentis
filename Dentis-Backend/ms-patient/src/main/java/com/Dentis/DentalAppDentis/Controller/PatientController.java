package com.Dentis.DentalAppDentis.Controller;


import com.Dentis.DentalAppDentis.Model.Patient;
import com.Dentis.DentalAppDentis.Service.Impl.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/patients")
public class PatientController {

    private final  PatientService patientService ;

    @PostMapping
    public ResponseEntity<Patient> savePatient(@RequestBody Patient patient){
        return ResponseEntity.ok(patientService.CreatePatient(patient));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Patient>> getPatient(@PathVariable Long id){
        return ResponseEntity.ok(patientService.getPatientById(id));
    }
}
