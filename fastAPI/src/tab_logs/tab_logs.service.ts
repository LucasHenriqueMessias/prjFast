import { Injectable } from '@nestjs/common';
import { CreateTabLogDto } from './dto/create-tab_log.dto';
import { UpdateTabLogDto } from './dto/update-tab_log.dto';

@Injectable()
export class TabLogsService {
  create(createTabLogDto: CreateTabLogDto) {
    return 'This action adds a new tabLog';
  }

  findAll() {
    return `This action returns all tabLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabLog`;
  }

  update(id: number, updateTabLogDto: UpdateTabLogDto) {
    return `This action updates a #${id} tabLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabLog`;
  }
}
