const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        // TODO: DB 저장 및 비밀번호 암호화 처리
        res.status(201).json({ message: '회원가입 성공' });
    } catch (error) {
        res.status(500).json({ message: '서버 오류' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // TODO: DB에서 사용자 조회 및 토큰 발급 처리
        res.status(200).json({ token: 'fake-jwt-token' });
    } catch (error) {
        res.status(401).json({ message: '로그인 실패' });
    }
};

module.exports = { register, login };
