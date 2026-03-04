import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class PostUserDto {
  @IsString({ message: 'name должно быть строкой!' })
  @IsNotEmpty({ message: 'Поле name не должно быть пустым!' })
  @Length(2, 40, { message: 'name должно быть от 2 до 40 символов!' })
  name!: string;

  @IsInt({ message: 'age должен быть целым числом!' })
  @IsPositive({ message: 'age должен быть положительным!' })
  age!: number;

  @IsString({ message: 'job должно быть строкой!' })
  @IsNotEmpty({ message: 'Поле job не должно быть пустым!' })
  @Length(2, 40, { message: 'job должно быть от 2 до 40 символов!' })
  job!: string;
}
