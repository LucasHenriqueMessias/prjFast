import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabFotografiaClienteService } from './tab_fotografia_cliente.service';
import { CreateTabFotografiaClienteDto } from './dto/create-tab_fotografia_cliente.dto';
import { UpdateTabFotografiaClienteDto } from './dto/update-tab_fotografia_cliente.dto';

@Controller('tab-fotografia-cliente')
export class TabFotografiaClienteController {
  constructor(private readonly tabFotografiaClienteService: TabFotografiaClienteService) {}

  @Post()
  create(@Body() createTabFotografiaClienteDto: CreateTabFotografiaClienteDto) {
    return this.tabFotografiaClienteService.create(createTabFotografiaClienteDto);
  }

  @Get()
  findAll() {
    return this.tabFotografiaClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabFotografiaClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabFotografiaClienteDto: UpdateTabFotografiaClienteDto) {
    return this.tabFotografiaClienteService.update(+id, updateTabFotografiaClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabFotografiaClienteService.remove(+id);
  }
}
