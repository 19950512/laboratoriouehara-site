export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Laboratório Uehara
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Próteses dentárias especializadas para um sorriso perfeito.
              Mais de 40 anos de experiência em qualidade e pontualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contato"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Entre em Contato
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="/servicos"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">40+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Pacientes Atendidos</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Serviços Especializados</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços protéticos utilizando técnicas avançadas
              e materiais de alta qualidade para atender às suas necessidades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🦷</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Protocolos Carga Imediata
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Colocação de implantes e fixação de próteses no mesmo dia,
                proporcionando resultados rápidos e eficientes.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Lâminas Estéticas
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Finas camadas aplicadas sobre os dentes para corrigir imperfeições
                e obter um sorriso mais bonito.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👄</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Prótese Total
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Restauração completa e personalizada para substituir todos os dentes ausentes,
                proporcionando funcionalidade e estética.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Metalo Cerâmica
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Técnica avançada que combina resistência do metal com a estética natural da cerâmica,
                resultando em restaurações duráveis e esteticamente agradáveis.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Fluxo Digital
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Utilização de tecnologias avançadas, como escaneamento intraoral e impressão 3D,
                para criar próteses personalizadas com maior precisão e agilidade.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Consultoria
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Suporte especializado para profissionais odontológicos, oferecendo orientação
                técnica e soluções personalizadas para aprimorar processos e técnicas.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                  Sobre o Laboratório Uehara
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Com mais de quarenta anos de experiência, conquistamos nosso espaço e estamos
                  comprometidos em contribuir para a qualidade de vida e o ambiente profissional
                  em que atuamos.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Acreditamos que a aprendizagem contínua e o ensino são essenciais para sustentar
                  nosso trabalho e fortalecer nossa marca. Priorizamos esses conceitos e buscamos
                  uma presença ativa nas redes sociais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/sobre"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Conheça Nossa História
                  </a>
                  <a
                    href="/contato"
                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Entre em Contato
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-3xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Excelência Reconhecida
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Mais de 40 anos de dedicação à odontologia de alta qualidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Tire suas dúvidas mais comuns sobre nossos serviços odontológicos
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Quanto tempo leva para fazer uma prótese?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                O tempo varia de 3-5 dias para próteses simples até 7-15 dias para casos mais complexos. Sempre informamos o prazo na primeira consulta.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Quais materiais vocês utilizam?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Utilizamos materiais certificados como resina acrílica, porcelana, zircônia e metais nobres, todos seguindo normas da ANVISA.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Vocês fazem próteses de implante?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Sim, somos especializados em próteses sobre implantes, trabalhando com todos os sistemas disponíveis no mercado.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Qual é o prazo de garantia?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Oferecemos 1 ano de garantia contra defeitos de fabricação, e 2 anos para próteses de zircônia e porcelana.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Como faço para agendar uma consulta?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Agende através do telefone (54) 3045-7786, WhatsApp (54) 99679-7786 ou visite-nos pessoalmente.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Vocês atendem convênios?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Sim, trabalhamos com diversos convênios odontológicos. Entre em contato para verificar cobertura disponível.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/faq"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center gap-2">
                Ver Todas as Perguntas
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para um Sorriso Perfeito?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato conosco e experimente a diferença no Laboratório Uehara.
            Garantimos entrega no prazo combinado, com qualidade superior.
          </p>
          <a
            href="https://wa.me/5554996797786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="flex items-center gap-3">
              📱 Fale Conosco no WhatsApp
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
