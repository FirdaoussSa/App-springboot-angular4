package com.example.shop.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shop.models.Shop;
import com.example.shop.models.User;
import com.example.shop.repositories.ShopRepository;
import com.example.shop.repositories.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

	@Autowired
		UserRepository userRepository;
	@Autowired
	ShopRepository shopRepository;

	 @GetMapping("/users")
	    public List<User> getAllUsers() {
	        return userRepository.findAll();
	    }
	 
	  @GetMapping("/users/{id}")
	    public User findById(@PathVariable String id) {
	        return userRepository.findOne(id);
	    }
	 @PostMapping("/users")
	    public User createUser(@Valid @RequestBody User user) {
	       
		    String email=user.getEmail();
		    
		    User userF=userRepository.findByEmail(email);
		    if(userF==null) {
		    	    System.out.println("saved");
		    	    return userRepository.save(user);
		    }
    	    		return new User();
	 }
	 
	 @PostMapping("/login")
	    public User findUserByEmail(@Valid @RequestBody User user) {
	        
		    String email=user.getEmail();
		    String pass=user.getPassword();
		    
		    User userF=userRepository.findByEmail(email);
		    if(userF!=null && pass.equals(userF.getPassword())) {
		    	  return userF;
		    }
		    	return new User();

	 }
	 

	  @GetMapping("/PrefferedShop/{idUser}/{idShop}")
	    public User addPrefferedShopToUser(@PathVariable String idUser,@PathVariable String idShop) {
		  Shop shop=shopRepository.findOne(idShop);
		  User userF=userRepository.findOne(idUser);
		  userF.getPrefferedShop().add(shop);
		  return userRepository.save(userF);
	    }
	  @GetMapping("/PrefferedShop/{idUser}")
	    public List<Shop> getAllPrefShop(@PathVariable String idUser) {
		  User userF=userRepository.findOne(idUser);
		  return userF.getPrefferedShop();
	 }
	 
}

