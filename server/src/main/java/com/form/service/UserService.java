package com.form.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.Repository.UserRepository;
import com.form.model.User;

@Service
public class UserService {
	
	private UserRepository userRepo;
	
	@Autowired
	public UserService(UserRepository userRepo) {
		this.userRepo=userRepo;
	}
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}

}
