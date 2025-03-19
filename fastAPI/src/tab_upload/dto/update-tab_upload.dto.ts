import { PartialType } from '@nestjs/mapped-types';
import { CreateTabUploadDto } from './create-tab_upload.dto';

export class UpdateTabUploadDto extends PartialType(CreateTabUploadDto) {}
