import React from "react";

const Login = () => {
  const backendUrl = "http://localhost:5001";

  return (
    <div>
      <a href={`${backendUrl}/login`}>Login</a>
      <a href={`${backendUrl}/logout`}>Logout</a>
    </div>
  );
};

export default Login;
