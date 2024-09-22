package com.connect2mento.admin.Service;

import com.connect2mento.admin.Dto.menteeEntity;
import com.connect2mento.admin.Repo.MenteeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenteeService {

    @Autowired
    private MenteeRepo menteeRepository;

    public List<menteeEntity> getAllMentees() {
        return menteeRepository.findAll();
    }

    public void deleteMentee(Long id) {
        menteeRepository.deleteById(id);
    }

    public menteeEntity addMentee(menteeEntity mentee) {
        return menteeRepository.save(mentee);
    }

    public List<menteeEntity> addMenteeList(List<menteeEntity> menteeList) {
        return menteeRepository.saveAll(menteeList);
    }

    public Long getTotalCount() {
        return menteeRepository.count();
    }
}
