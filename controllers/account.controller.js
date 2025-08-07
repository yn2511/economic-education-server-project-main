const { v4: uuidv4 } = require('uuid');
const pool = require('../db'); // mysql2/promise 풀 연결

exports.invest = async (req, res) => {
  try {
    const { userId, productId, amount } = req.body;

    if (!userId || !productId || !amount) {
      return res.status(400).json({ message: '필수 값 누락' });
    }

    const investHistoryId = uuidv4();
    const now = new Date();

    await pool.query(
      `INSERT INTO invest_history (invest_history_id, invest_id, user_id, invest_advantage, invested_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [investHistoryId, productId, userId, amount, now, now]
    );

    return res.status(201).json({
      success: true,
      message: '투자 내역 등록 완료',
      investmentId: investHistoryId,
    });
  } catch (err) {
    console.error('투자 실행 실패:', err);
    return res.status(500).json({ message: '서버 오류' });
  }
};

// 거래 내역 조회 - 윤지윤
exports.getTransactionHistory = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'userId 누락' });
  }

  try {
    // 투자 내역 조회
    const [investRows] = await pool.query(`
      SELECT 
        invest_advantage AS amount, 
        invested_at AS date, 
        '투자' AS type, 
        CAST(invest_id AS CHAR) AS description
      FROM invest_history
      WHERE user_id = ?
    `, [userId]);

    // 예금, 적금 내역 조회
    const [depositSavingRows] = await pool.query(`
      SELECT 
        p.advantage AS amount,
        rp.created_at AS date,
        CASE 
          WHEN p.product_type = 'deposits' THEN '예금'
          WHEN p.product_type = 'savings' THEN '적금'
          ELSE '기타'
        END AS type,
        p.product_name AS description
      FROM registered_products rp
      JOIN products p ON rp.product_id = p.product_id
      WHERE rp.user_id = ?
    `, [userId]);

    // 모든 거래 내역 합치고 정렬
    const allTransactions = [...investRows, ...depositSavingRows];

    // Swagger에서 요구한 date 포맷에 맞게 변환 (YYYY-MM-DD)
    allTransactions.forEach(tx => {
      tx.date = new Date(tx.date).toISOString().split('T')[0]; // '2025-08-03'
    });

    // 최신순 정렬
    allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    return res.status(200).json({
      transactions: allTransactions
    });

  } catch (error) {
    console.error('거래 내역 조회 실패:', error);
    return res.status(500).json({ message: '서버 오류' });
  }
};

