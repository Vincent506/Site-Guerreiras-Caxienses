import { useState } from "react";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Denuncia from "./pages/Denuncia";
import ListaDenuncias from "./pages/listaDenuncias";

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
            Ver Denúncias
          </button>

        </div>

        {
          tela === "lista"
          ? <ListaDenuncias />
          : <Denuncia />
        }

      </div>
    );
  }

  return (

    <div className="container">

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

      </div>

      {
        tela === "login"
        ? <Login />
        : <Cadastro />
      }

    </div>
  );
}

export default App;