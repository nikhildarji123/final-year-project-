-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

-- Hearings table
CREATE TABLE hearings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    hearing_date DATE,
    case_id INT
);

-- Payments table
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    payment_date DATE
);

-- Case Updates table
CREATE TABLE case_updates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    update_text VARCHAR(255),
    update_date DATE
);

-- Lawyers table
CREATE TABLE lawyers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    field_of_expertise VARCHAR(255),
    contact_info VARCHAR(255)
);
