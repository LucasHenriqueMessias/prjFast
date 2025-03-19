import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabParceriaFastService } from './tab_parceria_fast.service';
import { CreateTabParceriaFastDto } from './dto/create-tab_parceria_fast.dto';
import { UpdateTabParceriaFastDto } from './dto/update-tab_parceria_fast.dto';

@Controller('tab-parceria-fast')
export class TabParceriaFastController {
  constructor(private readonly tabParceriaFastService: TabParceriaFastService) {}

  @Post()
  create(@Body() createTabParceriaFastDto: CreateTabParceriaFastDto) {
    return this.tabParceriaFastService.create(createTabParceriaFastDto);
  }

  @Get()
  findAll() {
    return this.tabParceriaFastService.findAll();
  }

@Get('count-parceria-usuario')
getCountParceriaPorUsuario() {
  return this.tabParceriaFastService.getCountParceriaPorUsuario();
}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabParceriaFastService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabParceriaFastDto: UpdateTabParceriaFastDto) {
    return this.tabParceriaFastService.update(+id, updateTabParceriaFastDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabParceriaFastService.remove(+id);
  }
}
