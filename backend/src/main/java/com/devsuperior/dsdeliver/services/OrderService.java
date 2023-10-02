package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		return orderRepository.findOrderWithProducts().stream().map(OrderDTO::new).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		for(ProductDTO p : dto.getProducts()) {			
			Product product = productRepository.findById(p.getId()).get(); // -> getOne não funcionou comigo :(
			order.getProducts().add(product);
		}
		
		order = orderRepository.save(order);
		
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		//Order order = orderRepository.getOne(id); // -> getOne não funcionou comigo :(
		Order order = orderRepository.findById(id).get();
		order.setStatus(OrderStatus.DELIVERED);
		order = orderRepository.save(order);
		return new OrderDTO(order);
	}
}
