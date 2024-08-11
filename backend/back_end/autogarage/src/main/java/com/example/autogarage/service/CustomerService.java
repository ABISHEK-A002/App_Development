package com.example.autogarage.service;

import com.example.autogarage.model.Customer;
import com.example.autogarage.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    public CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(Long id) {
        return customerRepository.findById(id);
    }
    public List<Customer> getCustomername(String name) {
        return customerRepository.findByName(name);
    }
    public Customer saveCustomer(Customer customer) {
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customerDetails) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            customer.setName(customerDetails.getName());
            customer.setEmail(customerDetails.getEmail());
            if (customerDetails.getPassword() != null && !customerDetails.getPassword().isEmpty()) {
                customer.setPassword(passwordEncoder.encode(customerDetails.getPassword()));
            }
            return customerRepository.save(customer);
        } else {
            return null;
        }
    }
    public boolean validateCustomer(String email, String password) {
        Customer customer = customerRepository.findByEmail(email);
        
        if (customer != null && customer.getPassword() != null && customer.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public boolean deleteCustomer(Long id) {
        if (customerRepository.existsById(id)) {
            customerRepository.deleteById(id);
            return true; // Successfully deleted
        } else {
            return false; // Customer not found
        }
    }
}