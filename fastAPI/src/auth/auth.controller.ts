import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Public } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  SignIn(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto.user, createAuthDto.password);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':user')
  findOne(@Param('user') user: string) {
    return this.authService.findOne(user);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authService.remove(+id);
  }
}
