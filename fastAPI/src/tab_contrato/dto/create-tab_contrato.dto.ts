export class CreateTabContratoDto {

    id: number; //padrão
    data_criacao: Date; //padrão
    usuario: string; //padrão
    cliente: string; //padrão
    cnpj: string;
    tipo_documento: string; //contrato, recisão...
    contrato_id: number; //Contrato salvo pelo tab_upload, id declarada aqui
}
