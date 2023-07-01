// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "snakedb_9u9o_user", // Замените на свое имя пользователя
//   password: "kico8WAVRLqHgOQ2rAeYWPYFGLwogUPF", // Замените на свой пароль
//   host: "snakedb_9u9o-e.Frankfurt-postgres.render.com?sslmode=require", // Замените на свой хост
//   port: 5432, // Порт по умолчанию для PostgreSQL
//   database: "snakedb_9u9o", // Замените на свою базу данных
// });

// module.exports = pool;

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

require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER, // Использовать значение из переменной среды DB_USER
  password: process.env.DB_PASSWORD, // Использовать значение из переменной среды DB_PASSWORD
  host: process.env.DB_HOST, // Использовать значение из переменной среды DB_HOST
  port: process.env.DB_PORT, // Использовать значение из переменной среды DB_PORT
  database: process.env.DB_NAME, // Использовать значение из переменной среды DB_NAME
});

module.exports = pool;