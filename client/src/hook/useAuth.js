import cookie from "js-cookie";
import { useState, useEffect } from "react";

function useAuth() {
  const [token, setToken] = useState(null);
  useEffect(()=>{
    login()
  },[])

  function login() {
    const token = cookie.get("acceass_token");
    setToken(token);
  }

  function logOut() {
    cookie.remove("acceass_token");
    setToken(null);
  }

  return { token: token, login: login, logOut: logOut };
}

export default useAuth;
