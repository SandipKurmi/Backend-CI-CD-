CREATE TABLE IF NOT EXISTS posts (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    description TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, description) VALUES
    ('Hello Docker',   'First post — app is running inside Docker'),
    ('CI/CD Pipeline', 'GitHub Actions runs lint, test and build on every push'),
    ('Node + MySQL',   'Express connected to MySQL via mysql2 connection pool');
