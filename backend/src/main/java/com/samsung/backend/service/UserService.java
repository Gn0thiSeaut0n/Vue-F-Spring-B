package com.samsung.backend.service;

import com.samsung.backend.dao.UserDAO;
import com.samsung.backend.dto.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserDAO userDAO;

    boolean findByCheckId(User user) {
        return userDAO.findByCheckId(user);
    }
}
