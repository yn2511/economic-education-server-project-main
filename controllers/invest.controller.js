const mysql = require('mysql2/promise');

// DB 연결 풀
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

exports.getInvestments = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM invest');
    res.status(200).json({ investments: rows });
  } catch (error) {
    console.error('투자 상품 조회 실패:', error);
    res.status(500).json({ message: '서버 오류' });
  }
};


// 투자 상품 목록 조회
// GET/API/investments
exports.getInvestments = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        invest_id AS id,
        invest_name AS name,
        invest_description AS description,
        risk_level AS riskLevel,
        expected_return AS expectedReturn
      FROM invest
    `);

    res.status(200).json({ investments: rows });
  } catch (error) {
    console.error('투자 상품 조회 실패:', error);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 예금/적금 상품 목록 조회
// GET/API/product
exports.getDepositSavingProducts = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        product_id AS id,
        product_name AS name,
        product_type AS type,
        advantage AS interestRate
      FROM products
      WHERE product_type IN ('deposits', 'savings')
    `);

    res.status(200).json({ products: rows });
  } catch (error) {
    console.error('예금/적금 상품 목록 조회 실패:', error);
    res.status(500).json({ message: '서버 오류' });
  }
};

