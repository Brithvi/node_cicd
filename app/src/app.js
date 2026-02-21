const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "ECS DevOps App Running 🚀" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

module.exports = app;

if (require.main === module) {
  app.listen(3001, () => console.log("Server running on port 3001"));
}