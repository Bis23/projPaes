import React from "react";
import { Routes, Route } from "react-router";
import login from './pages/Login';
import cadastro from './pages/Cadastro';
import cadastroIMT from "./pages/CadastroIMT";
import CadastroCNPJ from "./pages/CadastroCNPJ";
import CadastroRPA from "./pages/CadastroRPA";
import Servico from "./pages/Atividades";
import CadastroAtv from "./pages/cadastroAtv";
import ConsultaAtv from "./pages/ConsultaAtv";
import Coordenador from "./pages/Coordenador";
import Aprovar from "./pages/Aprovar";

const Main = () => {
    return(
        <Routes>
            <Route exact path="/" Component={login}></Route>
            <Route exact path="/cadastro" Component={cadastro}></Route>
            <Route exact path="/cadastro/imt" Component={cadastroIMT}></Route>
            <Route exact path="/cadastro/cnpj" Component={CadastroCNPJ}></Route>
            <Route exact path="/cadastro/rpa" Component={CadastroRPA}></Route>
            <Route exact path="/atividades" Component={Servico}></Route>
            <Route exact path="/atividades/cadastro" Component={CadastroAtv}></Route>
            <Route exact path="/atividades/consulta" Component={ConsultaAtv}></Route>
            <Route exact path="/coordenadores" Component={Coordenador}></Route>
            <Route exact path="/coordenadores/aprovar" Component={Aprovar}></Route>
        </Routes>
    )
}

export default Main