import { GoogleLogout } from "react-google-login";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {
  c_Id: string;
}
const Logout = ({ c_Id }: Props) => {
  const router = useRouter();
  const response = (res: void) => {
    axios.get("/api/logout").then((res) => {
      router.push("/");
    });
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
