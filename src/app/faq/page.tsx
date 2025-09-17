export default function FAQ() {
  const faqs = [
    {
      question: "Quanto tempo leva para fazer uma prótese dentária?",
      answer: "O tempo varia dependendo do tipo de prótese. Próteses simples podem levar de 3-5 dias úteis, enquanto próteses mais complexas como implantes ou reabilitações completas podem levar de 7-15 dias. Sempre informamos o prazo estimado na primeira consulta."
    },
    {
      question: "Quais materiais vocês utilizam nas próteses?",
      answer: "Utilizamos materiais de alta qualidade como resina acrílica, porcelana, zircônia e metais nobres. Todos os materiais são certificados e seguem as normas da ANVISA, garantindo durabilidade e biocompatibilidade."
    },
    {
      question: "Como funciona o processo de confecção de uma prótese?",
      answer: "O processo inclui: 1) Consulta inicial e planejamento, 2) Moldagem dos dentes, 3) Confecção do modelo de trabalho, 4) Escultura e montagem da prótese, 5) Acabamento e polimento, 6) Prova e ajustes finais, 7) Entrega ao paciente."
    },
    {
      question: "Vocês fazem próteses de implante?",
      answer: "Sim, somos especializados em próteses sobre implantes. Trabalhamos com todos os sistemas de implantes disponíveis no mercado, oferecendo soluções fixas, removíveis e protocolo, sempre com garantia de qualidade."
    },
    {
      question: "Qual é o prazo de garantia das próteses?",
      answer: "Oferecemos garantia de 1 ano contra defeitos de fabricação. Para próteses de zircônia e porcelana, a garantia é de 2 anos. A garantia não cobre desgaste natural ou problemas decorrentes de má higiene bucal."
    },
    {
      question: "Como devo cuidar da minha prótese dentária?",
      answer: "Recomendamos: escovação diária com escova macia, uso de fio dental, limpeza com produtos específicos para próteses, remoção durante o sono (para próteses removíveis), e visitas regulares ao dentista para manutenção."
    },
    {
      question: "Vocês atendem convênios odontológicos?",
      answer: "Sim, trabalhamos com diversos convênios odontológicos. Entre em contato conosco informando seu convênio para verificarmos a cobertura disponível e os procedimentos autorizados."
    },
    {
      question: "É possível fazer reparos em próteses antigas?",
      answer: "Sim, oferecemos serviços de reparo e manutenção de próteses antigas. Avaliamos cada caso individualmente para determinar se o reparo é viável ou se é necessário confeccionar uma prótese nova."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer: "Você pode agendar através do telefone (54) 3045-7786, WhatsApp (54) 99679-7786, ou pessoalmente em nossa clínica. Também aceitamos agendamentos via redes sociais."
    },
    {
      question: "Vocês fazem próteses estéticas?",
      answer: "Sim, oferecemos próteses com foco estético, utilizando materiais como porcelana e zircônia que proporcionam aparência natural e durabilidade. Trabalhamos em conjunto com o dentista para alcançar o resultado desejado."
    },
    {
      question: "Qual é o custo médio de uma prótese dentária?",
      answer: "Os valores variam conforme a complexidade e material utilizado. Uma prótese simples pode custar a partir de R$ 500,00, enquanto próteses mais complexas com zircônia podem chegar a R$ 5.000,00 ou mais. Fornecemos orçamento detalhado sem compromisso."
    },
    {
      question: "Vocês fazem coroas e pontes?",
      answer: "Sim, confeccionamos coroas unitárias, pontes fixas e coroas sobre implantes. Utilizamos porcelana, zircônia e metais nobres, sempre priorizando a estética e funcionalidade."
    },
    {
      question: "Como funciona o pagamento das próteses?",
      answer: "Aceitamos pagamentos à vista, cartão de crédito/débito, convênios odontológicos e parcelamento em até 12x sem juros. Oferecemos condições especiais para pagamentos à vista."
    },
    {
      question: "Vocês fazem próteses provisórias?",
      answer: "Sim, oferecemos próteses provisórias (provisórios) para uso durante o período de confecção da prótese definitiva. Elas garantem estética e funcionalidade temporária enquanto a prótese final é preparada."
    },
    {
      question: "Como posso acompanhar o andamento da minha prótese?",
      answer: "Disponibilizamos um sistema de acompanhamento onde você pode verificar o status da sua prótese através do nosso site ou aplicativo. Também mantemos contato direto com o dentista responsável pelo seu caso."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Perguntas Frequentes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossos serviços odontológicos.
              Aqui você encontra respostas para as perguntas mais comuns.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Dúvidas Comuns
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Respostas completas e detalhadas para suas principais dúvidas sobre
                nossos serviços de próteses dentárias.
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Nossa equipe está pronta para esclarecer qualquer dúvida adicional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+555430457786"
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    📞 Ligar Agora
                  </a>
                  <a
                    href="https://wa.me/5554996797786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
