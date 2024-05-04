const express = require("express");
require("dotenv").config();

const schema = require("./schema/schema");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");

const PORT = process.env.PORT || 5000;

const app = express();

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

app.listen(PORT, console.log(`Server running on ${PORT}`));
