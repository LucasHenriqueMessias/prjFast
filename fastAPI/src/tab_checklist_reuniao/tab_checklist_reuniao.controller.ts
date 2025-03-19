import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabChecklistReuniaoService } from './tab_checklist_reuniao.service';
import { CreateTabChecklistReuniaoDto } from './dto/create-tab_checklist_reuniao.dto';
import { UpdateTabChecklistReuniaoDto } from './dto/update-tab_checklist_reuniao.dto';

@Controller('tab-checklist-reuniao')
export class TabChecklistReuniaoController {
  constructor(private readonly tabChecklistReuniaoService: TabChecklistReuniaoService) {}

  @Post()
  create(@Body() createTabChecklistReuniaoDto: CreateTabChecklistReuniaoDto) {
    return this.tabChecklistReuniaoService.create(createTabChecklistReuniaoDto);
  }

  @Get()
  findAll() {
    return this.tabChecklistReuniaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabChecklistReuniaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabChecklistReuniaoDto: UpdateTabChecklistReuniaoDto) {
    return this.tabChecklistReuniaoService.update(+id, updateTabChecklistReuniaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabChecklistReuniaoService.remove(+id);
  }
}
