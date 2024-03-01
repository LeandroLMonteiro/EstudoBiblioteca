import Autores from "../repositorio/autor_repositorio.js";
import { Autor } from "../types/Autor.js";


export function listaAutores(): Autor[] {
    return Autores.listarTodos();
}


const elementoRegistroAutores: HTMLElement = document.querySelector(".listaAutor .registro-autor");

renderizarAutores();
function renderizarAutores(): void {
    const grupoAutor: Autor[] = Autores.listarTodos();
    elementoRegistroAutores.innerHTML = "";
    let htmlRegistroAutores: string = "";

        let htmlAutorItem: string = "";
        for (let autor of grupoAutor)
        {
            htmlAutorItem += `
                <div class="autor-item">
                    <div class="autor-info">

                       <span class="nome">${autor.nome}</span><br>
                       <span class="email">${autor.email}</span><br>
                       <span class="biografia">${autor.biografia}</span><br>
                    </div>
                    <time class="data">${autor.data}</time>
                </div>
            `;
        }

        htmlRegistroAutores += `
            <div class="autor-group">
                ${htmlAutorItem}
            </div>
        `;

    if (htmlRegistroAutores == "") {
        htmlRegistroAutores = "<div>Não há autor cadastrado</div>"
    }

    elementoRegistroAutores.innerHTML = htmlRegistroAutores;
}

const AutorComponent = {
    atualizar(): void {
        renderizarAutores();
    }
}

export default listaAutores;