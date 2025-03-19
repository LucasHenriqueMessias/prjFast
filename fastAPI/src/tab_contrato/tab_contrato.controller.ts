import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabContratoService } from './tab_contrato.service';
import { CreateTabContratoDto } from './dto/create-tab_contrato.dto';
import { UpdateTabContratoDto } from './dto/update-tab_contrato.dto';

@Controller('tab-contrato')
export class TabContratoController {
  constructor(private readonly tabContratoService: TabContratoService) {}

  @Post()
  create(@Body() createTabContratoDto: CreateTabContratoDto) {
    return this.tabContratoService.create(createTabContratoDto);
  }

  @Get()
  findAll() {
    return this.tabContratoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabContratoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabContratoDto: UpdateTabContratoDto) {
    return this.tabContratoService.update(+id, updateTabContratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabContratoService.remove(+id);
  }
}
