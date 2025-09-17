export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Política de Privacidade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Compromisso com a proteção e privacidade dos seus dados pessoais.
              Saiba como tratamos suas informações.
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
                  Proteção de Dados
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Esta política descreve como o Laboratório Uehara coleta, utiliza, armazena e protege suas informações pessoais.
                </p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
              </div>

              <div className="space-y-12">
                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                    Informações que Coletamos
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Podemos coletar as seguintes informações pessoais:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Nome completo</li>
                      <li>CPF e RG</li>
                      <li>Data de nascimento</li>
                      <li>Endereço residencial e comercial</li>
                      <li>Telefones de contato</li>
                      <li>E-mail</li>
                      <li>Informações odontológicas necessárias para prestação do serviço</li>
                      <li>Fotos e imagens odontológicas (com consentimento)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                    Como Utilizamos suas Informações
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      As informações coletadas são utilizadas para:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Prestar serviços odontológicos de qualidade</li>
                      <li>Manter registros médicos necessários</li>
                      <li>Agendamento e confirmação de consultas</li>
                      <li>Comunicação sobre tratamentos e procedimentos</li>
                      <li>Cumprimento de obrigações legais e regulatórias</li>
                      <li>Melhorar nossos serviços e processos</li>
                      <li>Enviar comunicações sobre cuidados odontológicos (com consentimento)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                    Compartilhamento de Dados
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      O Laboratório Uehara não vende, aluga ou comercializa suas informações pessoais.
                      Podemos compartilhar dados apenas nas seguintes situações:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Com profissionais de saúde envolvidos no seu tratamento</li>
                      <li>Com laboratórios parceiros para execução de serviços</li>
                      <li>Quando exigido por lei ou ordem judicial</li>
                      <li>Com seu consentimento explícito</li>
                      <li>Para proteção de direitos e segurança</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                    Segurança dos Dados
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Implementamos medidas de segurança técnicas, administrativas e físicas apropriadas
                      para proteger suas informações pessoais contra acesso não autorizado, alteração,
                      divulgação ou destruição. Todos os dados são armazenados em servidores seguros
                      com criptografia e backup regular.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                    Seus Direitos (LGPD)
                  </h3>
                  <div className="ml-13 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                      <li>Confirmação da existência de tratamento de dados</li>
                      <li>Acesso aos seus dados pessoais</li>
                      <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                      <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                      <li>Portabilidade dos dados a outro fornecedor</li>
                      <li>Eliminação dos dados tratados com consentimento</li>
                      <li>Revogação do consentimento</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">6</span>
                    Retenção de Dados
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir
                      as finalidades descritas nesta política, ou conforme exigido por lei.
                      Dados odontológicos são mantidos por período mínimo de 5 anos, conforme
                      regulamentação do Conselho Federal de Odontologia.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">7</span>
                    Cookies e Tecnologias Similares
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Utilizamos cookies e tecnologias similares apenas para melhorar a experiência
                      do usuário em nosso site, analisar o tráfego e personalizar conteúdo.
                      Você pode controlar o uso de cookies através das configurações do seu navegador.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">8</span>
                    Contato e Exercício de Direitos
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-600 p-4 rounded-lg">
                      <p className="text-slate-700 dark:text-slate-300 font-semibold">Encarregado de Dados (DPO)</p>
                      <p className="text-slate-600 dark:text-slate-400">Laboratório Uehara</p>
                      <p className="text-slate-600 dark:text-slate-400">E-mail: privacidade@laboratoriouehara.com.br</p>
                      <p className="text-slate-600 dark:text-slate-400">Telefone: (54) 3045-7786</p>
                      <p className="text-slate-600 dark:text-slate-400">Endereço: Rua Sete de Agosto 51A, Passo Fundo/RS</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-200 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">9</span>
                    Atualizações desta Política
                  </h3>
                  <div className="ml-13">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Podemos atualizar esta política periodicamente para refletir mudanças em nossas
                      práticas ou legislação aplicável. A versão mais recente estará sempre disponível
                      em nosso site, e a data da última atualização será indicada no topo do documento.
                    </p>
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
                    Dúvidas sobre Privacidade?
                  </h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Nossa equipe está pronta para esclarecer qualquer dúvida sobre o tratamento dos seus dados.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:privacidade@laboratoriouehara.com.br"
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
