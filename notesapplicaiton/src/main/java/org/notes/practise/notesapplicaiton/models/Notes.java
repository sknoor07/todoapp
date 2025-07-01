package org.notes.practise.notesapplicaiton.models;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class Notes {
	private int id;
	private String username;
	private String title;
	private String description;
	private LocalDate localDate;
	
	public Notes() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Notes(int id, String username, String title, String description, LocalDate localDate) {
		super();
		this.id = id;
		this.username = username;
		this.title = title;
		this.description = description;
		this.localDate = localDate;
	
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDate getLocalDate() {
		return localDate;
	}
	public void setLocalDate(LocalDate localDate) {
		this.localDate = localDate;
	}
	@Override
	public String toString() {
		return "notes [id=" + id + ", username=" + username + ", title=" + title + ", description=" + description
				+ ", localDate=" + localDate + "]";
	}
}
