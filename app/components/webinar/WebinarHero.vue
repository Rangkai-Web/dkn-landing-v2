<template>
  <section
    class="hero relative overflow-hidden bg-midnight px-5 py-12 md:py-20 md:px-[52px]"
  >
    <div class="hero-grid absolute inset-0 opacity-[0.03]"></div>
    <div
      class="hero-glow pointer-events-none absolute -right-[100px] -top-[180px] h-[700px] w-[700px] rounded-full"
    ></div>
    <div
      class="hero-glow2 pointer-events-none absolute -left-[60px] -bottom-[200px] h-[500px] w-[500px] rounded-full"
    ></div>

    <div
      class="relative z-[2] mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-15 lg:grid-cols-[1fr_400px]"
    >
      <div>
        <div
          class="mb-[22px] inline-flex items-center gap-2 rounded-full border border-gold-primary/28 bg-gold-primary/12 px-3.5 py-[5px] pl-2.5 text-[11px] font-bold uppercase tracking-[1.2px] text-gold-tertiary"
        >
          <div class="hl-dot h-1.5 w-1.5 rounded-full bg-gold-tertiary"></div>
          Webinar Gratis · 25 Januari 2025
        </div>
        <h1
          class="font-serif mb-4 text-[28px] sm:text-[40px] md:text-[52px] font-semibold leading-[1.1] text-white"
        >
          Kenapa Supervisor Baru<br class="hidden sm:block" />
          Gagal di 90 Hari Pertama —<br />
          dan <em class="text-teal-secondary italic">Cara Menghindarinya</em>
        </h1>
        <p
          class="mb-7 max-w-[520px] text-[17px] font-light leading-relaxed text-white/65"
        >
          Webinar intensif untuk profesional yang baru naik level kepemimpinan —
          dan sudah merasakan tekanan dari semua arah tanpa tahu harus mulai
          dari mana.
        </p>

        <div class="mb-8 flex flex-col gap-2.5">
          <div
            v-for="outcome in outcomes"
            :key="outcome"
            class="flex items-start gap-3"
          >
            <div
              class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-teal-secondary/30 bg-teal-secondary/15"
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="#22A094"
                stroke-width="2.5"
                class="h-2.5 w-2.5"
              >
                <path d="M2 6l3 3 5-5" />
              </svg>
            </div>
            <p class="text-[14.5px] font-normal leading-relaxed text-white/78">
              {{ outcome }}
            </p>
          </div>
        </div>

        <a
          href="#register-mobile"
          class="inline-flex items-center gap-[9px] rounded-lg bg-gold-primary px-8 py-4 text-[15px] font-extrabold tracking-[0.15px] text-midnight transition-colors hover:bg-gold-secondary lg:hidden w-full justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            class="h-4 w-4 shrink-0"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          Amankan Slot — Gratis
        </a>

        <div class="mt-3 flex items-center gap-1.5 text-[12px] text-white/30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-3 w-3"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Gratis · Tanpa syarat · Sertifikat kehadiran dikirim via email
        </div>
      </div>

      <!-- Registration Card -->
      <div id="register-mobile" class="lg:hidden h-2 -mt-20"></div>
      <!-- Anchor for mobile -->
      <div
        id="register"
        class="relative rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
      >
        <div
          class="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-teal-secondary to-gold-primary"
        ></div>
        <div
          class="mb-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-gold-secondary"
        >
          Live Webinar · Gratis
        </div>
        <div
          class="font-serif mb-5.5 text-[20px] font-semibold leading-[1.3] text-white"
        >
          Kenapa Supervisor Baru Gagal di 90 Hari Pertama — dan Cara
          Menghindarinya
        </div>

        <div class="mb-5 flex flex-col gap-3">
          <div class="flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold-secondary)"
              stroke-width="2"
              class="h-3.5 w-3.5 flex-shrink-0"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span class="text-[13px] text-white/62"
              >Sabtu, <strong>25 Januari 2025</strong></span
            >
          </div>
          <div class="flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold-secondary)"
              stroke-width="2"
              class="h-3.5 w-3.5 flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span class="text-[13px] text-white/62"
              ><strong>09.00 – 11.00 WIB</strong> (2 jam intensif)</span
            >
          </div>
          <div class="flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold-secondary)"
              stroke-width="2"
              class="h-3.5 w-3.5 flex-shrink-0"
            >
              <path d="M15 10l-4 4 6 6-8-16-2 8z" />
            </svg>
            <span class="text-[13px] text-white/62"
              >Zoom Webinar · Link dikirim <strong>H-1</strong></span
            >
          </div>
          <div class="flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold-secondary)"
              stroke-width="2"
              class="h-3.5 w-3.5 flex-shrink-0"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span class="text-[13px] text-white/62"
              >Speaker: <strong>Drs. Darmawan Kusuma, MM</strong></span
            >
          </div>
        </div>

        <div class="my-[18px] h-[1px] bg-white/8"></div>

        <div
          class="mb-5 rounded-lg border border-teal-secondary/16 bg-teal-secondary/8 p-4"
        >
          <p class="mb-1 text-[12px] font-bold tracking-[0.3px] text-white/55">
            Yang Anda Dapatkan:
          </p>
          <ul class="flex flex-col gap-[4px] list-none p-0">
            <li
              v-for="item in inclusions"
              :key="item"
              class="flex items-center gap-1.5 text-[12px] text-white/48"
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="#22A094"
                stroke-width="2.5"
                class="h-2.5 w-2.5 flex-shrink-0"
              >
                <path d="M2 6l3 3 5-5" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div
          class="mb-2 flex items-center justify-between text-[11px] text-white/38"
        >
          <span>Slot tersisa:</span>
          <span class="font-bold text-gold-secondary">~35 dari 120 kursi</span>
        </div>
        <div class="mb-[18px] h-[6px] overflow-hidden rounded-[3px] bg-white/8">
          <div
            class="h-full w-[71%] rounded-[3px] bg-gradient-to-r from-teal-secondary to-gold-primary"
          ></div>
        </div>

        <a
          href="https://lynk.id/dkn-webinar"
          target="_blank"
          rel="noopener"
          class="mb-2.5 flex w-full items-center justify-center gap-2 rounded-lg bg-gold-primary p-[15px] text-[14.5px] font-extrabold tracking-[0.15px] text-midnight transition-colors hover:bg-gold-secondary no-underline"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            class="h-[15px] w-[15px]"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          Amankan Slot Saya — Gratis
        </a>
        <a
          href="https://wa.me/6282343424071"
          target="_blank"
          class="flex w-full items-center justify-center gap-2 rounded-lg border border-white/14 bg-white/7 p-[13px] text-[14px] font-medium text-white/80 transition-colors hover:bg-white/11 no-underline"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-3.5 w-3.5"
          >
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
            />
          </svg>
          Daftar via WhatsApp
        </a>
        <p class="mt-3 text-center text-[11px] text-white/28">
          ✓ Gratis &nbsp;·&nbsp; ✓ Tanpa syarat &nbsp;·&nbsp; ✓ Konfirmasi
          instan
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const outcomes = [
  "Pahami 5 kesalahan fatal yang dilakukan supervisor baru dalam 90 hari pertama",
  'Dapatkan framework transisi dari "bintang individu" menjadi pemimpin yang efektif',
  "Cara membangun otoritas yang tulus — tanpa kehilangan hubungan dengan rekan tim",
];

const inclusions = [
  "2 jam sesi intensif langsung",
  "Slide materi lengkap",
  "Sertifikat kehadiran digital",
  "Akses rekaman (terbatas)",
];
</script>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
}
.hero-glow {
  background: radial-gradient(
    circle,
    rgba(34, 160, 148, 0.1) 0%,
    transparent 70%
  );
}
.hero-glow2 {
  background: radial-gradient(
    circle,
    rgba(196, 146, 58, 0.06) 0%,
    transparent 68%
  );
}
.hl-dot {
  animation: pulse 1.8s infinite;
  animation-delay: 0.4s;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}
</style>
