import React from "react";

const Contato = () => {

  const containerStyle = {
    display: "flex",
    minHeight: "70vh",
    padding: "15px",
    backgroundColor: "#f7f7f7",
  };

  const mapSectionStyle = {
    width: "60%",
    paddingRight: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textSectionStyle = {
    width: "40%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "25px",
  };

  /*const titleStyle = {
    backgroundColor: "rgb(33, 58, 53, 0.87)",
    padding: "20px",
    borderRadius: "8px",
    color: "#aa9864",
    width: "100%",
    textAlign: "center",
  };
*/

  const linkStyle = {
    color: "#aa9864",
    textDecoration: "none",
    fontSize: "20px",
    marginBottom: "10px"
  };


  return (
    <div style={{ minHeight: "80vh" }}>
      <div style={containerStyle}>
        <div style={mapSectionStyle}>
          <iframe
            title="Endereço Urutu"
            src="https://www.google.com.br/maps/embed?pb=!1m18!1m12!1m3!1d3762.523350755611!2d-43.35088532663727!3d-21.764209735031655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b3b19d973bf%3A0xaef1d3a2cc83b0b!2sUrutu%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1696518989086!5m2!1spt-BR!2sbr"
            width="90%"
            height="750px"
            style={{ borderRadius: "30px", border: "none" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div style={textSectionStyle}>

          <p>
            Nosso Endereço:
            <a
              href="https://maps.app.goo.gl/XfuwfuTtmFEpt9bP9"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <p>Rua Santo Antônio, 1194</p><p>Centro</p><p>Juiz de Fora - MG</p><p>CEP: 36570-123.</p>
            </a>
          </p>
          <br /><br></br>

          <p>
            Telefone e Whatsapp:
            <p><a
              href="https://api.whatsapp.com/send?phone=553298437657&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20atrav%C3%A9s%20do%20seu%20link%20via%20Site%20da%20Urutu%20Cultural!%20"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              (32) 9843-7657.
            </a></p>
          </p>
          <br /><br></br>

          <p>
            Acesse o nosso Instagram ❖
            <p><a
              href="https://www.instagram.com/urutucultural?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <span style={{ fontStyle: "italic" }}> @urutucultural</span>
            </a>.</p>
          </p>
          <br /><br></br>


          <p>
            Acesse o nosso canal no Youtube ❖
            <p><a
              href="https://www.youtube.com/@urutucultural"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <span style={{ fontStyle: "italic" }}> @urutucultural</span>
            </a>.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
