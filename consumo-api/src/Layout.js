import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import './style.css';

const Layout = () => {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#323a23" }}>
        <Toolbar>
          <nav>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                padding: 0,
                margin: 0,
                textAlign: "center",
                alignItems: "center",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                color: "#aa9864",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <li>
                <img
                  src="/LOGO_URUTU SEM FUNDO.png"
                  alt="Logo"
                  style={{
                    width: "80px",
                    height: "80px",
                    marginRight: "15px",
                  }}
                />
              </li>

              <li style={{ flex: "1", fontWeight: "bold", marginRight: "20px" }}>
                <Typography variant="h4" component="h2" style={{ color: "#aa9864" }}>
                  Urutu Cultural
                </Typography>
              </li>

              {/* Links */}
              {["home", "biblioteca", "podcast", "contato"].map((item, idx) => (
                <li key={idx} style={{ marginRight: "20px" }}>
                  <Link
                    to={`/${item}`}
                    style={{
                      color: "#aa9864",
                      textDecoration: "none",
                      fontSize: "1rem",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#fff"}
                    onMouseLeave={(e) => e.target.style.color = "#aa9864"}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      <main style={{ padding: "20px", minHeight: "60vh" }}>
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#323a23",
          color: "#aa9864",
        }}
      >
        <Typography variant="body2" color="#aa9864">
          Acesse o nosso Instagram ❖
          <a
            href="https://www.instagram.com/urutucultural?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#aa9864", textDecoration: "none" }}
          >
            <span style={{ fontStyle: "italic" }}> @urutucultural</span>
          </a>
          <br />
          Acesse também o nosso canal no Youtube ❖
          <a
            href="https://www.youtube.com/@urutucultural"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#aa9864", textDecoration: "none" }}
          >
            <span style={{ fontStyle: "italic" }}> @urutucultural</span> !
          </a>
        </Typography>
      </footer>
    </>
  );
};

export default Layout;
