import React from "react";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div>
      <h2>Laporan</h2>
      <p>Halaman ini akan menampilkan laporan pengguna.</p>
      <Link to="/admin/dashboard">
        <button>Kembali ke Dashboard</button>
      </Link>
    </div>
  );
};

export default Reports;
