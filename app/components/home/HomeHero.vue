<template>
  <section class="hero relative overflow-hidden bg-midnight px-5 pt-16 pb-12 md:pt-24 md:px-[52px]">
    <div class="h-grid absolute inset-0 opacity-[0.03]"></div>
    <div class="h-glow pointer-events-none absolute -right-[120px] -top-[200px] h-[760px] w-[760px] rounded-full"></div>
    <div class="h-glow2 pointer-events-none absolute -left-[60px] -bottom-[180px] h-[500px] w-[500px] rounded-full"></div>
    
    <div class="relative z-[2] mx-auto grid max-w-[1100px] grid-cols-1 items-end gap-14 lg:grid-cols-[1fr_400px]">
      <div class="pb-20 lg:pb-[88px]">
        <div class="mb-6 inline-flex items-center gap-[7px] rounded-full border border-teal-secondary/26 bg-teal-secondary/11 px-3.5 py-[5px] pl-2.5 text-[11px] font-bold uppercase tracking-[1.2px] text-teal-secondary">
          <div class="h-1.5 w-1.5 rounded-full bg-teal-secondary"></div>
          Performance &amp; Capability Partner
        </div>
        <p class="mb-3.5 text-[12px] font-semibold uppercase tracking-[2.5px] text-white/30">
          PT Dayaguna Kompetensi Nusantara
        </p>
        <h1 class="font-serif mb-4 text-[32px] sm:text-[42px] md:text-[58px] font-semibold leading-[1.1] text-white">
          Kompetensi yang<br>
          <em class="text-teal-secondary italic">Menggerakkan</em><br>
          Kinerja Nyata
        </h1>
        <p class="mb-8 max-w-[500px] text-[16px] md:text-[18px] font-light leading-relaxed text-white/70">
          Membantu tim Anda bergerak dari aktivitas tinggi menjadi hasil yang terukur — secara konsisten.
        </p>
        
        <div class="mb-9 flex items-start gap-2.5 rounded-r-lg border-l-3 border-gold-secondary bg-gold-primary/9 px-[18px] py-[13px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-[1px] h-[17px] w-[17px] flex-shrink-0 text-gold-tertiary">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
          <p class="text-[13.5px] leading-relaxed text-gold-tertiary">
            Dalam 90 hari pertama, tim Anda akan merasakan perubahan nyata — bukan sekadar semangat sesaat, tapi peningkatan kinerja yang terstruktur dan berlanjut.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-3.5">
          <NuxtLink to="#contact" class="flex items-center justify-center gap-2 rounded-lg bg-gold-primary px-7 py-4 text-[14.5px] font-extrabold tracking-[0.15px] text-midnight transition-all hover:-translate-y-px hover:bg-gold-secondary sm:w-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4 shrink-0">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Diskusikan Kebutuhan Tim
          </NuxtLink>
          <NuxtLink to="/webinar" class="flex items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/7 px-7 py-4 text-[14.5px] font-medium text-white/88 transition-all hover:border-white/30 hover:bg-white/12 sm:w-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            Amankan Slot Webinar
          </NuxtLink>
        </div>
        
        <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-white/7 pt-7">
          <div class="flex items-center gap-[9px] text-[12px] text-white/40">
            <div class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-secondary/15">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="3" class="h-2.5 w-2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            Praktisi Senior Industri
          </div>
          <div class="flex items-center gap-[9px] text-[12px] text-white/40">
            <div class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-secondary/15">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="3" class="h-2.5 w-2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            Metodologi Terstruktur
          </div>
          <div class="flex items-center gap-[9px] text-[12px] text-white/40">
            <div class="flex h-5 w-5 items-center justify-center rounded-full bg-teal-secondary/15">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="3" class="h-2.5 w-2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            Dampak Bisnis Terukur
          </div>
        </div>
      </div>
      
      <div class="hidden self-end lg:block">
        <div class="rounded-t-2xl border border-white/8 bg-white/4 p-7">
          <div class="mb-[18px] text-[10px] font-bold uppercase tracking-[1.5px] text-white/26">
            Keunggulan DKN
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-[10px] border border-white/7 bg-white/4 p-[18px]">
              <div class="font-serif text-[36px] font-semibold leading-none text-gold-secondary">20+</div>
              <div class="mt-1 text-[11px] leading-relaxed text-white/40">Tahun pengalaman industri perbankan &amp; keuangan</div>
            </div>
            <div class="rounded-[10px] border border-white/7 bg-white/4 p-[18px]">
              <div class="font-serif text-[36px] font-semibold leading-none text-gold-secondary">500+</div>
              <div class="mt-1 text-[11px] leading-relaxed text-white/40">Profesional yang telah dikembangkan</div>
            </div>
            <div class="col-span-2 mt-[2px] flex items-center gap-3 rounded-[10px] border border-teal-secondary/17 bg-teal-secondary/8 px-4 py-3.5">
              <div class="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[7px] bg-teal-secondary/15">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div class="text-[13px] font-semibold text-teal-secondary">Platform LMS Aktif</div>
                <div class="mt-[2px] text-[11px] text-white/32">Continuous learning ecosystem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.h-grid {
  background-image: linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
}
.h-glow {
  background: radial-gradient(circle, rgba(34, 160, 148, 0.09) 0%, transparent 68%);
}
.h-glow2 {
  background: radial-gradient(circle, rgba(196, 146, 58, 0.05) 0%, transparent 68%);
}
</style>
