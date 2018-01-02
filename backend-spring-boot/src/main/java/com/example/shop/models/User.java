package com.example.shop.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="user")
public class User {

	@Id
		private String id;
	
	private String email;
	private String password;
	private List<Shop> prefferedShop=new ArrayList<Shop>();
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(String email, String password,List<Shop> prefferedShop) {
		super();
		this.email = email;
		this.password = password;
		this.prefferedShop=prefferedShop;
	}
	
	public List<Shop> getPrefferedShop() {
		return prefferedShop;
	}

	public void setPrefferedShop(List<Shop> prefferedShop) {
		this.prefferedShop = prefferedShop;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
