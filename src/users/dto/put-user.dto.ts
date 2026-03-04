import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class PutUserDto {
  @IsString({ message: 'Имя должно быть строкой!' })
  @IsNotEmpty({ message: 'Поле name не должно быть пустым!' })
  @Length(2, 40, { message: 'Имя должно быть от 2 до 40 символов!' })
  name!: string;

  @IsInt({ message: 'Возраст должен быть целым числом!' })
  @IsPositive({ message: 'Возраст должен быть положительным!' })
  age!: number;

  @IsString({ message: 'Должность должна быть строкой!' })
  @IsNotEmpty({ message: 'Поле job не должно быть пустым!' })
  @Length(2, 40, { message: 'Должность должна быть от 2 до 40 символов!' })
  job!: string;
}
