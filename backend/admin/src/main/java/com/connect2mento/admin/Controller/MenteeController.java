package com.connect2mento.admin.Controller;

import com.connect2mento.admin.Dto.menteeEntity;
import com.connect2mento.admin.Service.MenteeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentees")
@CrossOrigin(origins = "http://localhost:3001")
public class MenteeController {

    @Autowired
    private MenteeService menteeService;

    @GetMapping
    public List<menteeEntity> getAllMentees() {
        return menteeService.getAllMentees();
    }

    @PostMapping("/add")
    public menteeEntity addMentee(@RequestBody menteeEntity mentee) {
        return menteeService.addMentee(mentee);
    }

    //add list of mentees
    @PostMapping("/addList")
    public List<menteeEntity> addMenteeList(@RequestBody List<menteeEntity> menteeList) {
        return menteeService.addMenteeList(menteeList);
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getMenteeCount() {
        Long count = menteeService.getTotalCount();
        return ResponseEntity.ok(count);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMentee(@PathVariable Long id) {
        menteeService.deleteMentee(id);
        return ResponseEntity.ok().build();
    }
}
