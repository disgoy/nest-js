import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './providers/user.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
    controllers : [UserController],
    providers : [UsersService],
    exports: [UsersService],
    imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
