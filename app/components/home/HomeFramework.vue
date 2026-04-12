<template>
  <section class="s bg-mist px-5 py-12 md:py-20 md:px-[52px]" id="framework">
    <div class="mx-auto max-w-[1100px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Signature Methodology</span>
      <h2 class="font-serif mb-3.5 text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-ink">
        DKN Performance Framework
      </h2>
      <p class="mb-14 max-w-[520px] text-[15.5px] font-light leading-relaxed text-slate">
        Bukan sekadar kurikulum — ini sistem empat fase yang memastikan setiap engagement menghasilkan perubahan nyata, bukan sekadar kehadiran di kelas.
      </p>
      
      <div class="relative mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <!-- Connecting Line (Desktop Only) -->
        <div class="absolute left-[12.5%] right-[12.5%] top-[26px] z-0 hidden h-[2px] bg-gradient-to-r from-teal-secondary to-gold-primary lg:block"></div>
        
        <div v-for="(step, index) in steps" :key="step.title" class="relative z-[1] flex flex-col items-center px-4 text-center">
          <div 
            class="font-serif shadow-sm mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full border-[2.5px] border-mist text-[20px] font-semibold text-white"
            :class="step.colorClass"
          >
            {{ step.letter }}
          </div>
          <h4 class="mb-1.5 text-[15px] font-bold text-ink">{{ step.title }}</h4>
          <p class="text-[13px] leading-relaxed text-slate">{{ step.description }}</p>
        </div>
      </div>
      
      <div class="mt-10 rounded-r-xl border-l-4 border-teal-secondary bg-teal-pale px-[22px] py-[18px]">
        <p class="text-[14.5px] italic leading-relaxed text-teal-primary">
          "Framework ini dirancang untuk memastikan bahwa setiap engagement DKN menghasilkan perubahan perilaku nyata dan peningkatan kinerja bisnis yang terukur — bukan sekadar modul yang selesai, tapi kapabilitas yang benar-benar tertanam."
        </p>
      </div>
      
      <div class="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl border border-white/8 bg-midnight px-6 py-[22px] lg:flex-row md:px-7">
        <div class="ft-brand text-center lg:text-left">
          <strong class="mb-1 block text-[14px] font-bold text-white">Ingin tahu bagaimana framework ini diterapkan untuk tim Anda?</strong>
          <p class="text-[13px] text-white/48">Jadwalkan discovery call 30 menit — gratis, tanpa komitmen apapun</p>
        </div>
        <NuxtLink to="#contact" class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-teal-secondary px-6 py-[11px] text-[13px] font-bold text-white transition-all hover:bg-teal-primary no-underline w-full sm:w-auto">
          Jadwalkan Sekarang →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    letter: 'D',
    title: 'Diagnose',
    description: 'Identifikasi gap kompetensi spesifik dan akar penyebab hambatan kinerja secara akurat',
    colorClass: 'bg-teal-secondary'
  },
  {
    letter: 'D',
    title: 'Design',
    description: 'Merancang program yang dikustomisasi penuh — bukan template, tapi solusi yang benar-benar fit',
    colorClass: 'bg-[#1A8A7E]'
  },
  {
    letter: 'D',
    title: 'Deliver',
    description: 'Eksekusi dengan fasilitasi experiential dan studi kasus dari industri yang sesungguhnya',
    colorClass: 'bg-[#C4923A]'
  },
  {
    letter: 'S',
    title: 'Sustain',
    description: 'Reinforcement via LMS, coaching, dan monitoring agar perubahan berjalan melampaui sesi',
    colorClass: 'bg-gold-primary'
  }
];
</script>

<style scoped>
</style>
