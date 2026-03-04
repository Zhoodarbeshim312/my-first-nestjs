import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    findById(id: string): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    create(dto: CreateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    updatePut(id: string, dto: UpdateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    updatePatch(id: string, dto: Partial<UpdateTaskDto>): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    delete(id: string): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
}
