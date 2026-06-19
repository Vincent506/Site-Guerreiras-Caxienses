import { useState } from "react";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Denuncia from "./pages/Denuncia";

function App() {

  const [tela, setTela] =
    useState("login");

  const token =
    localStorage.getItem("token");

  if (token) {

    return <Denuncia />;
  }

  return (

    <div>

      <button
        onClick={() =>
          setTela("login")
        }
      >
        Login
      </button>

      <button
        onClick={() =>
          setTela("cadastro")
        }
      >
        Cadastro
      </button>

      <hr />

      {tela === "login"
        ? <Login />
        : <Cadastro />
      }

    </div>
  );
}

export default App;