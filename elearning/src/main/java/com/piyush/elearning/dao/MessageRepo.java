package com.piyush.elearning.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.elearning.model.Message;

public interface MessageRepo extends JpaRepository<Message, Integer> {

	@Transactional
	@Modifying
	@Query("UPDATE Message u SET u.message = :message WHERE u.id= :id")
	void addReply(@Param("id")int id, @Param("message") String message);

}
