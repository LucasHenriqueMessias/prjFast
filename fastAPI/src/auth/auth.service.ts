import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginService } from 'src/tab_login/login.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  async create(user: string, password: string) {
    const username = await this.loginService.getByUsername(user);

    var isValidPassword = await bcrypt.compare(password, username.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Credenciais Inválidas');
    }

    const payload = { user: username.user, sub: username.user };

    return{
      access_token: await this.jwtService.signAsync(payload),
    }
  }



  async findAll() {
    return `this action returns a list of auth`;
  }

  async findOne(username: string) {
    return this.loginService.getByUsername(username);
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
