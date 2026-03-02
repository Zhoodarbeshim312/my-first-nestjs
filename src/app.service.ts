import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Get!';
  }
  postHello(): string {
    return 'Hello Post';
  }
  patchHello(): string {
    return 'Hello Patch';
  }
  deleteHello(): string {
    return 'Hello Delete';
  }
}
