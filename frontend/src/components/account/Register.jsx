import React from 'react'
import { useState, useEffect } from 'react'

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [passwordError, setPasswordError] = useState('')
  const [
    registerButtonDisablePasswordError,
    setRegisterButtonDisablePasswordError
  ] = useState(false)

  // Handle form inputs
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // Password comparison
  useEffect(() => {
    if (formValues.password != formValues.confirmPassword) {
      setPasswordError('Passwords do not match!')
      setRegisterButtonDisablePasswordError(true)
      console.log('Passwords do not match!')
    } else {
      setPasswordError('')
      setRegisterButtonDisablePasswordError(false)
      console.log('Passwords match!')
    }
  })

  // User registration
  const handleRegistration = (e) => {
    e.preventDefault()
  }

  // Component
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
            value={formValues.firstName}
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
            value={formValues.middleName}
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
            value={formValues.lastName}
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
            value={formValues.email}
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
            value={formValues.password}
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
            value={formValues.confirmPassword}
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          ></input>
          <p className="text-danger">{passwordError}</p>
        </div>
        <br />
        {registerButtonDisablePasswordError ? (
          <div>
            <button type="submit" className="btn btn-primary" disabled>
              Register
            </button>
          </div>
        ) : (
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleRegistration}
            >
              Register
            </button>
          </div>
        )}
      </fieldset>
    </form>
  )
}

export default Register
