package com.example.autogarage.service;

import com.example.autogarage.model.Customer;
import com.example.autogarage.repository.CustomerRepository;
import java.util.ArrayList;

import javax.swing.JOptionPane;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer customer = customerRepository.findByEmail(email);
        
        if (customer == null) {
            JOptionPane.showMessageDialog(null, "User not found with email: " + email, "Error", JOptionPane.ERROR_MESSAGE);
            throw new UsernameNotFoundException("User not found with email: " + email);
        }

        return new org.springframework.security.core.userdetails.User(customer.getEmail(), customer.getPassword(),
                new ArrayList<>());
    }
}
