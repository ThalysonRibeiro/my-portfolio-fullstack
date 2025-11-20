import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Thalyson Rafael",
  description:
    "Entenda como este site coleta, usa e protege seus dados, incluindo o uso de cookies e Google Analytics.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Política de Privacidade | Thalyson Rafael",
    locale: "pt_BR",
    type: "article"
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade | Thalyson Rafael",
    description:
      "Informações sobre privacidade e cookies, incluindo Google Analytics e controles de consentimento."
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Política de Privacidade</h1>
        <p className="text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Visão geral</h2>
        <p className="text-muted-foreground">
          Este site tem o objetivo de apresentar meu trabalho como desenvolvedor. Coletamos apenas
          informações necessárias para contato e métricas de uso com o propósito de melhorar a
          experiência de navegação.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dados que podem ser coletados</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium">Informações fornecidas por você</h3>
            <p className="text-muted-foreground">
              Ao utilizar o formulário de contato, você pode enviar nome, e-mail e mensagem. Esses
              dados são usados exclusivamente para responder ao seu contato.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Dados de uso e métricas</h3>
            <p className="text-muted-foreground">
              Utilizamos Google Analytics para entender de forma agregada como o site é utilizado
              (páginas visitadas, tempo de navegação, dispositivo, localização aproximada). A
              anonimização de IP está ativada.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Como usamos seus dados</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Responder mensagens enviadas via formulário de contato.</li>
          <li>Mensurar desempenho e melhorar conteúdo e acessibilidade do site.</li>
          <li>Garantir segurança e integridade da experiência de navegação.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Compartilhamento de dados</h2>
        <p className="text-muted-foreground">
          Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. As métricas
          coletadas pelo Google Analytics são processadas pelo Google de acordo com as políticas do
          serviço.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Seus direitos</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Solicitar acesso, correção ou remoção de informações fornecidas por você.</li>
          <li>Gerenciar consentimento de cookies pelo aviso exibido no site.</li>
          <li>Desativar cookies analíticos nas preferências do navegador.</li>
        </ul>
      </section>

      <section id="cookies" className="space-y-4">
        <h2 className="text-xl font-semibold">Política de Cookies</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium">O que são cookies</h3>
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos armazenados no seu dispositivo para lembrar preferências
              e ajudar a entender o uso do site. Utilizamos apenas cookies analíticos opcionais.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Consentimento</h3>
            <p className="text-muted-foreground">
              Ao acessar o site, você pode aceitar ou recusar cookies analíticos por meio do aviso de
              consentimento exibido. Caso recuse, o Google Analytics não será carregado.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Google Analytics</h3>
            <p className="text-muted-foreground">
              O Google Analytics é usado para coletar estatísticas agregadas de navegação. O recurso
              de anonimização de IP está habilitado. Você pode desativar o uso de cookies nas
              configurações do seu navegador.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Retenção</h2>
        <p className="text-muted-foreground">
          Mantemos informações enviadas via contato apenas pelo tempo necessário para responder e
          dar seguimento à conversa. Métricas analíticas são retidas conforme as políticas do Google
          Analytics.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Contato</h2>
        <p className="text-muted-foreground">
          Para dúvidas sobre privacidade ou pedidos relacionados a dados, envie um e-mail para
          <span className="font-medium"> rafinha.head@gmail.com</span>.
        </p>
      </section>
    </main>
  );
}