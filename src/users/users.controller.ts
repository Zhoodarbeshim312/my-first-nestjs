import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PostUserDto } from './dto/post-user.dto';
import { PutUserDto } from './dto/put-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('get-all-users')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
  @Get('get-by-id-user/:id')
  getByIdUser(@Param('id') id: string) {
    return this.usersService.getByIdUser(+id);
  }
  @Post('post-user')
  postUser(@Body() dto: PostUserDto) {
    return this.usersService.postUser(dto);
  }
  @Put('put-user/:id')
  putUser(@Param('id') id: string, @Body() dto: PutUserDto) {
    return this.usersService.putUser(+id, dto);
  }
  @Patch('patch-user/:id')
  patchUser(@Param('id') id: string, @Body() dto: PatchUserDto) {
    return this.usersService.patchUser(+id, dto);
  }
  @Delete('delete-user/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
