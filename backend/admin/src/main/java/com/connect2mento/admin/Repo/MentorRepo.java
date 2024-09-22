package com.connect2mento.admin.Repo;

import com.connect2mento.admin.Dto.MentorEntitiy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MentorRepo extends JpaRepository<MentorEntitiy, Long> {
    // You can add custom query methods here if needed
}
