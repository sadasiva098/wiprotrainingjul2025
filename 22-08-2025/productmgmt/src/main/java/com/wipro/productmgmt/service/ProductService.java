package com.wipro.productmgmt.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wipro.productmgmt.entity.Order;
import com.wipro.productmgmt.entity.Product;
import com.wipro.productmgmt.repo.OrderRepo;
import com.wipro.productmgmt.repo.ProductRepo;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private OrderRepo orderRepo;
    
    public List<Product> findAll() {
        return productRepo.findAll();
    }
    
    public Optional<Product> findById(Integer id) {
        return productRepo.findById(id);
    }
    
    public Product save(Product product) {
        return productRepo.save(product);
    }
    
    public void deleteById(Integer id) {
        productRepo.deleteById(id);
    }

    @Transactional
    public Product purchaseProduct(Integer id, Integer quantity) {
        Optional<Product> productOpt = productRepo.findById(id);
        if (productOpt.isPresent()) {
            Product product = productOpt.get();
            if (product.getQuantity() >= quantity) {
                product.setQuantity(product.getQuantity() - quantity);
                Order order = new Order();
                order.setProductId(id);
                order.setProductName(product.getName());
                order.setQuantity(quantity);
                order.setOrderDate(LocalDateTime.now());
                orderRepo.save(order);
                return productRepo.save(product);
            } else {
                throw new IllegalArgumentException("Insufficient quantity available");
            }
        } else {
            throw new IllegalArgumentException("Product not found");
        }
    }

    public List<Order> getOrderHistory() {
        return orderRepo.findAll();
    }
}