import {
  ArgumentsHost,
  Catch,
  ConsoleLogger,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class FiltroDeExcecaoGlobal implements ExceptionFilter {
  constructor(
    private adapterHost: HttpAdapterHost,
    private loggerNativo: ConsoleLogger,
  ) {}

  catch(excecao: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.adapterHost;

    const contexto = host.switchToHttp();
    const resposta = contexto.getResponse();
    const requisicao = contexto.getRequest();
    const stackTrace = excecao instanceof Error ? excecao.stack : null;

    const { status, body } =
      excecao instanceof HttpException
        ? {
            status: excecao.getStatus(),
            body: {
              statusCode: excecao.getStatus(),
              timestamp: new Date().toISOString(),
              path: httpAdapter.getRequestUrl(requisicao),
              message: excecao.message,
              response: excecao.getResponse(),
            },
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              timestamp: new Date().toISOString(),
              path: httpAdapter.getRequestUrl(requisicao),
              message: 'Erro Interno no Servidor',
              response: resposta,
            },
          };

    httpAdapter.reply(resposta, body, status);

    if (status !== HttpStatus.OK) {
      this.loggerNativo.error(
        excecao instanceof HttpException ? excecao.getResponse() : excecao,
        stackTrace,
      );
    } else {
      this.loggerNativo.log(
        excecao instanceof HttpException ? excecao.getResponse() : excecao,
        contexto,
      );
    }
  }
}
