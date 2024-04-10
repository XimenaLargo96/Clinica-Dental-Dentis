package com.Dentis.dentist.msdentist.Repository;

import com.Dentis.dentist.msdentist.Model.Dentist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDentistRepository extends JpaRepository<Dentist , Long> {
}
