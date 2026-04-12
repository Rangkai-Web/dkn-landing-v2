<template>
  <section class="s bg-deep px-5 py-12 md:py-20 md:px-[52px]" id="why">
    <div class="mx-auto max-w-[1100px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Mengapa DKN</span>
      <h2 class="font-serif mb-3.5 text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white">
        Bukan Sekadar Vendor Pelatihan.<br class="hidden sm:block">Kami adalah Mitra Performa Anda.
      </h2>
      <p class="mb-12 max-w-[520px] text-[15.5px] font-light leading-relaxed text-white/50">
        Tim DKN terdiri dari eksekutif yang pernah memimpin di lini bisnis perbankan dan keuangan — bukan instruktur akademis. Saat kami bicara tentang sales atau leadership, kami berbicara dari dalam pengalaman itu sendiri.
      </p>
      
      <div class="grid grid-cols-1 gap-[1px] overflow-hidden rounded-14 border border-white/7 bg-white/7 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in reasons" :key="item.title" class="bg-deep p-6 md:p-8 transition-colors hover:bg-white/[0.025]">
          <div class="mb-4.5 flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-teal-secondary/19 bg-teal-secondary/11">
            <component :is="item.icon" class="h-[18px] w-[18px] text-teal-secondary" />
          </div>
          <h3 class="mb-2 text-[15px] font-bold text-white">{{ item.title }}</h3>
          <p class="text-[13.5px] leading-relaxed text-white/48">{{ item.description }}</p>
        </div>
      </div>
      
      <div class="mt-9 flex flex-col items-center gap-[22px] rounded-xl border border-gold-primary/20 bg-gold-primary/8 px-7 py-6 md:flex-row">
        <div class="font-serif flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-[11px] bg-navy text-[21px] font-semibold text-gold-secondary">
          DK
        </div>
        <div>
          <div class="mb-0.5 text-[15px] font-bold text-white">Drs. Darmawan Kusuma, MM</div>
          <div class="mb-1.5 text-[12px] font-semibold text-gold-secondary">Founder &amp; Principal Consultant, PT DKN</div>
          <p class="text-[13px] leading-relaxed text-white/50">
            Mantan eksekutif senior di tiga institusi perbankan nasional terkemuka. Selama 25 tahun memimpin divisi sales, retail banking, dan pengembangan SDM — kini mendedikasikan keahlian itu untuk membantu organisasi lain bertumbuh lebih cepat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, defineComponent } from 'vue'
const reasons = [
  {
    title: 'Didirikan oleh Praktisi Nyata',
    description: 'Pendiri dan fasilitator utama memiliki rekam jejak eksekutif 15–25 tahun di institusi keuangan nasional — bukan sekadar latar belakang akademis.',
    icon: defineComponent({
      render() {
        return h('svg', { width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })
        ])
      }
    })
  },
  {
    title: 'Metodologi yang Menghasilkan Perubahan',
    description: 'DKN Performance Framework — sistem empat fase dari diagnosis sampai dampak berkelanjutan. Bukan pelatihan sekali jalan, tapi perubahan yang berakar.',
    icon: defineComponent({
      render() {
        return h('svg', { width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('path', { d: 'M9 11l3 3L22 4' }),
          h('path', { d: 'M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' })
        ])
      }
    })
  },
  {
    title: 'Fokus pada Hasil Terukur',
    description: 'Setiap program dirancang dengan indikator keberhasilan konkret — perubahan kinerja nyata, bukan sekadar kepuasan di akhir sesi pelatihan.',
    icon: defineComponent({
      render() {
        return h('svg', { width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
          h('polyline', { points: '17 6 23 6 23 12' })
        ])
      }
    })
  },
  {
    title: 'Ekosistem Belajar Digital Terintegrasi',
    description: 'Platform LMS kami memastikan pembelajaran berlanjut jauh melampaui sesi — reinforcement yang sering diabaikan provider lain.',
    icon: defineComponent({
      render() {
        return h('svg', { width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2' }),
          h('path', { d: 'M8 21h8M12 17v4' })
        ])
      }
    })
  },
  {
    title: 'Relevan secara Industri',
    description: 'Semua materi mengacu pada regulasi, dinamika, dan tantangan aktual industri perbankan, keuangan, dan asuransi Indonesia.',
    icon: defineComponent({
      render() {
        return h('svg', { width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('path', { d: 'M4 19.5A2.5 2.5 0 016.5 17H20' }),
          h('path', { d: 'M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z' })
        ])
      }
    })
  },
  {
    title: 'Dikustomisasi, Bukan Template',
    description: 'Setiap engagement dimulai dari pemahaman mendalam tentang konteks dan tantangan unik organisasi Anda — bukan modul yang sama untuk semua klien.',
    icon: defineComponent({
      render() {
        return h('svg', { width: '18', height: '18', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
          h('path', { d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' }),
          h('circle', { cx: '9', cy: '7', r: '4' }),
          h('path', { d: 'M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' })
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
