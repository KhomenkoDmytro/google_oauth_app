import { Module } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';
import { UserProfileService } from './user-profile.service';

@Module({
  controllers: [UserProfileController],
  providers: [AuthenticatedGuard, UserProfileService]
})
export class UserProfileModule {}
