package com.Dentis.dentist.msdentist.Service;

import com.Dentis.dentist.msdentist.Model.Dentist;

import java.util.List;
import java.util.Optional;

public interface IDentistService {

    Dentist createDentist(Dentist dentist);
    Optional<Dentist> getDentistById(Long id);

    List<Dentist> getAllDentist();

    Dentist updateDentist(Dentist dentist);

    void deleteDentist(Long id);
}
