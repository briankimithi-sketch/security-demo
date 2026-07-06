-- Initial user data
-- Password is BCrypt encoded 'user'
INSERT INTO custom_user (username, password, `role`)
VALUES ('user', '$2a$10$ILLUL3SHPmTkzHelkdkCI.ltUWRjUYNkAwqzbI.R88NvhelPxvAzW', 'USER')
ON DUPLICATE KEY UPDATE password=VALUES(password), `role`=VALUES(`role`);