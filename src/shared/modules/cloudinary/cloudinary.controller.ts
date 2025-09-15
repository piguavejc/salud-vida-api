import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/shared/modules/cloudinary/cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly service: CloudinaryService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ url: string }> {
    return await this.service.uploadImage(file);
  }
}
