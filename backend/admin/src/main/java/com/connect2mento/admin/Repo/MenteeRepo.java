package com.connect2mento.admin.Repo;
import com.connect2mento.admin.Dto.menteeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenteeRepo extends JpaRepository<menteeEntity, Long> {

}
