import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector ){} // reflector are used  to get meta data for the decorator form enum  
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles= this.reflector.getAllAndOverride<Role[]>( // getoveride get all the values 
      ROLES_KEY,[
        context.getHandler(), // get the handler meta data
        context.getClass(), // get clss y andrar ki meta data fined krat hai 
      ]
    )
    if(!requiredRoles){
      return true;
    }
    const request = context.switchToHttp().getRequest<{headers:Record<string, string>}>()
    const userRole = request.headers['x-user-role'] as Role;

    return requiredRoles.includes(userRole);
  }
}
