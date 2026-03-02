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
    } | undefined;
}
