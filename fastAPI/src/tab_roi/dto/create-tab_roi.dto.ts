export class CreateTabRoiDto {

    id: number; //padrão
    cnpj: string; //padrão
    usuario: string; //padrão
    data_criacao: Date; //padrão
    maquina_cartao: number;
    emprestimos_financiamentos: number;
    telefonia: number;
    contabilidade: number;
    taxas_bancarias: number;
    taxas_administrativas: number; //extra
    investimentos: number;
    juridico: number;
    mensalidade_roi: number; //indicador ROI
    ferias: number; //indicador intangível
    aumento_equipe: number; //indicador intangível

}
