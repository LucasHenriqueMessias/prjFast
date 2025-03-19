import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabCnaeSecundarioService } from './tab_cnae_secundario.service';
import { CreateTabCnaeSecundarioDto } from './dto/create-tab_cnae_secundario.dto';
import { UpdateTabCnaeSecundarioDto } from './dto/update-tab_cnae_secundario.dto';

@Controller('tab-cnae-secundario')
export class TabCnaeSecundarioController {
  constructor(private readonly tabCnaeSecundarioService: TabCnaeSecundarioService) {}

  @Post()
  create(@Body() createTabCnaeSecundarioDto: CreateTabCnaeSecundarioDto) {
    return this.tabCnaeSecundarioService.create(createTabCnaeSecundarioDto);
  }

  @Get()
  findAll() {
    return this.tabCnaeSecundarioService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: number) {
    return this.tabCnaeSecundarioService.findAllByCodigo(+codigo);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: number, @Body() updateTabCnaeSecundarioDto: UpdateTabCnaeSecundarioDto) {
    return this.tabCnaeSecundarioService.update(+codigo, updateTabCnaeSecundarioDto);
  }

  @Delete(':codigo/:cnpj')
  remove(@Param('codigo') codigo: number, cnpj:string) {
    return this.tabCnaeSecundarioService.remove(+codigo, cnpj);
  }
}
