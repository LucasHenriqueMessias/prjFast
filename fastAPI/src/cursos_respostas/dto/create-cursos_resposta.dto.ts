import { CursosPergunta } from "src/cursos_perguntas/entities/cursos_pergunta.entity";

export class CreateCursosRespostaDto {

    id_pergunta: CursosPergunta;
    resposta: string;
    correta: boolean;
    
}
