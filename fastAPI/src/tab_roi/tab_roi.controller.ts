import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabRoiService } from './tab_roi.service';
import { CreateTabRoiDto } from './dto/create-tab_roi.dto';
import { UpdateTabRoiDto } from './dto/update-tab_roi.dto';

@Controller('tab-roi')
export class TabRoiController {
  constructor(private readonly tabRoiService: TabRoiService) {}

  @Post()
  create(@Body() createTabRoiDto: CreateTabRoiDto) {
    return this.tabRoiService.create(createTabRoiDto);
  }

  @Get()
  findAll() {
    return this.tabRoiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabRoiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabRoiDto: UpdateTabRoiDto) {
    return this.tabRoiService.update(+id, updateTabRoiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabRoiService.remove(+id);
  }
}
