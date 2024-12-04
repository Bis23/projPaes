import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";


const FormularioIMT = () => {
    const [email, setEmail] = useState('')
    const [rg, setRG] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dados = {
            "email": email,
            "RG": rg
        }
        const response = await axios.post('http://localhost:4000/aplicador/imt/cadastro', dados)
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
            window.location.href = `/cadastro/imt/?success=false`
        });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-1' controlId='login.ControlInput'>
                    <Form.Label>Endereço de E-mail</Form.Label>
                    <Form.Control type='text' name="email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='senha.ControlInput'>
                    <Form.Label>R.G</Form.Label>
                    <Form.Control type='text' name="rg" value={rg} onChange={(e) => {setRG(e.target.value)}}></Form.Control>
                </Form.Group>
                <div className='d-flex justify-content-center mb-3'>
                    <Button className='btn-primary' type="submit">Enviar</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormularioIMT;