const pool = require("../database/database");

class LibroController {
  async getAll(req, res) {
    const [result] = await pool.query("SELECT * FROM libros");
    res.json(result);
  }
  async add(req, res) {
    const libro = req.body;
    const [result] = await pool.query(
      "INSERT INTO libros (nombre, autor, categoria, `año-publicacion`, ISBN) VALUES (?, ?, ?, ?, ?)",
      [
        libro.nombre,
        libro.autor,
        libro.categoria,
        libro["año-publicacion"],
        libro.ISBN,
      ]
    );
    res.json({ "Id insertado": result.insertId });
  }
  async delete(req, res) {
    const libro = req.body;
    const [result] = await pool.query("DELETE FROM libros WHERE id=(?)", [
      libro.id,
    ]);
    res.json({ "Registros eliminados": result.affectedRows });
  }
}

const libro = new LibroController();

module.exports = libro;
