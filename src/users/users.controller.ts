import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, Req, Headers, ParseIntPipe, DefaultValuePipe, Ip, ValidationPipe } from "@nestjs/common";
import {Request} from 'express';
import { CreateUserDto } from "src/users/dtos/create-user.dto";
import { GetUsersParamDto } from "src/users/dtos/get-users-param.dto";
import { PatchUserDto } from "src/users/dtos/patch-user.dto";
import { UsersService } from "./providers/user.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

 
@Controller('users')
@ApiTags('Users')
export class UserController{
    constructor(
        private readonly userService : UsersService
    ){}

    @Get('/:id')
    @ApiOperation({
        summary: "fetches the registered users on the application."
    })
    @ApiResponse({status: 200, description: 'Users fetched successfully on the query.'})
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'number of entries returned per query.',
        example: 10
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'position of page number you want the api to return.',
        example: 1
    })
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ){
        return this.userService.findAll(getUsersParamDto, limit, page);
    }

    @Post()
    public createUsers(
        @Body() createUserDto: CreateUserDto, 
    ){
        console.log(createUserDto instanceof CreateUserDto);
        return "you sent a post request to users endpoint";
    }


    @Patch()
    public patchUser(
        @Body() patchUserDto : PatchUserDto
    ){
        return patchUserDto;
    }
}