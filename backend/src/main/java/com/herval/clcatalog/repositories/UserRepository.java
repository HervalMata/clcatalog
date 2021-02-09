package com.herval.clcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.herval.clcatalog.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
