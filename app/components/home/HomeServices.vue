<template>
  <section class="s px-5 py-12 md:py-20 md:px-[52px]" id="services">
    <div class="mx-auto max-w-[1100px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Layanan</span>
      <h2 class="font-serif mb-3.5 text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-ink">
        Empat Pilar Solusi Performa
      </h2>
      <p class="mb-14 max-w-[520px] text-[15.5px] font-light leading-relaxed text-slate">
        Setiap layanan dirancang untuk menghasilkan satu hal: peningkatan kinerja yang terukur dan berkelanjutan — bukan aktivitas yang terasa sibuk tapi tidak mengubah apapun.
      </p>
      
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div v-for="service in services" :key="service.title" 
             class="flex flex-col rounded-14 border p-6 md:p-8 transition-transform hover:-translate-y-[2px]"
             :class="service.cardClass">
          <div class="font-serif text-[48px] font-semibold leading-none opacity-[0.09] mb-3.5"
               :class="service.numClass">
            {{ service.num }}
          </div>
          <div class="mb-3.5 flex h-[44px] w-[44px] items-center justify-center rounded-lg"
               :class="service.iconBgClass">
            <component :is="service.icon" class="h-5 w-5" :class="service.iconClass" />
          </div>
          <h3 class="mb-2.5 text-[18px] font-bold" :class="service.titleClass">
            {{ service.title }}
          </h3>
          <p class="flex-1 text-[13.5px] leading-relaxed" :class="service.descClass">
            {{ service.description }}
          </p>
          <div class="mt-4 flex items-center gap-1.5 border-t py-3.5 text-[12px] font-bold"
               :class="service.resultClass">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-3 w-3">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            </svg>
            {{ service.result }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    num: '01',
    title: 'Corporate Training',
    description: 'Program in-house yang dikustomisasi penuh — dari sales mastery, service excellence, hingga leadership development. Setiap modul mengacu pada konteks industri dan tantangan spesifik organisasi Anda.',
    result: 'Perubahan perilaku tim dalam 90 hari',
    cardClass: 'bg-midnight border-white/7',
    numClass: 'text-white',
    iconBgClass: 'bg-teal-secondary/13',
    iconClass: 'text-teal-secondary',
    titleClass: 'text-white',
    descClass: 'text-white/55',
    resultClass: 'border-white/7 text-teal-secondary',
    icon: defineComponent({
      render() {
        return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('path', { d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' }),
          h('circle', { cx: '9', cy: '7', r: '4' }),
          h('path', { d: 'M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' })
        ])
      }
    })
  },
  {
    num: '02',
    title: 'Consulting & Advisory',
    description: 'Pendampingan strategis untuk transformasi kinerja SDM — dari assessment organisasi, desain program pengembangan, hingga implementasi perubahan yang terukur dan berkelanjutan.',
    result: 'Roadmap performa yang konkret dan dapat dieksekusi',
    cardClass: 'bg-mist border-ink/8',
    numClass: 'text-ink',
    iconBgClass: 'bg-navy/7',
    iconClass: 'text-navy',
    titleClass: 'text-ink',
    descClass: 'text-slate',
    resultClass: 'border-ink/9 text-ink',
    icon: defineComponent({
      render() {
        return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('circle', { cx: '12', cy: '12', r: '10' }),
          h('path', { d: 'M12 8v4M12 16h.01' })
        ])
      }
    })
  },
  {
    num: '03',
    title: 'Certification Programs',
    description: 'Persiapan sertifikasi manajemen risiko (LSPP), perencanaan keuangan, dan asuransi — dipandu oleh praktisi bersertifikat yang memahami pola ujian dan kebutuhan nyata industri.',
    result: 'Tingkat kelulusan lebih tinggi dari rata-rata',
    cardClass: 'bg-teal-pale border-teal-primary/15',
    numClass: 'text-ink',
    iconBgClass: 'bg-teal-primary/13',
    iconClass: 'text-teal-primary',
    titleClass: 'text-ink',
    descClass: 'text-slate',
    resultClass: 'border-teal-primary/14 text-teal-primary',
    icon: defineComponent({
      render() {
        return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('path', { d: 'M9 11l3 3L22 4' }),
          h('path', { d: 'M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' })
        ])
      }
    })
  },
  {
    num: '04',
    title: 'Digital Learning (LMS)',
    description: 'Akses platform Moodle DKN dengan ratusan jam konten video, simulasi kasus, dan kuis terstruktur. Solusi yang scalable dari satu individu hingga ribuan karyawan perusahaan Anda.',
    result: 'Belajar kapan saja, progres selalu terukur',
    cardClass: 'bg-gold-pale border-gold-primary/15',
    numClass: 'text-ink',
    iconBgClass: 'bg-gold-primary/13',
    iconClass: 'text-gold-primary',
    titleClass: 'text-ink',
    descClass: 'text-slate',
    resultClass: 'border-gold-primary/14 text-gold-primary',
    icon: defineComponent({
      render() {
        return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2' }),
          h('path', { d: 'M8 21h8M12 17v4' })
        ])
      }
    })
  }
];
</script>

<style scoped>
.rounded-14 {
  border-radius: 14px;
}
</style>
