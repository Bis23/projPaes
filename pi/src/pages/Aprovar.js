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
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ListaPaes from '../components/listaPaes';
import { Card } from 'react-bootstrap';
import Coordenador from './Coordenador';



const Aprovar = () => {
    const [state, setState] = useState()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const nome = searchParams.get('nome')
    const atividades = axios.get(`http://localhost:4000/coordenador/aprovar/`, {params: {Coordenador: nome}})
    .then(response => setState(response.data))
    .catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
        //window.location.href = `/atividades/cadastro/?success=false`
    });
    

    return <div>
                <Container>
                    <Row>
                        <Logo></Logo>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <div className='bg-white rounded mt-4 pt-3 mb-1 col-10'>
                            <h3 className='justify-content-center d-flex mb-4 font-weight-bold'>Clique em "Aprovar" para aprovar uma atividade</h3>
                            <div className='py-3'>
                                {state?.map((data, key) => {
                                    return (
                                        <div key={key} className='pb-1'>
                                            <Card>
                                                <Card.Header>{data.Nome}</Card.Header>
                                                    <Card.Body>
                                                        <blockquote className="blockquote mb-0">
                                                            <p>Status: {data.Status}; Responsável: {data.Coordenador}</p>
                                                            <footer className="blockquote-footer">
                                                                {data.Horario}
                                                            </footer>
                                                            <Button onClick={() => {
                                                                axios.post('http://localhost:4000/atividade/aprovar', {"codigo": data.Codigo, "status": "Aprovado"})
                                                            }}>
                                                                Aprovar
                                                            </Button>
                                                        </blockquote>
                                                    </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </Row>

                </Container>

            </div>
}

export default Aprovar;