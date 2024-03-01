import { cadastraAutor } from "../components/cadastraAutor.js";
import { listaAutores } from "../components/listaAutores.js";

(() => {
    const autores = listaAutores();
    console.log('repositorio vazio', autores);
})();

(() => {
    cadastraAutor({
        nome: 'teste',
        email: 'teste@teste.com',
        biografia: 'a'.repeat(200),
    });
    const autores = listaAutores();
    console.log('repositorio com autor cadastrado', autores);
})();
