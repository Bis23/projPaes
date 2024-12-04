import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const FormularioRPA = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [rg, setRG] = useState('')
    const [cpf, setCPF] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [uf, setUF] = useState('')
    const [cidade, setCidade] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [telefone, setTelefone] = useState('')
    const [estCivil, setEstCivil] = useState('')
    const [profissao, setProfissao] = useState('')
    const [curriculo, setCurriculo] = useState('')
    const [url, setURL] = useState('')
    const [lattes, setLattes] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [linkedin, setLinkedin] = useState('')

    const handleSubmit =async (event) => {
        event.preventDefault();
        const dados = {
            "nome": nome,
            "email": email,
            "RG": rg,
            "CPF": cpf,
            "nacionalidade": nacionalidade,
            "UF": uf,
            "cidade": cidade,
            "logradouro" : logradouro,
            "endereco": endereco,
            "complemento": complemento,
            "bairro": bairro,
            "telefone": telefone,
            "estCivil": estCivil,
            "profissao": profissao,
            "curriculo": curriculo,
            "URL": url,
            "lattes": lattes,
            "portfolio": portfolio,
            "linkedin": linkedin
        }
        const response = await axios.post('http://localhost:4000/aplicador/rpa/cadastro', dados)
        .then((response) => {
            // Success
            console.log(response)
            if (response.status === 201){
                window.location.href = `/atividades/?success=true&email=${email}&RG=${rg}`
            }
        })
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
            window.location.href = `/cadastro/rpa/?success=false`
        });
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Tabs defaultActiveKey="Pessoal" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Pessoal" title="Pessoal">
                        <Form.Group className='mb-1' controlId='nome.ControlInput'>
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control
                                type='text'
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='email.ControlInput'>
                            <Form.Label>Endereço de E-mail</Form.Label>
                            <Form.Control
                                type='text'
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='rg.ControlInput'>
                            <Form.Label>Número de R.G.</Form.Label>
                            <Form.Control
                                type='text'
                                name="rg"
                                value={rg}
                                onChange={(e) => setRG(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='cpf.ControlInput'>
                            <Form.Label>Número de CPF</Form.Label>
                            <Form.Control
                                type='text'
                                name="cpf"
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='nacionalidade.ControlInput'>
                            <Form.Label>Nacionalidade</Form.Label>
                            <Form.Control
                                type='text'
                                name="nacionalidade"
                                value={nacionalidade}
                                onChange={(e) => setNacionalidade(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='unifed.ControlInput'>
                            <Form.Label>Unidade Federativa</Form.Label>
                            <Form.Control
                                type='text'
                                name="uf"
                                value={uf}
                                onChange={(e) => setUF(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='cidade.ControlInput'>
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control
                                type='text'
                                name="cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='logradouro.ControlInput'>
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control
                                type='text'
                                name="logradouro"
                                value={logradouro}
                                onChange={(e) => setLogradouro(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='numero.ControlInput'>
                            <Form.Label>Número de Endereço</Form.Label>
                            <Form.Control
                                type='text'
                                name="endereco"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='complemento.ControlInput'>
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control
                                type='text'
                                name="complemento"
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='bairro.ControlInput'>
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control
                                type='text'
                                name="bairro"
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='telefone.ControlInput'>
                            <Form.Label>Telefone para Contato</Form.Label>
                            <Form.Control
                                type='text'
                                name="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='estcivil.ControlInput'>
                            <Form.Label>Estado Civil</Form.Label>
                            <Form.Control
                                type='text'
                                name="estCivil"
                                value={estCivil}
                                onChange={(e) => setEstCivil(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-1' controlId='profissao.ControlInput'>
                            <Form.Label>Profissão Atual</Form.Label>
                            <Form.Control
                                type='text'
                                name="profissao"
                                value={profissao}
                                onChange={(e) => setProfissao(e.target.value)}></Form.Control>
                        </Form.Group>

                    </Tab>
                    <Tab eventKey="Profissional" title="Profissional">
                        <Form.Group className='mb-1' controlId='curriculo.ControlInput'>
                            <Form.Label>Curriculo</Form.Label>
                            <Form.Control as="textarea" rows="4" type='text' name="curriculo" value={curriculo} onChange={(e) => setCurriculo(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='url.ControlInput'>
                            <Form.Label>URL ou Site</Form.Label>
                            <Form.Control type='text' name="url" value={url} onChange={(e) => setURL(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='lattes.ControlInput'>
                            <Form.Label>Lattes</Form.Label>
                            <Form.Control type='text' name="lattes" value={lattes} onChange={(e) => setLattes(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='portfolio.ControlInput'>
                            <Form.Label>Portfólio</Form.Label>
                            <Form.Control type='text' name="portfolio" value={portfolio} onChange={(e) => setPortfolio(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='linkedin.ControlInput'>
                            <Form.Label>Linkedin</Form.Label>
                            <Form.Control type='text' name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Tab>
                </Tabs>
                <div className='d-flex justify-content-center my-3'>
                    <Button className='btn-primary' type="submit">Enviar</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormularioRPA;