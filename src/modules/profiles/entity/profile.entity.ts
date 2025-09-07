import { Entity, OneToMany } from 'typeorm';

import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { EnumColumn } from 'src/shared/typeorm/columns/enum.column';
import { Gender } from 'src/modules/profiles/enums/profle.enum';
import { ObjectType } from '@nestjs/graphql';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Profile')
@Entity('profiles')
export class ProfileEntity extends CommonEntity {
  @TextColumn()
  fullNames: string;

  @TextColumn()
  phone: string;

  @EnumColumn(Gender, { nullable: true })
  gender!: Gender | null;

  @DateColumn({ nullable: true })
  bithdate!: Date | null;

  @UuidColumn()
  userId: string;

  @OneToMany(() => UserEntity, (user) => user.profiles)
  user: UserEntity[];
}
