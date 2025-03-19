import { TabCnaeSecundario } from "src/tab_cnae_secundario/entities/tab_cnae_secundario.entity";

export class CreateTabLojaDto {

    uf: string;
    cep: number;
    cnpj: string;
    pais: null;
    email: string;
    porte: string;
    bairro: string;
    numero: string;
    municipio: string;
    logradouro: string;
    cnae_fiscal: number;
    complemento: string;
    razao_social: string;
    nome_fantasia: string;
    capital_social: number;
    ddd_telefone_1: string;
    ddd_telefone_2: string;
    natureza_juridica: string;
    opcao_pelo_simples: boolean;
    cnae_fiscal_descricao: string;
    data_situacao_cadastral: string;
    descricao_situacao_cadastral: string;
    descricao_identificador_matriz_filial: string
    renda_bruta_inicial: number;
    renda_bruta_atual?: number;
    renda_liquida_inicial: number;
    renda_liquida_atual?: number;
    cnae_secundario: TabCnaeSecundario;
    numero_funcionarios: number;
    valor_faturamento: number;
    valor_faturamento_inicial: number;
    ponto_apoio: string;
    perfil: string;
    area_atuacao: string;
    segmento: string;
    numero_reunioes: number;
    status: string;
    data_contratacao_fast: Date;
    data_saida_fast: Date;
    nome_ponte: string;    
}

// const fakeData: CreateTabLojaDto[] = [
//     {
//         uf: "SP",
//         cep: 12345678,
//         cnpj: "12.345.678/0001-90",
//         pais: null,
//         email: "empresa1@example.com",
//         porte: "Grande",
//         bairro: "Centro",
//         numero: "123",
//         municipio: "São Paulo",
//         logradouro: "Rua A",
//         cnae_fiscal: 123456,
//         complemento: "Apto 1",
//         razao_social: "Empresa 1 Ltda",
//         nome_fantasia: "Empresa 1",
//         capital_social: 1000000,
//         ddd_telefone_1: "11",
//         ddd_telefone_2: "12",
//         natureza_juridica: "Sociedade Anônima",
//         opcao_pelo_simples: false,
//         cnae_fiscal_descricao: "Comércio varejista",
//         data_situacao_cadastral: "2023-01-01",
//         descricao_situacao_cadastral: "Ativa",
//         descricao_identificador_matriz_filial: "Matriz",
//         renda_bruta_inicial: 500000,
//         renda_bruta_atual: 600000,
//         renda_liquida_inicial: 300000,
//         renda_liquida_atual: 350000,
//         cnae_secundario: new TabCnaeSecundario(),
//         numero_funcionarios: 50,
//         valor_faturamento: 1000000,
//         valor_faturamento_inicial: 900000,
//         ponto_apoio: "Sim",
//         perfil: "Comercial",
//         area_atuacao: "Varejo",
//         segmento: "Alimentação",
//         numero_reunioes: 10,
//         status: "Ativo",
//         data_contratacao_fast: new Date("2023-01-01"),
//         data_saida_fast: new Date("2024-01-01"),
//         nome_ponte: "Ponte 1"
//     },
//     {
//         uf: "RJ",
//         cep: 87654321,
//         cnpj: "98.765.432/0001-09",
//         pais: null,
//         email: "empresa10@example.com",
//         porte: "Pequeno",
//         bairro: "Zona Sul",
//         numero: "321",
//         municipio: "Rio de Janeiro",
//         logradouro: "Avenida B",
//         cnae_fiscal: 654321,
//         complemento: "Sala 10",
//         razao_social: "Empresa 10 Ltda",
//         nome_fantasia: "Empresa 10",
//         capital_social: 500000,
//         ddd_telefone_1: "21",
//         ddd_telefone_2: "22",
//         natureza_juridica: "Empresa Individual",
//         opcao_pelo_simples: true,
//         cnae_fiscal_descricao: "Serviços de TI",
//         data_situacao_cadastral: "2023-02-01",
//         descricao_situacao_cadastral: "Ativa",
//         descricao_identificador_matriz_filial: "Filial",
//         renda_bruta_inicial: 200000,
//         renda_bruta_atual: 250000,
//         renda_liquida_inicial: 150000,
//         renda_liquida_atual: 180000,
//         cnae_secundario: new TabCnaeSecundario(),
//         numero_funcionarios: 20,
//         valor_faturamento: 400000,
//         valor_faturamento_inicial: 350000,
//         ponto_apoio: "Não",
//         perfil: "Tecnologia",
//         area_atuacao: "TI",
//         segmento: "Software",
//         numero_reunioes: 5,
//         status: "Ativo",
//         data_contratacao_fast: new Date("2023-02-01"),
//         data_saida_fast: new Date("2024-02-01"),
//         nome_ponte: "Ponte 10"
//     }
// ];
