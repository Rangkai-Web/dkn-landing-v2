<template>
  <section class="s px-5 py-12 md:py-20 md:px-[52px]" id="problems">
    <div class="mx-auto max-w-[1100px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Kenali Hambatan Anda</span>
      <h2 class="font-serif mb-3.5 text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-ink">
        Kami Memahami Mengapa<br class="hidden sm:block">Tim Anda Belum Optimal
      </h2>
      <p class="mb-12 max-w-[520px] text-[15.5px] font-light leading-relaxed text-slate">
        Dua tipe klien, satu kebutuhan yang sama: kompetensi yang benar-benar bekerja di lapangan — bukan hanya di atas kertas.
      </p>
      
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <!-- Corporate -->
        <div class="rounded-14 border border-border bg-midnight p-6 sm:p-9">
          <span class="mb-[18px] inline-flex items-center gap-1.5 rounded-full border border-teal-secondary/22 bg-teal-secondary/11 px-3 py-[5px] text-[10px] font-bold uppercase tracking-[1px] text-teal-secondary">
            Korporasi &amp; HR Leader
          </span>
          <h3 class="font-serif mb-[22px] text-[24px] font-semibold leading-[1.2] text-white">
            Masalah yang Menggerus<br>Performa &amp; Profit
          </h3>
          <div class="space-y-0">
            <div v-for="prob in corporateProbs" :key="prob" class="flex items-start gap-3 border-b border-white/5 py-3.5 last:border-0 last:pb-0">
              <div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-secondary"></div>
              <p class="text-[14px] leading-relaxed text-white/68">{{ prob }}</p>
            </div>
          </div>
        </div>
        
        <!-- Individual -->
        <div class="rounded-14 border border-gold-primary/20 bg-gold-pale p-6 sm:p-9">
          <span class="mb-[18px] inline-flex items-center gap-1.5 rounded-full border border-gold-primary/22 bg-gold-primary/11 px-3 py-[5px] text-[10px] font-bold uppercase tracking-[1px] text-gold-primary">
            Profesional &amp; Individu
          </span>
          <h3 class="font-serif mb-[22px] text-[24px] font-semibold leading-[1.2] text-ink">
            Rintangan dalam Perjalanan<br>Karir Anda
          </h3>
          <div class="space-y-0">
            <div v-for="prob in individualProbs" :key="prob" class="flex items-start gap-3 border-b border-gold-primary/10 py-3.5 last:border-0 last:pb-0">
              <div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-primary"></div>
              <p class="text-[14px] leading-relaxed text-slate">{{ prob }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl border border-white/8 bg-midnight px-6 py-[22px] lg:flex-row md:px-7">
        <p class="max-w-[540px] text-[14px] font-light italic leading-relaxed text-white/60 text-center lg:text-left">
          "Jika situasi ini terasa familiar, kemungkinan besar pendekatan yang digunakan saat ini perlu disesuaikan — bukan diulang dengan cara yang sama."
        </p>
        <NuxtLink to="#contact" class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-gold-primary px-6 py-[11px] text-[13px] font-bold text-midnight transition-colors hover:bg-gold-secondary no-underline w-full sm:w-auto">
          Diskusikan Kondisi Tim Anda →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const corporateProbs = [
  'Sales activity tinggi, pipeline penuh — tapi closing rate stagnan dan target bulanan terus meleset',
  'Manajer yang "baik di atas kertas" namun tidak mampu mendorong tim mencapai puncak performa mereka',
  'Pelatihan sudah dilakukan berkali-kali dengan biaya besar — tapi perubahan perilaku tidak pernah benar-benar terjadi',
  'Onboarding karyawan baru tidak terstruktur, memperlambat produktivitas hingga berbulan-bulan'
];

const individualProbs = [
  'Sudah bertahun-tahun bekerja keras — karir terasa stagnan, tanpa jalur yang jelas ke level berikutnya',
  'Persiapan sertifikasi risiko atau keuangan terasa berat tanpa panduan dari orang yang benar-benar pernah melewatinya',
  'Materi pelatihan yang ada terlalu akademis — tidak terhubung dengan realita lapangan yang dihadapi setiap hari',
  'Ingin naik level dalam kepemimpinan atau sales — tapi tidak tahu harus mulai dari mana secara praktis'
];
</script>

<style scoped>
.rounded-14 {
  border-radius: 14px;
}
</style>
