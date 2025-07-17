const express = require("express");
const router = express.Router(); //Router objesi, küçük uygulama bölümleri oluşturmamızı sağlar. Her route grubunu ayrı tutabiliriz.
const authController = require("../controllers/authController");

// Giriş endpointi
router.post("/login", authController.login);

module.exports = router;
