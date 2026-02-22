import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guard/roles/roles.decorator';
import { Role } from 'src/guard/roles/roles.enum';
import { RolesGuard } from 'src/guard/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {

    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return { message:'only admin can access'}
    }
    @Get('user-data')
    getUserData(){
        return { message:'Anyone can access the data'}
    }
    
}

