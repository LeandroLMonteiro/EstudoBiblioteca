import { Body, Controller, Post } from '@nestjs/common';
import { CadastraUsuarioService } from '../service/cadastraUsuario';
import { UsuarioDTO } from '../dto/UsuarioDTO';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly criarUsuarioService: CadastraUsuarioService) {}

  @Post('criar')
  async criaAutor(@Body() data: UsuarioDTO) {
    return await this.criarUsuarioService.cadastraUsurario(data);
  }
}
