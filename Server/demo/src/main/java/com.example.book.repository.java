import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bookstore.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface BookRepository extends JpaRepository<Book, Long> {
    // Additional query methods (if any) can be defined here
}
