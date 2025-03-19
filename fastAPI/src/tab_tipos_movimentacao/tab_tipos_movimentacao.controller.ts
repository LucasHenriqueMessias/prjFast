/*
Created By: Lucas Henrique Messias Gonçalves
Date: 18.07.24
Description: Define ENDPOINTS from tab_tipos_movimentacao_controller
*/

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabTiposMovimentacaoService } from './tab_tipos_movimentacao.service';
import { CreateTabTiposMovimentacaoDto } from './dto/create-tab_tipos_movimentacao.dto';
import { UpdateTabTiposMovimentacaoDto } from './dto/update-tab_tipos_movimentacao.dto';

@Controller('tab-tipos-movimentacao')
export class TabTiposMovimentacaoController {
  constructor(private readonly tabTiposMovimentacaoService: TabTiposMovimentacaoService) {}

  @Post()
  create(@Body() createTabTiposMovimentacaoDto: CreateTabTiposMovimentacaoDto) {
    return this.tabTiposMovimentacaoService.create(createTabTiposMovimentacaoDto);
  }

  @Get()
  findAll() {
    return this.tabTiposMovimentacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabTiposMovimentacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabTiposMovimentacaoDto: UpdateTabTiposMovimentacaoDto) {
    return this.tabTiposMovimentacaoService.update(+id, updateTabTiposMovimentacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabTiposMovimentacaoService.remove(+id);
  }
}
