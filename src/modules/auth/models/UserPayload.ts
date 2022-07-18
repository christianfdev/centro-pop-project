export interface UserPayload {
    sub: number;
    username: string;
    assignment: string;
    iat?: number;
    exp?: number;
  }