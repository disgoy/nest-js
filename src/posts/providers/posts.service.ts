import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/user.service';

@Injectable()
export class PostsService {

    constructor(
        private readonly userService: UsersService,
    ){}


    public findAll(userId: string){
        const user = this.userService.findOneById(userId);

        return [
            {
                user: user,
                title: "test title",
                content: "test content"
            },
            {
                user: user,
                title: "test title 2",
                content: "test content 2"
            },
        ];
    }
}
