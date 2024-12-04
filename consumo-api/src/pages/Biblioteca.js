import React, { useEffect, useState } from "react";
import axios from "axios";

const Biblioteca = () => {
  const [livros, setLivros] = useState([]);
  const [livroPesquisado, setLivroPesquisado] = useState("");

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const resposta = await axios.get("http://urutucultural.kinghost.net:21058/livros", {
          headers: {
            Authorization: "Bearer 1010FFF",
          },
        });

        console.log("Dados recebidos da API:", resposta.data);

        if (Array.isArray(resposta.data)) {
          setLivros(resposta.data);
        } else if (resposta.data.livros && Array.isArray(resposta.data.livros)) {
          setLivros(resposta.data.livros);
        } else {
          console.error("Estrutura inesperada:", resposta.data);
        }
      } catch (error) {
        console.error("Erro ao buscar livros:", error.response || error.message);
      }
    };

    fetchLivros();
  }, []);

  const livrosFiltrados = livros.filter(
    (livro) =>
      livro.Título?.toLowerCase().includes(livroPesquisado.toLowerCase()) ||
      livro.Autor?.toLowerCase().includes(livroPesquisado.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", padding: "0 !important" }}>
      <div
        style={{
          backgroundColor: "rgba(220, 204, 210, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Pesquisar por Título ou Autor ..."
            value={livroPesquisado}
            onChange={(e) => setLivroPesquisado(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
        </div>
        <div>
          <h2>Listagem de Livros</h2>
        </div>
        <br />
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "20px 0",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Título
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Autor
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Temática
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Ano</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Editora
              </th>
            </tr>
          </thead>
          <tbody>
            {livrosFiltrados.length > 0 ? (
              livrosFiltrados.map((livro, index) => (
                <tr key={livro.id || index}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {livro.Título || "Não informado"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {livro.Autor || "Não informado"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {livro.temática || livro["Temática "] || "Não informado"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {livro.ano || livro["Ano "] || "Não informado"}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {livro.Editora || "Não informado"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: "10px", textAlign: "center" }}>
                  Nenhum livro encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Biblioteca;
