const express = require('express');
const router = express.Router();
const investNewsController = require('../controllers/investNews.controller');

// 전체 뉴스 목록 조회
router.get('/invest-news', investNewsController.getAllInvestNews);

// 특정 뉴스 상세 조회
router.get('/invest-news/:id', investNewsController.getInvestNewsById);

module.exports = router;
