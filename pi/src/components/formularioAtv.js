import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import axios from "axios";


const FormularioAtv = () => {
    const [nome,
        setNome] = useState('');
    const [emailAplicador,
        setEmailAplicador] = useState('')
    const [rg,
        setRG] = useState('');
    const [tipoAplicador,
        setTipoAplicador] = useState('');
    const [nomeResp,
        setNomeResp] = useState('');
    const [descricao,
        setDescricao] = useState('');
    const [categoria,
        setCategoria] = useState('');
    const [publico,
        setPublico] = useState('');
    const [objetivos,
        setObjetivos] = useState('');
    const [metodologia,
        setMetodologia] = useState('');
    const [topicos,
        setTopicos] = useState('');
    const [desafios,
        setDesafios] = useState('');
    const [sala,
        setSala] = useState('');
    const [partCom,
        setPartCom] = useState('');
    const [materiais,
        setMateriais] = useState('');
    const [competenciaTec1,
        setCompetenciaTec1] = useState('');
    const [competenciaTec2,
        setCompetenciaTec2] = useState('');
    const [competenciaTra1,
        setCompetenciaTra1] = useState('');
    const [competenciaTra2,
        setCompetenciaTra2] = useState('');
    const [imagem1,
        setImagem1] = useState('');
    const [imagem2,
        setImagem2] = useState('');
    const [imagem3,
        setImagem3] = useState('');
    const [video,
        setVideo] = useState('');
    const [dia1,
        setDia1] = useState('');
    const [hora1,
        setHora1] = useState('');
    const [dia2,
        setDia2] = useState('');
    const [hora2,
        setHora2] = useState('');
    var aplicadorRPA = ""
    var aplicadorPJ = ""
    var aplicadorMaua_Email = ""
    var aplicadorMaua_RG = ""

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (tipoAplicador === "Contratado do IMT"){
            aplicadorMaua_RG = rg;
            aplicadorMaua_Email = emailAplicador;
            aplicadorRPA = null;
            aplicadorPJ = null;
        } else if (tipoAplicador === "Aplicador PJ/MEI"){
            aplicadorPJ = rg;
            aplicadorMaua_RG = null;
            aplicadorMaua_Email = null;
            aplicadorRPA = null;
        } else if (tipoAplicador === "Aplicador RPA"){
            aplicadorRPA = rg;
            aplicadorPJ = null;
            aplicadorMaua_Email = null;
            aplicadorMaua_RG = null;
        }
        const dados = {
            "nome": nome,
            "coordenador": nomeResp,
            "categoria": categoria,
            "publicoAlvo": publico,
            "descricao": descricao,
            "topicos": topicos,
            "objetivos": objetivos,
            "metodologia": metodologia,
            "desafios": desafios,
            "recursos": materiais,
            "competenciasTecnicas": `${competenciaTec1}, ${competenciaTec2}`,
            "competenciasTransversais": `${competenciaTra1}, ${competenciaTra2}`,
            "sala": sala,
            "partComunidade": partCom,
            "status": "aguardando",
            "horario": `${dia1}, ${hora1} ou ${dia2}, ${hora2}`,
            "video": video,
            "aplicadorRPA": aplicadorRPA,
            "aplicadorPJ": aplicadorPJ,
            "aplicadorMaua_Email": aplicadorMaua_Email,
            "aplicadorMaua_RG": aplicadorMaua_RG

        }
        const response = await axios.post('http://localhost:4000/atividade/cadastro', dados)
        .then((response) => {
            // Success
            console.log(response)
            if (response.status === 201){
                window.location.href = `/atividades/?success=true&email=${emailAplicador}&RG=${rg}`
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
            window.location.href = `/atividades/cadastro/?success=false`
        });
    }

    const onChangeSala = (e) => {
        setSala(e.target.value);
    }
    const onChangeParticipacao = (e) => {
        setPartCom(e.target.value);
    }
    const onChangeDia1 = (e) => {
        setDia1(e.target.value);
    }
    const onChangeHorario1 = (e) => {
        setHora1(e.target.value);
    }
    const onChangeDia2 = (e) => {
        setDia2(e.target.value);
    }
    const onChangeHorario2 = (e) => {
        setHora2(e.target.value);
    }
    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <Tabs>
                    <Tab eventKey="geral" title="Informações Gerais">
                        <Form.Group className='mb-1 mt-3' controlId='nome.ControlInput'>
                            <Form.Label>Nome Sugerido da Atividade</Form.Label>
                            <Form.Control
                                type='text'
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1 mt-3' controlId='rg.ControlInput'>
                            <Form.Label>RG do Aplicador/Professor</Form.Label>
                            <Form.Control
                                type='text'
                                name="rg"
                                value={rg}
                                onChange={(e) => setRG(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-1 mt-3' controlId='nome.ControlInput'>
                            <Form.Label>E-mail do aplicador</Form.Label>
                            <Form.Control
                                type='text'
                                name="emailAplicador"
                                value={emailAplicador}
                                onChange={(e) => setEmailAplicador(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Forma de cadastro do aplicador</Form.Label>
                            <Form.Select
                                name="nome"
                                value={tipoAplicador}
                                onChange={(e) => setTipoAplicador(e.target.value)}>
                                <option value="">----------------------</option>
                                <option value="Contratado do IMT">Contratado do IMT</option>
                                <option value="Aplicador PJ/MEI">Aplicador PJ/MEI</option>
                                <option value="Aplicador RPA">Aplicador RPA</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nome do responsavel de PAE em sua área (contato no IMT)</Form.Label>
                            <Form.Select
                                className="mt-3"
                                name="nomeResp"
                                value={nomeResp}
                                onChange={(e) => setNomeResp(e.target.value)}>
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
                        </Form.Group>
                        <Form.Group className='my-2' controlId='descricao.ControlInput'>
                            <Form.Label>Descrição breve da atividade</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                type='text'
                                name="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Escolha a categoria da sua PAE</Form.Label>
                            <Form.Select
                                className="mt-3"
                                name="categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}>
                                <option>----------------------</option>
                                <option value="Capacitação em softwares">Capacitação em softwares</option>
                                <option value="Carreiras">Carreiras</option>
                                <option value="Cidadania">Cidadania</option>
                                <option value="Cidades e soluções urbanas">Cidades e soluções urbanas</option>
                                <option value="Ciência de dados">Ciência de dados</option>
                                <option value="Ciências aplicadas">Ciências aplicadas</option>
                                <option value="Ciências exatas">Ciências exatas</option>
                                <option value="Competências gerenciais">Competências gerenciais</option>
                                <option value="Competições acadêmicas">Competições acadêmicas</option>
                                <option value="Computação em Nuvem">Computação em Nuvem</option>
                                <option value="Desenvolvimento de habilidades socioemocionais">Desenvolvimento de habilidades socioemocionais</option>
                                <option value="Desenvolvimento de software">Desenvolvimento de software</option>
                                <option value="Empreendedorismo">Empreendedorismo</option>
                                <option value="Energia">Energia</option>
                                <option value="Expressão e representação gráfica">Expressão e representação gráfica</option>
                                <option value="Finanças">Finanças</option>
                                <option value="Gestão industrial">Gestão industrial</option>
                                <option value="Hardware e sistemas embarcados">Hardware e sistemas embarcados</option>
                                <option value="Jogos">Jogos</option>
                                <option value="Maquetes e modelagem">Maquetes e modelagem</option>
                                <option value="Materiais">Materiais</option>
                                <option value="Meio ambiente e sustentabilidade">Meio ambiente e sustentabilidade</option>
                                <option value="Metodologia da pesquisa e redação técnica">Metodologia da pesquisa e redação técnica</option>
                                <option value="Pesquisa e desenvolvimento de produtos">Pesquisa e desenvolvimento de produtos</option>
                                <option value="Projetos e processos industrias">Projetos e processos industrias</option>
                                <option value="Redes e Infraestrutura">Redes e Infraestrutura</option>
                                <option value="Robótica e automação">Robótica e automação</option>
                                <option value="Segurança Digital">Segurança Digital</option>
                                <option value="Simulação e otimização computacional">Simulação e otimização computacional</option>
                                <option value="Soluções de Engenharia">Soluções de Engenharia</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='my-2' controlId='publico.ControlInput'>
                            <Form.Label>Indicado para: (Indique o público alvo, sem impor restrições)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                type='text'
                                name="publico"
                                value={publico}
                                onChange={(e) => setPublico(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='my-2' controlId='objetivo.ControlInput'>
                            <Form.Label>Objetivos da atividade</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                type='text'
                                name="objetivos"
                                value={objetivos}
                                onChange={(e) => setObjetivos(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='my-2' controlId='metodo.ControlInput'>
                            <Form.Label>Metodologia aplicada</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                type='text'
                                name="metodologia"
                                value={metodologia}
                                onChange={(e) => setMetodologia(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='my-2' controlId='topicos.ControlInput'>
                            <Form.Label>Tópicos abordados/Etapas (Separe os tópicos por virgula)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                type='text'
                                name="topicos"
                                value={topicos}
                                onChange={(e) => setTopicos(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className='my-2' controlId='desafios.ControlInput'>
                            <Form.Label>Indique os desafios propostos aos alunos</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                type='text'
                                name="desafios"
                                value={desafios}
                                onChange={(e) => setDesafios(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label>Tamanho de sala desejado:</Form.Label>
                            <Form.Check
                                type="radio"
                                label="20 a 30 alunos"
                                name="sala"
                                value="20 a 30 alunos"
                                onChange={onChangeSala}/>
                            <Form.Check
                                type="radio"
                                label="Menos de 20 alunos (somente em situações onde recursos especiais são necessários: laboratórios, etc"
                                name="sala"
                                value="menos de 20 alunos"
                                onChange={onChangeSala}/>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label>Planeja haver participação da comunidade externa/sociedade</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Sim"
                                name="partCom"
                                value="com participacao"
                                onChange={onChangeParticipacao}/>
                            <Form.Check
                                type="radio"
                                label="Não"
                                name="partCom"
                                value="sem participacao"
                                onChange={onChangeParticipacao}/>
                        </Form.Group>
                        <Form.Group className='my-2' controlId='materiais.ControlInput'>
                            <Form.Label>Indique os materiais e ferramentas nescessárias para os encontros.
                                Indique também o tipo de sala</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                type='text'
                                name="materiais"
                                value={materiais}
                                onChange={(e) => setMateriais(e.target.value)}></Form.Control>
                        </Form.Group>

                    </Tab>
                    <Tab eventKey="competencias" title="Competências">
                        <Form.Label className="mt-2">Escolha uma competência técnica</Form.Label>
                        <Form.Select className="mb-3" name="competenciaTec1" value={competenciaTec1} onChange={(e) => setCompetenciaTec1(e.target.value)}>
                            <option>---------------------</option>
                            <option value="Analisar e compreender os fenômenos, eventos e modelos de sua
                                área com base nas ciências que a fundamentam.">Analisar e compreender os fenômenos, eventos e modelos de sua
                                área com base nas ciências que a fundamentam.</option>
                            <option value="Aprender de forma autônoma e lidar com situações e contextos
                                novos e/ou complexos.">Aprender de forma autônoma e lidar com situações e contextos
                                novos e/ou complexos.</option>
                            <option value="Conceber criativamente, projetar e analisar sistemas, produtos
                                (bens e serviços) componentes ou processos, viáveis técnica e economicamente.">Conceber criativamente, projetar e analisar sistemas, produtos
                                (bens e serviços) componentes ou processos, viáveis técnica e economicamente.</option>
                            <option value="Conhecer e aplicar com ética a legislação e os atos normativos
                                no âmbito do exercício da profissão.">Conhecer e aplicar com ética a legislação e os atos normativos
                                no âmbito do exercício da profissão.</option>
                            <option value="Conhecer o setor produtivo de sua especialização, revelando
                                sólida visão setorial, relacionado ao mercado, materiais, processos produtivos e
                                tecnologias.">Conhecer o setor produtivo de sua especialização, revelando
                                sólida visão setorial, relacionado ao mercado, materiais, processos produtivos e
                                tecnologias.</option>
                            <option value="Compreender o potencial das tecnologias e aplicá-las na
                                resolução de problemas e aproveitamento de oportunidades.">Compreender o potencial das tecnologias e aplicá-las na
                                resolução de problemas e aproveitamento de oportunidades.</option>
                            <option value="Comunicar-se eficazmente nas formas escrita, oral e gráfica,
                                incluindo a comunicação em LIBRAS.">Comunicar-se eficazmente nas formas escrita, oral e gráfica,
                                incluindo a comunicação em LIBRAS.</option>
                            <option value="Formular e conceber soluções desejáveis e inovadoras na sua área.">Formular e conceber soluções desejáveis e inovadoras na sua área.</option>
                            <option value="Implantar, supervisionar e controlar as soluções de sua área.">Implantar, supervisionar e controlar as soluções de sua área.</option>
                            <option value="Trabalhar e liderar equipes multidisciplinares.">Trabalhar e liderar equipes multidisciplinares.</option>
                        </Form.Select>
                        <Form.Label>Escolha uma segunda competência técnica (se desejar)</Form.Label>
                        <Form.Select className="mb-3" name="competenciaTec2" value={competenciaTec2} onChange={(e) => setCompetenciaTec2(e.target.value)}>
                            <option>---------------------</option>
                            <option value="Analisar e compreender os fenômenos, eventos e modelos de sua
                                área com base nas ciências que a fundamentam.">Analisar e compreender os fenômenos, eventos e modelos de sua
                                área com base nas ciências que a fundamentam.</option>
                            <option value="Aprender de forma autônoma e lidar com situações e contextos
                                novos e/ou complexos.">Aprender de forma autônoma e lidar com situações e contextos
                                novos e/ou complexos.</option>
                            <option value="Conceber criativamente, projetar e analisar sistemas, produtos
                                (bens e serviços) componentes ou processos, viáveis técnica e economicamente.">Conceber criativamente, projetar e analisar sistemas, produtos
                                (bens e serviços) componentes ou processos, viáveis técnica e economicamente.</option>
                            <option value="Conhecer e aplicar com ética a legislação e os atos normativos
                                no âmbito do exercício da profissão.">Conhecer e aplicar com ética a legislação e os atos normativos
                                no âmbito do exercício da profissão.</option>
                            <option value="Conhecer o setor produtivo de sua especialização, revelando
                                sólida visão setorial, relacionado ao mercado, materiais, processos produtivos e
                                tecnologias.">Conhecer o setor produtivo de sua especialização, revelando
                                sólida visão setorial, relacionado ao mercado, materiais, processos produtivos e
                                tecnologias.</option>
                            <option value="Compreender o potencial das tecnologias e aplicá-las na
                                resolução de problemas e aproveitamento de oportunidades.">Compreender o potencial das tecnologias e aplicá-las na
                                resolução de problemas e aproveitamento de oportunidades.</option>
                            <option value="Comunicar-se eficazmente nas formas escrita, oral e gráfica,
                                incluindo a comunicação em LIBRAS.">Comunicar-se eficazmente nas formas escrita, oral e gráfica,
                                incluindo a comunicação em LIBRAS.</option>
                            <option value="Formular e conceber soluções desejáveis e inovadoras na sua área.">Formular e conceber soluções desejáveis e inovadoras na sua área.</option>
                            <option value="Implantar, supervisionar e controlar as soluções de sua área.">Implantar, supervisionar e controlar as soluções de sua área.</option>
                            <option value="Trabalhar e liderar equipes multidisciplinares.">Trabalhar e liderar equipes multidisciplinares.</option>
                        </Form.Select>

                        <Form.Label className="mt-2">Escolha uma competência tranversal</Form.Label>
                        <Form.Select className="mb-3" name="competenciaTra1" value={competenciaTra1} onChange={(e) => setCompetenciaTra1(e.target.value)}>
                            <option>---------------------</option>
                            <option value="Nenhuma competência tranversal">Nenhuma competência tranversal</option>
                            <option value="Capacidade para lidar com o imprevisto / Trabalhar em
                                ambientes de incerteza (Resiliente)">Capacidade para lidar com o imprevisto / Trabalhar em
                                ambientes de incerteza (Resiliente)</option>
                            <option value="Capacidade para resolver problemas (Ser efetivo, na solução de problemas)">Capacidade para resolver problemas (Ser efetivo, na solução de problemas)</option>
                            <option value="Criar/Inovar">Criar/Inovar</option>
                            <option value="Organização / Planejamento (Organizado)">Organização / Planejamento (Organizado)</option>
                            <option value="Pró-Atividade (Iniciativa)">Pró-Atividade (Iniciativa)</option>
                            <option value="Relação interpessoal (Empático e simpático)">Relação interpessoal (Empático e simpático)</option>
                            <option value="Saber enfrentar desafios (Atitude de solução/Corajoso)">Saber enfrentar desafios (Atitude de solução/Corajoso)</option>
                            <option value="Seleção de informação (Ser seletivo)">Seleção de informação (Ser seletivo)</option>
                            <option value="Senso Crítico (Julgar/Avaliar) (Ser crítico)">Senso Crítico (Julgar/Avaliar) (Ser crítico)</option>
                            <option value="Tomar decisões (Decisivo)">Tomar decisões (Decisivo)</option>
                        </Form.Select>
                        <Form.Label>Escolha uma segunda competência tranversal (se desejar)</Form.Label>
                        <Form.Select className="mb-3" name="competenciaTra2" value={competenciaTra2} onChange={(e) => setCompetenciaTra2(e.target.value)}>
                            <option>---------------------</option>
                            <option value="Nenhuma competência tranversal">Nenhuma competência tranversal</option>
                            <option value="Capacidade para lidar com o imprevisto / Trabalhar em
                                ambientes de incerteza (Resiliente)">Capacidade para lidar com o imprevisto / Trabalhar em
                                ambientes de incerteza (Resiliente)</option>
                            <option value="Capacidade para resolver problemas (Ser efetivo, na solução de problemas)">Capacidade para resolver problemas (Ser efetivo, na solução de problemas)</option>
                            <option value="Criar/Inovar">Criar/Inovar</option>
                            <option value="Organização / Planejamento (Organizado)">Organização / Planejamento (Organizado)</option>
                            <option value="Pró-Atividade (Iniciativa)">Pró-Atividade (Iniciativa)</option>
                            <option value="Relação interpessoal (Empático e simpático)">Relação interpessoal (Empático e simpático)</option>
                            <option value="Saber enfrentar desafios (Atitude de solução/Corajoso)">Saber enfrentar desafios (Atitude de solução/Corajoso)</option>
                            <option value="Seleção de informação (Ser seletivo)">Seleção de informação (Ser seletivo)</option>
                            <option value="Senso Crítico (Julgar/Avaliar) (Ser crítico)">Senso Crítico (Julgar/Avaliar) (Ser crítico)</option>
                            <option value="Tomar decisões (Decisivo)">Tomar decisões (Decisivo)</option>
                        </Form.Select>
                    </Tab>
                    <Tab eventKey="midia" title="Mídia">
                        <Form.Label className="my-3 h5">É nescessário escolher de 1 a 3 imagens para
                            ilustrar sua atividade. (100 MB por imagem)</Form.Label>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagem 1</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagem 2</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagem 3</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                        <Form.Group className='mb-1'>
                            <Form.Label>Link para vídeo ilustrativo (opcional)</Form.Label>
                            <Form.Control type='text'                                 
                            name="video"
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Tab>
                    <Tab eventKey="horarios" title="Horários">
                        <Form.Label className="my-3 h5">Primeira opção de dia e horário para os encontros</Form.Label>
                        <Form.Group>
                            <Form.Label>Dia</Form.Label>
                            <Form.Check type="radio" label="Segunda-Feira" name="dia1" value="Segunda-Feira" onChange={onChangeDia1}/>
                            <Form.Check type="radio" label="Terça-Feira" name="dia1" value="Terca-Feira" onChange={onChangeDia1}/>
                            <Form.Check type="radio" label="Quarta-Feira" name="dia1" value="Quarta-Feira" onChange={onChangeDia1}/>
                            <Form.Check type="radio" label="Quinta-Feira" name="dia1" value="Quinta-Feira" onChange={onChangeDia1}/>
                            <Form.Check type="radio" label="Sexta-Feira" name="dia1" value="Sexta-Feira" onChange={onChangeDia1}/>
                            <Form.Check type="radio" label="Sábado" name="dia1" value="Sabado" onChange={onChangeDia1}/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Horário</Form.Label>
                            <Form.Check type="radio" label="07h40 às 09h20" name="hora1" value="07h40 às 09h20" onChange={onChangeHorario1}/>
                            <Form.Check type="radio" label="09h30 às 11h10" name="hora1" value="09h30 às 11h10" onChange={onChangeHorario1}/>
                            <Form.Check type="radio" label="11h20 às 13h00" name="hora1" value="11h20 às 13h00" onChange={onChangeHorario1}/>
                            <Form.Check type="radio" label="13h10 às 14h50" name="hora1" value="13h10 às 14h50" onChange={onChangeHorario1}/>
                            <Form.Check type="radio" label="15h00 às 16h40" name="hora1" value="15h00 às 16h40" onChange={onChangeHorario1}/>
                            <Form.Check type="radio" label="16h50 às 18h30" name="hora1" value="16h50 às 18h30" onChange={onChangeHorario1}/>
                            <Form.Check type="radio" label="19h00 às 20h40" name="hora1" value="19h00 às 20h40" onChange={onChangeHorario1}/>
                            <Form.Check type="radio" label="20h50 às 22h30" name="hora1" value="20h50 às 22h30" onChange={onChangeHorario1}/>
                        </Form.Group>
                        <Form.Label className="my-3 h5">Segunda opção de dia e horário para os encontros</Form.Label>
                        <Form.Group className="">
                            <Form.Label>Dia</Form.Label>
                            <Form.Check type="radio" label="Segunda-Feira" name="dia2" value="Segunda-Feira" onChange={onChangeDia2}/>
                            <Form.Check type="radio" label="Terça-Feira" name="dia2" value="Terca-Feira" onChange={onChangeDia2}/>
                            <Form.Check type="radio" label="Quarta-Feira" name="dia2" value="Quarta-Feira" onChange={onChangeDia2}/>
                            <Form.Check type="radio" label="Quinta-Feira" name="dia2" value="Quinta-Feira" onChange={onChangeDia2}/>
                            <Form.Check type="radio" label="Sexta-Feira" name="dia2" value="Sexta-Feira" onChange={onChangeDia2}/>
                            <Form.Check type="radio" label="Sábado" name="dia2" value="Sabado" onChange={onChangeDia2}/>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Horário</Form.Label>
                            <Form.Check type="radio" label="07h40 às 09h20" name="hora2" value="07h40 às 09h20" onChange={onChangeHorario2}/>
                            <Form.Check type="radio" label="09h30 às 11h10" name="hora2" value="09h30 às 11h10" onChange={onChangeHorario2}/>
                            <Form.Check type="radio" label="11h20 às 13h00" name="hora2" value="11h20 às 13h00" onChange={onChangeHorario2}/>
                            <Form.Check type="radio" label="13h10 às 14h50" name="hora2" value="13h10 às 14h50" onChange={onChangeHorario2}/>
                            <Form.Check type="radio" label="15h00 às 16h40" name="hora2" value="15h00 às 16h40" onChange={onChangeHorario2}/>
                            <Form.Check type="radio" label="16h50 às 18h30" name="hora2" value="16h50 às 18h30" onChange={onChangeHorario2}/>
                            <Form.Check type="radio" label="19h00 às 20h40" name="hora2" value="19h00 às 20h40" onChange={onChangeHorario2}/>
                            <Form.Check type="radio" label="20h50 às 22h30" name="hora2" value="20h50 às 22h30" onChange={onChangeHorario2}/>
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

export default FormularioAtv;