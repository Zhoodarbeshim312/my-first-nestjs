import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 1,
      title: 'Learn NestJS',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Build API',
      isCompleted: true,
    },
  ];
  findAll() {
    return this.tasks;
  }
  findById(id: number) {
    const task = this.tasks.find((el) => el.id === id);
    return task;
  }
}
