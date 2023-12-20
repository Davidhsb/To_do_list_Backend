import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private prisma : PrismaService){}
  async create(createTaskDto: CreateTaskDto) {
    return await this.prisma.tasks.create({
      data : createTaskDto
    });
  }

  async findAll() {
    return await this.prisma.tasks.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.tasks.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.prisma.tasks.update({
      where: {
        id : id
      },
      data : updateTaskDto
    });
  }

// Como declarar tipo de retorno para os CRUD's
  async remove(id: number){
    return await this.prisma.tasks.delete({
      where: {
        id : id
      }
    });
  }

  // Concluídos
  async removeConcluded(id: number){
    return await this.prisma.tasks.delete({
      where: {
        id : id,
        isActive : false
      }      
    });
  }

  async getAllConcluded(isActive: boolean){
    return await this.prisma.tasks.findMany({
      where: {
        isActive : isActive
      }      
    });
  }
  // Pega as tarefas por categoria
  async getTag(tag_id : number){
    return await this.prisma.tasks.findMany({
      where: {
        tagId : tag_id
      }
    });  
  }
}


