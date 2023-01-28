import React from "react";
import { loginImage } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={loginImage} alt="images" className="bg-image" />
      </div>
      <div className="right">
        <p className="title" s>
          Form Login
        </p>
        <Input label="Email" placeholder="Email" />
        <Gap height={8} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="belum punya akun, silahkan daftar" />
      </div>
    </div>
  );
};

export default Login;
