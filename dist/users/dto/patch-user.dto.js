"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchUserDto = void 0;
const class_validator_1 = require("class-validator");
class PatchUserDto {
    name;
    age;
    job;
}
exports.PatchUserDto = PatchUserDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле name не должно быть пустым!' }),
    (0, class_validator_1.Length)(2, 40, { message: 'Имя должно быть от 2 до 40 символов!' }),
    __metadata("design:type", String)
], PatchUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'Возраст должен быть целым числом!' }),
    (0, class_validator_1.IsPositive)({ message: 'Возраст должен быть положительным!' }),
    __metadata("design:type", Number)
], PatchUserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Должность должна быть строкой!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле job не должно быть пустым!' }),
    (0, class_validator_1.Length)(2, 40, { message: 'Должность должна быть от 2 до 40 символов!' }),
    __metadata("design:type", String)
], PatchUserDto.prototype, "job", void 0);
//# sourceMappingURL=patch-user.dto.js.map