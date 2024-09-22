package com.connect2mento.admin.Service;

import com.connect2mento.admin.Dto.MentorEntitiy;
import com.connect2mento.admin.Repo.MenteeRepo;
import com.connect2mento.admin.Repo.MentorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorService {
    @Autowired
    private MentorRepo mentorRepository;

    public List<MentorEntitiy> getAllMentors() {
        return mentorRepository.findAll();
    }

    public MentorEntitiy addMentor(MentorEntitiy mentor) {
        return mentorRepository.save(mentor);
    }

    public Long getTotalCount() {
        return mentorRepository.count();
    }
}
