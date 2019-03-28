import React, { useEffect, useContext } from "react";
import { LojaContext } from "../context/LojaContext";
import BarraDeBusca from "./BarraDeBusca";
import ListaDeProdutos from "./ListaDeProdutos";
import CarrinhoDeCompras from "./CarrinhoDeCompras";
import BancoDeDados from "../bd/BancoDeDados";
import CompraFinalizada from "./CompraFinalizada";

function Loja() {
  let { setProdutosBackend } = useContext(LojaContext);

  useEffect(() => {
    BancoDeDados.getProdutos()
      .then(produtos => setProdutosBackend(produtos))
      .catch(err => console.log(err));
  }, []); 

  return (
    <>
      <BarraDeBusca />
      <ListaDeProdutos />
      <CarrinhoDeCompras />
      <CompraFinalizada />
    </>
  );
}

export default Loja;
