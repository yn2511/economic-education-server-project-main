const db = require('../db');
require('dotenv').config();

// 전체 뉴스 조회
exports.getAllInvestNews = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM invest_news ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (err) {
    console.error('전체 뉴스 조회 실패:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 특정 뉴스 조회
exports.getInvestNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM invest_news WHERE invest_news_id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: '뉴스를 찾을 수 없습니다' });
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    console.error('뉴스 상세 조회 실패:', err);
    res.status(500).json({ message: '서버 오류' });
  }
};
