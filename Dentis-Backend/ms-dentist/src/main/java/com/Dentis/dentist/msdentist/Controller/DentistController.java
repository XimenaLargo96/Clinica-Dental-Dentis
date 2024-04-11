package com.Dentis.dentist.msdentist.Controller;

import com.Dentis.dentist.msdentist.Model.Dentist;
import com.Dentis.dentist.msdentist.Service.impl.DentistServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/dentists")
public class DentistController {

    private final DentistServiceImpl dentistService;

    @PostMapping
    public ResponseEntity<Dentist> saveDentist (@RequestBody Dentist dentist){
        return ResponseEntity.ok(dentistService.createDentist(dentist));
    }
}
