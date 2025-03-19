import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabSinalAmareloService } from './tab_sinal_amarelo.service';
import { CreateTabSinalAmareloDto } from './dto/create-tab_sinal_amarelo.dto';
import { UpdateTabSinalAmareloDto } from './dto/update-tab_sinal_amarelo.dto';

@Controller('tab-sinal-amarelo')
export class TabSinalAmareloController {
  constructor(private readonly tabSinalAmareloService: TabSinalAmareloService) {}

  @Post()
  create(@Body() createTabSinalAmareloDto: CreateTabSinalAmareloDto) {
    return this.tabSinalAmareloService.create(createTabSinalAmareloDto);
  }

  @Get()
  findAll() {
    return this.tabSinalAmareloService.findAll();
  }

  @Get('sinal-amarelo-pendente')
  findPendingYellowSignal() {
    return this.tabSinalAmareloService.findPendingYellowSignal();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabSinalAmareloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabSinalAmareloDto: UpdateTabSinalAmareloDto) {
    return this.tabSinalAmareloService.update(+id, updateTabSinalAmareloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabSinalAmareloService.remove(+id);
  }
}
