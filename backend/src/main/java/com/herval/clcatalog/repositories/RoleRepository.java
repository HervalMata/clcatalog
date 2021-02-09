package com.herval.clcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.herval.clcatalog.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
