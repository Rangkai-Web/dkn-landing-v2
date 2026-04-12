<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-navy to-[#0D1E35] px-5 py-12 md:py-24 md:px-[52px]" id="register-final">
    <div class="final-glow pointer-events-none absolute -right-[100px] -top-[200px] h-[600px] w-[600px] rounded-full"></div>
    <div class="relative z-[2] mx-auto max-w-[740px] text-center text-white">
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-primary/28 bg-gold-primary/14 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.2px] text-gold-tertiary">
        <div class="fu-dot h-[7px] w-[7px] rounded-full bg-gold-tertiary"></div>
        Tempat Sangat Terbatas — Daftar Sekarang
      </div>
      <h2 class="font-serif mb-4 text-[32px] sm:text-[40px] md:text-[46px] font-semibold leading-[1.1] text-white">
        Jangan Biarkan 90 Hari Pertama<br class="hidden sm:block">Menjadi <em class="text-gold-secondary italic">90 Hari yang Paling Sulit</em>
      </h2>
      <p class="mx-auto mb-8 max-w-[560px] text-[15px] font-light leading-relaxed text-white/55">
        Pilihan terbaik yang bisa Anda buat hari ini untuk karir kepemimpinan Anda adalah mempersiapkan diri dengan framework yang tepat. Webinar ini adalah langkah pertamanya — dan tidak ada biaya untuk memulai.
      </p>
      
      <div class="mx-auto flex max-w-[500px] flex-col sm:flex-row justify-center gap-3.5">
        <a href="https://lynk.id/dkn-webinar" target="_blank" rel="noopener" class="flex items-center justify-center gap-[9px] rounded-lg bg-gold-primary px-8 py-4 text-[14.5px] font-bold text-midnight transition-all hover:-translate-y-px hover:bg-gold-secondary no-underline w-full sm:w-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4 shrink-0">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          Amankan Slot — Gratis
        </a>
        <a href="https://wa.me/62812XXXXXXXX" target="_blank" class="flex items-center justify-center gap-[9px] rounded-lg border border-white/16 bg-white/7 px-8 py-4 text-[14.5px] font-bold text-white/85 transition-colors hover:bg-white/12 no-underline w-full sm:w-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 shrink-0">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
          Daftar via WhatsApp
        </a>
      </div>
      
      <div class="mt-5 flex items-center justify-center gap-1.5 text-[13px] text-white/40">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 flex-shrink-0">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        ~35 slot tersisa dari 120 kursi yang tersedia
      </div>
      
      <div class="mt-6 flex flex-wrap justify-center gap-4 border-t border-white/10 pt-6">
        <div v-for="benefit in benefits" :key="benefit" class="flex items-center gap-1.5 text-[13px] text-white/38">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-3 w-3"><path d="M9 11l3 3L22 4"/></svg>
          {{ benefit }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  'Sepenuhnya gratis',
  'Tidak ada soft selling',
  'Dapat sertifikat kehadiran',
  'Materi & rekaman dikirim pasca webinar'
];
</script>

<style scoped>
.final-glow {
  background: radial-gradient(circle, rgba(196, 146, 58, 0.08) 0%, transparent 68%);
}
.fu-dot {
  animation: pulse 1.8s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
</style>
