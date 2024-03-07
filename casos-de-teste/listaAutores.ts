import { cadastraAutor } from "../src/componentes/cadastraAutor.ts";
import { listaAutores } from "../src/componentes/listaAutores.ts";

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
