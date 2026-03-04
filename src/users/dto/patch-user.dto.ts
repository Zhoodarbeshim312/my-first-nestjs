import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class PatchUserDto {
  @IsOptional()
  @IsString({ message: 'Имя должно быть строкой!' })
  @IsNotEmpty({ message: 'Поле name не должно быть пустым!' })
  @Length(2, 40, { message: 'Имя должно быть от 2 до 40 символов!' })
  name?: string;

  @IsOptional()
  @IsInt({ message: 'Возраст должен быть целым числом!' })
  @IsPositive({ message: 'Возраст должен быть положительным!' })
  age?: number;

  @IsOptional()
  @IsString({ message: 'Должность должна быть строкой!' })
  @IsNotEmpty({ message: 'Поле job не должно быть пустым!' })
  @Length(2, 40, { message: 'Должность должна быть от 2 до 40 символов!' })
  job?: string;
}
