import React, { useState } from 'react';
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


const Coordenador = () => {
    const [nomeResp, setNomeResp] = useState('')
    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Bem vindo coordenador(a), selecione seu nome abaixo e o que deseja fazer</h3>
                            <div>
                                <Form.Label>Nome do coordenador</Form.Label>
                                <Form.Select className="mt=1 mb-3" name="nomeResp" value={nomeResp} onChange={(e) => setNomeResp(e.target.value)}>
                                    <option>----------------------</option>
                                    <option value="Anderson Harayashiki Moreira">Anderson Harayashiki Moreira</option>
                                    <option value="Armando Zanone">Armando Zanone</option>
                                    <option value="Everson Denis">Everson Denis</option>
                                    <option value="Flavia Loss de Araujo">Flavia Loss de Araujo</option>
                                    <option value="Gabriela Sá Leitão de Mello">Gabriela Sá Leitão de Mello</option>
                                    <option value="Keiti Pereira Vidal de Souza">Keiti Pereira Vidal de Souza</option>
                                    <option value="Marcelo Marques Gomes">Marcelo Marques Gomes</option>
                                    <option value="Mariana Fontes Perez Rial">Mariana Fontes Perez Rial</option>
                                    <option value="Murilo Marcos Orefice">Murilo Marcos Orefice</option>
                                    <option value="Valdir Melero Junior">Valdir Melero Junior</option>
                                    <option value="Vanessa Seriacopi">Vanessa Seriacopi</option>
                                    <option value="Wanderson de Oliveira Assis">Wanderson de Oliveira Assis</option>
                                </Form.Select>
                                <Link to={`/coordenadores/aprovar/?nome=${nomeResp}`} className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Aprovar atividades PAE</Button>    
                                    </div>
                                </Link>
                                <Link to={`/coordenadores/atividade/?nome=${nomeResp}`} className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Consultar atividades</Button>
                                    </div>
                                </Link>
                                <Link to={`/coordenadores/aplicador/?nome=${nomeResp}`} className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Consultar aplicadores</Button>
                                    </div>
                                </Link>

                            </div>

                        </div>

                    </Row>

                </Container>

            </div>
}

export default Coordenador;