`DROP DATABASE IF EXISTS checkout;
CREATE DATABASE IF NOT EXISTS checkout;
USE checkout;

CREATE TABLE IF NOT EXISTS infos (
  id      INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  contact_name    VARCHAR(20) NOT NULL,
  contact_email    VARCHAR(20) NOT NULL,
  contact_password    VARCHAR(20) NOT NULL,
  add_line1   VARCHAR(30) ,
  add_line2   VARCHAR(20) ,
  add_city    VARCHAR(20) ,
  add_state    VARCHAR(2) ,
  add_zip    INT ,
  add_phone     INT ,
  credit_card   INT ,
  credit_expiry    INT ,
  credit_cvv       INT ,
  credit_billingZip     INT
);`