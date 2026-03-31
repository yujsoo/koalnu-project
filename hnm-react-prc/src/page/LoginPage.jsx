const LoginPage = () => {
  return (
      <div className={'login-box'}>
        <div className={'title'}>로그인</div>
        <form action="">
          <div className={'form'}>
            <input type="text" placeholder={'아이디'}/>
            <input type="password" placeholder={'비밀번호'}/>
            <button type={'submit'}>로그인</button>
          </div>
        </form>
      </div>
  )
}

export default LoginPage;