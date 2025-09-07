/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { JwtService } from 'src/shared/modules/jwt/jwt.service';
import { Module } from '@nestjs/common';

// import { HelloResolver } from './hello.resolver';

@Module({
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
