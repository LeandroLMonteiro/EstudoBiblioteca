import { ZodAutor } from "../types/Autor.js";
import { ZodAutorRepository } from "../types/AutorRepository.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";

const elementoListaAutores: HTMLElement = document.querySelector("#lista-autor tbody");

renderizarZodListaAutor();

function renderizarZodListaAutor(): void {
  const listaAutores: ZodAutor[] = ZodAutorRepository.getZodListaAutores();
  elementoListaAutores.innerHTML = "";
  let htmlAutor: string = "";

  for (let autor of listaAutores) {
    htmlAutor += `
      <tr>
        <td>${autor.nome}</td>
        <td>${formatarData(autor.data, FormatoData.PADRAO)}</td>
      </tr>
    `;
  }

  if (!htmlAutor)
    htmlAutor = "<tr><td colspan='2'>Não há autores cadastrados.</td></tr>";
  
  elementoListaAutores.innerHTML = htmlAutor;
}