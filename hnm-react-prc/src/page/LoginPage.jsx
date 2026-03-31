import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = ({login}) => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (id && pwd) {
      localStorage.setItem('isLogin', true);
      localStorage.setItem('userId', id);
      login(id);
      navigate('/')
    } else {
      alert('아이디 또는 비밀번호를 입력하세요.')
    }
  }

  return (
      <div className={'login-box'}>
        <div className={'title'}>로그인</div>
        <form action="">
          <div className={'form'}>
            <input type="text" placeholder={'아이디'}
                   onChange={(e) => setId(e.target.value)}/>
            <input type="password" placeholder={'비밀번호'}
                   onChange={(e) => setPwd(e.target.value)}/>
            <button onClick={handleLogin}>로그인</button>
          </div>
        </form>
      </div>
  )
}

export default LoginPage;