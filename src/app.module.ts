import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';

import { AutorModule } from './Autor/autor.module';
import { LivroModule } from './Livro/livro.module';
import { CategoriaModule } from './Categoria/categoria.module';
import { APP_FILTER } from '@nestjs/core';
import { FiltroDeExcecaoHttp } from './recursos/filtros/filtro-de-excecao-global';

@Module({
  imports: [
    AutorModule,
    CategoriaModule,
    LivroModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp,
    },
  ],
})
export class AppModule {}
