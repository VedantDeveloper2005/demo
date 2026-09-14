const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Hello from Azure App Service via ZeroOps AI!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", service: "zeroops-demo" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

