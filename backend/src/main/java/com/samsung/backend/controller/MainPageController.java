package com.samsung.backend.controller;

import com.samsung.backend.dao.UserDAO;
import com.samsung.backend.dto.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MainPageController {

    private final UserDAO userDAO;

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {

        log.info("userId = {}", user.getUserId());
        log.info("userPw = {}", user.getUserPw());

        boolean byCheckId = userDAO.findByCheckId(user);
        log.info("check: {}", byCheckId);
        if(userDAO.findByCheckId(user))
            return true;
        else
            return false;
    }
}
