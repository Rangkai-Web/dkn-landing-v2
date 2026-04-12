<template>
  <section class="final relative overflow-hidden bg-midnight px-5 py-12 md:py-24 md:px-[52px]" id="contact">
    <div class="final-glow pointer-events-none absolute bottom-[-200px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full"></div>
    <div class="relative z-[2] mx-auto max-w-[640px] text-center">
      <div class="mb-6 inline-flex items-center gap-[7px] rounded-full border border-gold-primary/28 bg-gold-primary/7 px-3.5 py-[5px] text-[11px] font-bold uppercase tracking-[1.2px] text-gold-secondary">
        <div class="h-1.5 w-1.5 rounded-full bg-gold-secondary"></div>
        Ambil Langkah Pertama
      </div>
      <h2 class="font-serif mb-4 text-[32px] sm:text-[40px] md:text-[46px] font-semibold leading-[1.1] text-white">
        Siap Mengubah Kompetensi Menjadi Keunggulan Kompetitif?
      </h2>
      <p class="mb-3 text-[15px] font-light leading-relaxed text-white/48">
        Ribuan jam pelatihan tidak mengubah kinerja jika pendekatannya tidak tepat. Mari mulai dengan percakapan yang jujur tentang kondisi tim Anda.
      </p>
      <div class="mb-[34px] rounded-lg border border-gold-primary/18 bg-gold-primary/7 px-5 py-3.5 text-[14px] italic leading-relaxed text-gold-tertiary">
        "Dalam 30 menit, kami membantu Anda memetakan gap performa tim dan mengidentifikasi peluang perbaikan yang paling praktis dan berdampak — tanpa komitmen apapun."
      </div>
      <div class="flex flex-col sm:flex-row justify-center gap-3.5">
        <a href="mailto:info@dknindonesia.co.id" class="flex items-center justify-center gap-2 rounded-lg bg-gold-primary px-8 py-4 text-[14.5px] font-extrabold text-midnight transition-all hover:-translate-y-px hover:bg-gold-secondary no-underline w-full sm:w-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4 shrink-0">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
          Jadwalkan Discovery Call
        </a>
        <NuxtLink to="/webinar" class="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/7 px-8 py-4 text-[14.5px] font-medium text-white/85 transition-all hover:bg-white/11 no-underline w-full sm:w-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 shrink-0">
            <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
          Daftar Webinar Gratis
        </NuxtLink>
      </div>
      <div class="mt-[26px] flex items-center justify-center gap-1.5 text-[12.5px] text-white/25">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-[13px] w-[13px] tracking-tight">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        Tidak ada komitmen · Tidak ada hard selling · Hanya percakapan yang bermakna
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.final-glow {
  background: radial-gradient(ellipse, rgba(34, 160, 148, 0.07) 0%, transparent 70%);
}
</style>
