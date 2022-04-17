import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get('/1')
    async cap1(): Promise<any>{
        return this.userService.choice1();
    }
    @Get('/2')
    async cap2(): Promise<any>{
        return this.userService.choice2();
    }
    @Get('/3')
    async cap3(): Promise<any>{
        return this.userService.choice3();
    }
    @Get('/4')
    async cap4(): Promise<any>{
        return this.userService.choice4();
    }
    @Get('/5')
    async cap5(): Promise<any>{
        return this.userService.choice5();
    }
    @Get('/6')
    async cap6(): Promise<any>{
        return this.userService.choice6();
    }
    @Get('/7')
    async cap7(): Promise<any>{
        return this.userService.choice7();
    }
}
