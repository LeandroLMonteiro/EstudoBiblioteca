import { ConsoleLogger, HttpStatus, Injectable } from '@nestjs/common';
import { bgMagenta, green, white } from 'colors';
import { appendFileSync } from 'node:fs';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  formataLog(nome, quantidade, valor) {
    return `LOCAL: ${this.context} - NOME: ${nome} - QUANTIDADE: ${quantidade} - PREÇO: ${valor} - TIMESTAMP ${this.getTimestamp()}`;
  }
  logColorido(produto) {
    const { nome, quantidadeDisponivel, valor } = produto;
    const logFormatado = this.formataLog(nome, quantidadeDisponivel, valor);
    console.log(bgMagenta(white(logFormatado)));
  }
  logObjeto(status, mensagem, objeto) {
    if (status == HttpStatus.OK) {
      console.log(green(mensagem));
      console.log(objeto);
    } else {
      console.error(green(mensagem));
      console.error(objeto);
    }
  }
  logEmArquivo(produto) {
    const { nome, quantidadeDisponivel, valor } = produto;

    const mensagemFormatada =
      this.formataLog(nome, quantidadeDisponivel, valor) + '\n';

    const caminhoDoLog = './src/modulos/customLogger/arquivo.log';
    appendFileSync(caminhoDoLog, mensagemFormatada);
  }
}
