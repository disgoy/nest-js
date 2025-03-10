import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService{
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ){}

    public findAll(getUsersParamDto: GetUsersParamDto, limit : number, page : number){
        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        return [
            {
                firstname: "John",
                email: "john@doe.com",
            },
            {
                firstname: "Alice",
                email: "alice@doe.com",
            },
        ];
    }

    public findOneById(id: string){
        return {
            id: 283,
            firstname: "John",
            email: "john@doe.com",
        };
    }
}