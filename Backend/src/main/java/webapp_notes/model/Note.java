//This class is gonna map my SQL Table notes to a java class
package webapp_notes.model; //newbie note: this basically keeps things organized and doubles as namespace

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="notes") //custom name for my table

public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String title;
    private String content; //Might change type later
    @Column(name="created_at")
    private LocalDateTime createdAt; //save timestamp

    //need setters and getters to manipulate 
    //id
    public Long getId() {
        return id;
    };
    public void setId(Long id) {
        this.id = id;
    };

    //Title
    public String getTitle() {
        return title;
    };
    public void setTitle(String title) {
        this.title = title;
    };

    //Content
    public String getContent() {
        return content;
    };
    public void setContent(String content) {
        this.content = content;
    };
    
    //Timestamp
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}