package securitydemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/api/user")
    public Map<String, String> getUser(Principal principal) {
        return Map.of("username", principal.getName());
    }
}