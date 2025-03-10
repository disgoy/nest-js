import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService{
    /**
     * to inject constructor
    */
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ){}

    /**
     * The method to get all users from the database
     */
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

    /**
     * The method to get a single user through the id from the database
     */
    public findOneById(id: string){
        return {
            id: 283,
            firstname: "John",
            email: "john@doe.com",
        };
    }
}