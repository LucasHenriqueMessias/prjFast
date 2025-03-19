import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabRegimeTributarioService } from './tab_regime_tributario.service';
import { CreateTabRegimeTributarioDto } from './dto/create-tab_regime_tributario.dto';
import { UpdateTabRegimeTributarioDto } from './dto/update-tab_regime_tributario.dto';

@Controller('tab-regime-tributario')
export class TabRegimeTributarioController {
  constructor(private readonly tabRegimeTributarioService: TabRegimeTributarioService) {}

  @Post()
  create(@Body() createTabRegimeTributarioDto: CreateTabRegimeTributarioDto) {
    return this.tabRegimeTributarioService.create(createTabRegimeTributarioDto);
  }

  @Get()
  findAll() {
    return this.tabRegimeTributarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabRegimeTributarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabRegimeTributarioDto: UpdateTabRegimeTributarioDto) {
    return this.tabRegimeTributarioService.update(+id, updateTabRegimeTributarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabRegimeTributarioService.remove(+id);
  }
}
