package com.Dentis.DentalAppDentis.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private Integer dni;
    private LocalDate entryDate;
}
