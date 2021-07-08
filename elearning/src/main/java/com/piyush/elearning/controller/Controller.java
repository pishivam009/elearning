package com.piyush.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.piyush.elearning.dao.AdminRepo;
import com.piyush.elearning.dao.LinkRepo;
import com.piyush.elearning.dao.MessageRepo;
import com.piyush.elearning.dao.ProfessorRepo;
import com.piyush.elearning.dao.UserRepo;
import com.piyush.elearning.model.Admin;
import com.piyush.elearning.model.Link;
import com.piyush.elearning.model.LoginDetails;
import com.piyush.elearning.model.Message;
import com.piyush.elearning.model.Professor;
import com.piyush.elearning.model.User;

@RestController
@CrossOrigin(origins = "*")
public class Controller {

	@Autowired
	UserRepo userRepo;

	@Autowired
	ProfessorRepo professorRepo;

	@Autowired
	AdminRepo adminRepo;

	@Autowired
	LinkRepo linkRepo;

	@Autowired
	MessageRepo messageRepo;

	@PostMapping("/adminLogin")
	public Admin adminLogin(@RequestBody LoginDetails loginDetails) {
		Admin a = new Admin();
		Admin temp = adminRepo.findByEmail(loginDetails.getEmailid());
		if (temp != null && temp.getPassword().equals(loginDetails.getPassword())) {
			a = temp;
			a.setPassword(null);
			System.out.println("Admin found and logged in");
		}
		return a;
	}

	@PostMapping("/userLogin")
	public User userLogin(@RequestBody LoginDetails loginDetails) {
		User p = new User();
		User temp = userRepo.findByEmail(loginDetails.getEmailid());
		if (temp != null && temp.getPassword().equals(loginDetails.getPassword())) {
			p = temp;
			p.setPassword(null);
			System.out.println("User found and logged in");
		}
		return p;
	}

	@PostMapping("/professorLogin")
	public Professor professorLogin(@RequestBody LoginDetails loginDetails) {
		Professor d = new Professor();
		Professor temp = professorRepo.findByEmail(loginDetails.getEmailid());
		if (temp != null && temp.getPassword().equals(loginDetails.getPassword())) {
			d = temp;
			d.setPassword(null);
			System.out.println("Professor found and logged in");
		}
		return d;
	}

	@PostMapping("/addUser")
	public String addUser(@RequestBody User user) {
		if (!userRepo.existsByEmail(user.getEmail())) {
			userRepo.save(user);
			System.out.println("User saved");
			return "User saved";
		} else {
			System.out.println("User already exists");
			return "User already exists";

		}
	}

	@PostMapping("/addProfessor")
	public String addProfessor(@RequestBody Professor professor) {
		if (!professorRepo.existsByEmail(professor.getEmail())) {
			professorRepo.save(professor);
			System.out.println("Professor saved");
			return "Professor saved";
		} else {
			System.out.println("Professor already exists");
			return "Professor already exists";

		}
	}

	@PostMapping("/addLink")
	public String addLink(@RequestBody Link link) {
		if (!linkRepo.existsByLink(link.getLink())) {
			linkRepo.save(link);
			System.out.println("link saved");
			return "Link saved";
		} else {
			System.out.println("link already exists");
			return "link already exists";

		}
	}

	@PostMapping("/addMessage")
	public String addMessage(@RequestBody Message message) {
		messageRepo.save(message);
		System.out.println("message sent");
		return "message sent";
	}

	@GetMapping("/allProfessors")
	public List<Professor> getAllProfessors() {
		return professorRepo.findAll();
	}

	@GetMapping("/allUsers")
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@GetMapping("/allMessages")
	public List<Message> getAllMessages() {
		return messageRepo.findAll();
	}

	@GetMapping("/allLinks")
	public List<Link> getAllLinks() {
		return linkRepo.findAll();
	}
	
	@PutMapping("/updateUser")
	public String updateUser(@RequestBody User user) {
		if (userRepo.existsByEmail(user.getEmail())) {
			userRepo.updateByEmail(user.getName(), user.getPassword(), user.getContact(), user.getUniversity(), user.getDept(), user.getId());
			System.out.println(user);
			return "User updated";
		} else {
			return "User does not exist";
		}
	}
	
	@PutMapping("/updateProfessor")
	public String updateProfessor(@RequestBody Professor professor) {
		if (professorRepo.existsByEmail(professor.getEmail())) {
			professorRepo.updateByEmail(professor.getName(), professor.getPassword(),professor.getUniversity(), professor.getDept(), professor.getContact() ,professor.getId());
			System.out.println(professor);
			return "Professor updated";
		} else {
			return "Professor does not exist";
		}
	}
	@DeleteMapping("/deleteUser/{id}")
	public String deleteUser(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		userRepo.deleteById(i);
		return "User with ID=" + id + " deleted";
	}
	@DeleteMapping("/deleteProfessor/{id}")
	public String deleteProfessor(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		professorRepo.deleteById(i);
		return "Professor with ID=" + id + " deleted";
	}
	@DeleteMapping("/deleteLink/{id}")
	public String deleteLink(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		linkRepo.deleteById(i);
		return "Link with ID=" + id + " deleted";
	}
	@DeleteMapping("/deleteMessage/{id}")
	public String deleteMessage(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		messageRepo.deleteById(i);
		return "Message with ID=" + id + " deleted";
	}
	
	@PostMapping("addReply/{id}/{message}")
	public void addReply(@PathVariable ("id") int id,@PathVariable ("String") String message){
		messageRepo.addReply(id,message);
		System.out.println( "Reply to Message ID="+ id+" added");
		
	}

}
