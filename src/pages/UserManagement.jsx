import React from "react";
import { Link } from "react-router-dom";

const UserManagement = () => {
  return (
    <div>
      <h2>Manajemen Pengguna</h2>
      <p>Fitur ini akan berisi daftar pengguna yang terdaftar.</p>
      <Link to="/admin-dashboard">
        <button>Kembali ke Dashboard</button>
      </Link>
    </div>
  );
};

export default UserManagement;
