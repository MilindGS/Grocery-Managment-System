const express = require("express");
const db = require("../db");
const utils = require("../utils");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config");

//This api is for getting the categories
router.get("/categories", (request, response) => {
  const statement = `select cat_id, cat_name,cat_desc, cat_image_path from category`;
  db.pool.query(statement, (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

//This api is for getting products of particular category
router.get("/categories/:cat_id", (request, response) => {
  const statement = `   select p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path from product where cat_id=${request.params.cat_id} and is_deleted=false
    `;
  db.pool.query(statement, (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

//This api is for getting particular product details
router.get("/:p_id", (request, response) => {
  const statement = `select p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path from product where p_id=${request.params.p_id} and is_deleted=false;`;
  db.pool.query(statement, (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

//This api is for searching product by name
router.post("/", (request, response) => {
  const { p_name } = request.body;

  const searchbyname_query = `select p_id,cat_id,s_id,p_name,p_price,p_unit,p_details,p_image_path from product where p_name like "%${p_name}%" and is_deleted=false`;
  db.pool.query(searchbyname_query, [], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

module.exports = router;
