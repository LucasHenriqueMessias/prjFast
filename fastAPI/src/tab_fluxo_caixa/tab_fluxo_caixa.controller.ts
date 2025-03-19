import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabFluxoCaixaService } from './tab_fluxo_caixa.service';
import { CreateTabFluxoCaixaDto } from './dto/create-tab_fluxo_caixa.dto';
import { UpdateTabFluxoCaixaDto } from './dto/update-tab_fluxo_caixa.dto';

@Controller('tab-fluxo-caixa')
export class TabFluxoCaixaController {
  constructor(private readonly tabFluxoCaixaService: TabFluxoCaixaService) {}

  @Post()
  create(@Body() createTabFluxoCaixaDto: CreateTabFluxoCaixaDto) {
    return this.tabFluxoCaixaService.create(createTabFluxoCaixaDto);
  }

  @Get()
  findAll() {
    return this.tabFluxoCaixaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabFluxoCaixaService.findOne(+id);
  }

  @Get('classificacao/:Categoria')
  findAllByClassif(@Param('Categoria') Categoria: string) {
    return this.tabFluxoCaixaService.findAllByClassif(Categoria);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabFluxoCaixaDto: UpdateTabFluxoCaixaDto) {
    return this.tabFluxoCaixaService.update(+id, updateTabFluxoCaixaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabFluxoCaixaService.remove(+id);
  }
}
