package webapp_notes.controls;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import webapp_notes.model.Note;
import webapp_notes.services.NoteServices;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:3000") // tell CORS my frontend is a-ok
public class NoteRepoControl {
    private final NoteServices service; //connect the service

    public NoteRepoControl(NoteServices service) {
        this.service = service;
    };

    @GetMapping
    public List<Note> getAllNotes(){
        return service.findAll();
    };

    @GetMapping("/{id}")
    public Note getNoteById(@PathVariable Long id) {
        return service.findById(id).orElseThrow();
    };

    @PostMapping
    public Note createNote(@RequestBody Note newNote){
        return service.save(newNote);
    };

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note newDeets){
        Note currentNote = service.findById(id).orElseThrow();
        currentNote.setTitle(newDeets.getTitle());
        currentNote.setContent(newDeets.getContent());
        return service.save(newDeets);
    };

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        service.delete(id);
    };
    //Todo probably a wipe, delete all or something
};