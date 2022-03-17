import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";
import { message } from "antd";
const Login = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("afterRegister")) {
      message.success({ duration: 2, content: "Đăng ký thành công!" });
    }
  }, []);
  useEffect(() => {
    user && navigate("/home");
  }, []);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="login-modal-main" id="bd-example-modal">
          <div className="modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="login-modal">
                  <div className="row">
                    <div className="col-lg-6 pad-right-0">
                      <div className="login-modal-left"></div>
                    </div>
                    <div className="col-lg-6 pad-left-0">
                      <div className="login-modal-right">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="login"
                            role="tabpanel"
                            aria-labelledby="tab1"
                          >
                            <LoginForm />
                          </div>
                          <div
                            className="tab-pane fade show"
                            id="register"
                            role="tabpanel"
                            aria-labelledby="tab2"
                          >
                            <RegisterForm />
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="text-center login-footer-tab">
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                id="tab1"
                                data-toggle="tab"
                                href="#login"
                                role="tab"
                              >
                                <i className="mdi mdi-lock"></i> ĐĂNG NHẬP
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="tab2"
                                data-toggle="tab"
                                href="#register"
                                role="tab"
                              >
                                <i className="mdi mdi-pencil"></i> ĐĂNG KÝ
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
