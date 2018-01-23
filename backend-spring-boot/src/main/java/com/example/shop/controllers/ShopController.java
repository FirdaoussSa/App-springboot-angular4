package com.example.shop.controllers;

import java.util.Collections;
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
import com.example.shop.repositories.ShopRepository;
import com.example.shop.models.Coordniate;
import com.example.shop.models.Location;
import com.example.shop.models.Shop;
import com.example.shop.models.SortShops;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ShopController {

	 @Autowired
	    ShopRepository shopRepository;
	
	  @GetMapping("/shop")
	    public List<Shop> getAllShops() {
	        return shopRepository.findAll();
	    }

	  @GetMapping("/shops/{id}")
	    public Shop findById(@PathVariable String id) {
	        return shopRepository.findOne(id);
	    }

		
		 
	  @PostMapping("/shops")
	    public List<Shop> getNearbyShops(@Valid @RequestBody Coordniate coord) {
		  
		  String type="Point";
		  Location location=new Location();
		  
		  double[] currentCordinate=new double[2];
  		  currentCordinate[0]=coord.getLatitude();
  		  currentCordinate[1]=coord.getLongitude();
  		  
  		  location.setType(type);
  		  location.setCoordinates(currentCordinate);
  		  
		  List<Shop> shops=shopRepository.findAll();
		  /*for (Shop s: shops){
		         System.out.println("Shops before sorting shop: " + s.getName());    
		  }*/
		   Collections.sort(shops, new SortShops(location));
		   /*for (Shop s: shops){
		         System.out.println("Shops after sorting shop: " + s.getName());    
		  }*/
		   return shops;
		  
	    }
	  
}

