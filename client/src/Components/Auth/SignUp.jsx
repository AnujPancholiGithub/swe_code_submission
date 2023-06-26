import React, { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
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
        <label>Name</label>
        <input
          value={name}
          type="text"
          name="name"
          placeholder="Enter Your name"
          onChange={(e) => setEmail((prev) => e.target.value)}
        />
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
          name="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword((prev) => e.target.value)}
        />
        <button type="submit" onClick={handleSignUp}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
