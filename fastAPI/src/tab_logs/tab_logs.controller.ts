import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabLogsService } from './tab_logs.service';
import { CreateTabLogDto } from './dto/create-tab_log.dto';
import { UpdateTabLogDto } from './dto/update-tab_log.dto';

@Controller('tab-logs')
export class TabLogsController {
  constructor(private readonly tabLogsService: TabLogsService) {}

  @Post()
  create(@Body() createTabLogDto: CreateTabLogDto) {
    return this.tabLogsService.create(createTabLogDto);
  }

  @Get()
  findAll() {
    return this.tabLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabLogDto: UpdateTabLogDto) {
    return this.tabLogsService.update(+id, updateTabLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabLogsService.remove(+id);
  }
}
