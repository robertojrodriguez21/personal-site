import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <form>
      <fieldset>
        <div>
          <label htmlFor="email" className="form-label mt-4">
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password" className="form-label mt-4">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
          ></input>
        </div>
        <br />
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default Login
