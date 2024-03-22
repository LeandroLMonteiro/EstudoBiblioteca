import { Module } from '@nestjs/common';
import { AutorModule } from './Autor/autor.module';

@Module({
  imports: [AutorModule]
})
export class AppModule {}
