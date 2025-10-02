import { DeepPartial } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { UserService } from 'src/modules/user/user.service';
import { Role } from 'src/shared/modules/rbac/enum/rbac.enum';
import { Repository } from 'typeorm';

@Injectable()
export class TenantService extends TypeOrmQueryService<TenantEntity> {
  constructor(
    @InjectRepository(TenantEntity)
    repo: Repository<TenantEntity>,
    private readonly userService: UserService,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async createOne(record: DeepPartial<TenantEntity>): Promise<TenantEntity> {
    const existing = await this.repo.findOne({
      where: { email: record.email },
    });

    if (existing) {
      throw new Error(
        `Ya existe un inquilino con este correo electrónico: ${record.email}`,
      );
    }

    const tenant = this.repo.create(record);
    await this.repo.save(tenant);
    await this.userService.createUser({
      email: tenant.email,
      role: Role.Admin,
      tenantId: tenant.id,
    });
    return tenant;
  }
}
