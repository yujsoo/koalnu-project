import {Link, useNavigate} from "react-router-dom";

const LoginPage = ({setIsLoggedIn}) => {
  const navigate = useNavigate()
  // 로그인 버튼 클릭시
  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
    navigate('/');
  }

  return (
      <div className={'login-box'}>
        <div className={'title'}>
          <strong>로그인</strong>
          <p>지금 로그인하고 혜택을 받아보세요.</p>
        </div>
        <form action="" onSubmit={handleLogin}>
          <div className={'form'}>
            <input type="text" placeholder={'아이디'}
            />
            <input type="password" placeholder={'비밀번호'}
            />
            <button type={'submit'}>로그인</button>
          </div>
        </form>
        <Link to={'/'} className={'guest-order'}>비회원 주문조회</Link>
      </div>
  )
}

export default LoginPage;