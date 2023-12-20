import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TagsService {
  constructor(private prisma : PrismaService){}
  async create(createTagDto: CreateTagDto) {
    return await this.prisma.tags.create({
      data: createTagDto
    });
  }

  async findAll() {
    return await this.prisma.tags.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.tags.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return await this.prisma.tags.update({
      where: {
        id
      },
      data: updateTagDto
    });
  }

  async remove(id: number) {
    return await this.prisma.tags.delete({
      where: {
        id
      },
      
    });
  }
}
