const express = require("express");

const db = require("../db");
const utils = require("../utils");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const config = require("../config");

//This api is for contact us
const router = express.Router();
router.post("/contact_us", (request, response) => {
  const { name, email, mobile, message } = request.body;
  const statement = `INSERT INTO contact_us(name, email, mobile, message) values(?,?,?,?)`;
  db.pool.query(statement, [name, email, mobile, message], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

//This api is for signin authentication
router.post("/signin_auth", (request, response) => {
  const { c_email, c_password } = request.body;

  const login_statement = `   select c_id,c_fname,c_lname,c_email,c_mobile,c_address,c_pincode,c_city,c_state from customer where c_email=? and c_password=? and is_deleted = false`;
  const encryptedPassword = String(cryptoJs.MD5(c_password));
  db.pool.query(
    login_statement,
    [c_email, encryptedPassword],
    (error, result) => {
      var user = utils.createResult(error, result);
      var token = jwt.sign({ userInfo: user["data"][0] }, config.secret, {
        expiresIn: 86400,
      });
      const result1 = {};
      let len = user["data"].length;

      if (len === 0) {
        result1["status"] = "error";
        response.send(result1);
      } else {
        result1["status"] = "success";
        result1["data"] = {
          c_email: `${user["data"][0]["c_email"]}`,
          c_id: `${user["data"][0]["c_id"]}`,
          c_fname: `${user["data"][0]["c_fname"]}`,
          c_lname: `${user["data"][0]["c_lname"]}`,
          token,
        };
        // response.json({ token: token });
        // console.log(mydata["data"][0]["c_email"]);
        response.send(result1);
      }
    }
  );
});

//This api is for Customer SignUp
router.post("/signup", (request, response) => {
  const {
    c_city,
    c_state,
    c_pincode,
    c_address,
    c_fname,
    c_lname,
    c_email,
    c_mobile,
    c_password,
  } = request.body;

  const encryptedPassword = String(cryptoJs.MD5(c_password));
  // const location_statement = `INSERT INTO location(city,pincode,state) values(?,?,?)`;
  const duplicate_checker_statement = `select * from customer where c_email=?`;
  const customer_statement = `INSERT INTO customer(c_fname,c_lname,c_email,c_mobile,c_password,c_state,c_city,c_pincode,c_address) VALUES(?,?,?,?,?,?,?,?,?);`;

  db.pool.query(duplicate_checker_statement, [c_email], (error, result) => {
    // response.send(utils.createResult(error, result));
    let len = result.length;
    //console.log(len);
    if (len === 0) {
      db.pool.query(
        customer_statement,
        [
          c_fname,
          c_lname,
          c_email,
          c_mobile,
          encryptedPassword,
          c_state,
          c_city,
          c_pincode,
          c_address,
        ],
        (error, result) => {
          response.send(utils.createResult(error, result));
        }
      );
    } else {
      result["status"] = "already exists";
      response.send(result["status"]);
    }
  });
});

//This api is for checkout orders
router.post("/orders", (request, response) => {
  const token = request.headers["token"];
  try {
    const payLoad = jwt.verify(token, config.secret);
    const c_id = payLoad.userInfo.c_id;
    const { o_date } = request.body;
    const orders_query = `insert into orders(c_id,o_date) values(?,?)`;
    db.pool.query(orders_query, [c_id, o_date], (error, result) => {
      // order_details(result.insertId, p_id, s_id);
      response.send(utils.createResult(error, result.insertId));
    });
  } catch (ex) {
    return response.send(utils.createResult("Invalid token"));
  }
});

//This api is for checkout order_details(On frontend you have to execute it for multiple times for products)
router.post("/order_details", (request, response) => {
  const { o_id, p_id, s_id, p_qty } = request.body;
  const order_details_query = `insert into order_details(o_id,p_id,s_id,p_qty) values(?,?,?,?)`;

  db.pool.query(
    order_details_query,
    [o_id, p_id, s_id, p_qty],
    (error, result) => {
      response.send(utils.createResult(error, result));
    }
  );
});

module.exports = router;
