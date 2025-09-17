"use client";

import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    const whatsappMessage = `Olá! Me chamo ${formData.nome}. ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/5554996797786?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Estamos à disposição para responder às suas dúvidas, agendar consultas
            e fornecer informações adicionais sobre nossos serviços.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Endereço
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Rua Sete de Agosto 51A<br />
                      Centro, Passo Fundo - RS<br />
                      CEP: 99025-030
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Telefone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      (54) 3045-7786
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      (54) 99679-7786
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      milton@laboratoriouehara.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Segunda à Sábado: 07:30 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/ueharalab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/ueharalab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Envie uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <label htmlFor="nome" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="telefone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="(54) 99999-9999"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="mensagem" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Mensagem via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Nossa Localização
          </h2>
          <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-gray-600 dark:text-gray-300">
                Rua Sete de Agosto 51A, Centro<br />
                Passo Fundo - RS
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.2456822375384!2d-52.4193449!3d-28.260566299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2c09c236282f1%3A0x5f74f9edd5a0ada9!2sLaborat%C3%B3rio%20Uehara!5e0!3m2!1spt-PT!2sbr!4v1758141160225!5m2!1spt-PT!2sbr" width="600" height="450" style={{border: '0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
