package com.form.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String firstName;
	
	private String lastName;
	
	private String favSport;
	
	private String gender;
	
	private String state;
	
	private String ageConfirmation;
	
	private String car1;
	
	private String car2;
	
	private String car3;
	
	private String car4;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFavSport() {
		return favSport;
	}

	public void setFavSport(String favSport) {
		this.favSport = favSport;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAgeConfirmation() {
		return ageConfirmation;
	}

	public void setAgeConfirmation(String ageConfirmation) {
		this.ageConfirmation = ageConfirmation;
	}

	public String getCar1() {
		return car1;
	}

	public void setCar1(String car1) {
		this.car1 = car1;
	}

	public String getCar2() {
		return car2;
	}

	public void setCar2(String car2) {
		this.car2 = car2;
	}

	public String getCar3() {
		return car3;
	}

	public void setCar3(String car3) {
		this.car3 = car3;
	}

	public String getCar4() {
		return car4;
	}

	public void setCar4(String car4) {
		this.car4 = car4;
	}
	
public User() {
		
	}

	public User(Integer id, String firstName, String lastName, String favSport, String gender, String state,
			String ageConfirmation, String car1, String car2, String car3, String car4) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.favSport = favSport;
		this.gender = gender;
		this.state = state;
		this.ageConfirmation = ageConfirmation;
		this.car1 = car1;
		this.car2 = car2;
		this.car3 = car3;
		this.car4 = car4;
	}
	
	
	

}
