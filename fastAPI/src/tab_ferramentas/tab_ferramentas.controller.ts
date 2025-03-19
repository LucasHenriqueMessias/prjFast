import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabFerramentasService } from './tab_ferramentas.service';
import { CreateTabFerramentaDto } from './dto/create-tab_ferramenta.dto';
import { UpdateTabFerramentaDto } from './dto/update-tab_ferramenta.dto';

@Controller('tab-ferramentas')
export class TabFerramentasController {
  constructor(private readonly tabFerramentasService: TabFerramentasService) {}

  @Post()
  create(@Body() createTabFerramentaDto: CreateTabFerramentaDto) {
    return this.tabFerramentasService.create(createTabFerramentaDto);
  }

  @Get()
  findAll() {
    return this.tabFerramentasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabFerramentasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabFerramentaDto: UpdateTabFerramentaDto) {
    return this.tabFerramentasService.update(+id, updateTabFerramentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabFerramentasService.remove(+id);
  }
}
