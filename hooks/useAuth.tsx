import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {}

const useAuth = () => {
  const [userData, setUserData] = useState({
    name: "",
  });
  const router = useRouter();

  useEffect(() => {
    axios.get("/api/authorize").then((res) => {
      if (res.data.ok) {
        setUserData(res.data.payload);
      } else {
        router.push("/");
      }
    });
  }, []);

  return [userData];
};

export default useAuth;
