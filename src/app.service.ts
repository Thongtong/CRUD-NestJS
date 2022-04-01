import { HttpCode, Injectable } from '@nestjs/common';
import { getRepository } from 'fireorm';
import { user } from './model/user.model';
import { userDto } from './dto/user.dto';
@Injectable()
export class AppService {
  readUser() {
    const users = getRepository(user).find();
    return users;
  }
  signup(body: userDto) {
    const createdUser = getRepository(user);
    const formUser = new user();
    formUser.name = body.name;
    formUser.decs = body.desc;
    formUser.postcode = body.postcode;

    createdUser.create(formUser);
    return formUser;
  }

  async updateUser(id: string, body: userDto) {
    const findUser = getRepository(user);
    const updateUser = await findUser.findById(id);
    updateUser.name = body.name;
    await findUser.update(updateUser);
  }
  async deleteUser(id: string) {
    const findUser = getRepository(user);
    const removeUser = await findUser.findById(id);

    await findUser.delete(removeUser.id);
  }
}
