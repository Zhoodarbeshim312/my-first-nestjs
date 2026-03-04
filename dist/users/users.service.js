"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [];
    getAllUsers() {
        return this.users;
    }
    getByIdUser(id) {
        const user = this.users.find((el) => el.id === id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    postUser(dto) {
        const newUser = {
            id: this.users.length + 1,
            name: dto.name,
            age: dto.age,
            job: dto.job,
        };
        this.users.push(newUser);
        return this.users;
    }
    putUser(id, dto) {
        const user = this.getByIdUser(id);
        user.name = dto.name;
        user.age = dto.age;
        user.job = dto.job;
        return user;
    }
    patchUser(id, dto) {
        const user = this.getByIdUser(id);
        Object.assign(user, dto);
        return user;
    }
    deleteUser(id) {
        const user = this.getByIdUser(id);
        this.users = this.users.filter((el) => el.id !== user.id);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map