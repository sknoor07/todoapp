package org.notes.practise.notesapplicaiton.models.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.notes.practise.notesapplicaiton.models.Notes;
import org.springframework.stereotype.Service;

@Service
public class NotesService {
	private static List<Notes> notes= new ArrayList<Notes>();
	
	private static int notescount =0;
	
	static {
		notes.add(new Notes(++notescount,"Noor Alam","test1","test1",LocalDate.now().plusYears(3)));
		notes.add(new Notes(++notescount,"Noor Alam","test2","test2",LocalDate.now().plusYears(3)));
		notes.add(new Notes(++notescount,"Noor Alam","test3","test3",LocalDate.now().plusYears(3)));
		notes.add(new Notes(++notescount,"Noor Alam","test4","test4",LocalDate.now().plusYears(3)));
		notes.add(new Notes(++notescount,"Noor Alam","test5","test5",LocalDate.now().plusYears(3)));
		notes.add(new Notes(++notescount,"Noor Alam","test1","test1",LocalDate.now().plusYears(3)));
		notes.add(new Notes(++notescount,"Noor Alam","test1","test1",LocalDate.now().plusYears(3)));
		notes.add(new Notes(++notescount,"Noor Alam","test1","test1",LocalDate.now().plusYears(3)));
	}
	
	public List<Notes> findByUserName(String username){
		Predicate<? super Notes> prediacte=note-> note.getUsername().equalsIgnoreCase(username);
		return notes.stream().filter(prediacte).toList();
	}
	
	public Notes AddNotes(String username, String title, String description, LocalDate localDate) {
		Notes note= new Notes(++notescount,username, title, description, localDate);
		notes.add(note);
		return note;
	}
	
	public Notes findById(int id) {
		Predicate<? super Notes> predicate=note->note.getId()==id;
		Notes note= notes.stream().filter(predicate).findFirst().get();
		return note;
	}
	
	public void deletebyId(int id) {
		Predicate<? super Notes> predicate=note->note.getId()==id;
		notes.removeIf(predicate);
	}
	
	public void updateNotes(Notes notes) {
		deletebyId(notes.getId());
		NotesService.notes.add(notes);
	}
}
	
