import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabSociosService } from './tab_socios.service';
import { CreateTabSocioDto } from './dto/create-tab_socio.dto';
import { UpdateTabSocioDto } from './dto/update-tab_socio.dto';

@Controller('tab-socios')
export class TabSociosController {
  constructor(private readonly tabSociosService: TabSociosService) {}

  @Post()
  create(@Body() createTabSocioDto: CreateTabSocioDto) {
    return this.tabSociosService.create(createTabSocioDto);
  }

  @Get()
  findAll() {
    return this.tabSociosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabSociosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabSocioDto: UpdateTabSocioDto) {
    return this.tabSociosService.update(+id, updateTabSocioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabSociosService.remove(+id);
  }
}
