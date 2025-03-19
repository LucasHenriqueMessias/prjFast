import { Injectable } from '@nestjs/common';
import { CreateTabFastDto } from './dto/create-tab_fast.dto';
import { UpdateTabFastDto } from './dto/update-tab_fast.dto';

@Injectable()
export class TabFastService {
  create(createTabFastDto: CreateTabFastDto) {
    return 'This action adds a new tabFast';
  }

  findAll() {
    return `This action returns all tabFast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabFast`;
  }

  update(id: number, updateTabFastDto: UpdateTabFastDto) {
    return `This action updates a #${id} tabFast`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabFast`;
  }
}
