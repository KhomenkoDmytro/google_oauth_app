import { Injectable } from "@nestjs/common";

@Injectable()
export class UserProfileService{
    getUnprotetedMessage(){
        return {
            msg:'This is available for unauthorized users.'
        };
    }

    getProfileData(req:any){
        return {
            name: req.user.firstName,
            googleURL: req.user.email,
            avatarUrl: req.user.picture,
        }
    }
}