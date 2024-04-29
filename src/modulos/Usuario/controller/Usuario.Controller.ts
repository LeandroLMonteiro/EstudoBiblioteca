import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';
import { CriaUsuarioDTO } from '../dto/CriaUsuario.dto';
import { AutenticacaoGuard } from '../../Autenticacao/autenticacao.guard';
import { HashSenhaPipe } from '../../../recursos/pipes/hash-senha.pipe';
import { AtualizaUsuarioDTO } from '../dto/AtualizaUsuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

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

  @UseGuards(AutenticacaoGuard)
  @Get()
  async listUsuarios() {
    const usuariosSalvos = await this.usuarioService.listUsuarios();

    return {
      mensagem: 'Usuários obtidos com sucesso.',
      usuarios: usuariosSalvos,
    };
  }

  @UseGuards(AutenticacaoGuard)
  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.usuarioService.atualizaUsuario(
      id,
      novosDados,
    );

    return {
      messagem: 'usuário atualizado com sucesso',
      usuario: usuarioAtualizado,
    };
  }

  @UseGuards(AutenticacaoGuard)
  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioService.deletaUsuario(id);

    return {
      messagem: 'usuário removido com suceso',
      usuario: usuarioRemovido,
    };
  }
}
