const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors("*"));

const user_router = require("./routes/customer");
const product_router = require("./routes/product");
app.use("/customer", user_router);
app.use("/products", product_router);

app.listen(4000, "0.0.0.0", () => {
  console.log("Grocery Management Server is started on port 4000");
});
