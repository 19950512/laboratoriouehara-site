import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Laboratório Uehara
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Especialistas em próteses dentárias com mais de 40 anos de experiência.
              Comprometidos com qualidade superior e pontualidade garantida.
            </p>
            <div className="bg-blue-600 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Horário de Funcionamento</h4>
              <p className="text-blue-100">Segunda à Sábado: 07:30 - 18:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/politica-de-privacidade" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-e-condicoes" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Termos e Condições
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Protocolos Carga Imediata
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Prótese Total
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Fluxo Digital
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Lâminas Estéticas
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Metalo Cerâmica
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <div className="text-blue-400 text-xl">📍</div>
              <div>
                <h5 className="font-semibold text-white mb-1">Endereço</h5>
                <p className="text-slate-300">
                  Rua Sete de Agosto 51A<br />
                  Centro, Passo Fundo - RS<br />
                  CEP: 99025-030
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start space-x-3">
              <div className="text-blue-400 text-xl">📞</div>
              <div>
                <h5 className="font-semibold text-white mb-1">Contato</h5>
                <p className="text-slate-300">
                  Telefone: (54) 3045-7786<br />
                  WhatsApp: (54) 99679-7786<br />
                  Email: milton@laboratoriouehara.com.br
                </p>
              </div>
            </div>

            {/* Business Info */}
            <div className="flex items-start space-x-3">
              <div className="text-blue-400 text-xl">🏢</div>
              <div>
                <h5 className="font-semibold text-white mb-1">Informações</h5>
                <p className="text-slate-300">
                  CNPJ: 20.098.767/0001-02<br />
                  Razão Social: M.S.UEHARA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.facebook.com/ueharalab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ueharalab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.034 6.298.154 4.987.275 4.014.59 3.252.968c-.806.39-1.49.914-2.077 1.5C.59 3.055.275 4.028.154 5.34.034 6.65 0 7.437 0 11.058s.034 4.408.154 5.719c.121 1.311.436 2.284.968 3.046.586.586 1.11 1.27 1.5 1.857.478.757.791 1.73.968 3.041.12 1.311.154 2.098.154 5.719s-.034 4.408-.154 5.719c-.177 1.311-.49 2.284-.968 3.041-.39.586-.914 1.11-1.5 1.5-.757.478-1.73.791-3.041.968C2.65 23.966 1.863 24 0 24s-1.65-.034-2.962-.154c-1.311-.177-2.284-.49-3.041-.968-.586-.39-1.11-.914-1.5-1.5-.757-.757-1.27-1.49-1.857-2.077C.59 20.945.275 19.972.154 18.661.034 17.35 0 16.563 0 12.942s.034-4.408.154-5.719c.121-1.311.436-2.284.968-3.046.586-.586 1.11-1.27 1.5-1.857.478-.757.791-1.73.968-3.041C2.35.034 3.137 0 6.758 0s4.408.034 5.719.154c1.311.121 2.284.436 3.046.968.586.586 1.27 1.11 1.857 1.5.757.478 1.73.791 3.041.968C17.35 3.034 18.137 3.378 21.758 3.378s4.408-.344 5.719-.154c1.311.177 2.284.49 3.041.968.586.39 1.11.914 1.5 1.5.757.757 1.27 1.49 1.857 2.077.478.757.791 1.73.968 3.041.12 1.311.154 2.098.154 5.719s-.034 4.408-.154 5.719c-.177 1.311-.49 2.284-.968 3.041-.39.586-.914 1.11-1.5 1.5-.757.757-1.49 1.27-2.077 1.857-.757.478-1.73.791-3.041.968C22.65 23.966 21.863 24 18.242 24s-4.408-.034-5.719-.154c-1.311-.177-2.284-.49-3.041-.968-.586-.39-1.11-.914-1.5-1.5-.757-.757-1.27-1.49-1.857-2.077-.478-.757-.791-1.73-.968-3.041C17.35 20.966 16.563 21 12.942 21s-4.408-.034-5.719-.154c-1.311-.177-2.284-.49-3.041-.968-.586-.586-1.27-1.11-1.857-1.5-.757-.478-1.73-.791-3.041-.968C2.65.034 1.863 0 0 0s.034-1.65.154-2.962c.177-1.311.49-2.284.968-3.041.586-.586 1.11-1.27 1.5-1.857.478-.757.791-1.73.968-3.041C2.35.034 3.137 0 6.758 0zM12.017 5.838c-3.403 0-6.163 2.76-6.163 6.163s2.76 6.163 6.163 6.163 6.163-2.76 6.163-6.163-2.76-6.163-6.163-6.163zm0 10.114c-2.302 0-4.166-1.864-4.166-4.166s1.864-4.166 4.166-4.166 4.166 1.864 4.166 4.166-1.864 4.166-4.166 4.166zM19.847 5.464c0 .754-.611 1.365-1.365 1.365s-1.365-.611-1.365-1.365.611-1.365 1.365-1.365 1.365.611 1.365 1.365z"/>
                </svg>
              </a>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              © 2025 Laboratório Uehara. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
