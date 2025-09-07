import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
  Female = 'female',
  Male = 'male',
}

registerEnumType(Gender, {
  name: 'Gender',
});
