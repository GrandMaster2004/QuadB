import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../slices/authSlice";

function Login() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      {!user ? (
        <button onClick={() => dispatch(login("User"))}>Login</button>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
}

export default Login;
