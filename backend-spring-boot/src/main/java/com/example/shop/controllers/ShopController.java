package com.example.shop.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shop.repositories.ShopRepository;
import com.example.shop.models.Shop;;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ShopController {

	 @Autowired
	    ShopRepository ShopRepository;
	
	  @GetMapping("/shops")
	    public List<Shop> getAllTodos() {
	        return ShopRepository.findAll();
	    }

	  @GetMapping("/shops/{id}")
	    public Shop findById(@PathVariable String id) {
	        return ShopRepository.findOne(id);
	    }

}

