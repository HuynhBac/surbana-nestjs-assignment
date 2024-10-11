import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  building: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsNumber()
  area: number;

  @IsNumber()
  @IsOptional()
  parent_id?: number;
}

export class UpdateLocationDto {
  @IsString()
  @IsOptional()
  building: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  number: string;

  @IsNumber()
  area: number;

  @IsNumber()
  @IsOptional()
  parent_id?: number;
}
