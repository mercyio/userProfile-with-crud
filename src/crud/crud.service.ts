import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { crudEntity } from './entities/crud.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CrudService {
  constructor(@InjectRepository(crudEntity) private crudRepo : Repository <crudEntity>){}
  
  async create(payload){
    return await this.crudRepo.save(payload)
  }

  async findAll() {
    return await this.crudRepo.find()
  }

  async findOne(id: number) {
    const FindOne= await this.crudRepo.findOne({where:{id : id}})
    if(!FindOne){
          throw new HttpException (`wrong request`,HttpStatus.BAD_REQUEST)
    }
    return 'FindOne';
  }

 async update(id: number, payload) {
    return await this.crudRepo.update(id, payload)
  }

 async remove(payload) {
    return await this.crudRepo.delete(payload)
  }
}
