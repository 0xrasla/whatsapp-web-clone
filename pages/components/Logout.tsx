import { GoogleLogout } from "react-google-login";

interface Props {
  c_Id: string;
}
const Logout = ({ c_Id }: Props) => {
  const response = (res: void) => {
    console.log(res);
  };

  return (
    <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={response}
      clientId={c_Id}
    />
  );
};

export default Logout;
