import { useState } from "react";
import api from "../services/api";

export default function Denuncia(){

  const [tipo,setTipo] = useState("");
  const [descricao,setDescricao] = useState("");

  async function enviar(){

    const resposta = await api.post(
      "/denuncias",
      {
        tipo,
        descricao
      }
    );

    console.log(resposta.data);
  }

  return (
    <>
      <input
        placeholder="Tipo"
        onChange={(e)=>setTipo(e.target.value)}
      />

      <textarea
        onChange={(e)=>setDescricao(e.target.value)}
      />

      <button onClick={enviar}>
        Enviar denúncia
      </button>
    </>
  );
}