package com.connect2mento.admin.Repo;

import com.connect2mento.admin.Dto.ApplicationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepo extends JpaRepository<ApplicationEntity, Long> {
    List<ApplicationEntity> findByStatus(String status);
}