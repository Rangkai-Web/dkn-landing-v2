<template>
  <section class="sec bg-mist px-5 py-12 md:py-20 md:px-[52px]">
    <div class="wrap mx-auto max-w-[900px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Yang Akan Anda Pelajari</span>
      <h2 class="font-serif mb-3.5 text-[26px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.15] text-ink">
        Dua Jam yang Bisa Mengubah<br class="hidden sm:block">Cara Anda Memimpin
      </h2>
      <p class="mb-11 text-[15.5px] font-light leading-relaxed text-slate">
        Setiap materi dirancang untuk langsung bisa diterapkan — bukan teori yang akan dilupakan begitu webinar selesai.
      </p>
      
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-11">
        <div v-for="item in learnItems" :key="item.title" class="flex gap-4 items-start bg-white border border-border rounded-xl p-5 sm:p-6 transition-transform hover:-translate-y-0.5">
          <div class="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[9px] border" :class="item.iconBgClass">
            <component :is="item.icon" class="h-[17px] w-[17px]" :class="item.iconClass" />
          </div>
          <div>
            <h4 class="mb-1 text-[15px] font-bold text-ink">{{ item.title }}</h4>
            <p class="text-[13px] leading-relaxed text-slate">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, defineComponent } from 'vue'
const learnItems = [
  {
    title: '5 Kesalahan Fatal Supervisor Baru',
    description: 'Pola yang terus berulang pada pemimpin baru — dan cara spesifik untuk menghindarinya sejak hari pertama menjabat.',
    iconBgClass: 'bg-teal-secondary/10 border-teal-secondary/18',
    iconClass: 'text-teal-secondary',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M9 11l3 3L22 4' }), h('path', { d: 'M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' })]) } })
  },
  {
    title: 'Framework Transisi Kepemimpinan 90 Hari',
    description: 'Roadmap konkret untuk 90 hari pertama — apa yang harus dilakukan, apa yang harus dihindari, dan bagaimana mengukur keberhasilan Anda sebagai pemimpin.',
    iconBgClass: 'bg-gold-primary/10 border-gold-primary/18',
    iconClass: 'text-gold-primary',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' }), h('circle', { cx: '9', cy: '7', r: '4' }), h('path', { d: 'M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' })]) } })
  },
  {
    title: 'Cara Membangun Otoritas yang Tulus',
    description: 'Teknik praktis untuk mendapatkan rasa hormat dari tim — termasuk dari anggota yang lebih senior atau pernah menjadi rekan setara.',
    iconBgClass: 'bg-navy/7 border-navy/12',
    iconClass: 'text-navy',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' })]) } })
  },
  {
    title: 'Teknik Delegasi yang Efektif',
    description: 'Cara mendelegasikan tanpa kehilangan kontrol kualitas — dan cara mengembangkan tim tanpa harus mengerjakan semuanya sendiri.',
    iconBgClass: 'bg-teal-primary/10 border-teal-primary/18',
    iconClass: 'text-teal-primary',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }), h('polyline', { points: '17 6 23 6 23 12' })]) } })
  },
  {
    title: 'Cara Berkomunikasi dengan Manajemen dan Tim Secara Bersamaan',
    description: 'Script dan framework percakapan nyata untuk navigasi antara ekspektasi manajemen atas dan kebutuhan tim bawah.',
    iconBgClass: 'bg-teal-secondary/10 border-teal-secondary/18',
    iconClass: 'text-teal-secondary',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })]) } })
  },
  {
    title: 'Tools & Template yang Dapat Langsung Digunakan',
    description: 'One-on-one meeting template, team performance tracker, dan framework feedback yang sudah diuji di industri perbankan dan keuangan Indonesia.',
    iconBgClass: 'bg-gold-primary/10 border-gold-primary/18',
    iconClass: 'text-gold-primary',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2' }), h('path', { d: 'M8 21h8M12 17v4' })]) } })
  }
];
</script>

<style scoped>
</style>
