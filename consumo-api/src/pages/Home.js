import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    flexWrap: "wrap",
  };

  const textContainerStyle = {
    flex: "1 1 45%",
    paddingLeft: "40px",
  };

  const imageContainerStyle = {
    flex: "1 1 45%",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.5",
    marginBottom: "20px",
    textAlign: "justify",
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: 0,
  };

  const listItemStyle = {
    marginBottom: "10px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    display: "inline-block",
    backgroundColor: "transparent",
    color: "#333",
    padding: "10px 20px",
    border: "2px solid #333",
    borderRadius: "100px",
    fontSize: "1rem",
    textDecoration: "none",
    marginTop: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  // Estilo do botão quando o mouse passa por cima
  const buttonHoverStyle = {
    backgroundColor: "#333",
    color: "#fff",
  };

  return (
    <div>
      <h1 align="center"></h1>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img
            src="/LOGO_URUTU SEM FUNDO.png"
            alt="Logo Urutu Cultural"
            style={imageStyle}
          />
        </div>

        <div style={textContainerStyle}>
          <h2 style={titleStyle}>O que fazemos na Urutu Cultural?</h2>
          <p style={descriptionStyle}>
            A Urutu Cultural é um espaço multifuncional que une cultura e
            comunidade em cada detalhe. Oferecemos uma barbearia com estilo
            autêntico, promovemos batalhas de rimas que celebram a expressão
            artística local, e nossa biblioteca comunitária, abastecida por
            doações, é um refúgio de conhecimento acessível para todos. Além
            disso, temos um clube cultural vibrante, onde realizamos minicursos
            e eventos como saraus, proporcionando um palco para talentos
            diversos. Para expandir nossas discussões e compartilhar saberes,
            também produzimos um podcast que explora temas culturais e sociais
            relevantes. Aqui, cultura e comunidade caminham juntas!
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>✓ Barbearia</li>
            <li style={listItemStyle}>✓ Batalhas de Rimas</li>
            <li style={listItemStyle}>✓ Biblioteca</li>
            <li style={listItemStyle}>✓ Clube Cultural</li>
            <li style={listItemStyle}>✓ Minicursos</li>
            <li style={listItemStyle}>✓ Podcast</li>
            <li style={listItemStyle}>✓ Sarau</li>
          </ul>
          <Link
            to="/biblioteca"
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#aa9864")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#323a23")}
          >
            Conheça nossa Biblioteca!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
