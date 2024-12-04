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
import Formulario from '../components/formulario';
import { useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";


const CadastroCNPJ = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const success = searchParams.get('success')

    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                {success && (
                    <Alert variant='danger'>Algo deu errado, tente novamente</Alert>
                )}
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Insira suas informações abaixo. Lembre-se de preencher todas as páginas</h3>
                            <div>
                                <Formulario></Formulario>

                            </div>
                            <div className='d-flex justify-content-center my-3'>

                            </div>
                        </div>

                    </Row>

                </Container>

            </div>
}

export default CadastroCNPJ;