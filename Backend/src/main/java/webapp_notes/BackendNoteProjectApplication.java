package webapp_notes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(webapp_notes.config.SecurityConfig.class)
public class BackendNoteProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendNoteProjectApplication.class, args);
	}

}
