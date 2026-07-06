-- Schema definition for security_users database
CREATE TABLE IF NOT EXISTS custom_user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- Persistent Remember Me tokens
CREATE TABLE IF NOT EXISTS persistent_logins (
    username VARCHAR(255) NOT NULL,
    series VARCHAR(255) PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    last_used TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;
