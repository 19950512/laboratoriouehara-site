export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Sobre Nós
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Próteses dentárias especializadas para um sorriso perfeito.
              Mais de 40 anos de experiência em qualidade e pontualidade.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
      </section>

      {/* Nossa História */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Nossa História
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-3xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      40+ Anos de Excelência
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Mais de quatro décadas dedicadas à odontologia de alta qualidade
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  No Laboratório Uehara, entendemos a importância de nos reinventarmos constantemente
                  para atender às demandas do mercado em constante evolução. Com mais de quarenta
                  anos de experiência, conquistamos nosso espaço e estamos comprometidos em contribuir
                  para a qualidade de vida e o ambiente profissional em que atuamos.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Acreditamos que a aprendizagem contínua e o ensino são essenciais para sustentar
                  nosso trabalho e fortalecer nossa marca. É por isso que priorizamos esses conceitos
                  e buscamos uma presença ativa nas redes sociais, proporcionando uma comunicação
                  mais próxima com nossos clientes e parceiros.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Oferecemos uma variedade de próteses especializadas, incluindo lâminas, lentes de
                  contato e facetas, projetadas para cobrir as faces dos dentes e proporcionar uma
                  aparência estética aprimorada ao sorrir. Cada um de nossos produtos passa por um
                  processo detalhado, começando pelo planejamento digital, que é cuidadosamente
                  revisado e aprovado antes de seguirmos para a produção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Produção */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nosso Processo de Produção
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Cada prótese é produzida com técnicas avançadas e atenção meticulosa aos detalhes
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📋</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Planejamento Digital
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Análise detalhada e planejamento digital personalizado,
                cuidadosamente revisado e aprovado.
              </p>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Produção Avançada
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Utilização de técnicas de modelagem injetada ou fresada,
                escolhendo a melhor opção para cada caso.
              </p>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Acabamento Final
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Acabamento meticuloso através do estratificação ou maquiagem,
                de acordo com as preferências dos profissionais.
              </p>
            </div>
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">�‍⚕️</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Finalização Especializada
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Cada prótese é individualmente finalizada por nossos especialistas,
                aplicando todo o conhecimento e experiência técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Princípios que guiam nosso trabalho e compromisso com a excelência
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⭐</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Qualidade Superior
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Comprometimento com a excelência em cada etapa do processo,
                utilizando materiais de alta qualidade e técnicas avançadas.
              </p>
            </div>
            <div className="group text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⏰</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Pontualidade
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Cumprimos rigorosamente os prazos acordados, garantindo que você
                tenha uma experiência tranquila e sem atrasos.
              </p>
            </div>
            <div className="group text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Parceria
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Trabalhamos em parceria com profissionais odontológicos,
                visando superar expectativas e alcançar resultados excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conheça Nossa Equipe
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Profissionais especializados e dedicados à odontologia de alta qualidade.
            Conheça nossa equipe completa.
          </p>
          <a
            href="/equipe"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="flex items-center gap-3">
              Ver Equipe Completa
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
