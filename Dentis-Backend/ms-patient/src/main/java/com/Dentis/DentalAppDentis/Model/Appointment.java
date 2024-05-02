package com.Dentis.DentalAppDentis.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Appointment implements Serializable {
    private Long id;
    private LocalDate appointmentDate;
    private Long patientId;
}
