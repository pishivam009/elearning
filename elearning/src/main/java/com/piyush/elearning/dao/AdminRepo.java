package com.piyush.elearning.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.elearning.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {

	Admin findByEmail(String emailid);

}
