package com.connect2mento.admin.Dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

import java.util.Date;

import jakarta.persistence.Id;


@Entity
@Table(name = "tbl_applications")
public class ApplicationEntity {


    @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String name;
        private String email;
        private String jobTitle;
        private String expertiseArea;
        private Date applicationDate;
        private String status; // PENDING, APPROVED, REJECTED
        private String linkedinUrl;
        private String gender;
        private String company;
        private String location;
        private String Bio;
        private String whyMentor;
        private String introvideo;




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getExpertiseArea() {
        return expertiseArea;
    }

    public void setExpertiseArea(String expertiseArea) {
        this.expertiseArea = expertiseArea;
    }

    public Date getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(Date applicationDate) {
        this.applicationDate = applicationDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }

    public String getGender() { // Add getter for gender
        return gender;
    }

    public void setGender(String gender) { // Add setter for gender
        this.gender = gender;
    }


    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBio() {
        return Bio;
    }

    public void setBio(String bio) {
        Bio = bio;
    }

    public String getWhyMentor() {
        return whyMentor;
    }

    public void setWhyMentor(String whyMentor) {
        this.whyMentor = whyMentor;
    }

    public String getIntrovideo() {
        return introvideo;
    }

    public void setIntrovideo(String introvideo) {
        this.introvideo = introvideo;
    }

}
