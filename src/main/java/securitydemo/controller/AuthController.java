package securitydemo.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
public class AuthController {

    @GetMapping("/api/user")
    public Map<String, String> getUser(Principal principal) {
        if (principal == null) {
            return Map.of("authenticated", "false");
        }
        return Map.of("username", principal.getName(), "authenticated", "true");
    }

    @GetMapping("/api/csrf")
    public Map<String, String> getCsrf(HttpServletRequest request) {
        CsrfToken csrfToken = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
        return Map.of("token", csrfToken.getToken());
    }
}