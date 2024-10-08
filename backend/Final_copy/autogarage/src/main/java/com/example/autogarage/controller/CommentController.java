package com.example.autogarage.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.autogarage.model.Comment;
import com.example.autogarage.service.CommentService;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/comments")
public class CommentController {
    
    @Autowired
    private CommentService commentService;
    
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }
    
    @CrossOrigin(origins = "http://localhost:3000") 
    @GetMapping("/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Long id) {
        Optional<Comment> comment = commentService.getCommentById(id);
        return comment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @CrossOrigin(origins = "http://localhost:3000") 
    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return commentService.saveComment(comment);
    }
    
    @CrossOrigin(origins = "http://localhost:3000") 
    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
    }
    @CrossOrigin(origins = "http://localhost:3000") 
    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long id, @RequestBody Comment commentDetails) {
        Comment updatedComment = commentService.updateComment(id, commentDetails);
        if (updatedComment != null) {
            return ResponseEntity.ok(updatedComment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
