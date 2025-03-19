export class CreateCursosEmbbedVideoDto {

    titulo: string; //titulo da videoaula que será exibida
    descricao: string; //descrição do que será apresentada durante a videoaula
    curso: string; //nome do curso que essa videoaula pertence
    modulo: number; //módulo do curso que essa videoaula faz parte (capitulo do curso)
    categoria: string; //categoria do curso da videoaula ( ex: se faz parte de um plano gratuito, premium, exclusivo clientes fast, etc)
    professor: string; //nome do professor que ministrará a videoaula
    usuario: string; //nome do usuário que está cadastrando a videoaula
    embbed_video: string; //link do video que será embutido na página

}
