import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/user.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-options.entity';

@Injectable()
export class PostsService {

    constructor(
        private readonly userService: UsersService,
        // inject post repository
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,

        // inject metaOptionsRepository
        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository: Repository<MetaOption>,
    ){}

    public async create(createPostDto: CreatePostDto) {
        // create metaoptions
        // let metaOptions = createPostDto.metaOptions ? this.metaOptionsRepository.create(createPostDto.metaOptions): null
        // if (metaOptions){
        //     await this.metaOptionsRepository.save(metaOptions);
        // }

        // create posts
        let post = this.postsRepository.create(createPostDto);

        // add metaoptions to the post
        // if (metaOptions) {
        //     post.metaOptions = metaOptions;
        // }

        // return the post to the user
        return await this.postsRepository.save(post);
    }

    public async findAll(userId: string){
        const user = this.userService.findOneById(userId);

        // return [
        //     {
        //         user: user,
        //         title: "test title",
        //         content: "test content"
        //     },
        //     {
        //         user: user,
        //         title: "test title 2",
        //         content: "test content 2"
        //     },
        // ];

        let posts = await this.postsRepository.find({
            // relations: {
            //     metaOptions: true,
            // }
        });

        return posts;
    }


    public async delete(id: number){
        // find the post by id
        let post = await this.postsRepository.findOneBy({id});

        // delete the post
        await this.postsRepository.delete(id);

        if (!post || !post.metaOptions){
            throw new NotFoundException("Undefined");
        }

        // delete the metaoptions
        await this.metaOptionsRepository.delete(post.metaOptions.id);

        // send confirmation of deletation
        return {deleted: true, id: post.id}
    }
}
