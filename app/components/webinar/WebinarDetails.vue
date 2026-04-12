<template>
  <section class="sec px-5 py-12 md:py-20 md:px-[52px]">
    <div class="wrap mx-auto max-w-[900px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Detail Webinar</span>
      <h2 class="font-serif mb-3.5 text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-[1.15] text-ink">
        Semua yang Perlu Anda Tahu<br class="hidden sm:block">Sebelum Mendaftar
      </h2>
      
      <div class="grid grid-cols-1 gap-4 mt-11 sm:grid-cols-2 md:grid-cols-4">
        <div v-for="item in details" :key="item.title" class="rounded-xl border border-border bg-white p-5 md:p-6 text-center">
          <div class="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-lg bg-mist">
            <component :is="item.icon" class="h-5 w-5 text-ink" />
          </div>
          <h4 class="mb-1 text-[15px] font-bold text-ink">{{ item.title }}</h4>
          <p class="text-[13px] text-slate">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, defineComponent } from 'vue'
const details = [
  {
    title: 'Sabtu, 25 Januari 2025',
    description: '09.00 – 11.00 WIB (2 jam)',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2' }), h('path', { d: 'M16 2v4M8 2v4M3 10h18' })]) } })
  },
  {
    title: 'Zoom Webinar',
    description: 'Link dikirim H-1 via email terdaftar',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M15 10l-4 4 6 6-8-16-2 8z' })]) } })
  },
  {
    title: '100% Gratis',
    description: 'Tanpa biaya, tanpa syarat tersembunyi',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]) } })
  },
  {
    title: 'Sertifikat Digital',
    description: 'Dikirim via email setelah webinar selesai',
    icon: defineComponent({ render() { return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('path', { d: 'M9 11l3 3L22 4' }), h('path', { d: 'M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' })]) } })
  }
];
</script>

<style scoped>
</style>
