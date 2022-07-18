import { SetMetadata } from '@nestjs/common';

export const Assignment = (assignment: string) => SetMetadata('assignment', assignment);