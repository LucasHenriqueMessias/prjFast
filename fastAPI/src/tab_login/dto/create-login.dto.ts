import { TabLoja } from "src/tab_cliente/entities/tab_loja.entity";

export class CreateLoginDto {
  user: string;
  password: string;
  active: boolean;
  role: string = 'user';
  department: string;
  nivel: number;
}
