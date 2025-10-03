import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsBoolean, IsString, IsUUID } from 'class-validator';

@InputType('PublicLocalInput')
export class PublicLocalInputDto {
  @Field(() => [String])
  @IsString({ each: true })
  @IsArray()
  ids!: string[];

  @Field()
  @IsUUID()
  tenantId!: string;

  @Field()
  @IsBoolean()
  isPublic!: boolean;
}
