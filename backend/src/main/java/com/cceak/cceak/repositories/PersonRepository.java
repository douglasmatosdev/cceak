package com.cceak.cceak.repositories;

import com.cceak.cceak.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
