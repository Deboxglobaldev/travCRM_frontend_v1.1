import React from "react";
import { NavLink } from "react-router-dom";


{
  /* <script src="../../../../global_assets/js/main/jquery.min.js"></script>
<script src="../../../../global_assets/js/main/bootstrap.bundle.min.js"></script>
<script src="../../../../global_assets/js/plugins/loaders/blockui.min.js"></script> */
}

const Login = ({ setIsLogged }) => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
};

  return (
    <>
      <div className="page-content">
        <div className="content-wrapper">
          <div className="content d-flex justify-content-center align-items-center">
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div className="card mb-0">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                    <h5 className="mb-0">Login to your account</h5>
                    <span className="d-block text-muted">
                      Enter your credentials below
                    </span>
                  </div>

                  <div className="form-group form-group-feedback form-group-feedback-left">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                    <div className="form-control-feedback">
                      <i className="icon-user text-muted"></i>
                    </div>
                  </div>

                  <div className="form-group form-group-feedback form-group-feedback-left">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <div className="form-control-feedback">
                      <i className="icon-lock2 text-muted"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign in <i className="icon-circle-right2 ml-2"></i>
                    </button>
                  </div>

                  <div className="text-center">
                    <NavLink to="/put-path-here">Forgot password?</NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
