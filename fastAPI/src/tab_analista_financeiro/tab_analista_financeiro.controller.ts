import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabAnalistaFinanceiroService } from './tab_analista_financeiro.service';
import { CreateTabAnalistaFinanceiroDto } from './dto/create-tab_analista_financeiro.dto';
import { UpdateTabAnalistaFinanceiroDto } from './dto/update-tab_analista_financeiro.dto';

@Controller('tab-analista-financeiro')
export class TabAnalistaFinanceiroController {
  constructor(private readonly tabAnalistaFinanceiroService: TabAnalistaFinanceiroService) {}

  @Post()
  create(@Body() createTabAnalistaFinanceiroDto: CreateTabAnalistaFinanceiroDto) {
    return this.tabAnalistaFinanceiroService.create(createTabAnalistaFinanceiroDto);
  }

  @Get()
  findAll() {
    return this.tabAnalistaFinanceiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabAnalistaFinanceiroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabAnalistaFinanceiroDto: UpdateTabAnalistaFinanceiroDto) {
    return this.tabAnalistaFinanceiroService.update(id, updateTabAnalistaFinanceiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabAnalistaFinanceiroService.remove(id);
  }
}