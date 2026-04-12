<template>
  <section class="sec bg-mist px-5 py-12 md:py-20 md:px-[52px]">
    <div class="wrap mx-auto max-w-[900px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Transformasi yang Anda Harapkan</span>
      <h2 class="font-serif mb-3.5 text-[26px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.15] text-ink">
        Sebelum dan Sesudah<br class="hidden sm:block">Webinar Ini
      </h2>
      <p class="mb-11 text-[15.5px] font-light leading-relaxed text-slate">
        Ini bukan tentang apa yang Anda pelajari — tapi tentang bagaimana Anda bertindak berbeda setelah memiliki framework yang tepat.
      </p>
      
      <div class="grid grid-cols-1 items-center gap-6 mt-11 md:grid-cols-[1fr_auto_1fr]">
        <!-- Before -->
        <div class="rounded-14 border border-border bg-white p-6 sm:p-7">
          <h4 class="mb-3.5 text-[13px] font-bold uppercase tracking-[0.8px] text-slate">Sebelum Webinar</h4>
          <div class="flex flex-col gap-0">
            <div v-for="item in beforeItems" :key="item" class="flex gap-2.5 items-start py-2.5 border-b border-border last:border-0 last:pb-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="2.5" class="h-3.5 w-3.5 flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              <p class="text-[13.5px] leading-relaxed text-slate">{{ item }}</p>
            </div>
          </div>
        </div>
        
        <!-- Arrow -->
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gold-primary rotate-90 md:rotate-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--midnight)" stroke-width="2.5" class="h-5 w-5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <div class="text-[10px] font-bold uppercase tracking-[1px] text-gold-primary text-center">Hasil Nyata</div>
        </div>
        
        <!-- After -->
        <div class="rounded-14 border border-white/7 bg-midnight p-6 sm:p-7 text-white">
          <h4 class="mb-3.5 text-[13px] font-bold uppercase tracking-[0.8px] text-teal-secondary">Setelah Webinar</h4>
          <div class="flex flex-col gap-0">
            <div v-for="item in afterItems" :key="item" class="flex gap-2.5 items-start py-2.5 border-b border-white/10 last:border-0 last:pb-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2.5" class="h-3.5 w-3.5 flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
              </svg>
              <p class="text-[13.5px] leading-relaxed text-white/72">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const beforeItems = [
  'Tidak yakin apa yang harus dilakukan sebagai pemimpin setiap harinya',
  'Mengerjakan sendiri karena tidak percaya tim bisa melakukannya',
  'Merasa tidak dihormati atau tidak didengar oleh anggota tim',
  'Kelelahan karena terjebak antara tuntutan atasan dan tim',
  'Tidak punya sistem untuk mengembangkan tim secara konsisten'
];

const afterItems = [
  'Memiliki roadmap 90 hari yang jelas sebagai pemimpin baru',
  'Tahu cara mendelegasikan dengan keyakinan dan tanpa kehilangan kontrol',
  'Strategi konkret untuk membangun otoritas yang dihormati secara tulus',
  'Framework komunikasi untuk menavigasi harapan dari atas dan bawah',
  'Template siap pakai untuk one-on-one, feedback, dan monitoring tim'
];
</script>

<style scoped>
.rounded-14 {
  border-radius: 14px;
}
</style>
