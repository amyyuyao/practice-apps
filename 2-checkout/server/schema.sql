DROP DATABASE IF EXISTS checkout;
CREATE DATABASE IF NOT EXISTS checkout;
USE checkout;

CREATE TABLE IF NOT EXISTS infos (
  id      INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cookie_id     VARCHAR(100) NOT NULL UNIQUE,
  contact_name    VARCHAR(30) ,
  contact_email    VARCHAR(30) ,
  contact_password    VARCHAR(30) ,
  add_line1   VARCHAR(30) ,
  add_line2   VARCHAR(30) ,
  add_city    VARCHAR(30) ,
  add_state    VARCHAR(30) ,
  add_zip    VARCHAR(30) ,
  add_phone     VARCHAR(30) ,
  credit_card   VARCHAR(30) ,
  credit_expiry    VARCHAR(30) ,
  credit_cvv       VARCHAR(30) ,
  credit_billingZip     VARCHAR(30)
);