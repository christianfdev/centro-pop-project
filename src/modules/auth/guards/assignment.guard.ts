import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AssignmentGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userAssignment = request.user.assignment;
    const requiredAssignment = this.reflector.get<string[]>(
      'assignment',
      context.getHandler(),
    );

    if (!requiredAssignment) return true;

    let response = false

    for(let i = 0; i < requiredAssignment.length+1; i++){
      if(userAssignment === requiredAssignment[i]){
        response = true;
        break;
      } 
    }

    return response;
  }
}