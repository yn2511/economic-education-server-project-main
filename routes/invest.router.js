const express = require('express');
const router = express.Router();
const investController = require('../controllers/invest.controller');

// 투자 상품 목록 조회
router.get('/investments', investController.getInvestments);

// 예금/적금 상품 목록 조회
router.get('/products', investController.getDepositSavingProducts);

module.exports = router;
