import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Login() {

    return (
        <div style={{backgroundColor: 'blues'}}>

        <Container style={{display: 'flex', backgroundColor:'white', justifyContent:'center', alignItems:'center', padding: '0', width:'100vh', height: '100vh'}}>
            <Form style={{border:'2px solid #000000', borderRadius:'20px' , padding:'15px'}} >
            <h2>Login</h2>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Usuário" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Senha" type="password" />
                    </InputGroup>
                </Col>
                <Col>
                    <div className="text-right">
                        <Button variant="primary" type="submit"> Entrar </Button>
                    </div>
                </Col>
                <br />
                <a href="/registro">Registre-se</a>
            </Form>
        </Container>
        </div>
    );
}

export default Login;