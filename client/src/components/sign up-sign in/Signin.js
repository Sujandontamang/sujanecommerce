import React from 'react'
import "./signup.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Signin = () => {

  const [logdata, setData] = useState({
    email: "",
    password: ""
});
const adddata = (e) => {
  const { name, value } = e.target;
  console.log(logdata);

  setData(() => {
      return {
          ...logdata,
          [name]: value
      }
  })
};
  return (
    <>
      <section>

        <div className="sign_container">
          <div className="sign_header">
            <img src="./naruto.png" alt="signupimg" />
          </div>
          <div className="sign_form">
            <form>
              <h1>sign in</h1>
              <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={logdata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={logdata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
              <button className='signin_btn'>continue </button>

            </form>

          </div>
          <div className="create_accountinfo">
            <p>New to sujanecommerce?</p>
           <NavLink to='/register'><button> create a new account</button></NavLink> 
          </div>

        </div>
      </section>
    </>
  )
}

export default Signin
