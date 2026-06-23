import { useState } from "react";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Denuncia from "./pages/Denuncia";
import ListaDenuncias from "./pages/listaDenuncias";
import Sobre from "./pages/Sobre";

function App() {

  
  const [tela,setTela] = useState("login");
  
  const token =
    localStorage.getItem("token");

  if(token){

    return (
      

      <div className="container">

        <div className="nav">

          <button
            className="btn"
            onClick={() => setTela("denuncia")}
          >
            Nova Denúncia
          </button>

          <button
            className="btn"
            onClick={() => setTela("lista")}
          >
            Casos Registrados
          </button>

          <button
          className="btn"
          onClick={() => setTela("sobre")}
          >
          Sobre
          </button>

        </div>

       {
       tela === "denuncia"
      ? <Denuncia />
      : tela === "lista"
      ? <ListaDenuncias />
      : <Sobre />
}
      </div>
    );
  }

  return (

    <div className="container">
      <header className="header">

        <h1>
        Guerreiras Caxienses
        </h1>

        <p className="welcome-text">

        Bem-vinda à plataforma
        Guerreiras Caxienses.

        Faça login para acessar
        os recursos da rede de apoio.

        </p>

        </header>
        <div className="stats">

    <div className="stat-card">

      <h2>
        Segurança
      </h2>

      <p>
        Espaço protegido para registro.
      </p>

    </div>

    <div className="stat-card">

      <h2>
        Apoio
      </h2>

      <p>
        Fortalecimento da rede feminina.
      </p>

    </div>

    <div className="stat-card">

      <h2>
        Informação
      </h2>

      <p>
        Acompanhamento dos casos.
      </p>

    </div>

  </div>

      <div className="nav">

        <button
          className="btn"
          onClick={() => setTela("login")}
        >
          Login
        </button>

        <button
          className="btn"
          onClick={() => setTela("cadastro")}
        >
          Cadastro
        </button>

        <button
        className="btn"
        onClick={() => setTela("sobre")}
        >
        Sobre
        </button>

      </div>


    {tela === "login" && <Login />}

    {tela === "cadastro" && <Cadastro />}

    {tela === "sobre" && <Sobre />}

    </div>
  );
}

export default App;