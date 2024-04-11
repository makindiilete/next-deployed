"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NewUser = () => {
  //Programmatic Navigation
  const router = useRouter();
  return (
    <div>
      <p>Create a new user</p>
      <br />
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        CREATE
      </button>
    </div>
  );
};

export default NewUser;
