const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get("/product_case.html", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/landing/product_case.html"));
});

app.get("/gallery_3.html", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/landing/gallery_3.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/landing/index.html"));
});

const port = process.env.PORT || "3001";
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log("Running"));
