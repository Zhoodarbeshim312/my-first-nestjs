import { PostUserDto } from './dto/post-user.dto';
import { PutUserDto } from './dto/put-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';
export interface IUsers {
    id: number;
    name: string;
    age: number;
    job: string;
}
export declare class UsersService {
    private users;
    getAllUsers(): IUsers[];
    getByIdUser(id: number): IUsers;
    postUser(dto: PostUserDto): IUsers[];
    putUser(id: number, dto: PutUserDto): IUsers;
    patchUser(id: number, dto: PatchUserDto): IUsers;
    deleteUser(id: number): IUsers;
}
