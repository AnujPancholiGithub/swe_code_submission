import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          value={email}
          type="text"
          name="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail((prev) => e.target.value)}
        />
        <label>Password</label>
        <input
          value={password}
          type="text"
          name="email"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword((prev) => e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
