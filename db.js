const Pool = require("pg").Pool;
const pool = new Pool({
  user: "admin", // Замените на свое имя пользователя
  password: "admin", // Замените на свой пароль
  host: "snake", // Замените на свой хост
  port: 5432, // Порт по умолчанию для PostgreSQL
  database: "snakeDB", // Замените на свою базу данных
});

module.exports = pool;
