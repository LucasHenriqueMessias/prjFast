export class CreateTabSucessoClienteDto {
    id: number;
    cnpjCliente: string;
    sucesso: number;
    feedbackPosVenda: string;
    feedbackNegocio: string;
    feedbackProduto: string;
    NpsFast: number;
    LtvConsultor: number;
    usuario: string;
    data: Date;
    dataContato: Date;
    dataUltimoContato: Date;
    dataProximoContato: Date;
}
