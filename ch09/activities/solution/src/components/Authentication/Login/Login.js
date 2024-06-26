import { useState, lazy, Suspense } from 'react';

const ResetPassword = lazy( () => import ('./ResetPassword'))

function Login() {
  const [isResetting, setIsResetting] = useState();

  function loginHandler(event) {
    console.log("loginHandler");
    event.preventDefault();
  }

  function startResetPasswordHandler() {
    console.log("startResetPasswordHandler");
    setIsResetting(true);
  }

  function finishResetPasswordHandler() {
    console.log("finishResetPasswordHandler");
    setIsResetting(false);
  }

  return (
    <>
      <form onSubmit={loginHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="main-btn">Login</button>
      </form>
      <button className="alt-btn" onClick={startResetPasswordHandler}>
        Reset password
      </button>
      <Suspense fallback={ <p>Loading...</p>} >
      {isResetting && <ResetPassword onFinish={finishResetPasswordHandler} />}
      </Suspense>
    </>
  );
}

export default Login;
