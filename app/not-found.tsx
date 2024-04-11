import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl">Page Not Found</p>
        <Link href="/" className="btn btn-primary mt-4">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
