import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/google-strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';

@Module({
    imports: [ PassportModule.register({ defaultStrategy: 'google', session: true })],
    controllers:[AuthController],
    providers: [GoogleStrategy, SessionSerializer]
})
export class AuthModule {}
  