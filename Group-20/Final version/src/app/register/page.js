"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  return (
    <section className="mt-8">
      <div
        className="text-center mb-4"
        style={{ marginTop: "25px" }}
        id="Restaurants"
      >
      <SectionHeaders mainHeader={"REGISTER"} />
        </div>
        <form className="block max-w-xs mx-auto">
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          disabled={creatingUser}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Street Address"
          value={street}
          disabled={creatingUser}
          onChange={(ev) => setStreet(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={postal}
          disabled={creatingUser}
          onChange={(ev) => setPostal(ev.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          disabled={creatingUser}
          onChange={(ev) => setCity(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          disabled={creatingUser}
          onChange={(ev) => setCountry(ev.target.value)}
        />
        <button className="border-red-600 bg-red-800 text-white px-8 py-2;">
          Register
        </button>
        <div className="text-center my-4 text-gray-500">Or</div>
        <div>
          <button className="border-green-600 bg-green-600 text-white px-8 py-2;">
            Register Restaurant
          </button>
        </div>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
