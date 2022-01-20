import { useState } from "react";
import { GoogleLogin } from "react-google-login";

interface Props {
  c_Id: string;
  LoginResponse: Function;
}

const Login = ({ c_Id, LoginResponse }: Props) => {
  return (
    <GoogleLogin
      clientId={c_Id ? c_Id : ""}
      buttonText="Login With Google"
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      onSuccess={(res) => LoginResponse(res)}
    />
  );
};

export default Login;
