<template>
  <section class="bg-gradient-to-br from-navy to-[#0D1E35] border-t-3 border-gold-primary px-5 py-12 md:py-[72px] md:px-[52px]" id="webinar">
    <div class="mx-auto max-w-[1100px] grid grid-cols-1 items-center gap-10 lg:gap-16 lg:grid-cols-[1fr_380px]">
      <div class="wb-left">
        <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-primary/14 px-3.5 py-[5px] text-[11px] font-bold uppercase tracking-[1.2px] text-gold-tertiary">
          <div class="wb-dot h-[7px] w-[7px] rounded-full bg-gold-tertiary"></div>
          Webinar Terdekat — Slot Terbatas
        </div>
        <h2 class="font-serif mb-4 text-[26px] sm:text-[32px] md:text-[36px] font-semibold leading-[1.18] text-white">
          Webinar Eksklusif:<br>
          <em class="text-gold-secondary italic">Dari Sales Aktif<br class="hidden sm:block"> ke Closing yang Konsisten</em>
        </h2>
        <p class="mb-6 text-[15px] font-light leading-relaxed text-white/58">
          Sesi live intensif bersama praktisi senior yang akan membahas secara spesifik mengapa tim sales Anda aktif tapi hasil tidak optimal — dan langkah konkret yang dapat diambil segera.
        </p>
        <div class="flex flex-col gap-2.5 mb-7">
          <div v-for="benefit in benefits" :key="benefit" class="flex items-start gap-3">
            <div class="mt-[1px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-teal-secondary/30 bg-teal-secondary/14">
              <svg viewBox="0 0 12 12" fill="none" stroke="#22A094" stroke-width="2.5" class="h-2.5 w-2.5">
                <path d="M2 6l3 3 5-5"/>
              </svg>
            </div>
            <span class="text-[14px] leading-relaxed text-white/73">{{ benefit }}</span>
          </div>
        </div>
      </div>
      
      <div class="rounded-14 border border-white/10 bg-white/5 p-6 md:p-7">
        <div class="mb-4 text-[10px] font-bold uppercase tracking-[1.5px] text-gold-secondary uppercase">
          Live Webinar · Gratis
        </div>
        <div class="font-serif mb-5 text-[22px] font-semibold leading-[1.3] text-white">
          Sales Mastery Intensive: Mengubah Aktivitas Tinggi Menjadi Closing Konsisten
        </div>
        <div class="flex flex-col gap-2.5 mb-[18px]">
          <div class="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold-secondary)" stroke-width="2" class="h-3.5 w-3.5 flex-shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            <span class="text-[13px] text-white/58">Sabtu, 25 Januari 2025 · 09.00 – 11.00 WIB</span>
          </div>
          <div class="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold-secondary)" stroke-width="2" class="h-3.5 w-3.5 flex-shrink-0">
              <path d="M15 10l-4 4 6 6-8-16-2 8z"/>
            </svg>
            <span class="text-[13px] text-white/58">Zoom Webinar · Link dikirim H-1 via email</span>
          </div>
          <div class="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold-secondary)" stroke-width="2" class="h-3.5 w-3.5 flex-shrink-0">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span class="text-[13px] text-white/58">Dipandu oleh: Drs. Darmawan Kusuma, MM</span>
          </div>
        </div>
        <div class="my-[18px] h-[1px] bg-white/8"></div>
        <div class="mb-[18px] flex items-center gap-2.5">
          <div class="h-[5px] flex-1 overflow-hidden rounded-[3px] bg-white/8">
            <div class="h-full w-[71%] rounded-[3px] bg-gradient-to-r from-teal-secondary to-gold-primary"></div>
          </div>
          <span class="whitespace-nowrap text-[11px] text-white/42">71% slot terisi</span>
        </div>
        <NuxtLink to="/webinar" class="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-primary p-3.5 text-[14px] font-extrabold text-midnight transition-all hover:bg-gold-secondary no-underline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-[15px] w-[15px]">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          Amankan Slot Anda Sekarang
        </NuxtLink>
        <p class="mt-2.5 text-center text-[11px] text-white/30">
          ✓ Gratis &nbsp;·&nbsp; ✓ Sertifikat kehadiran &nbsp;·&nbsp; ✓ Materi dibagikan pasca webinar
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  'Diagnosis 5 penyebab utama closing rate rendah meski aktivitas tinggi',
  'Framework percakapan sales yang dapat diterapkan langsung keesokan harinya',
  'Sesi Q&A langsung dengan praktisi — pertanyaan spesifik tentang kondisi tim Anda'
];
</script>

<style scoped>
.wb-dot {
  animation: pulse 1.8s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.82); }
}
.rounded-14 {
  border-radius: 14px;
}
</style>
