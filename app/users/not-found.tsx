"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl">User Not Found</p>
        <div className="btn btn-primary mt-4" onClick={() => router.back()}>
          Go Home
        </div>
      </div>
    </div>
  );
};

export default NotFound;
