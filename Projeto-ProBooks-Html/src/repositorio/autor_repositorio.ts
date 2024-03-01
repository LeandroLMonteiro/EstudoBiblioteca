import { Autor } from "../types/Autor"


const autores: Autor[] = JSON.parse(localStorage.getItem("block-novo-autor"), (key: string, value: string)=>{
    if (key=="data"){
        return new Date(value);
    }
    return value;
}) || [];

const Autores = {
    salvar(novoAutor: Autor) {
        
        autores.push(novoAutor);
        localStorage.setItem("block-novo-autor",JSON.stringify(autores));
    },

    listarTodos() {

        return autores;
        
    },

    validaEmailExistente(email: string): boolean {
        return autores.some(autor => autor.email === email);
    }
}

export default Autores;