import { Module, Session } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/google-strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import { AuthenticatedGuard } from './utils/authenticated.guard';

@Module({
    imports: [ PassportModule.register({ defaultStrategy: 'google', session: true })],
    controllers:[AuthController],
    providers: [GoogleStrategy, AuthenticatedGuard, SessionSerializer]
})
export class AuthModule {}
  