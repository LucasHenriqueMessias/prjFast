import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabEventoService } from './tab_evento.service';
import { CreateTabEventoDto } from './dto/create-tab_evento.dto';
import { UpdateTabEventoDto } from './dto/update-tab_evento.dto';

@Controller('tab-evento')
export class TabEventoController {
  constructor(private readonly tabEventoService: TabEventoService) {}

  @Post()
  create(@Body() createTabEventoDto: CreateTabEventoDto) {
    return this.tabEventoService.create(createTabEventoDto);
  }

  @Get()
  findAll() {
    return this.tabEventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabEventoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabEventoDto: UpdateTabEventoDto) {
    return this.tabEventoService.update(id, updateTabEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabEventoService.remove(id);
  }
}
