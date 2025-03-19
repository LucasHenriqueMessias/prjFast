import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabFastService } from './tab_fast.service';
import { CreateTabFastDto } from './dto/create-tab_fast.dto';
import { UpdateTabFastDto } from './dto/update-tab_fast.dto';

@Controller('tab-fast')
export class TabFastController {
  constructor(private readonly tabFastService: TabFastService) {}

  @Post()
  create(@Body() createTabFastDto: CreateTabFastDto) {
    return this.tabFastService.create(createTabFastDto);
  }

  @Get()
  findAll() {
    return this.tabFastService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabFastService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabFastDto: UpdateTabFastDto) {
    return this.tabFastService.update(+id, updateTabFastDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabFastService.remove(+id);
  }
}
