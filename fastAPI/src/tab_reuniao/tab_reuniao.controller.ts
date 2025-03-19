import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabReuniaoService } from './tab_reuniao.service';
import { CreateTabReuniaoDto } from './dto/create-tab_reuniao.dto';
import { UpdateTabReuniaoDto } from './dto/update-tab_reuniao.dto';

@Controller('tab-reuniao')
export class TabReuniaoController {
  constructor(private readonly tabReuniaoService: TabReuniaoService) {}

  @Post()
  create(@Body() createTabReuniaoDto: CreateTabReuniaoDto) {
    return this.tabReuniaoService.create(createTabReuniaoDto);
  }

  @Get()
  findAll() {
    return this.tabReuniaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabReuniaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabReuniaoDto: UpdateTabReuniaoDto) {
    return this.tabReuniaoService.update(+id, updateTabReuniaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabReuniaoService.remove(+id);
  }
}
