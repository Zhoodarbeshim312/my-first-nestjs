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
exports.TaskTag = exports.CreateTaskDto = void 0;
const class_validator_1 = require("class-validator");
class CreateTaskDto {
    title;
    priority;
    tags;
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Название должен быть стракой!' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'поля title обяъзателен!' }),
    (0, class_validator_1.Length)(2, 40, { message: 'Название должно быть от 2 до 40 символов!' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'приоритет должен быть целым числом!' }),
    (0, class_validator_1.IsPositive)({ message: 'приоритет должен быть положительным числом!' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'теги должны быть массивом!' }),
    (0, class_validator_1.IsEnum)({ message: 'не допустимый значении тега!', each: true }),
    __metadata("design:type", Array)
], CreateTaskDto.prototype, "tags", void 0);
var TaskTag;
(function (TaskTag) {
    TaskTag["WORK"] = "work";
    TaskTag["STUDY"] = "study";
    TaskTag["HOME"] = "home";
})(TaskTag || (exports.TaskTag = TaskTag = {}));
//# sourceMappingURL=create-task.dto.js.map