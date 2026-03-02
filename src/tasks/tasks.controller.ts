import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get('get-all')
  findAll() {
    return this.tasksService.findAll();
  }
  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.tasksService.findById(Number(id));
  }
}
