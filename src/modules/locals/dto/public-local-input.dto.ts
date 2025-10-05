import { Field, InputType } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

@InputType('PublicLocalInput')
export class PublicLocalInputDto {
  @Field(() => [String])
  @IsString({ each: true })
  @IsArray()
  ids!: string[];

  @IsUUID()
  @IsOptional()
  tenantId!: string;

  @Field()
  @IsBoolean()
  isPublic!: boolean;
}
