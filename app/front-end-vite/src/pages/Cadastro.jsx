import { useState } from "react";
import api from "../services/api";

export default function Cadastro() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {

    try {

      await api.post(
        "/auth/register",
        {
          nome,
          email,
          senha
        }
      );

      alert("Usuário cadastrado com sucesso!");

      setNome("");
      setEmail("");
      setSenha("");

    } catch (error) {

      console.error(error);

      alert("Erro ao cadastrar usuário");
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
      Criar Conta
    </h1>

    <input
      className="input"
      value={nome}
      placeholder="Nome"
      onChange={(e)=>setNome(e.target.value)}
    />

    <input
      className="input"
      value={email}
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
    />

    <input
      className="input"
      type="password"
      value={senha}
      placeholder="Senha"
      onChange={(e)=>setSenha(e.target.value)}
    />

    <button
      className="btn"
      onClick={cadastrar}
    >
      Cadastrar
    </button>

  </div>
);
}