import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, Matches } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstname : string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    lastname : string;

    @IsEmail ()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/, {
        message: 'Password must have at least 8 characters, including one letter, one number, and one special character'
    })
    password : string;
}