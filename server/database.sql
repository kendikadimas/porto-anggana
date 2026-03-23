CREATE DATABASE IF NOT EXISTS db_porto_akmal;
USE db_porto_akmal;

CREATE TABLE IF NOT EXISTS pages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_key VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_id INT,
    section_type VARCHAR(50) NOT NULL,
    title VARCHAR(255),
    description TEXT,
    order_index INT,
    FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS gallery_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT,
    item_url LONGTEXT NOT NULL,
    title VARCHAR(255),
    description TEXT,
    order_index INT,
    FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE
);

-- Seed initial pages if not exist
INSERT IGNORE INTO pages (page_key) VALUES 
('yearbook'), ('studio'), ('dokumentasi'), 
('video-dokumentasi'), ('reels'), ('wedding'), ('short-movie'),
('info'), ('portfolio'), ('packages'), ('design'), ('videotron'), ('home');
