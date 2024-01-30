import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utils/authenticated.guard';
import { UserProfileService } from './user-profile.service';

@Controller('profile')
export class UserProfileController {
    constructor(private readonly userProfileService: UserProfileService){}
    @Get('unprotected')
    getUnprotectedProfile(@Req() req) {
        return this.userProfileService.getUnprotetedMessage();
    }

    @Get('protected')
    @UseGuards(AuthenticatedGuard)
    getProtectedProfile(@Req() req) {
        return this.userProfileService.getProfileData(req);
    }
}
