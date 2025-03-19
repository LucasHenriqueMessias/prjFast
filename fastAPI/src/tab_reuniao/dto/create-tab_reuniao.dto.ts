export class CreateTabReuniaoDto {

    id: number; //padrão
    user: string; //padrão
    cliente: string; //padrão
    status: string; //status da reunião, se ela aconteceu ou não
    tipo_reuniao: string; //RD, RA, RE, RI, RC, Contato de analista, contato da equipe comercial...
    local_reuniao: string;
    Ata_reuniao: string;
    data_marcada: Date;
    data_realizada: Date;
    data_criacao: Date; //padrão
    caminho: string;
    nps_reuniao: number; //nps

}
