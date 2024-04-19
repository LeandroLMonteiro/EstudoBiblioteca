import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';

import { AutorModule } from './Autor/autor.module';
import { LivroModule } from './Livro/livro.module';
import { CategoriaModule } from './Categoria/categoria.module';

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
})
export class AppModule {}
