import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TabDoresClienteService } from './tab_dores_cliente.service';
import { CreateTabDoresClienteDto } from './dto/create-tab_dores_cliente.dto';
import { UpdateTabDoresClienteDto } from './dto/update-tab_dores_cliente.dto';

@Controller('tab-dores-cliente')
export class TabDoresClienteController {
  constructor(private readonly tabDoresClienteService: TabDoresClienteService) {}

  @Post()
  create(@Body() createTabDoresClienteDto: CreateTabDoresClienteDto) {
    return this.tabDoresClienteService.create(createTabDoresClienteDto);
  }

  @Get()
  findAll() {
    return this.tabDoresClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tabDoresClienteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTabDoresClienteDto: UpdateTabDoresClienteDto) {
    return this.tabDoresClienteService.update(id, updateTabDoresClienteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tabDoresClienteService.remove(id);
  }
}