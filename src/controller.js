const pool = require("../database/database");

class LibroController {
  async getAll(req, res) {
    const [result] = await pool.query("SELECT * FROM libros");
    res.json(result);
  }
  async getOne(req, res) {
    const { id } = req.params; // Se asume que el id se pasa como un parámetro de ruta
    const [result] = await pool.query("SELECT * FROM libros WHERE id = ?", [
      id,
    ]);
    res.json(result[0]); // Devuelve el primer (y único) resultado encontrado
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
  async update(req, res) {
    const libro = req.body;
    const [result] = await pool.query(
      "UPDATE libros SET nombre = ?, autor = ?, categoria = ?, `año-publicacion` = ?, ISBN = ? WHERE id = ?",
      [
        libro.nombre,
        libro.autor,
        libro.categoria,
        libro["año-publicacion"],
        libro.ISBN,
        libro.id,
      ]
    );
    res.json({ "Registro actualizado": result.changedRows });
  }
}

const libro = new LibroController();

module.exports = libro;
