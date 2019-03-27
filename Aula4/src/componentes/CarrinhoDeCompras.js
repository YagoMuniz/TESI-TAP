import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemCarrinho from './ItemCarrinho';
import FormataMoeda from './FormataMoeda';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function CarrinhoDeCompras() {
  let { state: {carrinho, carrinhoVisivel}, setCarrinhoVisivel } = useContext(LojaContext);
  let { state: {finalizaVisivel}, setFinalizaVisivel } = useContext(LojaContext);
  let { finalizar } = useContext(LojaContext);

  const renderProduto = (p, i) => (<ItemCarrinho produto={p} index={i} key={i} />);

  const renderCabecalho = () => {
    return (
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Produto</th>
          <th>Valor</th>
          <th>Ação</th>
        </tr>
      </thead>
    );
  };


  const renderFinalizar = () => {
    return (
      <>
        <Button variant="success" onClick={() => { finalizar(); setCarrinhoVisivel(false); setFinalizaVisivel(true); }}> 
            <span hole="img">🗸</span> Finalizar </Button>
      </>
      );
  }

  const renderRodape = () => {
    let total = carrinho.reduce((acc, p) => acc + p.preco, 0);
    return (
      <tfoot>
        <tr>
          <th>&nbsp;</th>
          <th>Total</th>
          <th><FormataMoeda valor={total}/></th>
        </tr>
      </tfoot>
    );
  };

  return (
    <Modal show={carrinhoVisivel} centered onHide={() => setCarrinhoVisivel(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          {renderCabecalho()}
          <tbody>
            {carrinho.map(renderProduto)}
          </tbody>
          {renderRodape()}
        </Table>
        {renderFinalizar()}
      </Modal.Body>
    </Modal>
  );
}

export default CarrinhoDeCompras;