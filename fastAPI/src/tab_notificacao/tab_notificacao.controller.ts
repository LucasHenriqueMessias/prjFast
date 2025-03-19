import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabNotificacaoService } from './tab_notificacao.service';
import { CreateTabNotificacaoDto } from './dto/create-tab_notificacao.dto';
import { UpdateTabNotificacaoDto } from './dto/update-tab_notificacao.dto';

@Controller('tab-notificacao')
export class TabNotificacaoController {
  constructor(private readonly tabNotificacaoService: TabNotificacaoService) {}

  @Post()
  create(@Body() createTabNotificacaoDto: CreateTabNotificacaoDto) {
    return this.tabNotificacaoService.create(createTabNotificacaoDto);
  }

  @Get()
  findAll() {
    return this.tabNotificacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabNotificacaoService.findOne(id);
  }
  @Get('/user/:user')
  findAllByUser(@Param('user') user: string) {
    return this.tabNotificacaoService.findAllByUser(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabNotificacaoDto: UpdateTabNotificacaoDto) {
    return this.tabNotificacaoService.update(id, updateTabNotificacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabNotificacaoService.remove(id);
  }
}
