package webapp_notes.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import webapp_notes.model.Note;
import webapp_notes.repository.NoteRepository;

//could technically do without the service layer but this will help later w/ more entities and tables as well as user auth
@Service
public class NoteServices {
    private final NoteRepository repository;

    public NoteServices(NoteRepository repository) {
        this.repository = repository;
    };
    
    public List<Note> findAll(){
        return repository.findAll();
    };

    public Optional<Note> findById(Long id){
        return repository.findById(id);
    };

    public Note save(Note newNote) {
        //Todo, check doubles, check valid input etc, depends on format chosen, convert strings or jsons
        return repository.save(newNote);
    };

    public void delete(Long id) {
        //Todo, checks for validity etc, does user have auth to del so on so forth
        repository.deleteById(id);
    };
}