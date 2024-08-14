import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';

export class TokenDto {
  id: number;
  role: Role;
}

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.get<Role[]>('roles', context.getHandler());
      console.log(requiredRoles)
      console.log(requiredRoles[0])
      if (!requiredRoles) {
        return true;
      }
      const request = context.switchToHttp().getRequest();
      const user = request.user; // assume request.user is set from a previous auth middleware
      console.log(user.roles);
      if(user.roles === requiredRoles[0]){
        return true;
      }
      return false;
    }
  }
    