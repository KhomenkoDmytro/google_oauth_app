import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserProfileModule } from './user-profile/user-profile.module';
@Module({
  imports: [AuthModule, UserProfileModule, PassportModule.register({ session: true }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
