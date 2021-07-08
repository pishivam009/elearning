package com.piyush.elearning.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.elearning.model.Link;

public interface LinkRepo extends JpaRepository<Link, Integer> {

	boolean existsByLink(String link);

}
