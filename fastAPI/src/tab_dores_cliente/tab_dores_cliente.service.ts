import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabDoresClienteDto } from './dto/create-tab_dores_cliente.dto';
import { UpdateTabDoresClienteDto } from './dto/update-tab_dores_cliente.dto';
import { TabDoresCliente } from './entities/tab_dores_cliente.entity';	

@Injectable()
export class TabDoresClienteService {
  constructor(
    @InjectRepository(TabDoresCliente)
    private readonly tabDoresClienteRepository: Repository<TabDoresCliente>,
  ) {}

  async create(createTabDoresClienteDto: CreateTabDoresClienteDto): Promise<TabDoresCliente> {
    const tabDoresCliente = this.tabDoresClienteRepository.create(createTabDoresClienteDto);
    return await this.tabDoresClienteRepository.save(tabDoresCliente);
  }

  async findAll(): Promise<TabDoresCliente[]> {
    return await this.tabDoresClienteRepository.find();
  }

  async findOne(id: number): Promise<TabDoresCliente> {
    const tabDoresCliente = await this.tabDoresClienteRepository.findOne({ where: { id } });
    if (!tabDoresCliente) {
      throw new NotFoundException(`TabDoresCliente with ID ${id} not found`);
    }
    return tabDoresCliente;
  }

  async update(id: number, updateTabDoresClienteDto: UpdateTabDoresClienteDto): Promise<TabDoresCliente> {
    const result = await this.tabDoresClienteRepository.update(id, updateTabDoresClienteDto);
    if (result.affected === 0) {
      throw new NotFoundException(`TabDoresCliente with ID ${id} not found`);
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.tabDoresClienteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`TabDoresCliente with ID ${id} not found`);
    }
  }
}