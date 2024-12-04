/*
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Historia = () => {

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  const titleStyle = {
    backgroundColor: "rgba(100, 126, 91, 1)",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
  };

  const textStyle = {
    backgroundColor: "rgba(100, 126, 91, 1)",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "justify",
    fontFamily: "'Lora', serif",
    fontSize: "18px",
    lineHeight: "1.6",
  };

  // Definir um array de parágrafos para o texto
  const historiaText = [
    "A Urutu Cultural nasceu da ideia de unir duas paixões: a cultura e a convivência comunitária...",
    "A biblioteca, o coração da Urutu Cultural, vive exclusivamente de doações...",
    "O site da Urutu Cultural se dedica a contar a história dessa biblioteca única..."
  ];

  return (
    <div style={containerStyle}>

      <h1 style={titleStyle}>História da Urutu Cultural</h1>
      <h2 style={titleStyle}>"Somos o que somos"</h2>

      <div style={textStyle}>
        {historiaText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

    </div>
  );
};

export default Historia;

*/