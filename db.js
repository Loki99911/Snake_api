const Pool = require("pg").Pool;
const pool = new Pool({
  user: "snakedb_9u9o_user", // Замените на свое имя пользователя
  password: "kico8WAVRLqHgOQ2rAeYWPYFGLwogUPF", // Замените на свой пароль
  host: "snakedb_9u9o-e.Frankfurt-postgres.render.com", // Замените на свой хост
  port: 5432, // Порт по умолчанию для PostgreSQL
  database: "snakedb_9u9o", // Замените на свою базу данных
});

module.exports = pool;
