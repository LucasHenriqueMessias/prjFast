import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { join } from 'path';
import { LoginModule } from './tab_login/login.module';
import { TabLojaModule } from './tab_cliente/tab_loja.module';
import { TabTiposMovimentacaoModule } from './tab_tipos_movimentacao/tab_tipos_movimentacao.module';
import { TabFluxoCaixaModule } from './tab_fluxo_caixa/tab_fluxo_caixa.module';
import { TabCnaeSecundarioModule } from './tab_cnae_secundario/tab_cnae_secundario.module';
import { TabSociosModule } from './tab_socios/tab_socios.module';
import { TabConsultorComercialModule } from './tab_consultor_comercial/tab_consultor_comercial.module';
import { TabRegimeTributarioModule } from './tab_regime_tributario/tab_regime_tributario.module';
import { TabDreModule } from './tab_dre/tab_dre.module';
import { TabReuniaoModule } from './tab_reuniao/tab_reuniao.module';
import { TabConsultorFinanceiroModule } from './tab_consultor_financeiro/tab_consultor_financeiro.module';
import { TabFastModule } from './tab_fast/tab_fast.module';
import { TabProspeccaoModule } from './tab_prospeccao/tab_prospeccao.module';
import { TabDoresClienteModule } from './tab_dores_cliente/tab_dores_cliente.module';
import { TabAnalistaFinanceiroModule } from './tab_analista_financeiro/tab_analista_financeiro.module';
import { TabFerramentasModule } from './tab_ferramentas/tab_ferramentas.module';
import { TabSucessoClienteModule } from './tab_sucesso_cliente/tab_sucesso_cliente.module';
import { TabUploadModule } from './tab_upload/tab_upload.module';
import { TabRoiModule } from './tab_roi/tab_roi.module';
import { TabParceriaFastModule } from './tab_parceria_fast/tab_parceria_fast.module';
import { TabFotografiaClienteModule } from './tab_fotografia_cliente/tab_fotografia_cliente.module';
import { TabContratoModule } from './tab_contrato/tab_contrato.module';
import { TabIndicacaoClienteModule } from './tab_indicacao_cliente/tab_indicacao_cliente.module';
import { TabSinalAmareloModule } from './tab_sinal_amarelo/tab_sinal_amarelo.module';
import { AuthModule } from './auth/auth.module';
import { TabNotificacaoModule } from './tab_notificacao/tab_notificacao.module';
import { TabEventoModule } from './tab_evento/tab_evento.module';
import { TabChecklistReuniaoModule } from './tab_checklist_reuniao/tab_checklist_reuniao.module';
import { CursosEmbbedVideoModule } from './cursos_embbed_video/cursos_embbed_video.module';
import { CursosPerguntasModule } from './cursos_perguntas/cursos_perguntas.module';
import { CursosRespostasModule } from './cursos_respostas/cursos_respostas.module';
import { TabLogsModule } from './tab_logs/tab_logs.module';
import { TabHelpdeskModule } from './tab_helpdesk/tab_helpdesk.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        //do not use in production
        synchronize: true,
      }),
    }),
    LoginModule,
    TabLojaModule,
    TabTiposMovimentacaoModule,
    TabFluxoCaixaModule,
    TabCnaeSecundarioModule,
    TabSociosModule,
    TabConsultorComercialModule,
    TabRegimeTributarioModule,
    TabDreModule,
    TabReuniaoModule,
    TabConsultorFinanceiroModule,
    TabFastModule,
    TabProspeccaoModule,
    TabDoresClienteModule,
    TabAnalistaFinanceiroModule,
    TabFerramentasModule,
    TabSucessoClienteModule,
    TabUploadModule,
    TabRoiModule,
    TabParceriaFastModule,
    TabFotografiaClienteModule,
    TabContratoModule,
    TabIndicacaoClienteModule,
    TabSinalAmareloModule,
    AuthModule,
    TabNotificacaoModule,
    TabEventoModule,
    TabChecklistReuniaoModule,
    CursosEmbbedVideoModule,
    CursosPerguntasModule,
    CursosRespostasModule,
    TabLogsModule,
    TabHelpdeskModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
