package com.connect2mento.admin.Repo;
import com.connect2mento.admin.Dto.userEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<userEntity, Long> {
    Optional<userEntity> findByUsername(String username);


}
