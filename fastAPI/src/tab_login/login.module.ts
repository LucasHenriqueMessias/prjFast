import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Login } from './entities/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Login])], // Ensure LoginRepository is included here
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}