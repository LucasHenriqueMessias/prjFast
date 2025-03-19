import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabHelpdeskService } from './tab_helpdesk.service';
import { CreateTabHelpdeskDto } from './dto/create-tab_helpdesk.dto';
import { UpdateTabHelpdeskDto } from './dto/update-tab_helpdesk.dto';

@Controller('tab-helpdesk')
export class TabHelpdeskController {
  constructor(private readonly tabHelpdeskService: TabHelpdeskService) {}

  @Post()
  create(@Body() createTabHelpdeskDto: CreateTabHelpdeskDto) {
    return this.tabHelpdeskService.create(createTabHelpdeskDto);
  }

  @Get()
  findAll() {
    return this.tabHelpdeskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabHelpdeskService.findOne(id);
  }

  @Get('solicitante/:solicitante')
  findBySolicitante(@Param('solicitante') solicitante: string) {
    return this.tabHelpdeskService.findBySolicitante(solicitante);
  }

  @Get('responsavel/:responsavel')
  findByResponsavel(@Param('responsavel') responsavel: string) {
    return this.tabHelpdeskService.findByResponsavel(responsavel);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabHelpdeskDto: UpdateTabHelpdeskDto) {
    return this.tabHelpdeskService.update(id, updateTabHelpdeskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabHelpdeskService.remove(id);
  }
}
