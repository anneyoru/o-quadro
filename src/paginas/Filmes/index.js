/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobal } from '../../AcessoGlobal';

// importar estilos
// import {} from "./estilo.js";
import {
  Titulo, Barra, Pesquisa, BotaoPesquisa,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';
import GaleriaFilmes from '../../componentes/GaleriaFilmes';

function Filmes() {
  const [global, mudarGlobal] = useGlobal();

  const { categoria } = useParams();
  const { filmes } = global.db;
  const [busca, setBusca] = useState('');

  return (

    <Base
      menuSocialVermelho={false}
      estadoMenu={1}
    >
      <Barra>
        <Pesquisa
          type="text"
          id="busca"
          value={busca}
          placeholder="Buscar nome do Filme"
          onChange={(evento) => setBusca(evento.target.value)}
        />
      </Barra>
      <Titulo>{global.ptBr ? 'Filmes' : 'Films'}</Titulo>
      <GaleriaFilmes categoria={busca !== '' ? busca : categoria} />

    </Base>
  );
}

export default Filmes;
