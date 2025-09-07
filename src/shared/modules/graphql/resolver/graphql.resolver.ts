/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Query, Resolver } from '@nestjs/graphql';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
