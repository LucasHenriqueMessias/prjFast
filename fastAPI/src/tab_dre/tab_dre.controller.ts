import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabDreService } from './tab_dre.service';
import { CreateTabDreDto } from './dto/create-tab_dre.dto';
import { UpdateTabDreDto } from './dto/update-tab_dre.dto';

@Controller('tab-dre')
export class TabDreController {
  constructor(private readonly tabDreService: TabDreService) {}

  //ok
  @Post()
  create(@Body() createTabDreDto: CreateTabDreDto) {
    return this.tabDreService.create(createTabDreDto);
  }

  //ok
  @Get()
  findAll() {
    return this.tabDreService.findAll();
  }

  //ok
  @Get(':Data/:Cliente')
  findOne(@Param('Data')Data: Date, @Param('Cliente')Cliente: string) {
    return this.tabDreService.findAllByDate(Data, Cliente);
  }

  //ok
  @Patch(':id')
  update(@Param('id')id: number, @Body() updateTabDreDto: UpdateTabDreDto) {
    return this.tabDreService.update(+id, updateTabDreDto);
  }

  //ok
  @Delete(':id')
  remove(@Param('id')id: number) {
    return this.tabDreService.remove(id);
  }
}
