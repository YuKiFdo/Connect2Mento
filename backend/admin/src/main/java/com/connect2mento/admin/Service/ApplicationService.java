package com.connect2mento.admin.Service;

import com.connect2mento.admin.Dto.ApplicationEntity;
import com.connect2mento.admin.Dto.MentorEntitiy;
import com.connect2mento.admin.Repo.ApplicationRepo;
import com.connect2mento.admin.Repo.MentorRepo;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private MentorRepo mentorRepository;

    @Autowired
    private ApplicationRepo repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender emailSender;

    public List<ApplicationEntity> getAllApplications() {
        return repository.findAll();
    }

    public void approveApplication(Long id) {
        Optional<ApplicationEntity> application = repository.findById(id);
        if (application.isPresent()) {
            System.out.println("Entering application with id: " + id);
            ApplicationEntity applicationEntity = application.get();

            String username = applicationEntity.getName().toLowerCase().replaceAll(" ","_");
            String tempPass = generateTempPassword();
            String hashedPassword = passwordEncoder.encode(tempPass);

            MentorEntitiy mentor = new MentorEntitiy();
            mentor.setName(applicationEntity.getName());
            mentor.setJobTitle(applicationEntity.getJobTitle());
            mentor.setExpertiseArea(applicationEntity.getExpertiseArea());
            mentor.setLinkedInProfile(applicationEntity.getLinkedinUrl());
            mentor.setUsername(username);
            mentor.setPassword(hashedPassword);
            mentor.setDateJoined(new Date());

            mentorRepository.save(mentor);

            applicationEntity.setStatus("APPROVED");
            repository.save(applicationEntity);


            try {
                MimeMessage message = emailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message, true);
                helper.setFrom("yukifernando0001@gmail.com");
                helper.setTo(applicationEntity.getEmail());
                helper.setSubject("Mentor Application Approved");

                String htmlContent = "<h1>Congratulations!</h1>"
                        + "<p>Your mentor application has been approved.</p>"
                        + "<p>Your username is <strong>" + username + "</strong>.</p>"
                        + "<p>Your temporary password is <strong>" + tempPass + "</strong>.</p>"
                        + "<p>Please login to the system and change your password.</p>"
                        + "<p>Best regards,<br>Connect2Mento Team</p>";

                helper.setText(htmlContent, true);
                emailSender.send(message);

                System.out.println("Mentor application approved.");

            } catch (Exception e) {
                e.printStackTrace();
            }

        }
    }

    private String generateTempPassword() {
        String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder builder = new StringBuilder();
        int count = 8;
        while (count-- != 0) {
            int character = (int)(Math.random() * ALPHA_NUMERIC_STRING.length());
            builder.append(ALPHA_NUMERIC_STRING.charAt(character));
        }
        System.out.println(builder.toString());
        return builder.toString();
    }

    public void rejectApplication(Long id) {
        System.out.println("Rejecting application with id: " + id);
        ApplicationEntity application = repository.findById(id).orElseThrow();
        System.out.println(application);
        application.setStatus("REJECTED");
        System.out.println(application.getStatus());
        repository.save(application);

        try {
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom("yukifernando0001@gmail.com");
            helper.setTo(application.getEmail());
            helper.setSubject("Mentor Application Rejected");

            String htmlContent = "<h1>Sorry!</h1>"
                    + "<p>Your mentor application has been rejected.</p>"
                    + "<p>Best regards,<br>Connect2Mento Team</p>";

            helper.setText(htmlContent, true);
            emailSender.send(message);

            System.out.println("Mentor application rejected.");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ApplicationEntity addApplication(ApplicationEntity application) {
        application.setStatus("PENDING");
        application.setApplicationDate(new Date());
        return repository.save(application);
    }
}
