export class CreateTabFluxoCaixaDto {
    id: number;
    data: Date; 
    data_ajustada: Date;
    banco_origem: string;
    Categoria: string;
    tipo: boolean;
    valor_movimentacao: number;
    descricao: string;
    efetivado: boolean;
    vencimento_original: Date;
    competencia: Date;
}
