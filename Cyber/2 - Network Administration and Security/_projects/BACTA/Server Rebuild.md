

# Database Migration

Once your server configuration has completed, run this SQL on the new MySQL database.

```sql
CREATE TABLE users(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email_address VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    address VARCHAR(255),
    date_of_birth DATE,
    next_of_kin VARCHAR(255),
    creation_date DATE,
    sex VARCHAR(10),
    gender VARCHAR(15),
    isPatient BOOLEAN DEFAULT FALSE,
    isStaff BOOLEAN DEFAULT FALSE
);
CREATE TABLE staff_data (
    id INTEGER PRIMARY KEY,
    userId INT NOT NULL,
    bank_details VARCHAR(255),
    pay_rate VARCHAR(255),
    roster VARCHAR(255),
    position VARCHAR(100),
    work_history VARCHAR(255),
    leave_balance VARCHAR(255),
    super_details VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE medical_information (
    id INTEGER PRIMARY KEY,
    userId INT NOT NULL,
    current_medication VARCHAR(255),
    conditions VARCHAR(255),
    history VARCHAR(255),
    family_history VARCHAR(255),
    GP VARCHAR(100),
    blood_type VARCHAR(5),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE patient_data (
    id INTEGER PRIMARY KEY,
    medicate_number VARCHAR(50),
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
INSERT INTO users VALUES(11,'staff@staff.com','$2y$12$Om4KX4eQazpYmL8RDh26zu4lsVjXOIlrfqSuUOte2Bb.IrznjPTeq','staff',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1);
INSERT INTO users VALUES(12,'patient@patient.com','$2y$12$75ipQV8fItTJczsF.BGrzO6RtuTZouwyfISq72ZbvlrSHSHCBdmTq','patient',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0);
INSERT INTO users VALUES(13,'staffpatient@staffpatient.com','$2y$12$Ua.T0DhAUFR0YQEnzWNJPOup0kBx.T5chCJ/b.iGltI3R5OcUp15y','staffpatient',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1);
```