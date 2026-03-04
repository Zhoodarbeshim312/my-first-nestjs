import { Injectable, NotFoundException } from '@nestjs/common';
import { PostUserDto } from './dto/post-user.dto';
import { PutUserDto } from './dto/put-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';

export interface IUsers {
  id: number;
  name: string;
  age: number;
  job: string;
}

@Injectable()
export class UsersService {
  private users: IUsers[] = [];
  getAllUsers() {
    return this.users;
  }
  getByIdUser(id: number) {
    const user = this.users.find((el) => el.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  postUser(dto: PostUserDto) {
    const newUser = {
      id: this.users.length + 1,
      name: dto.name,
      age: dto.age,
      job: dto.job,
    };
    this.users.push(newUser);
    return this.users;
  }
  putUser(id: number, dto: PutUserDto) {
    const user = this.getByIdUser(id);
    user.name = dto.name;
    user.age = dto.age;
    user.job = dto.job;
    return user;
  }
  patchUser(id: number, dto: PatchUserDto) {
    const user = this.getByIdUser(id);
    Object.assign(user, dto);
    return user;
  }
  deleteUser(id: number) {
    const user = this.getByIdUser(id);
    this.users = this.users.filter((el) => el.id !== user.id);
    return user;
  }
}
