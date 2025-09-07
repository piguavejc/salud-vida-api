import { registerEnumType } from '@nestjs/graphql';

export enum Provider {
  Cloudinary = 'cloudinary',
}

registerEnumType(Provider, {
  name: 'Provider',
});
