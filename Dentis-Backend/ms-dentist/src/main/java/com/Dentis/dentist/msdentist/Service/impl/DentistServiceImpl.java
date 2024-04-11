package com.Dentis.dentist.msdentist.Service.impl;

import com.Dentis.dentist.msdentist.Model.Dentist;
import com.Dentis.dentist.msdentist.Repository.IDentistRepository;
import com.Dentis.dentist.msdentist.Service.IDentistService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DentistServiceImpl implements IDentistService {

    private final IDentistRepository dentistRepository;

    @Override
    public Dentist createDentist(Dentist dentist){
        return dentistRepository.save(dentist);
    }

    @Override
    public Optional<Dentist> getDentistById(Long id) {
        return dentistRepository.findById(id);
    }

    @Override
    public List<Dentist> getAllDentist() {
        return dentistRepository.findAll();
    }

    @Override
    public Dentist updateDentist(Dentist dentist) {
        return null;
    }

    @Override
    public void deleteDentist(Long id) {

    }
}
