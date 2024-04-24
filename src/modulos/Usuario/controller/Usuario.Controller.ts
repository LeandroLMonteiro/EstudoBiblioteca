import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from '../service/cadastraUsuario';
import { CriaUsuarioDTO } from '../dto/CriaUsuario.dto';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';
import { HashSenhaPipe } from '../../../recursos/pipes/hash-senha.pipe';
import { AutenticacaoService } from '../../../modulos/Autenticacao/autenticacao.service';

@UseGuards(AutenticacaoGuard)
@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly autenticacaoService: AutenticacaoService,
  ) {}

  @Post('criar')
  async criaUsuario(
    @Body() data: CriaUsuarioDTO,
    @Body('senha', HashSenhaPipe) senhaComHash: string,
  ) {
    const usuarioCriado = await this.usuarioService.criaUsuario({
      ...data,
      senha: senhaComHash,
    });
    return usuarioCriado;
  }
}
