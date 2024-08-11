package com.example.autogarage.controller; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.autogarage.model.Post;
import com.example.autogarage.service.PostService;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping("/{customerId}")
    public ResponseEntity<List<Post>> getPostsByCustomerId(@PathVariable Long customerId) {
        List<Post> posts = postService.getPostsByCustomerId(customerId);
        return ResponseEntity.ok(posts);
    }
    @CrossOrigin(origins = "http://localhost:3000") 
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post savedPost = postService.savePost(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPost);
}
    @CrossOrigin(origins = "http://localhost:3000") 
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }
    @CrossOrigin(origins = "http://localhost:3000") 
    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post postDetails) {
        Post updatedPost = postService.updatePost(id, postDetails);
        if (updatedPost != null) {
            return ResponseEntity.ok(updatedPost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
