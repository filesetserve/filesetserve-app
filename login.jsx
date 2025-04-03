import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let role = "";
    if (email.includes("superuser")) role = "superuser";
    else if (email.includes("lics")) role = "lics";
    else role = "client";
    localStorage.setItem("userRole", role);
    router.push("/dashboard");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login Page</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <br /><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
