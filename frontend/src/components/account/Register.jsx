import React from 'react'
import { useState } from 'react'

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
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
          <div>
            <br />
            <small className="form-text text-muted">*required</small>
          </div>
          <label htmlFor="firstName" className="form-label mt-4">
            First Name*
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="middleName" className="form-label mt-4">
            Middle Name
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            id="middleName"
            name="middleName"
            placeholder="Enter middle name"
          ></input>
        </div>
        <div>
          <label htmlFor="lastName" className="form-label mt-4">
            Last Name*
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email" className="form-label mt-4">
            Email*
          </label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password" className="form-label mt-4">
            Password*
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
        <div>
          <label htmlFor="password" className="form-label mt-4">
            Confirm Password*
          </label>
          <input
            onChange={handleChange}
            type="confirmPassword"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
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
            Register
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default Register
