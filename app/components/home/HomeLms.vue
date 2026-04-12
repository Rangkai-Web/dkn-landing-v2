<template>
  <section class="s bg-deep px-5 py-12 md:py-20 md:px-[52px]" id="platform">
    <div class="mx-auto max-w-[1100px]">
        <div class="grid grid-cols-1 items-center gap-12 lg:gap-[72px] lg:grid-cols-2">
          <div>
            <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Continuous Learning System</span>
            <h2 class="font-serif mb-3.5 text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white">
              Bukan Pelatihan Sekali Jalan — Ini Infrastruktur Belajar Jangka Panjang
            </h2>
          <div class="mb-[22px] rounded-r-lg border-l-3 border-teal-secondary bg-teal-secondary/8 px-[18px] py-3.5">
            <p class="text-[13.5px] italic leading-relaxed text-white/70">
              "Inilah yang membedakan DKN dari provider pelatihan konvensional — kami memastikan pembelajaran terus berjalan jauh melampaui sesi tatap muka. Platform ini adalah sistem, bukan sekadar fitur tambahan."
            </p>
          </div>
          <p class="mb-5.5 text-[15.5px] font-light leading-relaxed text-white/50">
            Platform LMS Moodle kami adalah infrastruktur pengembangan kompetensi jangka panjang — scalable dari satu individu hingga ribuan karyawan enterprise.
          </p>
          <div class="mb-[26px] flex flex-col gap-[11px]">
            <div v-for="feat in feats" :key="feat" class="flex items-start gap-2.5">
              <div class="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border border-teal-secondary/26 bg-teal-secondary/11">
                <svg viewBox="0 0 12 12" fill="none" stroke="#22A094" stroke-width="2.5" class="h-2.5 w-2.5">
                  <path d="M2 6l3 3 5-5"/>
                </svg>
              </div>
              <span class="text-[14px] leading-relaxed text-white/70">{{ feat }}</span>
            </div>
          </div>
            <NuxtLink to="#" class="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-primary px-[26px] py-[13px] text-[14px] font-bold text-midnight transition-all hover:bg-gold-secondary no-underline w-full sm:w-auto">
              Coba Akses Gratis →
            </NuxtLink>
        </div>
        
        <div class="overflow-hidden rounded-14 border border-white/8 bg-white/4">
          <div class="flex items-center gap-1.5 border-b border-white/5 bg-white/4 px-4 py-2.5">
            <div class="h-2 w-2 rounded-full bg-[#E24B4A]"></div>
            <div class="h-2 w-2 rounded-full bg-[#E8C06A]"></div>
            <div class="h-2 w-2 rounded-full bg-[#1D9E75]"></div>
            <span class="ml-2 text-[11px] text-white/20">lms.dknindonesia.co.id — Dashboard</span>
          </div>
          <div class="p-5">
            <div class="mb-3.5 text-[12px] font-bold text-white/62">Progress Pembelajaran Aktif</div>
            <div class="mb-1.5 flex justify-between">
              <span class="text-[11px] text-white/40">Sales Mastery — Level 2</span>
              <span class="text-[11px] text-teal-secondary">76%</span>
            </div>
            <div class="mb-3.5 h-[4px] rounded-[2px] bg-white/7">
              <div class="h-full rounded-[2px] bg-teal-secondary" style="width: 76%"></div>
            </div>
            <div class="mb-1.5 flex justify-between">
              <span class="text-[11px] text-white/40">Manajemen Risiko Perbankan</span>
              <span class="text-[11px] text-gold-secondary">44%</span>
            </div>
            <div class="mb-3.5 h-[4px] rounded-[2px] bg-white/7">
              <div class="h-full rounded-[2px] bg-gold-secondary" style="width: 44%"></div>
            </div>
            
            <div class="mt-2 grid grid-cols-2 gap-2">
              <div v-for="mod in modules" :key="mod.title" class="rounded-lg border border-white/6 bg-white/4 p-3">
                <div class="mb-[7px] h-6 w-6 rounded-[5px]" :class="mod.iconColor"></div>
                <div class="mb-0.5 text-[11px] font-semibold text-white/76">{{ mod.title }}</div>
                <div class="text-[10px] text-white/28">{{ mod.sub }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const feats = [
  'Video modul, kuis interaktif, dan simulasi kasus berbasis industri nyata',
  'Dashboard progres real-time untuk manajer memantau perkembangan timnya',
  'Sertifikat digital yang dapat diverifikasi dan dibagikan secara profesional',
  'Scalable enterprise — dari individu hingga seluruh organisasi Anda'
];

const modules = [
  { title: 'Teknik Closing', sub: '8 modul · 2j 30m', iconColor: 'bg-teal-secondary/20' },
  { title: 'Leadership Essentials', sub: '6 modul · 1j 45m', iconColor: 'bg-gold-primary/20' },
  { title: 'Persiapan LSPP', sub: '12 modul · 4j', iconColor: 'bg-[#378ADD]/20' },
  { title: 'Service Excellence', sub: '5 modul · 1j 20m', iconColor: 'bg-white/6' }
];
</script>

<style scoped>
.rounded-14 {
  border-radius: 14px;
}
</style>
