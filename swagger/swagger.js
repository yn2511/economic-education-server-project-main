const swaggerJSDoc = require('swagger-jsdoc');

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: 회원가입
 *     description: 사용자를 새로 등록한다.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: 로그인
 *     description: 사용자 인증 후 토큰을 발급한다.
 *     tags: ["Auth"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: 사용자 아이디
 *               password:
 *                 type: string
 *                 description: 사용자 비밀번호
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: 로그인 성공 (토큰 반환)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT 액세스 토큰
 *       401:
 *         description: 인증 실패 (아이디 또는 비밀번호 오류)
 *       500:
 *         description: 서버 오류
 */

/**
 * @swagger
 * /api/account/{id}:
 *   get:
 *     summary: 내 통장 조회
 *     description: 사용자의 계좌 정보를 확인한다.
 *     tags: ["Account"]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 계좌 ID
 *     responses:
 *       200:
 *         description: 계좌 정보 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accountId:
 *                   type: string
 *                   description: 계좌 ID
 *                 balance:
 *                   type: number
 *                   description: 현재 잔액
 *                 owner:
 *                   type: string
 *                   description: 사용자 이름
 *       404:
 *         description: 해당 ID의 계좌를 찾을 수 없음
 *       500:
 *         description: 서버 오류
 */

/**
 * @swagger
 * /api/account/deposit:
 *   post:
 *     summary: 예금 상품 가입
 *     description: 예금 상품에 가입하고 등록 정보를 저장한다.
 *     tags: ["Account"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: 사용자 ID
 *               productId:
 *                 type: string
 *                 description: 예금 상품 ID
 *               amount:
 *                 type: number
 *                 description: 가입 금액
 *             required:
 *               - userId
 *               - productId
 *               - amount
 *     responses:
 *       201:
 *         description: 예금 상품 가입 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: 잘못된 요청 (입력값 부족 등)
 *       500:
 *         description: 서버 오류
 */

/**
 * @swagger
 * /api/account/saving:
 *   post:
 *     summary: 적금 상품 가입
 *     description: 적금 상품에 가입하고, 등록 정보를 저장한다.
 *     tags: ["Account"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: 사용자 ID
 *               productId:
 *                 type: string
 *                 description: 적금 상품 ID
 *               monthlyAmount:
 *                 type: number
 *                 description: 월 납입 금액
 *               duration:
 *                 type: integer
 *                 description: 가입 기간 (개월 단위)
 *             required:
 *               - userId
 *               - productId
 *               - monthlyAmount
 *               - duration
 *     responses:
 *       201:
 *         description: 적금 상품 가입 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: 잘못된 요청 (입력값 부족 등)
 *       500:
 *         description: 서버 오류
 */

/**
 * @swagger
 * /api/account/invest:
 *   post:
 *     summary: 투자 실행
 *     description: 투자 상품에 대한 투자내역을 생성한다.
 *     tags: ["Account"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: 사용자 ID
 *               productId:
 *                 type: string
 *                 description: 투자 상품 ID
 *               amount:
 *                 type: number
 *                 description: 투자 금액
 *             required:
 *               - userId
 *               - productId
 *               - amount
 *     responses:
 *       201:
 *         description: 투자 실행 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 investmentId:
 *                   type: string
 *                   description: 생성된 투자 내역 ID
 *       400:
 *         description: "잘못된 요청 (예: 필수 값 누락)"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/account/history:
 *   get:
 *     summary: 거래 내역 조회
 *     description: 사용자의 예금, 적금, 투자 거래 내역을 확인한다.
 *     tags: ["Account"]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: 사용자 ID
 *     responses:
 *       200:
 *         description: 거래 내역 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         description: 거래 유형 (예금, 적금, 투자 등)
 *                       amount:
 *                         type: number
 *                         description: 거래 금액
 *                       date:
 *                         type: string
 *                         format: date
 *                         description: 거래 날짜
 *                       description:
 *                         type: string
 *                         description: 거래 설명
 *       400:
 *         description: "잘못된 요청 (예: userId 누락)"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/admin/accounts:
 *   get:
 *     summary: 전체 사용자 통장 목록 확인
 *     description: 모든 사용자의 계좌 및 잔액을 확인한다.
 *     tags: ["Admin"]
 *     responses:
 *       200:
 *         description: 전체 계좌 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accounts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userId:
 *                         type: string
 *                         description: 사용자 ID
 *                       accountId:
 *                         type: string
 *                         description: 계좌 ID
 *                       balance:
 *                         type: number
 *                         description: 현재 잔액
 *       403:
 *         description: "접근 권한 없음 (관리자 전용)"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/admin/deposit:
 *   patch:
 *     summary: 개별 입금 처리
 *     description: 특정 계좌에 입금을 반영한다.
 *     tags: ["Admin"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accountId:
 *                 type: string
 *                 description: 입금할 계좌의 ID
 *               amount:
 *                 type: number
 *                 description: 입금할 금액
 *             required:
 *               - accountId
 *               - amount
 *     responses:
 *       200:
 *         description: 입금 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 입금이 완료되었습니다.
 *       400:
 *         description: "잘못된 요청 (예: 필드 누락, 음수 입금 등)"
 *       403:
 *         description: "관리자 권한 없음"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/admin/withdraw:
 *   patch:
 *     summary: 개별 출금 처리
 *     description: 특정 계좌에서 출금을 반영한다.
 *     tags: ["Admin"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accountId:
 *                 type: string
 *                 description: 출금할 계좌의 ID
 *               amount:
 *                 type: number
 *                 description: 출금할 금액
 *             required:
 *               - accountId
 *               - amount
 *     responses:
 *       200:
 *         description: 출금 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 출금이 완료되었습니다.
 *       400:
 *         description: "잘못된 요청 (예: 필드 누락, 금액 부족 등)"
 *       403:
 *         description: "관리자 권한 없음"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/admin/interest:
 *   post:
 *     summary: 금리 설정
 *     description: 예금, 적금, 투자 상품의 이율을 설정한다.
 *     tags: ["Admin"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               depositRate:
 *                 type: number
 *                 description: 예금 상품 이율 (%)
 *               savingRate:
 *                 type: number
 *                 description: 적금 상품 이율 (%)
 *               investRate:
 *                 type: number
 *                 description: 투자 상품 이율 (%)
 *             required:
 *               - depositRate
 *               - savingRate
 *               - investRate
 *     responses:
 *       200:
 *         description: 이율 설정 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 금리가 성공적으로 설정되었습니다.
 *       400:
 *         description: "잘못된 요청 (이율 값 누락 등)"
 *       403:
 *         description: "관리자 권한 없음"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/admin/hint:
 *   post:
 *     summary: 힌트 기사 등록
 *     description: 투자 관련 힌트 뉴스를 작성하여 등록한다.
 *     tags: ["Admin"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: 힌트 기사 제목
 *               content:
 *                 type: string
 *                 description: 힌트 기사 본문
 *               category:
 *                 type: string
 *                 description: "기사 카테고리 (예: 경제, 정치 등)"
 *             required:
 *               - title
 *               - content
 *     responses:
 *       201:
 *         description: 힌트 기사 등록 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 힌트 기사가 성공적으로 등록되었습니다.
 *       400:
 *         description: "잘못된 요청 (필수 값 누락 등)"
 *       403:
 *         description: "관리자 권한 없음"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/admin/hint:
 *   get:
 *     summary: 힌트 기사 전체 조회
 *     description: 등록된 힌트 뉴스 목록을 조회한다.
 *     tags: ["Admin"]
 *     responses:
 *       200:
 *         description: 힌트 기사 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 기사 ID
 *                   title:
 *                     type: string
 *                     description: 기사 제목
 *                   content:
 *                     type: string
 *                     description: 기사 내용
 *                   category:
 *                     type: string
 *                     description: 기사 카테고리
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: 등록일
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/notice:
 *   get:
 *     summary: 공지사항 조회
 *     description: 전체 사용자 대상 공지사항을 조회한다.
 *     tags: ["Notice"]
 *     responses:
 *       200:
 *         description: 공지사항 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 공지사항 ID
 *                   title:
 *                     type: string
 *                     description: 공지사항 제목
 *                   content:
 *                     type: string
 *                     description: 공지사항 내용
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: 작성일시
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/feedback:
 *   post:
 *     summary: 피드백 제출
 *     description: 사용자로부터 피드백을 수집한다.
 *     tags: ["Feedback"]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: 사용자 ID
 *               content:
 *                 type: string
 *                 description: 피드백 내용
 *             required:
 *               - userId
 *               - content
 *     responses:
 *       201:
 *         description: "피드백 제출 성공"
 *       400:
 *         description: "잘못된 요청 (예: 필수 값 누락)"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/stats:
 *   get:
 *     summary: 전체 사용자 자산 통계
 *     description: 전체 사용자의 예금, 적금, 투자 등의 자산 상태를 통계로 조회한다.
 *     tags: ["Admin"]
 *     responses:
 *       200:
 *         description: 자산 통계 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalUsers:
 *                   type: integer
 *                   description: 총 사용자 수
 *                 totalAssets:
 *                   type: number
 *                   format: float
 *                   description: 전체 사용자 자산 총합
 *                 breakdown:
 *                   type: object
 *                   properties:
 *                     deposit:
 *                       type: number
 *                       format: float
 *                       description: 총 예금 금액
 *                     saving:
 *                       type: number
 *                       format: float
 *                       description: 총 적금 금액
 *                     investment:
 *                       type: number
 *                       format: float
 *                       description: 총 투자 금액
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/ping:
 *   get:
 *     summary: 서버 상태 확인
 *     description: 서버의 응답 상태를 확인하는 체크용 API
 *     tags: ["Health Check"]
 *     responses:
 *       200:
 *         description: 서버 정상 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "ok"
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: 예금/적금 상품 목록 조회
 *     description: 사용 가능한 예금 및 적금 상품 목록을 조회한다.
 *     tags: ["상품"]
 *     responses:
 *       200:
 *         description: 상품 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "1년 만기 예금"
 *                       type:
 *                         type: string
 *                         example: "deposit"
 *                       interestRate:
 *                         type: number
 *                         format: float
 *                         example: 3.5
 */

/**
 * @swagger
 * /api/investments:
 *   get:
 *     summary: 투자 상품 목록 조회
 *     description: 등록된 모든 투자 상품 정보를 조회한다.
 *     tags: ["투자"]
 *     responses:
 *       200:
 *         description: 투자 상품 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 investments:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "주식형 펀드"
 *                       riskLevel:
 *                         type: string
 *                         example: "중간"
 *                       expectedReturn:
 *                         type: number
 *                         format: float
 *                         example: 7.5
 *                       description:
 *                         type: string
 *                         example: "안정적인 수익을 목표로 하는 펀드입니다."
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/invest-news:
 *   get:
 *     summary: 뉴스 목록 조회
 *     description: 투자 관련 힌트 기사 전체를 조회한다.
 *     tags: ["뉴스"]
 *     responses:
 *       200:
 *         description: 뉴스 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "시장 전망 및 투자 전략"
 *                   content:
 *                     type: string
 *                     example: "이번 분기 시장 전망은 긍정적입니다..."
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-07-17T10:00:00Z"
 *       500:
 *         description: "서버 오류"
 */

/**
 * @swagger
 * /api/invest-news/{id}:
 *   get:
 *     summary: 뉴스 상세 조회
 *     description: 선택한 힌트 기사의 내용을 상세 조회한다.
 *     tags: ["뉴스"]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 조회할 뉴스의 ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: 뉴스 상세 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "시장 분석 리포트"
 *                 content:
 *                   type: string
 *                   example: "이번 분기 금융 시장의 주요 동향은..."
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-07-17T12:00:00Z"
 *       404:
 *         description: "해당 뉴스가 존재하지 않음"
 *       500:
 *         description: "서버 오류"
 */

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Bank API',
            version: '1.0.0',
            description: '금융 관련 API 명세서입니다.',
        },
        servers: [
            {
                url: 'http://localhost:3000', // 필요시 변경
            },
        ],
    },
    apis: ['./swagger/*.js'], // Swagger 주석이 있는 파일 경로
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
