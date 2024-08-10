const express = require("express");
const libro = require("./controller");

const router = express.Router();

router.get("/libros", libro.getAll);
router.post("/libros", libro.add);
router.delete("/libros", libro.delete);

module.exports = router;
