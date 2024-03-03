import { ZodAutor } from "./Autor.js";

const zodAutores: ZodAutor[] = JSON.parse(localStorage.getItem("autores"), (key: string, value: string) => {
  if (key === "data")
    return new Date(value);

  return value;
}) || [];

export const ZodAutorRepository = {
    cadastrarZodAutor(zodNovoAutor: ZodAutor): void {
      zodAutores.push(zodNovoAutor);
      console.log(zodAutores);
      localStorage.setItem("autores", JSON.stringify(zodAutores));
    },

    validaZodEmailExistente(email: string): boolean {
      return zodAutores.some(zodAutor => zodAutor.email === email);
    },
  
    getZodListaAutores(): ZodAutor[] {
      const zodListaAutores: ZodAutor[] = structuredClone(zodAutores);
      return zodListaAutores;
    }
  }
