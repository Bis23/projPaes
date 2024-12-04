import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../components/Logo'
import '../components/styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Cadastro = () => {
    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>De que forma irá atuar no Instituto Mauá de Tecnologia?</h3>
                            <div>
                                <Link to="/cadastro/imt" className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Professor Contratado do CEUN-IMT</Button>    
                                    </div>
                                </Link>
                                <Link to="/cadastro/rpa" className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Aplicador Externo: Pessoa Física</Button>
                                    </div>
                                </Link>
                                <Link to="/cadastro/cnpj" className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Aplicador Externo: Pessoa Jurídica</Button>
                                    </div>
                                </Link>

                            </div>

                        </div>

                    </Row>

                </Container>

            </div>
}

export default Cadastro;