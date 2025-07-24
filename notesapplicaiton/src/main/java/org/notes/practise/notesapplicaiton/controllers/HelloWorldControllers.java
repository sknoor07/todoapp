package org.notes.practise.notesapplicaiton.controllers;

import org.notes.practise.notesapplicaiton.models.HelloWorldBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldControllers {
	
	@GetMapping("/basicauth")
	public String BasicAuthCheck() {
		return "Success";
	}
	
	
	@GetMapping("/hello-world")
	public String hellowrld() {
		return "Hello World";
	}
	
	@GetMapping("Hello-world-bean")
	public HelloWorldBean helloworldbean() {
		return new HelloWorldBean("Hello World Bean");
	}
	
	@GetMapping("Hello-world-path-varibale/{name}")
	public HelloWorldBean helloworldpathvariable(@PathVariable String name) {
		return new HelloWorldBean("Hello world "+name);
	}
}
