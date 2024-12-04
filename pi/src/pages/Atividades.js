import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../components/Logo'
import '../components/styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Servico = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const success = searchParams.get('success')
    const email = searchParams.get('email')
    const rg = searchParams.get('RG')

    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    {success && (
                        <Alert variant='success'>Cadastro realizado com sucesso!</Alert>
                    )}
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Selecione qual serviço deseja acessar.</h3>
                            <div>
                                <Link to="/atividades/cadastro" className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Cadastrar uma nova atividade</Button>
                                    </div>
                                </Link>
                                <Link to={`/atividades/consulta/?email=${email}&RG=${rg}`} className='text-decoration-none'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Button className='col-12 col-md-8 col-lg-5 font-weight-bold'>Consultar status de atividade</Button>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </Row>

                </Container>

            </div>
}

export default Servico;
