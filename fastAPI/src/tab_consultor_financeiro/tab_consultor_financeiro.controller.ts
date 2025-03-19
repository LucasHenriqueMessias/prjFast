import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabConsultorFinanceiroService } from './tab_consultor_financeiro.service';
import { CreateTabConsultorFinanceiroDto } from './dto/create-tab_consultor_financeiro.dto';
import { UpdateTabConsultorFinanceiroDto } from './dto/update-tab_consultor_financeiro.dto';

@Controller('tab-consultor-financeiro')
export class TabConsultorFinanceiroController {
  constructor(private readonly tabConsultorFinanceiroService: TabConsultorFinanceiroService) {}

  @Post()
  create(@Body() createTabConsultorFinanceiroDto: CreateTabConsultorFinanceiroDto) {
    return this.tabConsultorFinanceiroService.create(createTabConsultorFinanceiroDto);
  }

  @Get()
  findAll() {
    return this.tabConsultorFinanceiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabConsultorFinanceiroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabConsultorFinanceiroDto: UpdateTabConsultorFinanceiroDto) {
    return this.tabConsultorFinanceiroService.update(+id, updateTabConsultorFinanceiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabConsultorFinanceiroService.remove(+id);
  }
}
