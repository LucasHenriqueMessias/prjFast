import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Public } from '../auth/public.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get('get/user/:user')
  findOne(@Param('user') user: string) {
    return this.loginService.findOne(user);
  }

  @Get('department/:department')
  findByRole(@Param('department') department: string) {
    return this.loginService.findByRole(department);
  }

  @Patch('update/:user')
  update(@Param('user') user: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(user, updateLoginDto);
  }

  @Public()
  @Patch('exp/:user/:nivel')
  updateNivel(@Param('user') user: string, @Param('nivel') nivel: string) {
    return this.loginService.updateNivel(user, Number(nivel));
  }

  @Delete('delete/:user')
  remove(@Param('user') user: string) {
    return this.loginService.remove(user);
  }
}
