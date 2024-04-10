
import { Injectable } from "@nestjs/common";
import slugify from "slugify";
import { LivroEntity } from "../entity/livro.entity";
import { LivroDTO } from "../dto/livroDTO";
import { LivroRepository } from "../repository/livro_repositorio";
import { ValidarAutorService } from "src/Autor/service/validadoresAutor.service";
import { ValidadorCategoriaServices } from "src/Categoria/service/validadorCategoria.sevices";


@Injectable()
export class CadastraLivroServices {

    constructor (
        private livroRepository: LivroRepository,
        private readonly autorServices: ValidarAutorService,
        private readonly categoriaServices: ValidadorCategoriaServices
    ) {}
    

    async cadastraLivro(data: LivroDTO): Promise<LivroEntity> {

        const autorId = await this.autorServices.retornaAutorIdPeloNome(data.autorNome);
        const categoriaId = await this.categoriaServices.retornaSlugCategoria(data.categoria)
        const dataSemAutorCategoriaId: Omit<LivroDTO, 'autorNome' | 'categoria'> = data;

        const novoLivro: LivroEntity = {
            ...dataSemAutorCategoriaId,
            autorId,
            categoriaId
        }

        
        await this.livroRepository.salvar(novoLivro);

        return novoLivro
        
    }
    
    async verificaPrecoCategoria(preco: number, categoria: string): Promise<boolean> {    
        const categoriaLivreDistribuicao  = slugify(categoria) === 'Livre-Distribuicao';
        return (((preco != 0) || (categoriaLivreDistribuicao && preco == 0)))
    }
}

