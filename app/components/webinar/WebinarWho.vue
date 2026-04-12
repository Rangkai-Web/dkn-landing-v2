<template>
  <section class="sec bg-mist px-5 py-12 md:py-20 md:px-[52px]">
    <div class="mx-auto max-w-[900px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Untuk Siapa Webinar Ini?</span>
      <h2 class="font-serif mb-3.5 text-[26px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.15] text-ink">
        Jika Ini Menggambarkan Situasi Anda,<br class="hidden sm:block">Anda Ada di Tempat yang Tepat
      </h2>
      <p class="mb-11 text-[15.5px] font-light leading-relaxed text-slate">
        Webinar ini dirancang spesifik untuk tiga tipe profesional yang sedang dalam fase transisi paling kritis dalam karir mereka.
      </p>
      
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div v-for="card in cards" :key="card.title" class="group flex flex-col rounded-xl border border-border bg-white p-7 py-8 transition-transform hover:-translate-y-0.5" :class="card.borderClass">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" :class="card.iconBgClass">
            <component :is="card.icon" class="h-[22px] w-[22px]" :class="card.iconClass" />
          </div>
          <h3 class="mb-2 text-[17px] font-bold text-ink">{{ card.title }}</h3>
          <p class="mb-3 text-[14px] leading-relaxed text-slate">{{ card.description }}</p>
          <ul class="flex flex-col gap-[7px] list-none p-0">
            <li v-for="item in card.items" :key="item" class="flex items-center gap-2 text-[13px] text-slate">
              <div class="h-1.25 w-1.25 flex-shrink-0 rounded-full" :class="card.dotClass"></div>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-7 rounded-lg border-l-3 border-border bg-mist px-[22px] py-[18px]">
        <p class="text-[13.5px] leading-relaxed text-slate">
          <strong class="font-bold text-ink">Webinar ini mungkin kurang cocok jika:</strong> Anda sudah memiliki pengalaman kepemimpinan lebih dari 3 tahun dan mencari strategi tingkat lanjut. Untuk itu, kami memiliki program consulting yang lebih mendalam.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, defineComponent } from 'vue'
const cards = [
  {
    title: 'Supervisor Baru',
    description: 'Baru dipromosikan dan menghadapi tekanan yang tidak pernah dibayangkan sebelumnya.',
    borderClass: 'border-t-3 border-t-teal-secondary',
    iconBgClass: 'bg-teal-secondary/10',
    iconClass: 'text-teal-secondary',
    dotClass: 'bg-teal-secondary',
    items: [
      'Baru naik jabatan dalam 1–6 bulan terakhir',
      'Kesulitan memisahkan peran eksekutor dan pemimpin',
      'Merasa sendirian dalam memimpin tim'
    ],
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' }), h('circle', { cx: '9', cy: '7', r: '4' }), h('path', { d: 'M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' })]) } })
  },
  {
    title: 'Sales Team Leader',
    description: 'Terbaik di tim sebagai individu, kini harus membuat seluruh tim menjadi terbaik.',
    borderClass: 'border-t-3 border-t-gold-primary',
    iconBgClass: 'bg-gold-primary/10',
    iconClass: 'text-gold-primary',
    dotClass: 'bg-gold-primary',
    items: [
      'Pernah jadi top performer, kini punya target tim',
      'Bingung cara mendelegasikan tanpa kehilangan kontrol',
      'Tim tidak menunjukkan perkembangan yang diharapkan'
    ],
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })]) } })
  },
  {
    title: 'Calon Pemimpin',
    description: 'Belum dipromosikan tapi ingin mempersiapkan diri secara serius untuk peran kepemimpinan.',
    borderClass: 'border-t-3 border-t-navy',
    iconBgClass: 'bg-navy/7',
    iconClass: 'text-navy',
    dotClass: 'bg-navy',
    items: [
      'Ingin menjadi leader, tapi tidak tahu harus mulai dari mana',
      'Melihat pemimpin di sekitar dan berpikir "saya bisa lebih baik"',
      'Siap berinvestasi waktu untuk berkembang'
    ],
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' })]) } })
  }
];
</script>

<style scoped>
.border-t-3 {
  border-top-width: 3px;
}
.border-l-3 {
  border-left-width: 3px;
}
</style>
