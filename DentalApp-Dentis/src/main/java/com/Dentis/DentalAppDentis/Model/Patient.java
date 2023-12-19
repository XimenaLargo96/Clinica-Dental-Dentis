package com.Dentis.DentalAppDentis.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table
public class Patient {

    private Long id;
    private String name;
    private String lastName;
    private Integer dni;
    private Date entryDate;


}
