import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabConsultorComercialService } from './tab_consultor_comercial.service';
import { CreateTabConsultorComercialDto } from './dto/create-tab_consultor_comercial.dto';
import { UpdateTabConsultorComercialDto } from './dto/update-tab_consultor_comercial.dto';

@Controller('tab-consultor-comercial')
export class TabConsultorComercialController {
  constructor(private readonly tabConsultorComercialService: TabConsultorComercialService) {}

  @Post()
  create(@Body() createTabConsultorComercialDto: CreateTabConsultorComercialDto) {
    return this.tabConsultorComercialService.create(createTabConsultorComercialDto);
  }

  @Get()
  findAll() {
    return this.tabConsultorComercialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabConsultorComercialService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabConsultorComercialDto: UpdateTabConsultorComercialDto) {
    return this.tabConsultorComercialService.update(id, updateTabConsultorComercialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabConsultorComercialService.remove(id);
  }
}