import { useState } from "react";
import api from "../services/api";

export default function Denuncia() {
  
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [categoria, setCategoria] = useState("");

  async function enviar() {

    try {

      const resposta = await api.post(
        "/denuncias",
        {
          titulo,
          descricao,
          local,
          categoria
        }
      );

      console.log(resposta.data);

      alert("Denúncia enviada!");

    } catch (err) {

      console.error(err);

      alert("Erro ao enviar denúncia");
    }
  }



 return (

  <div className="card">

    <h1 className="title">
      Registrar Ocorrência
    </h1>
    <p className="form-info">

    Descreva a situação da forma
    mais detalhada possível.
    Suas informações serão tratadas
    com responsabilidade.

    </p>

    <input
      className="input"
      value={titulo}
      placeholder="Título"
      onChange={(e)=>setTitulo(e.target.value)}
    />

    <input
      className="input"
      value={local}
      placeholder="Local"
      onChange={(e)=>setLocal(e.target.value)}
    />

    <input
      className="input"
      value={categoria}
      placeholder="Categoria"
      onChange={(e)=>setCategoria(e.target.value)}
    />

    <textarea
      className="textarea"
      value={descricao}
      placeholder="Descrição"
      onChange={(e)=>setDescricao(e.target.value)}
    />

    <br />
    <br />

    <button
      className="btn"
      onClick={enviar}
    >
      Enviar denúncia
    </button>

  </div>
);
}