const mysql = require("mysql2/promise");
const pool = mysql.createPool({ // 连接池，防止服务器大量占用
  host: "localhost",
  user: "root",
  password: "ybybdwyJ42.",
  database: "companydb",
  multipleStatements: true, // 同时运行多条sql语句
});

async function test(id) {
  // 创建一个数据库连接
  const sql = `select * from employee where \`name\` like concat('%', ?, '%') ;`;
  const [results] = await pool.execute(sql, [id]);
  console.log(results);
}
test("袁");
