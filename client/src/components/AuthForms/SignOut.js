import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignOutPage = () => {
  const navigate = useNavigate();
  Cookies.remove("jwt");
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};

export default SignOutPage;
