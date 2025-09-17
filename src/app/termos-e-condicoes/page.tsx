export default function TermosCondicoes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Termos e Condições
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Regras e condições para utilização dos nossos serviços odontológicos.
              Leia atentamente antes de utilizar nossos serviços.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Condições de Uso
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Estes termos regulam o relacionamento entre o Laboratório Uehara e seus clientes,
                  estabelecendo direitos e obrigações de ambas as partes.
                </p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
              </div>

              <div className="space-y-12">
                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                    Definições
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Para fins destes Termos e Condições, consideram-se:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li><strong>Laboratório Uehara:</strong> Empresa especializada em próteses dentárias</li>
                      <li><strong>Cliente:</strong> Pessoa física ou jurídica que solicita nossos serviços</li>
                      <li><strong>Paciente:</strong> Pessoa que receberá o tratamento odontológico</li>
                      <li><strong>Serviços:</strong> Confecção, reparo e manutenção de próteses dentárias</li>
                      <li><strong>Profissional Solicitante:</strong> Dentista ou cirurgião-dentista responsável pelo caso</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                    Aceitação dos Termos
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Ao solicitar nossos serviços, o cliente declara ter lido, compreendido e aceito
                      integralmente estes Termos e Condições. A solicitação de serviços implica
                      na aceitação automática destes termos, que se aplicam a todas as relações
                      comerciais entre as partes.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                    Responsabilidades do Cliente
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      O cliente se compromete a:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Fornecer todas as informações necessárias para a execução do serviço</li>
                      <li>Informar sobre alergias, condições médicas ou restrições relevantes</li>
                      <li>Realizar os pagamentos conforme acordado</li>
                      <li>Retirar o trabalho no prazo estabelecido</li>
                      <li>Comunicar eventuais insatisfações no prazo de 30 dias após entrega</li>
                      <li>Utilizar os serviços apenas para fins odontológicos legítimos</li>
                      <li>Respeitar os direitos autorais sobre desenhos e modelos fornecidos</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                    Responsabilidades do Laboratório
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      O Laboratório Uehara se compromete a:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Executar os serviços com qualidade técnica e materiais adequados</li>
                      <li>Cumprir os prazos estabelecidos, salvo imprevistos justificados</li>
                      <li>Manter sigilo absoluto sobre informações do paciente</li>
                      <li>Oferecer garantia contra defeitos de fabricação</li>
                      <li>Prestar esclarecimentos sobre o andamento dos trabalhos</li>
                      <li>Seguir todas as normas técnicas e sanitárias aplicáveis</li>
                      <li>Utilizar materiais certificados e de procedência comprovada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                    Preços e Pagamento
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Sobre preços e condições de pagamento:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Os preços serão informados previamente e poderão sofrer reajustes</li>
                      <li>O pagamento poderá ser realizado à vista, parcelado ou via convênio</li>
                      <li>Em caso de parcelamento, o não pagamento implicará em juros e multa</li>
                      <li>Trabalhos não retirados após 90 dias poderão ser descartados</li>
                      <li>Orçamentos têm validade de 30 dias</li>
                      <li>Alterações no projeto aprovado poderão gerar custos adicionais</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">6</span>
                    Prazos de Entrega
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Os prazos de entrega serão estabelecidos conforme a complexidade do trabalho
                      e informados previamente. Imprevistos como falta de materiais, problemas
                      técnicos ou força maior poderão alterar os prazos, sendo o cliente informado
                      imediatamente. O não cumprimento de prazos por motivos alheios à nossa
                      responsabilidade não gera direito a indenização.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">7</span>
                    Garantia e Responsabilidade
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Sobre garantia e limitações de responsabilidade:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Garantia de 1 ano contra defeitos de fabricação</li>
                      <li>Garantia de 2 anos para próteses de zircônia e porcelana</li>
                      <li>Não cobrimos desgaste natural ou problemas por uso inadequado</li>
                      <li>Reparos por quebra acidental terão custo adicional</li>
                      <li>A garantia é válida apenas para o paciente original</li>
                      <li>Problemas decorrentes de má higiene não são cobertos</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">8</span>
                    Propriedade Intelectual
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Os desenhos, modelos, fotografias e especificações técnicas fornecidos
                      pelo cliente ou desenvolvidos pelo laboratório permanecem de propriedade
                      do cliente. O laboratório reserva-se o direito de utilizar técnicas e
                      processos desenvolvidos internamente para outros trabalhos, desde que
                      não viole direitos de propriedade intelectual do cliente.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">9</span>
                    Cancelamento e Devolução
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Condições para cancelamento:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Cancelamentos devem ser comunicados por escrito</li>
                      <li>Até 24h após aprovação: sem custos</li>
                      <li>Após início do trabalho: cobrança proporcional aos custos incorridos</li>
                      <li>Trabalhos concluídos não podem ser cancelados</li>
                      <li>Devoluções sujeitas a análise técnica e aprovação</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">10</span>
                    Foro e Legislação
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Estes Termos e Condições são regidos pela legislação brasileira,
                      especificamente pelo Código de Defesa do Consumidor, Lei Geral de
                      Proteção de Dados (LGPD) e normas do Conselho Federal de Odontologia.
                      Fica eleito o foro da Comarca de Passo Fundo/RS para dirimir quaisquer
                      dúvidas ou litígios decorrentes destes termos.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">11</span>
                    Disposições Gerais
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Outras disposições importantes:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Estes termos podem ser atualizados a qualquer momento</li>
                      <li>O cliente será informado sobre mudanças significativas</li>
                      <li>A tolerância não implica renúncia de direitos</li>
                      <li>Cláusulas inválidas não afetam a validade das demais</li>
                      <li>Este documento prevalece sobre entendimentos verbais</li>
                    </ul>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
                      Última atualização: 17 de setembro de 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Dúvidas sobre os Termos?
                  </h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Nossa equipe jurídica está disponível para esclarecer qualquer dúvida sobre estes termos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:contato@laboratoriouehara.com.br"
                      className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
                    >
                      📧 Enviar E-mail
                    </a>
                    <a
                      href="tel:+555430457786"
                      className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                    >
                      📞 Ligar Agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
