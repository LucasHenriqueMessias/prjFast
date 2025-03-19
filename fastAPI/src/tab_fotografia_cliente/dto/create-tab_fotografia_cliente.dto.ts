export class CreateTabFotografiaClienteDto {

    id: number;  //padrão  
    usuario: string; //padrão
    cnpj: string; //padrão
    data_criacao: Date; //padrão
    ferramentas: string;
    antecipacao_recebiveis: string;
    pagamento_impostos_mes: string;
    faturamento: string;
    novas_fontes_receita: string;
    numero_funcionarios: string;
    numero_clientes: string; //extra
    margem_lucro: string;
    parcelas_mensais: number;
    juros_mensais_pagos: number;
    inadimplencia: number;
    estrutura: string;
    cultura_empresarial: string;
    pro_labore: number;
}