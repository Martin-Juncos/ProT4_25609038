const pool = require("../database/database");

class LibroController {
  async getAll(req, res) {
    const [result] = await pool.query("SELECT * FROM `libros`");
    res.json(result);
  }
}

const libro = new LibroController();

module.exports = libro;
