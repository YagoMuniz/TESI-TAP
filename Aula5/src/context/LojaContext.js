import React, { useState } from 'react';

export const LojaContext = React.createContext();

export function LojaProvider(props) {
  const [produtosBackend, setProdutosBackend] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);
  const [finalizaVisivel, setFinalizaVisivel] = useState(false);

  const buscar = (termo) => {
    setProdutos(produtosBackend.filter((p) => {
      return p.nome.toLowerCase().includes(termo.toLowerCase());
    }));
  };

  const comprar = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const remover = (indice) => {
    setCarrinho([...carrinho.slice(0, indice), ...carrinho.slice(indice + 1)]);
  };

  const finalizar = () => {
    carrinho.splice(0, carrinho.length);
  }

  return (
    <LojaContext.Provider value={{
        state: { produtos, carrinho, carrinhoVisivel, finalizaVisivel},
        setProdutosBackend: (produtos) => {
          setProdutosBackend(produtos);
          setProdutos(produtos);
        },
        buscar,
        comprar,
        remover,
        finalizar,
        setCarrinhoVisivel,
        setFinalizaVisivel
    }}>
      {props.children}
    </LojaContext.Provider>
  );
}
