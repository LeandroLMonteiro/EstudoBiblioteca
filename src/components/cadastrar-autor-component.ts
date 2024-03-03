import { ZodAutor, trataZodErros } from "../types/Autor.js";
import { ZodAutorRepository } from "../types/AutorRepository.js";

const elementoFormulario = document.querySelector(".block-novo-autor form") as HTMLFormElement;

if (elementoFormulario) {
  elementoFormulario.addEventListener("submit", function (event) {
    try {
      event.preventDefault();

      if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const inputNome = elementoFormulario.querySelector("#nome") as HTMLInputElement;
      const inputEmail = elementoFormulario.querySelector("#email") as HTMLInputElement;
      const inputBiografia = elementoFormulario.querySelector("#biografia") as HTMLInputElement;

      let _nome: string = inputNome.value;
      let _email: string = inputEmail.value;
      let _biografia: string = inputBiografia.value;

      const zodNovoAutor: ZodAutor = {
        nome: _nome,
        email: _email,
        biografia: _biografia,
        data: new Date()
      };

      const result = trataZodErros(zodNovoAutor);
      if(result.success == false){
        alert(JSON.stringify(result.erros));
        return;
      }
      
      ZodAutorRepository.cadastrarZodAutor(result.zodAutor);

      elementoFormulario.reset();

    } catch (error) {
      alert("error.message");
    }
  });
}
