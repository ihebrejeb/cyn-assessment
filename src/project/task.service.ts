// task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  // TODO: Implement the methods below
  async findOne(): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    throw new Error('Method not implemented.');
  }

  async getTasksByProjectId(projectId: number): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
}
