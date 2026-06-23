import { useState } from "react";
import api from "../services/api";

function sair() {

  localStorage.removeItem(
    "token"
  );

  window.location.reload();
}

export default function Login(){

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  async function entrar() {

  try {

    const response =
      await api.post(
        "/auth/login",
        {
          email,
          senha
        }
      );

    localStorage.setItem(
      "token",
      response.data.token
    );

    window.location.reload();

  } catch (err) {

    alert("Login inválido");

    console.error(err);
  }
}

    return (

  <div className="card">

    <h1 className="title">
      Guerreiras Caxienses
    </h1>

    <input
      className="input"
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
    />

    <input
      className="input"
      type="password"
      placeholder="Senha"
      onChange={(e)=>setSenha(e.target.value)}
    />

    <button
      className="btn"
      onClick={entrar}
    >
        Entrar
      </button>

    </div>
  );
}