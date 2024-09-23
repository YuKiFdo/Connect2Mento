package com.connect2mento.admin.Controller;


import com.connect2mento.admin.Dto.MentorEntitiy;
import com.connect2mento.admin.Dto.menteeEntity;
import com.connect2mento.admin.Service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentors")
@CrossOrigin(origins = "http://localhost:3000")
public class MentorController {
    @Autowired
    private MentorService mentorService;

    @GetMapping
    public List<MentorEntitiy> getAllMentors() {
        return mentorService.getAllMentors();
    }

    @PostMapping("/add")
    public MentorEntitiy addMentor(@RequestBody MentorEntitiy mentor) {
        return mentorService.addMentor(mentor);
    }

    @GetMapping("/count")
    public Long getMentorCount() {
        return mentorService.getTotalCount();
    }



}
