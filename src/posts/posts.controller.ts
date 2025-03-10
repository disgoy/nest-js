import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ){}

    @Get('/:userId')
    public getPosts(@Param('userId') userId: string = '') {
    return this.postsService.findAll(userId);
    }

    @ApiOperation({
        summary: 'creates a new blog post'
    })
    @ApiResponse({
        status: 201,
        description: 'you get a 201 if your post was created successfully.'
    })
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto){
        console.log(createPostDto);
    }

    @ApiOperation({
        summary: 'updates an existing blog post'
    })
    @ApiResponse({
        status: 200,
        description: 'you get a 200 if your post was updated successfully.'
    })
    @Patch()
    public updatePost(@Body() patchPostDto: PatchPostDto){
        console.log(patchPostDto);
    }
}
