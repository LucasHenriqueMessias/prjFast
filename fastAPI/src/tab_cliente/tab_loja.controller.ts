import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabLojaService } from './tab_loja.service';
import { CreateTabLojaDto } from './dto/create-tab_loja.dto';
import { UpdateTabLojaDto } from './dto/update-tab_loja.dto';

@Controller('loja')
export class TabLojaController {
  constructor(private readonly tabLojaService: TabLojaService) {}

  @Post()
  create(@Body() createTabLojaDto: CreateTabLojaDto) {
    return this.tabLojaService.create(createTabLojaDto);
  }

  @Get()
  findAll() {
    return this.tabLojaService.findAll();
  }

  @Get('get/:cnpj_me')
  findOne(@Param('cnpj_me') cnpj_me: string) {
    return this.tabLojaService.findOne(cnpj_me);
  }

  @Patch('update/:cnpj_me')
  update(@Param('cnpj_me') cnpj_me: string, @Body() updateTabLojaDto: UpdateTabLojaDto) {
    return this.tabLojaService.update(cnpj_me, updateTabLojaDto);
  }

  @Delete('delete/:cnpj_me')
  remove(@Param('cnpj_me') cnpj_me: string) {
    return this.tabLojaService.remove(cnpj_me);
  }

  @Get('churn')
  getChurn() {
    return this.tabLojaService.getChurn();
  }

  @Get('churn30d')
  getChurn30d() {
    return this.tabLojaService.getChurn30d();
  }

  @Get('churnRate')
  getChurnRate() {
    return this.tabLojaService.getChurnRate();
  }
}
