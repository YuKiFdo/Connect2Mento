package com.connect2mento.admin.Controller;

import com.connect2mento.admin.Dto.ApplicationEntity;
import com.connect2mento.admin.Service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/applications")
public class ApplicationController {
    @Autowired
    private ApplicationService service;

    @GetMapping
    public List<ApplicationEntity> getApplications() {
        return service.getAllApplications();
    }

    @PostMapping("/add")
    public ApplicationEntity addApplication(@RequestBody ApplicationEntity application) {
        return service.addApplication(application);
    }

    @PostMapping("/{id}/approve")
    public ResponseEntity<?> approveApplication(@PathVariable Long id) {
        System.out.println("Approving application with id: " + id);
        service.approveApplication(id);
        return ResponseEntity.ok("Mentor application approved.");
    }

    @PostMapping("/{id}/reject")
    public void rejectApplication(@PathVariable Long id) {
        service.rejectApplication(id);
    }
}
