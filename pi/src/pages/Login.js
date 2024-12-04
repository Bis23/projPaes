import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../components/Logo'
import '../components/styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const Login = () => {
    const [email, setEmail] = useState('')
    const [rg, setRG] = useState('')
    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Bem vindo(a) ao sistema de cadastro das atividades PAE.</h3>
                            <div>
                                <Form>
                                    <Form.Group className='mb-1' controlId='login.ControlInput'>
                                        <Form.Label>Endereço de E-mail</Form.Label>
                                        <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId='senha.ControlInput'>
                                        <Form.Label>R.G</Form.Label>
                                        <Form.Control type='rg' value={rg} onChange={(e) => setRG(e.target.value)}></Form.Control>
                                    </Form.Group>
                                </Form>
                                <div className='d-flex justify-content-center mb-3'>
                                    <Link to={`/atividades/?email=${email}&RG=${rg}`} className='text-decoration-none'>
                                        <Button className='btn-primary'>Login</Button>
                                    </Link>
                                </div>
                            </div>
                            <p className='justify-content-center d-flex font-weight-bold'>Nunca se cadastrou antes? Deseja alterar os dados de seu cadastro?</p>
                            <div className='d-flex justify-content-center mb-3'>
                                <Link to="/cadastro" className='text-decoration-none'>
                                    <Button className='btn-primary'>Cadastro</Button>
                                </Link>
                            </div>
                        </div>

                    </Row>

                </Container>

            </div>
}

export default Login;