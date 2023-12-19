package com.Dentis.DentalAppDentis.Repository;

import com.Dentis.DentalAppDentis.Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPatientRepository extends JpaRepository<Long , Patient> {
}
