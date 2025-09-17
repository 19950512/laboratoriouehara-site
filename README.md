# Laboratório Uehara - Site Institucional

Site institucional profissional para o Laboratório Uehara, especializado em próteses dentárias com mais de 40 anos de experiência.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Next.js Image** - Otimização automática de imagens
- **GitHub Pages** - Hospedagem gratuita

## 📋 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Otimização SEO completa
- ✅ Performance otimizada
- ✅ Páginas institucionais (Sobre, Equipe, Serviços)
- ✅ FAQ interativo
- ✅ Políticas de privacidade e termos
- ✅ Formulários de contato
- ✅ Galeria de equipe
- ✅ Sitemap automático

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/laboratoriouehara-site.git
cd laboratoriouehara-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🚀 Deploy no GitHub Pages

### Configuração Automática (Recomendado)

O projeto já está configurado com GitHub Actions para deploy automático:

1. **No GitHub:**
   - Vá para Settings → Pages
   - Selecione "GitHub Actions" como source
   - O workflow será executado automaticamente em cada push

2. **Workflow incluído:**
   - Build otimizado para produção
   - Export estático para GitHub Pages
   - Deploy automático

### Configuração Manual

Se preferir fazer manualmente:

```bash
# Build para produção
npm run build

# Os arquivos estarão na pasta 'out/'
# Faça upload do conteúdo da pasta 'out/' para o GitHub Pages
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página Sobre
│   ├── servicos/          # Página Serviços
│   ├── equipe/            # Página Equipe
│   ├── faq/               # FAQ
│   ├── contato/           # Contato
│   ├── politica-de-privacidade/  # Política de Privacidade
│   └── termos-e-condicoes/       # Termos e Condições
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho com navegação
│   └── Footer.tsx         # Rodapé
└── styles/               # Estilos globais
```

## 🎨 Personalização

### Cores e Tema
- Tema claro/escuro configurado
- Paleta azul profissional
- Design responsivo

### SEO
- Meta tags otimizadas
- Sitemap automático
- Schema.org para dados estruturados

## 📞 Contato

**Laboratório Uehara**
- 📍 Rua Sete de Agosto 51A, Passo Fundo/RS
- 📞 (54) 3045-7786
- 📱 (54) 99679-7786
- 🌐 [Site](https://laboratoriouehara.com.br)

## 📝 Licença

Este projeto é propriedade do Laboratório Uehara.

---

**Desenvolvido com ❤️ para o Laboratório Uehara**
