import { useState } from "react";
import api from "../services/api";

export default function Login(){

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  async function entrar(){

    try{

      const response = await api.post(
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

    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e)=>setSenha(e.target.value)}
      />

      <button onClick={entrar}>
        Entrar
      </button>
    </>
  );
}