import { useEffect, useState } from "react";
import api from "../services/api";

export default function ListaDenuncias() {

  const [denuncias,
    setDenuncias] = useState([]);

  useEffect(() => {

    carregar();

  }, []);

  async function carregar() {

    const response =
      await api.get(
        "/denuncias"
      );

    setDenuncias(
      response.data
    );
  }
return (

  <div>

    <h1 className="title">
      Denúncias Registradas
    </h1>

    <div className="grid">

      {denuncias.map(d => (

        <div
          key={d.id}
          className="denuncia-card"
        >

          <h3>{d.titulo}</h3>

          <p>{d.descricao}</p>

          <p>
            <strong>Local:</strong>
            {" "}
            {d.local}
          </p>

          <p>
            <strong>Categoria:</strong>
            {" "}
            {d.categoria}
          </p>

          <span className="badge">
            {d.status}
          </span>

        </div>

      ))}

    </div>

  </div>
);
}