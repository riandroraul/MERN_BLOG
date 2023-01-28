import React from "react";
import "./register.scss";
import { registerImage } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={registerImage} alt="images" className="bg-image" />
      </div>
      <div className="right">
        <p className="title" s>
          Form Register
        </p>
        <Input label="Fullname" placeholder="Full Name" />
        <Gap height={8} />
        <Input label="Email" placeholder="Email" />
        <Gap height={8} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke login" />
      </div>
    </div>
  );
};

export default Register;
