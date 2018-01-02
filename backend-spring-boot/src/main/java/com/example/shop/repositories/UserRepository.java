package com.example.shop.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.shop.models.User;

@Repository
public interface UserRepository extends MongoRepository<User,String>  {

	public  User findByEmail(String Email);
	
}
