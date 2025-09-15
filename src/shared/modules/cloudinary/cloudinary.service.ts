/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UploadApiOptions, v2 as cloudinary } from 'cloudinary';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CloudinaryService {
  private CLOUDINARY_API_KEY: string;
  private CLOUDINARY_API_SECRET: string;
  private CLOUDINARY_NAME: string;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('CLOUDINARY_API_KEY');
    const apiSecret = this.configService.get<string>('CLOUDINARY_API_SECRET');
    const cloudName = this.configService.get<string>('CLOUDINARY_NAME');
    if (!apiKey || !apiSecret || !cloudName) {
      throw new Error(
        'Cloudinary API credentials are missing in environment variables',
      );
    }
    this.CLOUDINARY_API_KEY = apiKey;
    this.CLOUDINARY_API_SECRET = apiSecret;
  }

  async uploadImage(file: Express.Multer.File): Promise<{ url: string }> {
    cloudinary.config({
      cloud_name: this.CLOUDINARY_NAME,
      api_key: this.CLOUDINARY_API_KEY,
      api_secret: this.CLOUDINARY_API_SECRET,
    });

    const { buffer } = file;
    const base64Image = buffer.toString('base64');
    const dataUri = `data:${file.mimetype};base64,${base64Image}`;
    const options: UploadApiOptions = {
      folder: 'test',
    };
    const result = await cloudinary.uploader.upload(dataUri, options);
    return {
      url: result.secure_url,
    };
  }
}
