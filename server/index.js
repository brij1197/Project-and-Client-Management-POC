require("dotenv").config();
const connectDB = require("./config/db");
const colors = require("colors");
const cors = require("cors");
const express = require("express");
const schema = require("./schema/schema");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");

const app = express();

app.use(cors());

connectDB();

app.all(
  "/graphql",
  createHandler({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${PORT}`));
