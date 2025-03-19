import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LoginModule } from 'src/tab_login/login.module'; // Ensure this import is correct


@Module({
  imports: [
    LoginModule, // Ensure LoginModule is imported
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: '$2b$10$YhkLR0gjroEtpcrkv81ueOjIwCZqA7dFpXVVg5yby67lPPr6t1ncK',
        signOptions: { expiresIn: '2h' },
      }),
      inject: [ConfigService],
      global: true,
    }),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService,
    
  ],
  exports: [AuthService],
})
export class AuthModule {}