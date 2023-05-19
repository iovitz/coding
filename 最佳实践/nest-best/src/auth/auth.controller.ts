import { Controller, Get, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logger: Logger,
  ) {}

  @Get()
  getHello() {
    return this.authService.getHello();
  }
}
