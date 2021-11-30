DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

USE calendar;

CREATE TABLE physician (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(30),
  lastname VARCHAR(30),
  email VARCHAR(50)
);

CREATE TABLE schedule (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  physician_id INT,
  patient_firstname VARCHAR(30),
  patient_lastname VARCHAR(30),
  visit_time TIME,
  kind VARCHAR(30),
  FOREIGN KEY (physician_id) REFERENCES physician(id)
);

INSERT INTO physician (firstname, lastname, email) VALUES ("Julius", "Hibbert", "hibbert@notablehealth.com");
INSERT INTO physician (firstname, lastname, email) VALUES ("Algernop", "Krieger", "krieger@notablehealth.com");
INSERT INTO physician (firstname, lastname, email) VALUES ("Nick", "Riviera", "riviera@@notablehealth.com");



INSERT INTO schedule (physician_id, patient_firstname, patient_lastname, visit_time, kind) VALUES (2, "Sterling", "Archer", "08:00", "New Patient");

INSERT INTO schedule (physician_id, patient_firstname, patient_lastname, visit_time, kind) VALUES (2, "Cyril", "Figis", "08:30", "Follow-up");

INSERT INTO schedule (physician_id, patient_firstname, patient_lastname, visit_time, kind) VALUES (2, "Ray", "Gilette", "09:00", "Follow-up");

INSERT INTO schedule (physician_id, patient_firstname, patient_lastname, visit_time, kind) VALUES (2, "Lana", "Kane", "09:30", "New Patient");

INSERT INTO schedule (physician_id, patient_firstname, patient_lastname, visit_time, kind) VALUES (2, "Pam", "Poovey", "10:00", "New Patient");
