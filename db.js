const Pool = require("pg").Pool;
const pool = new Pool({
  user: "snakedb_9u9o_user", // Замените на свое имя пользователя
  password: "kico8WAVRLqHgOQ2rAeYWPYFGLwogUPF", // Замените на свой пароль
  host: "postgres://snakedb_9u9o_user:kico8WAVRLqHgOQ2rAeYWPYFGLwogUPF@dpg-cif8pd18g3n3ipql01kg-a:5432/snakedb_9u9o", // Замените на свой хост
  port: 5432, // Порт по умолчанию для PostgreSQL
  database: "snakedb_9u9o", // Замените на свою базу данных
});

module.exports = pool;

// ..................................
// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres", // Замените на свое имя пользователя
//   password: "595280", // Замените на свой пароль
//   host: "localhost", // Замените на свой хост
//   port: 5432, // Порт по умолчанию для PostgreSQL
//   database: "snake_score", // Замените на свою базу данных
// });

// module.exports = pool;

// ..................................
// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "snakedb_9u9o_user", // Замените на свое имя пользователя
//   password: "kico8WAVRLqHgOQ2rAeYWPYFGLwogUPF", // Замените на свой пароль
//   host: "localhost", // Замените на свой хост
//   port: 5432, // Порт по умолчанию для PostgreSQL
//   database: "snakedb_9u9o", // Замените на свою базу данных
// });

// module.exports = pool;

