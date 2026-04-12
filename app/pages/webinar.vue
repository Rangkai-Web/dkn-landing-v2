<template>
  <div class="bg-white">
    <AppHeader />
    <WebinarUrgencyBar />
    <WebinarHero />
    <WebinarWho />
    <WebinarProblems />
    <WebinarLearn />
    <WebinarSpeaker />
    <WebinarTransformation />
    <WebinarDetails />
    <WebinarFinalCta />
    <WebinarPush />
    <AppFooter />
    <WhatsAppFab />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Webinar Gratis — Kenapa Supervisor Baru Gagal | DKN Indonesia",
  description:
    "Webinar intensif untuk profesional yang baru naik level kepemimpinan. Pahami 5 kesalahan fatal dan dapatkan framework transisi 90 hari pertama.",
  ogTitle: "Webinar Leadership Gratis: 90 Hari Pertama Supervisor Baru",
  ogDescription:
    "Dapatkan framework transisi kepemimpinan dari praktisi senior industri perbankan.",
  ogImage: "/favicon.ico",
  ogUrl: "https://dkn.digital/webinar",
  ogType: "website",
  ogSiteName: "DKN Indonesia",
  twitterCard: "summary_large_image",
  author: "PT Dayaguna Kompetensi Nusantara",
  themeColor: "#060C18",
});

useHead({
  htmlAttrs: {
    lang: "id",
  },
});
</script>
