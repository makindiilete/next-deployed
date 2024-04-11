import React from "react";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin HomePage</h1>
      <br />
      <button className="btn mb-5">
        <Link href="/admin/dashboard">Dashboard</Link>
      </button>
    </div>
  );
};

export default AdminPage;
