import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <form>
      <fieldset>
        <div>
          <label htmlFor="email" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div>
          <label htmlFor="password" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            required
          ></input>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default Login
