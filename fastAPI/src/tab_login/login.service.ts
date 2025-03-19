import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity'
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(Login)
    private readonly loginRepository:
      Repository<Login>) {

  }

  async create(createLoginDto: CreateLoginDto): Promise<Login> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createLoginDto.password, salt);
    const newLogin = this.loginRepository.create({
      ...createLoginDto,
      password: hashedPassword,
    });
    return this.loginRepository.save(newLogin);
  }

  async getByUsername(username: string) {
  const user = await this.loginRepository.findOne({
where: { user: username }
  });
 if(!user){
   throw new NotFoundException('Usuário não encontrado');
  } 
  return user
} 

  async findAll() {
    return await this.loginRepository.find();

  }

  async findOne(user: string) {
    return await this.loginRepository.findOne({
      where: { user }
    });
  }

  async findByRole(department: string): Promise<Login[]> {
    return await this.loginRepository.find({
      where: { department }
    });
  }

  async update(user: string, updateLoginDto: UpdateLoginDto) {
    const login = await this.findOne(user);

    if (!login) {
      throw new NotFoundException();
    }

    Object.assign(login, updateLoginDto);

    return await this.loginRepository.save(login);
  }

  async updateNivel(user: string, nivel: number) {
    const login = await this.findOne(user);

    if (!login) {
      throw new NotFoundException('Usuário não encontrado');
    }

    login.nivel = Number(login.nivel) + Number(nivel);

    return await this.loginRepository.save(login);
  }

  async remove(user: string) {
    const login = await this.findOne(user);
    if (!login) {
      throw new NotFoundException();
    }

    return await this.loginRepository.remove(login);
  }
}
