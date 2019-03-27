import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import Modal from 'react-bootstrap/Modal';

function CompraFinalizada() {
    let { state: {finalizaVisivel}, setFinalizaVisivel } = useContext(LojaContext);
    return (
        <Modal show={finalizaVisivel} centered onHide={() => setFinalizaVisivel(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row">
            <div class="col-6">
                <img class="img-fluid" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png"></img>
            </div>
            <div class="col-6">
                <h3>Obrigado pela preferência. Sua compra foi finalizada com sucesso. Aguarde o produto.</h3>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
}

export default CompraFinalizada;