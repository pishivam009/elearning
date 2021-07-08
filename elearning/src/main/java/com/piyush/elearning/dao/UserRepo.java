package com.piyush.elearning.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.elearning.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	User findByEmail(String emailid);

	boolean existsByEmail(String email);

	@Transactional
	@Modifying
	@Query(value="UPDATE User u SET u.name = :name , u.password = :password , u.contact = :contact , u.university = :university, u.dept=:dept where u.id = :id")
	void updateByEmail(@Param("name")String name, @Param("password")String password, @Param("contact")String contact,@Param("university") String university, @Param("dept")String dept, @Param("id") int id);

}
