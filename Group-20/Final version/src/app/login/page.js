"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [showToast, setShowToast] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <div
        className="text-center mb-4"
        style={{ marginTop: "25px" }}
        id="Restaurants"
      >
        <SectionHeaders mainHeader={"LOGIN"} />
      </div>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button disabled={loginInProgress} type="submit">
          Login
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4 underline" onClick={() => toast.success('A verification link has been sent to your email')}>
          Forgot Your Password?{" "}
        </div>
      </form>
    </section>
  );
}
