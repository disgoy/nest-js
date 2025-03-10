import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './providers/user.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers : [UserController],
    providers : [UsersService],
    exports: [UsersService],
    imports: [forwardRef(() => AuthModule)]
})
export class UsersModule {}
