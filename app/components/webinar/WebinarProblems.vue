<template>
  <section class="sec px-5 py-12 md:py-20 md:px-[52px]">
    <div class="wrap mx-auto max-w-[900px]">
      <span class="mb-2.5 block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-secondary">Tantangan yang Nyata</span>
      <h2 class="font-serif mb-3.5 text-[26px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.15] text-ink">
        Apakah Salah Satu dari Ini<br class="hidden sm:block">Terasa Familiar?
      </h2>
      <p class="mb-11 text-[15.5px] font-light leading-relaxed text-slate">
        Transisi ke kepemimpinan adalah salah satu perubahan paling sulit dalam karir profesional. Dan sebagian besar supervisor baru menghadapinya sendirian — tanpa panduan yang tepat.
      </p>
      
      <div class="flex flex-col gap-4 mt-11">
        <div v-for="prob in problems" :key="prob.num" class="flex gap-4 sm:gap-5 items-start bg-white border border-border rounded-xl p-5 sm:p-6 transition-transform hover:translate-x-1">
          <div class="font-serif flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-midnight text-[18px] font-semibold text-gold-secondary">
            {{ prob.num }}
          </div>
          <div>
            <h4 class="mb-1.5 text-[15px] sm:text-[15.5px] font-bold text-ink leading-tight">{{ prob.title }}</h4>
            <p class="text-[13.5px] sm:text-[14px] leading-relaxed text-slate">{{ prob.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="mt-7 flex items-center gap-3.5 rounded-lg bg-midnight px-6 py-5">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold-secondary)" stroke-width="2" class="h-5 w-5 flex-shrink-0">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
        </svg>
        <p class="text-[14px] italic leading-relaxed text-white/65">
          "Ini bukan soal kemampuan atau kecerdasan. Ini soal tidak memiliki framework yang tepat untuk menavigasi transisi kepemimpinan — dan itulah yang akan kita bahas bersama di webinar ini."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const problems = [
  {
    num: 1,
    title: 'Kehilangan Identitas sebagai "Orang yang Mengerjakan Semuanya"',
    description: 'Dulu Anda tahu persis apa yang harus dilakukan dan cara melakukannya. Sekarang pekerjaan Anda adalah membuat orang lain melakukannya — dan itu jauh lebih sulit dari yang dibayangkan.'
  },
  {
    num: 2,
    title: 'Tekanan dari Atas dan Bawah Secara Bersamaan',
    description: 'Manajemen atas menuntut hasil. Tim bawah membutuhkan dukungan dan arah. Anda terjebak di tengah — dan tidak ada yang mengajarkan cara menavigasi ini dengan efektif.'
  },
  {
    num: 3,
    title: 'Tidak Tahu Kapan Harus Turun Tangan dan Kapan Harus Mundur',
    description: 'Terlalu banyak turun tangan = tim tidak berkembang. Terlalu sedikit = pekerjaan berantakan. Menemukan keseimbangan ini adalah skill yang tidak diajarkan di sekolah manapun.'
  },
  {
    num: 4,
    title: 'Otoritas yang Belum Diakui — atau Justru Ditantang',
    description: 'Beberapa anggota tim mungkin lebih senior, atau bahkan pernah menjadi rekan setara. Membangun rasa hormat yang tulus tanpa manipulasi adalah seni yang perlu dipelajari.'
  },
  {
    num: 5,
    title: 'Rasa Kesepian di Posisi Baru',
    description: 'Teman kerja yang dulu menjadi tempat curhat kini adalah bawahan. Tidak ada yang benar-benar memahami tekanan yang Anda rasakan sebagai pemimpin baru — dan itu menguras energi.'
  }
];
</script>

<style scoped>
</style>
