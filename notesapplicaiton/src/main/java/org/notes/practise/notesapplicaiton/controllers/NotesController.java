package org.notes.practise.notesapplicaiton.controllers;

import java.util.List;

import org.notes.practise.notesapplicaiton.models.Notes;
import org.notes.practise.notesapplicaiton.models.service.NotesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotesController {
	private NotesService notesService;
	
	public NotesController(NotesService notesService) {
		this.notesService=notesService;
	}
	
	@GetMapping("/user/{username}/notes")
	public List<Notes> getallNotesForUsername(@PathVariable String username){
		return notesService.findByUserName(username);
	}
	
	@GetMapping("/user/{username}/notes/{id}")
	public Notes getallNotesById(@PathVariable String username, @PathVariable int id){
		return notesService.findById(id);
	}
	
	@DeleteMapping("/user/{username}/notes/{id}")
	public ResponseEntity<Void> deleteNoteById(@PathVariable String username, @PathVariable int id){
		notesService.deletebyId(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/user/{username}/notes/{id}")
	public Notes updateNoteById(@PathVariable String username, @PathVariable int id, @RequestBody Notes note){
		Notes newnote= new Notes(note.getId(),username,note.getTitle(),note.getDescription(), note.getLocalDate());
		notesService.updateNotes(newnote);
		return newnote;
	}
	
	@PostMapping("/user/{username}/notes")
	public Notes createanewnote(@PathVariable String username, @RequestBody Notes note) {
		return notesService.AddNotes(username, note.getTitle(), note.getDescription(), note.getLocalDate());
	}
}
