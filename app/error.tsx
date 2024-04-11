"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface IProps {
  error: Error; // d error object
  reset: () => void; // function to retry d action that led to the error
}

const Error = ({ error, reset }: IProps) => {
  console.log({ error });
  const router = useRouter();
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-red-500 font-bold">
        Unexpected Error Occurred
      </h1>
      <p className="text-xl mt-4 text-center">
        Sorry for the inconvenience. Our team has been notified and will handle
        this issue shortly.
      </p>
      <button className="btn btn-error btn-lg mt-8" onClick={() => reset}>
        RETRY
      </button>
    </div>
  );
};

export default Error;
