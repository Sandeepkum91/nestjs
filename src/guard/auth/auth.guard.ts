import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const authHeader = (req as unknown as Record<string, unknown>).headers?.[
      'authorization'
    ] as string | undefined;

    return authHeader === 'Bearer my secret-token';
  }
}
