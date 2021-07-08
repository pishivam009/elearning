package com.piyush.elearning.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.elearning.model.Professor;

public interface ProfessorRepo extends JpaRepository<Professor, Integer> {

	Professor findByEmail(String emailid);

	boolean existsByEmail(String email);

	@Transactional
	@Modifying
	@Query(value="UPDATE Professor u SET u.name = :name , u.password = :password , u.contact = :contact , u.university = :university, u.dept=:dept where u.id = :id")
	void updateByEmail(@Param("name")String name, @Param("password")String password, @Param("university")String university,@Param("dept") String dept, @Param("contact")String contact, @Param("id")int id);

}
