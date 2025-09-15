import { Module } from '@nestjs/common';
import { CloudinaryController } from 'src/shared/modules/cloudinary/cloudinary.controller';
import { CloudinaryService } from 'src/shared/modules/cloudinary/cloudinary.service';

@Module({
  controllers: [CloudinaryController],
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class CloudinaryModule {}
