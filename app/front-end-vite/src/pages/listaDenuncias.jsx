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

      <h2>Denúncias</h2>

      {denuncias.map(d => (

        <div key={d.id}>

          <h3>{d.titulo}</h3>

          <p>{d.descricao}</p>

          <p>{d.local}</p>

          <p>{d.categoria}</p>

          <p>{d.status}</p>

        </div>

      ))}

    </div>
  );
}