package com.form.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.form.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{


}
