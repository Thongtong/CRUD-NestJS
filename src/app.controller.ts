import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { userDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Post()
  // async createUser(@Body() userDto: User){
  //   return this.appService.createUser(userDto)
  // }

  @Get('/users')
  readUser(@Res() res: Response) {
    return this.appService.readUser(), res.status(HttpStatus.OK);
  }

  @Post('/signup')
  signup(@Res() res: Response, @Body() body: userDto) {
    return this.appService.signup(body), res.status(HttpStatus.OK);
  }
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: userDto) {
    return this.appService.updateUser(id, body);
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
