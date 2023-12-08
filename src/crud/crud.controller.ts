import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
  async create(@Body() payload: CreateCrudDto) {
    return this.crudService.create(payload);
  }

  @Post('/file')
  @UseInterceptors(FileInterceptor('file')) 
    handleUpload(@UploadedFile() file:Express.Multer.File){
      console.log('file', file);
     return 'file upload API';
    }

  @Get()
    async findAll (){
      return await this.crudService.findAll()
    }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.crudService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() payload: UpdateCrudDto) {
    return await this.crudService.update( id, payload);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.crudService.remove(id);
  }


}
