import Link from "next/link";

function Login() {
  return (
    <section className='loginPage'>

      <div className="loginContainer">

        <div className="loginTitles">
          <div className="loginHeader">
            <h1>MANAGE COURSES</h1>
          </div>
          <h2>SIGN IN</h2>
          <p>Enter your credentials to access your account</p>
        </div>

      <form className="loginForm" >

        <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          <label htmlFor="password" className="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          <button type="submit" className="loginButton">SIGN IN</button>
      </form>

      
      <span className="resetPassword">
        Forgot your password? &nbsp; <Link href="/reset" >Reset Password</Link>
      </span>

      </div>
      
    </section>
  )
}

export default Login