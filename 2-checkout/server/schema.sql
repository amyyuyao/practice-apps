DROP DATABASE IF EXISTS checkout;
CREATE DATABASE IF NOT EXISTS checkout;
USE checkout;

CREATE TABLE infos (
  id      INT NOT NULL AUTO_INCREMENT PRIMARY KEY
  contact_name    VARCHAR(20) NOT NULL,
  contact_email    VARCHAR(20) NOT NULL,
  contact_password    VARCHAR(20) NOT NULL,
  add_line1   VARCHAR(30) NOT NULL,
  add_line2   VARCHAR(20) NOT NULL,
  add_city    VARCHAR(20) NOT NULL,
  add_state    VARCHAR(2) NOT NULL,
  add_zip    INT NOT NULL,
  add_phone     INT NOT NULL,
  credit_card   INT NOT NULL,
  credit_expiry    INT NOT NULL,
  credit_cvv       INT NOT NULL,
  credit_billingZip     INT NOT NULL
);