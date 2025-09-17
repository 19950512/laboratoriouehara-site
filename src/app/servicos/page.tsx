export default function Servicos() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços protéticos utilizando técnicas avançadas
            e materiais de alta qualidade para atender às suas necessidades.
          </p>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Protocolos Carga Imediata */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-6">🦷</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Protocolos Carga Imediata
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Colocação de implantes e fixação de próteses no mesmo dia,
                proporcionando resultados rápidos e eficientes.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Implantes dentários imediatos</li>
                <li>• Próteses temporárias no mesmo dia</li>
                <li>• Restauração funcional imediata</li>
                <li>• Redução no tempo de tratamento</li>
              </ul>
            </div>

            {/* Lâminas Estéticas */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Lâminas Estéticas
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Finas camadas aplicadas sobre os dentes para corrigir imperfeições
                e obter um sorriso mais bonito.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Correção de imperfeições dentárias</li>
                <li>• Melhoria estética do sorriso</li>
                <li>• Materiais de alta durabilidade</li>
                <li>• Resultados naturais</li>
              </ul>
            </div>

            {/* Prótese Total */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-6">👄</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Prótese Total
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Restauração completa e personalizada para substituir todos os dentes ausentes,
                proporcionando funcionalidade e estética.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Substituição completa de dentição</li>
                <li>• Restauração funcional e estética</li>
                <li>• Conforto e adaptação personalizada</li>
                <li>• Materiais de alta qualidade</li>
              </ul>
            </div>

            {/* Metalo Cerâmica */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Metalo Cerâmica
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Técnica avançada que combina resistência do metal com a estética natural da cerâmica,
                resultando em restaurações duráveis e esteticamente agradáveis.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Resistência e durabilidade superiores</li>
                <li>• Estética natural da cerâmica</li>
                <li>• Alta resistência à fratura</li>
                <li>• Longevidade das restaurações</li>
              </ul>
            </div>

            {/* Fluxo Digital */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-6">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Fluxo Digital
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Utilização de tecnologias avançadas, como escaneamento intraoral e impressão 3D,
                para criar próteses personalizadas com maior precisão e agilidade.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Escaneamento intraoral digital</li>
                <li>• Impressão 3D de alta precisão</li>
                <li>• Planejamento virtual detalhado</li>
                <li>• Produção mais rápida e precisa</li>
              </ul>
            </div>

            {/* Consultoria */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-6">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Consultoria
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Suporte especializado para profissionais odontológicos, oferecendo orientação
                técnica e soluções personalizadas para aprimorar processos e técnicas.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Orientação técnica especializada</li>
                <li>• Soluções personalizadas</li>
                <li>• Aprimoramento de processos</li>
                <li>• Suporte contínuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Nosso Processo de Trabalho
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Planejamento
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Análise detalhada e planejamento digital personalizado
                para cada caso específico.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Produção
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilização de técnicas avançadas e materiais de alta
                qualidade na produção das próteses.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Acabamento
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Acabamento final meticuloso realizado por especialistas
                com atenção aos detalhes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Entrega
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Entrega pontual com garantia de qualidade e satisfação
                do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Precisa de um Serviço Específico?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir suas necessidades específicas
            e receber uma consultoria personalizada.
          </p>
          <a
            href="https://wa.me/5554996797786"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            📱 Solicitar Consultoria
          </a>
        </div>
      </section>
    </div>
  );
}
