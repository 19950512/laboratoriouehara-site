import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração para GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Necessário para export estático
  },

  // Compressão
  compress: true,

  // Experimental features para melhor performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
