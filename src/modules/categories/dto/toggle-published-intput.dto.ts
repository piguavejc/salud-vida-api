import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsBoolean, IsString, IsUUID } from 'class-validator';

@InputType('TogglePublishedInput')
export class TogglePublishedInputDTO {
  @Field(() => [String])
  @IsString({ each: true })
  @IsArray()
  ids: string[];

  @Field(() => Boolean)
  @IsBoolean()
  published: boolean;

  @Field()
  @IsUUID()
  tenantId: string;
}
