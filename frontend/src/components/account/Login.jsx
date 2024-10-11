import React from 'react'

const Login = () => {
  return (
    <form>
      <fieldset>
        <legend>Legend</legend>
        <div className="row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly=""
              className="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
            ></input>
          </div>
        </div>
        <div>
          <label for="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div>
          <label for="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            autocomplete="off"
          ></input>
        </div>
      </fieldset>
    </form>
  )
}

export default Login
