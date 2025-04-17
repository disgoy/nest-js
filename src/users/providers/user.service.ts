import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService{
    
    /**
     * to inject constructor
    */
    // constructor(
    //     @Inject(forwardRef(() => AuthService))
    //     private readonly authService: AuthService
    // ){}

    constructor(
        /**
         * Injecting User repository into UsersService
         * */
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    

    public async createUser(createUserDto: CreateUserDto) {
        // Check if user with email exists
        const existingUser = await this.usersRepository.findOne({
          where: { email: createUserDto.email },
        });
    
        /**
         * Handle exceptions if user exists later
         * */
    
        // Try to create a new user
        // - Handle Exceptions Later
        let newUser = this.usersRepository.create(createUserDto);
        newUser = await this.usersRepository.save(newUser);
    
        // Create the user
        return newUser;
      }
    

    /**
     * The method to get all users from the database
     */
    public findAll(getUsersParamDto: GetUsersParamDto, limit : number, page : number){
        // const isAuth = this.authService.isAuth();
        // console.log(isAuth);
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