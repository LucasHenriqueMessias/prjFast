import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabIndicacaoClienteService } from './tab_indicacao_cliente.service';
import { CreateTabIndicacaoClienteDto } from './dto/create-tab_indicacao_cliente.dto';
import { UpdateTabIndicacaoClienteDto } from './dto/update-tab_indicacao_cliente.dto';

@Controller('tab-indicacao-cliente')
export class TabIndicacaoClienteController {
  constructor(private readonly tabIndicacaoClienteService: TabIndicacaoClienteService) {}

  @Post()
  create(@Body() createTabIndicacaoClienteDto: CreateTabIndicacaoClienteDto) {
    return this.tabIndicacaoClienteService.create(createTabIndicacaoClienteDto);
  }

  @Get()
  findAll() {
    return this.tabIndicacaoClienteService.findAll();
  }

  @Get('count-indicacao-usuario')
  CountIndicacaoPorUsuario() {
    return this.tabIndicacaoClienteService.getCountIndicacaoPorUsuario();
  }

  @Get('count-segmento')
  CountSegmento() {
    return this.tabIndicacaoClienteService.getCountSegmento();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabIndicacaoClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabIndicacaoClienteDto: UpdateTabIndicacaoClienteDto) {
    return this.tabIndicacaoClienteService.update(+id, updateTabIndicacaoClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabIndicacaoClienteService.remove(+id);
  }
}
