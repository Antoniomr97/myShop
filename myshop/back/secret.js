const crypto = require("crypto");

const secret = "Full Stack Final Project Refresh";

const hash = crypto.createHmac("sha256", secret).digest("hex");

console.log(hash);
