const zodAutores = JSON.parse(localStorage.getItem("autores"), (key, value) => {
    if (key === "data")
        return new Date(value);
    return value;
}) || [];
export const ZodAutorRepository = {
    cadastrarZodAutor(zodNovoAutor) {
        zodAutores.push(zodNovoAutor);
        console.log(zodAutores);
        localStorage.setItem("autores", JSON.stringify(zodAutores));
    },
    validaZodEmailExistente(email) {
        return zodAutores.some(zodAutor => zodAutor.email === email);
    },
    getZodListaAutores() {
        const zodListaAutores = structuredClone(zodAutores);
        return zodListaAutores;
    }
};
