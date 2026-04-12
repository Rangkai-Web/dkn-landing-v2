<template>
  <div class="bg-white">
    <AppHeader />
    <HomeHero />
    <HomeWhy />
    <HomeProblems />
    <HomeFramework />
    <HomeServices />
    <HomeWebinarCta />
    <HomeLms />
    <HomeFinalCta />
    <LeadCapture />
    <AppFooter />
    <WhatsAppFab />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "DKN Indonesia — Where Competence Moves Forward",
  description:
    "Mitra strategis pengembangan kinerja dan kompetensi untuk institusi keuangan, perbankan, dan asuransi Indonesia. Didirikan oleh praktisi, untuk praktisi.",
  ogTitle: "DKN Indonesia — Dimana Kompetensi Menggerakkan Performa",
  ogDescription:
    "Membantu tim Anda bergerak dari aktivitas tinggi menjadi hasil yang terukur secara konsisten melalui DKN Performance Framework.",
  ogImage: "/favicon.ico",
  ogUrl: "https://dkn.digital",
  ogType: "website",
  ogSiteName: "DKN Indonesia",
  twitterCard: "summary_large_image",
  author: "PT Dayaguna Kompetensi Nusantara",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#060C18",
});

useHead({
  htmlAttrs: {
    lang: "id",
  },
});
</script>
