import React from "react";
import { Form } from "react-bootstrap";



const compTecn = () => {
    return(
        <Form.Select className="mb-3">
            <option>---------------------</option>
            <option value="1">Analisar e compreender os fenômenos, eventos e modelos de sua área com base nas ciências que a fundamentam.</option>
            <option value="2">Aprender de forma autônoma e lidar com situações e contextos novos e/ou complexos.</option>
            <option value="3">Conceber criativamente, projetar e analisar sistemas, produtos (bens e serviços) componentes ou processos, viáveis técnica e economicamente.</option>
            <option value="3">Conhecer e aplicar com ética a legislação e os atos normativos no âmbito do exercício da profissão.</option>
            <option value="3">Conhecer o setor produtivo de sua especialização, revelando sólida visão setorial, relacionado ao mercado, materiais, processos produtivos e tecnologias.</option>
            <option value="3">Compreender o potencial das tecnologias e aplicá-las na resolução de problemas e aproveitamento de oportunidades.</option>
            <option value="3">Comunicar-se eficazmente nas formas escrita, oral e gráfica, incluindo a comunicação em LIBRAS.</option>
            <option value="3">Formular e conceber soluções desejáveis e inovadoras na sua área.</option>
            <option value="3">Implantar, supervisionar e controlar as soluções de sua área.</option>
            <option value="3">Trabalhar e liderar equipes multidisciplinares.</option>
        </Form.Select>
    )
}


export default compTecn;