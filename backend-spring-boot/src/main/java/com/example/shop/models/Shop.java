package com.example.shop.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="shop")
public class Shop {

	 @Id
	    private String id;

	 private String name;
	 private String email;
	 private String city;
	 private Location location;
	// private String picture;
	 
	public Shop() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Shop(String name, String email, String city, Location location) {
		super();
		this.name = name;
		this.email = email;
		this.city = city;
		this.location = location;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	 
	 
	 
}
