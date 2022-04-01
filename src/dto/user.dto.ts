import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class userDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  desc: string;

  @ApiProperty()
  postcode?: number;

  @ApiProperty()
  @IsNotEmpty()
  tel: string;
}
