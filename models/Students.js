const pool = require('../config/db');

class Student {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM students');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(studentData) {
    const { name, email, phone, course } = studentData;
    const [result] = await pool.query(
      'INSERT INTO students (name, email, phone, course) VALUES (?, ?, ?, ?)',
      [name, email, phone, course]
    );
    return { id: result.insertId, ...studentData };
  }

  static async update(id, studentData) {
    const { name, email, phone, course } = studentData;
    await pool.query(
      'UPDATE students SET name = ?, email = ?, phone = ?, course = ? WHERE id = ?',
      [name, email, phone, course, id]
    );
    return { id, ...studentData };
  }

  static async delete(id) {
    await pool.query('DELETE FROM students WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Student;