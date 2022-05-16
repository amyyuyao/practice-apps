const mysql = require("mysql2");
const Promise = require("bluebird");


// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => {console.log(`Success set up table`)
    // Expand this table definition as needed:
    // return db.queryAsync(

    //   `DROP DATABASE IF EXISTS checkout;
    //     CREATE DATABASE IF NOT EXISTS checkout;
    //     USE checkout;

    //     CREATE TABLE IF NOT EXISTS infos (
    //       id      INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //       contact_name    VARCHAR(20) NOT NULL,
    //       contact_email    VARCHAR(20) NOT NULL,
    //       contact_password    VARCHAR(20) NOT NULL,
    //       add_line1   VARCHAR(30) ,
    //       add_line2   VARCHAR(20) ,
    //       add_city    VARCHAR(20) ,
    //       add_state    VARCHAR(2) ,
    //       add_zip    INT ,
    //       add_phone     INT ,
    //       credit_card   INT ,
    //       credit_expiry    INT ,
    //       credit_cvv       INT ,
    //       credit_billingZip     INT
    //     );`

    // );
  })
  .catch((err) => console.log(err));

const save = (data) => {
  // let q = `INSERT INTO infos (contact_name, contact_email, contact_password)
  // VALUES ("${data.contact_name}", "${data.contact_email}", "${data.contact_password}")`
  return db.queryAsync(
    `INSERT INTO infos
    (cookie_id, contact_name, contact_email, contact_password, add_line1, add_line2, add_city,
    add_state, add_zip, add_phone, credit_card, credit_expiry, credit_cvv, credit_billingZip)
    VALUES
    ("${data.cookie_id}", "${data.contact_name}", "${data.contact_email}", "${data.contact_password}",
    "${data.add_line1}", "${data.add_line2}", "${data.add_city}", "${data.add_state}", "${data.add_zip}",
    "${data.add_phone}", "${data.credit_card}", "${data.credit_expiry}", "${data.credit_cvv}", "${data.credit_billingZip}")
    ON DUPLICATE KEY UPDATE
    contact_name = "${data.contact_name}",
    contact_email = "${data.contact_email}",
    contact_password = "${data.contact_password}",
    add_line1 = "${data.add_line1}",
    add_line2 = "${data.add_line2}",
    add_city = "${data.add_city}",
    add_state = "${data.add_state}",
    add_zip =  "${data.add_zip}",
    add_phone = "${data.add_phone}",
    credit_card = "${data.credit_card}",
    credit_expiry = "${data.credit_expiry}",
    credit_cvv = "${data.credit_cvv}",
    credit_billingZip = "${data.credit_billingZip}"`);
  // db.query(q)
  // .then(() => {
  //   console.log(data);
  // })
  // .catch(err => console.log(err));
}

const getAll = () => {
  // let q = `SELECT * FROM infos`
  return db.queryAsync(`SELECT * FROM infos`);
  // db.query(q)
  // .then(() => {
  //   console.log(`Success getting data`);
  // })
  // .catch(err => console.log(err));
}

module.exports = {
  save,
  getAll
};