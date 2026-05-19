// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: process.env.NODE_ENV === "development" },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/devtools",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "vue3-carousel-nuxt",
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://images.unsplash.com",
          crossorigin: "anonymous",
        },
        { rel: "dns-prefetch", href: "https://images.unsplash.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
  },
  site: {
    url: "https://dkn.digital",
    name: "DKN Digital",
    description: "DKN Digital",
    defaultLocale: "id",
    indexable: true,
  },
  fonts: {
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [300, 400, 500, 600, 700, 800] },
      { name: 'Cormorant Garamond', provider: 'google', weights: [400, 600], styles: ['normal', 'italic'] }
    ],
  },
  image: {
    quality: 80,
    format: ["webp", "avif"],
    domains: ["127.0.0.1:8000", "panel.dkn.digital"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  runtimeConfig: {
    public: {
      // nuxt automatically maps NUXT_PUBLIC_API_BASE_URL from env to config.public.apiBaseUrl
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || "/",
    },
    resendApiKey: process.env.RESEND_API_KEY,
    resendFromEmail: process.env.RESEND_FROM_EMAIL || "DKN Digital <onboarding@resend.dev>",
    resendToEmail: process.env.RESEND_TO_EMAIL || "info@dkn.digital",
  },
  routeRules: {
    "/": {
      headers: {
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    },
    "/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy":
            "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Resource-Policy": "cross-origin",
          "Strict-Transport-Security":
            "max-age=31536000; includeSubDomains; preload",
          "Content-Security-Policy":
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob: http://127.0.0.1:8000 https://panel.dkn.digital; connect-src 'self' https://wa.me http://127.0.0.1:8000 https://panel.dkn.digital https://api.iconify.design; frame-src 'self' https://www.google.com https://maps.google.com https://calendar.google.com; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;",
          "X-DNS-Prefetch-Control": "on",
          "X-Permitted-Cross-Domain-Policies": "none",
        },
      },
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});
