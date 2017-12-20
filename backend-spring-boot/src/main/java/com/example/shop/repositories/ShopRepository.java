package com.example.shop.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.shop.models.Shop;

@Repository
public interface ShopRepository  extends MongoRepository<Shop, String> {

	
}
