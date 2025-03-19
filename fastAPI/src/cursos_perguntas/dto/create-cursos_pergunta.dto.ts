import { CursosResposta } from "src/cursos_respostas/entities/cursos_resposta.entity";

export class CreateCursosPerguntaDto {

    pergunta: string;
    videoaula: string;
    curso: string;
    respostas: CursosResposta[];
    
}
