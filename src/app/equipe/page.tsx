import Image from 'next/image';

export default function Equipe() {
  const teamMembers = [
    {
      name: "Milton S. Uehara",
      role: "CEO",
      image: "/laboratorio-uehara-milton-uehara.jpg",
      description: "Fundador e CEO do Laboratório Uehara, com mais de 40 anos de experiência em odontologia.",
      social: {
        facebook: "https://www.facebook.com/miltonsuehara",
        instagram: "https://www.instagram.com/miltonuehara/"
      }
    },
    {
      name: "Marta Ione S. dos Santos",
      role: "Gestora Administrativa",
      image: "/laboratorio-uehara-marta.jpg",
      description: "Responsável pela gestão administrativa e coordenação das operações do laboratório.",
      social: {
        facebook: "https://www.facebook.com/martauehara",
        instagram: "https://www.instagram.com/martasantosterapias/"
      }
    },
    {
      name: "Aline Scherer",
      role: "Technical Manager",
      image: "/laboratorio-uehara-tecnico-1.jpg",
      description: "Gerente técnica especializada em processos de produção e qualidade de próteses.",
      social: {
        facebook: "https://www.facebook.com/aline.scherer.31",
        instagram: "https://www.instagram.com/alinescherer_1/"
      }
    },
    {
      name: "Dra. Juliana Uehara",
      role: "Consultora Clínica",
      image: "/laboratorio-uehara-tecnico-2.jpg",
      description: "Especialista em consultoria clínica e desenvolvimento de soluções odontológicas.",
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100000587993840",
        instagram: "https://www.instagram.com/juliana_su/"
      }
    },
    {
      name: "Angelo Acco",
      role: "Técnico especialista em resina acrílica",
      image: "/laboratorio-uehara-tecnico-3.jpg",
      description: "Especialista em técnicas avançadas de resina acrílica e materiais compostos.",
      social: {
        facebook: "https://www.facebook.com/angelo.a.alves",
        instagram: "https://www.instagram.com/angeloacco/"
      }
    },
    {
      name: "Oumar Ndiaye",
      role: "Auxiliar Técnico",
      image: "/laboratorio-uehara-tecnico-4.jpg",
      description: "Auxiliar técnico dedicado ao suporte nas operações diárias do laboratório.",
      social: {}
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
                Nossa Equipe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Profissionais especializados e dedicados à odontologia de alta qualidade.
              Conheça nossa equipe completa.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
      </section>

      {/* Team Gallery */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Nossa Equipe em Ação
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Conheça o ambiente de trabalho e a dedicação da nossa equipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/equipe.jpg"
                alt="Equipe do Laboratório Uehara trabalhando"
                width={400}
                height={320}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">Trabalho em Equipe</h3>
                  <p className="text-white/90 text-sm">Profissionais dedicados à excelência odontológica</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/equipe-2.jpg"
                alt="Laboratório Uehara - Ambiente de trabalho"
                width={400}
                height={320}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">Ambiente Profissional</h3>
                  <p className="text-white/90 text-sm">Estrutura moderna e equipamentos de ponta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Profissionais Especializados
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Nossa equipe é composta por profissionais altamente qualificados e experientes,
              comprometidos com a excelência em cada projeto.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  {(member.social.facebook || member.social.instagram) && (
                    <div className="flex justify-center space-x-4">
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
                          aria-label={`Facebook de ${member.name}`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-colors duration-300"
                          aria-label={`Instagram de ${member.name}`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C8.396 0 7.609.034 6.298.154 4.987.275 4.014.59 3.252.968c-.806.39-1.49.914-2.077 1.5C.59 3.055.275 4.028.154 5.34.034 6.65 0 7.437 0 11.058s.034 4.408.154 5.719c.121 1.311.436 2.284.968 3.046.586.586 1.11 1.27 1.5 1.857.478.757.791 1.73.968 3.041.12 1.311.154 2.098.154 5.719s-.034 4.408-.154 5.719c-.177 1.311-.49 2.284-.968 3.041-.39.586-.914 1.11-1.5 1.5-.757.478-1.73.791-3.041.968C2.65 23.966 1.863 24 0 24s-1.65-.034-2.962-.154c-1.311-.177-2.284-.49-3.041-.968-.586-.39-1.11-.914-1.5-1.5-.757-.757-1.27-1.49-1.857-2.077C.59 20.945.275 19.972.154 18.661.034 17.35 0 16.563 0 12.942s.034-4.408.154-5.719c.121-1.311.436-2.284.968-3.046.586-.586 1.11-1.27 1.5-1.857.478-.757.791-1.73.968-3.041C2.35.034 3.137 0 6.758 0s4.408.034 5.719.154c1.311.121 2.284.436 3.046.968.586.586 1.27 1.11 1.857 1.5.757.478 1.73.791 3.041.968C17.35 3.034 18.137 3.378 21.758 3.378s4.408-.344 5.719-.154c1.311.177 2.284.49 3.041.968.586.39 1.11.914 1.5 1.5.757.757 1.27 1.49 1.857 2.077.478.757.791 1.73.968 3.041.12 1.311.154 2.098.154 5.719s-.034 4.408-.154 5.719c-.177 1.311-.49 2.284-.968 3.041-.39.586-.914 1.11-1.5 1.5-.757.757-1.49 1.27-2.077 1.857-.757.478-1.73.791-3.041.968C22.65 23.966 21.863 24 18.242 24s-4.408-.034-5.719-.154c-1.311-.177-2.284-.49-3.041-.968-.586-.39-1.11-.914-1.5-1.5-.757-.757-1.27-1.49-1.857-2.077-.478-.757-.791-1.73-.968-3.041C17.35 20.966 16.563 21 12.942 21s-4.408-.034-5.719-.154c-1.311-.177-2.284-.49-3.041-.968-.586-.586-1.27-1.11-1.857-1.5-.757-.478-1.73-.791-3.041-.968C2.65.034 1.863 0 0 0s.034-1.65.154-2.962c.177-1.311.49-2.284.968-3.041.586-.586 1.11-1.27 1.5-1.857.478-.757.791-1.73.968-3.041C2.35.034 3.137 0 6.758 0zM12.017 5.838c-3.403 0-6.163 2.76-6.163 6.163s2.76 6.163 6.163 6.163 6.163-2.76 6.163-6.163-2.76-6.163-6.163-6.163zm0 10.114c-2.302 0-4.166-1.864-4.166-4.166s1.864-4.166 4.166-4.166 4.166 1.864 4.166 4.166-1.864 4.166-4.166 4.166zM19.847 5.464c0 .754-.611 1.365-1.365 1.365s-1.365-.611-1.365-1.365.611-1.365 1.365-1.365 1.365.611 1.365 1.365z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trabalhe Conosco
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Estamos sempre em busca de profissionais qualificados para fazer parte da nossa equipe.
            Venha contribuir com a excelência em odontologia.
          </p>
          <a
            href="https://wa.me/5554996797786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="flex items-center gap-3">
              📱 Entre em Contato
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
