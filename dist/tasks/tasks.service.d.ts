import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private tasks;
    findAll(): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    findById(id: number): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    create(dto: CreateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    updatePut(id: number, dto: UpdateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    updatePatch(id: number, dto: Partial<UpdateTaskDto>): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    delete(id: number): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
}
