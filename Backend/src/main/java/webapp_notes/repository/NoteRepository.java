package webapp_notes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import webapp_notes.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
    //in here Spring gives me CRUD reqs, generated at run time
    //has findAll, count, deleteById, save, findById
    //might extend this for timestamp sorting etc
};