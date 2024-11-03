import React from "react";
import "./RootlayOut.css";
import { Outlet, useNavigate } from "react-router-dom";

function RootLayout() {
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div className="main-container bg-danger">
      <nav>
        <div>
          <h2><button id="logout" onClick={logout}>Logout</button></h2>
        </div>
      </nav>
      
      <main>
        <Outlet/>
      </main>

      <footer>
        <h2>@2024</h2>
      </footer>
    </div>
  );
}

export default RootLayout;
