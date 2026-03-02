import { TasksService } from './tasks.service';
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
    } | undefined;
}
