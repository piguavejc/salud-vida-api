import { Global, Module } from '@nestjs/common';

import { JwtService } from 'src/shared/modules/jwt/jwt.service';

@Global()
@Module({
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
