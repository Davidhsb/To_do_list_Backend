import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name : string;

  @IsString()
  @IsOptional()
  description? : string;

  @IsBoolean()
  @IsNotEmpty()
  isActive : boolean;

}
