<template>
  <section class="sec px-5 py-12 md:py-20 md:px-[52px]">
    <div class="wrap mx-auto max-w-[900px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Narasumber</span>
      <h2 class="font-serif mb-3.5 text-[26px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.15] text-ink">
        Belajar dari Orang yang<br class="hidden sm:block">Pernah Berada di Posisi Anda
      </h2>
      
      <div class="speaker-card mt-11 grid grid-cols-1 items-start gap-8 rounded-2xl border border-border bg-white p-6 sm:p-10 md:grid-cols-[auto_1fr] md:gap-9">
        <div class="font-serif flex h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex-shrink-0 items-center justify-center rounded-2xl bg-navy text-[28px] md:text-[32px] font-semibold text-gold-secondary mx-auto md:mx-0">
          DK
        </div>
        <div class="text-center md:text-left">
          <div class="font-serif mb-1 text-[22px] md:text-[28px] font-semibold text-ink">Drs. Darmawan Kusuma, MM</div>
          <div class="mb-4 text-[14px] font-semibold text-teal-secondary">Founder &amp; Principal Consultant, PT DKN Indonesia</div>
          <div class="mb-4 flex flex-wrap justify-center md:justify-start gap-2">
            <span v-for="tag in tags" :key="tag" class="rounded-full border border-border bg-mist px-3 py-1 text-[11px] font-semibold text-slate">
              {{ tag }}
            </span>
          </div>
          <p class="mb-4 text-[14.5px] leading-relaxed text-slate">
            Darmawan memulai karirnya sebagai staf biasa di industri perbankan, dan melewati setiap level kepemimpinan — dari supervisor, manajer cabang, hingga posisi eksekutif di tiga institusi keuangan nasional terkemuka. Ia memahami dari dalam bagaimana rasanya transisi ke peran kepemimpinan tanpa panduan yang memadai — dan kini mendedikasikan dirinya untuk memastikan profesional lain tidak mengalami pengalaman yang sama.
          </p>
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div v-for="stat in stats" :key="stat.label" class="rounded-xl bg-mist p-3.5 text-center">
              <div class="font-serif text-[28px] font-semibold text-ink">{{ stat.num }}</div>
              <div class="mt-0.5 text-[11px] text-slate">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = [
  'Banking Executive',
  '25+ Tahun Industri',
  'Magister Manajemen',
  'Leadership Specialist'
];

const stats = [
  { num: '25+', label: 'Tahun di industri perbankan' },
  { num: '3', label: 'Institusi keuangan nasional dipimpin' },
  { num: '500+', label: 'Profesional yang dikembangkan' }
];
</script>

<style scoped>
</style>
