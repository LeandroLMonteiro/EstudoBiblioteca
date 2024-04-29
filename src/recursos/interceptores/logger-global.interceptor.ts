import {
  CallHandler,
  ConsoleLogger,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request, Response } from 'express';
import { RequisicaoComUsuario } from '../../modulos/Autenticacao/autenticacao.guard';
import { randomUUID } from 'crypto';

@Injectable()
export class LoggerGlobalInterceptor implements NestInterceptor {
  constructor(private logger: ConsoleLogger) {}
  intercept(contexto: ExecutionContext, next: CallHandler): Observable<any> {
    const contextoHttp = contexto.switchToHttp();
    const id = randomUUID();
    const requisicao = contextoHttp.getRequest<
      Request | RequisicaoComUsuario
    >();
    const resposta = contextoHttp.getResponse<Response>();

    const { path, method } = requisicao;
    const { statusCode } = resposta;
    this.logger.log(`REQUISICAO_ID: ${id} ${method} ${path}`);

    const instantePreControlador = Date.now();

    return next.handle().pipe(
      tap(() => {
        const tempoDeExecucaoDaRota = Date.now() - instantePreControlador;
        if ('usuario' in requisicao) {
          this.logger.log(
            `RESPOSTA_ID: ${id} usuário: ${requisicao.usuario.id} - ${method} ${path} ${statusCode} - ${tempoDeExecucaoDaRota}ms`,
          );
        } else {
          this.logger.log(
            `RESPOSTA_ID: ${id} usuário: - ${method} ${path} ${statusCode} - ${tempoDeExecucaoDaRota}ms`,
          );
        }
      }),
    );
  }
}
