import React from 'react'

import Login from '../components/account/Login'
import Register from '../components/account/Register'

const Account = () => {
  return (
    <div className="col-lg-4 offset-lg-4 col-10 offset-1">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#login"
            aria-selected="false"
            role="tab"
            tabIndex="-1"
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#register"
            aria-selected="true"
            role="tab"
          >
            Register
          </a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade active show" id="login" role="tabpanel">
          <Login />
        </div>
        <div className="tab-pane fade" id="register" role="tabpanel">
          <Register />
        </div>
      </div>
    </div>
  )
}

export default Account
