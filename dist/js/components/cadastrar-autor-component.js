import { trataZodErros } from "../types/Autor.js";
import { ZodAutorRepository } from "../types/AutorRepository.js";
const elementoFormulario = document.querySelector(".block-novo-autor form");
if (elementoFormulario) {
    elementoFormulario.addEventListener("submit", function (event) {
        try {
            event.preventDefault();
            if (!elementoFormulario.checkValidity()) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const inputNome = elementoFormulario.querySelector("#nome");
            const inputEmail = elementoFormulario.querySelector("#email");
            const inputBiografia = elementoFormulario.querySelector("#biografia");
            let _nome = inputNome.value;
            let _email = inputEmail.value;
            let _biografia = inputBiografia.value;
            const zodNovoAutor = {
                nome: _nome,
                email: _email,
                biografia: _biografia,
                data: new Date()
            };
            const result = trataZodErros(zodNovoAutor);
            if (result.success == false) {
                alert(JSON.stringify(result.erros));
                return;
            }
            ZodAutorRepository.cadastrarZodAutor(result.zodAutor);
            elementoFormulario.reset();
        }
        catch (error) {
            alert("error.message");
        }
    });
}
