package org.notes.practise.notesapplicaiton.securityconfiguration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import jakarta.websocket.Session;

import org.springframework.security.config.Customizer;

//@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
		.authorizeHttpRequests(
				auth-> 
				 	auth
				 	.requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
				 	.anyRequest().authenticated());
		http.httpBasic(Customizer.withDefaults());
		http.sessionManagement(Session-> Session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		http.csrf().disable();
		return http.build();
	}
}
