import { useState } from "react";
import api from "../services/api";
import Sobre from "./Sobre";

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

    <div className="hero">

    <h2>
     Você não está sozinha.
    </h2>

    <p>
    A plataforma Guerreiras Caxienses foi criada
    para fortalecer a rede de apoio às mulheres,
    oferecendo um espaço seguro para registrar
    ocorrências e buscar orientação.

    </p>

    </div>

    <h1 className="title">
      Entrar
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