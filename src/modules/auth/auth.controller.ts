import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Request,
    UseGuards,
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { User } from '../user/entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Assignment } from './decorators/assignment.decorator';
import { UserAssignment } from '../user/user-assignment.enum';
  
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }


  @Get('/me')
  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req): User {
  return req.user;
}
}