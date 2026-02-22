import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(// excute before the controller to check what have come
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request= context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    
    return authHeader === 'Bearer my secret-token';
  }
}
