export declare class CreateTaskDto {
    title: string;
    priority: number;
    tags: TaskTag[];
}
export declare enum TaskTag {
    WORK = "work",
    STUDY = "study",
    HOME = "home"
}
