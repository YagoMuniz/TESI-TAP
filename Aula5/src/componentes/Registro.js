import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Registro() {

    return (
        <Container style={{display: 'flex', backgroundColor:'white', justifyContent:'center', alignItems:'center', padding: '0', width:'100vh', height: '100vh'}}>
            <Form style={{border:'2px solid #000000', borderRadius:'20px' , padding:'15px'}} >
            <h2>Registre-se</h2>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Usuário" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Email" type="email" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Senha" type="password" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Confirmar Senha" type="password" />
                    </InputGroup>
                </Col>
                <Col>
                    <div className="text-right">
                        <Button variant="success" type="submit">  Confirmar </Button>
                    </div>
                </Col>
            </Form>
        </Container>
    );
}

export default Registro;