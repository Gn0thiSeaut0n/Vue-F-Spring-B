package com.samsung.backend.dao;

import com.samsung.backend.dto.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDAO {
    boolean findByCheckId(User user);
}
