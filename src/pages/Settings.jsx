import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <h2>Pengaturan</h2>
      <p>Atur preferensi dan konfigurasi aplikasi di sini.</p>
      <Link to="/admin-dashboard">
        <button>Kembali ke Dashboard</button>
      </Link>
    </div>
  );
};

export default Settings;
