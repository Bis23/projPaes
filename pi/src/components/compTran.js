import React from "react";
import { Form } from "react-bootstrap";



const compTran = () => {
    return(
        <Form.Select className="mb-3">
            <option>---------------------</option>
            <option value="1">Nenhuma competência tranversal</option>
            <option value="2">Capacidade para lidar com o imprevisto / Trabalhar em ambientes de incerteza (Resiliente)</option>
            <option value="3">Capacidade para resolver problemas (Ser efetivo, na solução de problemas)</option>
            <option value="3">Criar/Inovar</option>
            <option value="3">Organização / Planejamento (Organizado)</option>
            <option value="3">Pró-Atividade (Iniciativa)</option>
            <option value="3">Relação interpessoal (Empático e simpático)</option>
            <option value="3">Saber enfrentar desafios (Atitude de solução/Corajoso)</option>
            <option value="3">Seleção de informação (Ser seletivo)</option>
            <option value="3">Senso Crítico (Julgar/Avaliar) (Ser crítico)</option>
            <option value="3">Tomar decisões (Decisivo)</option>
        </Form.Select>
    )
}


export default compTran;