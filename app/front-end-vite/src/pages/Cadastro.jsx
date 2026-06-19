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
    <div>

      <h2>Cadastro</h2>

      <input
        value={nome}
        placeholder="Nome"
        onChange={(e) =>
          setNome(e.target.value)
        }
      />

      <br />

      <input
        value={email}
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />

      <input
        type="password"
        value={senha}
        placeholder="Senha"
        onChange={(e) =>
          setSenha(e.target.value)
        }
      />

      <br />

      <button onClick={cadastrar}>
        Cadastrar
      </button>

    </div>
  );
}