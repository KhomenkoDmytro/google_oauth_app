import { Controller, Get, UseGuards,Request } from "@nestjs/common";
import { GoogleAuthGuard } from "./utils/guards";

@Controller('auth')
export class AuthController{
    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin(){
        return { msg: 'Google Authentication' }
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect(@Request() req){
        return {msg: 'OK', user: req.user
        }
    }
}