import { UsersService } from './users.service';
import { PostUserDto } from './dto/post-user.dto';
import { PutUserDto } from './dto/put-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): import("./users.service").IUsers[];
    getByIdUser(id: string): import("./users.service").IUsers;
    postUser(dto: PostUserDto): import("./users.service").IUsers[];
    putUser(id: string, dto: PutUserDto): import("./users.service").IUsers;
    patchUser(id: string, dto: PatchUserDto): import("./users.service").IUsers;
    deleteUser(id: string): import("./users.service").IUsers;
}
