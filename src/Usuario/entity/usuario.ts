import { EnderecoDTO } from "../dto/EnderecoDTO";


export type UsuarioEntity = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    endereco: EnderecoDTO;
};

