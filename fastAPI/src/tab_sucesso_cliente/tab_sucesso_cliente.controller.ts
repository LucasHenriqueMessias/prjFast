import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabSucessoClienteService } from './tab_sucesso_cliente.service';
import { CreateTabSucessoClienteDto } from './dto/create-tab_sucesso_cliente.dto';
import { UpdateTabSucessoClienteDto } from './dto/update-tab_sucesso_cliente.dto';

@Controller('tab-sucesso-cliente')
export class TabSucessoClienteController {
  constructor(private readonly tabSucessoClienteService: TabSucessoClienteService) {}

  @Post()
  create(@Body() createTabSucessoClienteDto: CreateTabSucessoClienteDto) {
    return this.tabSucessoClienteService.create(createTabSucessoClienteDto);
  }

  @Get()
  findAll() {
    return this.tabSucessoClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabSucessoClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabSucessoClienteDto: UpdateTabSucessoClienteDto) {
    return this.tabSucessoClienteService.update(+id, updateTabSucessoClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabSucessoClienteService.remove(+id);
  }
}
