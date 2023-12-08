import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { crudEntity } from './crud/entities/crud.entity';
import { MulterModule } from '@nestjs/platform-express';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports : [
    // MulterModule.register({dest: './uploads'}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'crud',
      entities: [crudEntity],
      // autoLoadEntities : true,
      synchronize: true,
    }),
    CrudModule,
    FileUploadModule 
  ],

  
  // imports: [CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
