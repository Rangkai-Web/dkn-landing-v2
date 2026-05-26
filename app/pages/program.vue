<template>
  <div>
    <AppHeader />

    <main>
      <!-- PAGE HERO -->
      <section class="page-hero">
        <div class="ph-grid"></div>
        <div class="ph-glow"></div>
        <div class="ph-inner">
          <div class="pill">
            <div class="pill-dot"></div>
            Offline · Intensif · Bersertifikat
          </div>
          <h1 class="ph-h">
            Program Belajar<br /><em>Bersertifikat LPK DKN</em>
          </h1>
          <p class="ph-sub">
            Pelatihan tatap muka intensif 1–2 hari yang dirancang dari
            pengalaman nyata lapangan — bukan teori akademis. Dibuka setelah
            kuota terpenuhi.
          </p>
          <div class="ph-stats">
            <div class="ph-stat">
              <div class="ph-stat-n">14</div>
              <div class="ph-stat-l">Program tersedia</div>
            </div>
            <div class="ph-stat-sep"></div>
            <div class="ph-stat">
              <div class="ph-stat-n">6</div>
              <div class="ph-stat-l">Kategori keahlian</div>
            </div>
            <div class="ph-stat-sep"></div>
            <div class="ph-stat">
              <div class="ph-stat-n">3★</div>
              <div class="ph-stat-l">Program Signature eksklusif</div>
            </div>
          </div>
          <div class="flex items-center justify-center mt-32">
            <NuxtLink
              to="https://elearning.dkn.digital/login/index.php?loginredirect=1"
              target="_blank"
              class="inline-flex items-center rounded-md bg-teal-secondary px-3.5 md:px-5 py-[9px] text-[13px] font-semibold text-white no-underline transition-all hover:bg-teal-primary"
            >
              Akses Learning Managemen System Kami
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- ═══ SERTIFIKASI BNSP — POSISI PALING ATAS ═══ -->
      <section class="sec bg-mist" id="sertifikasi">
        <div class="wrap">
          <span class="lbl lbl-gold">★ Program Unggulan</span>
          <h2 class="sh">Sertifikasi BNSP — Kompetensi yang Diakui Nasional</h2>
          <p class="ss">
            Satu-satunya program DKN dengan sertifikat BNSP resmi — bermitra
            dengan LSP SIK. Kompetensi Anda diakui secara nasional dan dapat
            diverifikasi.
          </p>

          <div class="bnsp-hero" v-if="bnspData">
            <div class="bnsp-hero-top">
              <div>
                <div class="bnsp-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gold3)"
                    stroke-width="2"
                    width="12"
                    height="12"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {{ bnspData.badge }}
                </div>
                <h2 v-html="bnspData.titleHtml"></h2>
                <p class="bnsp-desc">
                  {{ bnspData.description }}
                </p>
                <div class="bnsp-units">
                  <div
                    v-for="unit in bnspData.units"
                    :key="unit.id"
                    class="bnsp-unit"
                  >
                    <div class="bnsp-unit-num">{{ unit.id }}</div>
                    <span>
                      <strong>{{ unit.title }}</strong> — {{ unit.desc }}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div class="bnsp-info-card">
                  <div class="bnsp-info-row">
                    <div
                      v-for="card in bnspData.infoCards"
                      :key="card.label"
                      class="bnsp-ir"
                    >
                      <div class="bnsp-ir-ico">
                        <svg
                          v-if="card.type === 'format'"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--gold2)"
                          stroke-width="2"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        <svg
                          v-else-if="card.type === 'partner'"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--gold2)"
                          stroke-width="2"
                        >
                          <path
                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                          />
                        </svg>
                        <svg
                          v-else-if="card.type === 'target'"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--gold2)"
                          stroke-width="2"
                        >
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                        <svg
                          v-else-if="card.type === 'status'"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--gold2)"
                          stroke-width="2"
                        >
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        </svg>
                      </div>
                      <div>
                        <div class="bnsp-ir-lbl">{{ card.label }}</div>
                        <div class="bnsp-ir-val">{{ card.value }}</div>
                        <div class="bnsp-ir-sub">
                          {{ card.sub }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bnsp-price-note">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                    {{ bnspData.priceNote }}
                  </div>
                  <a
                    :href="`https://wa.me/${profile?.contact?.whatsapp_number}?text=${encodeURIComponent(bnspData.whatsappMessage)}`"
                    target="_blank"
                    rel="noopener"
                    class="btn-gold-full"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      width="14"
                      height="14"
                    >
                      <path
                        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                      />
                    </svg>
                    {{ bnspData.ctaText }}
                  </a>
                </div>
              </div>
            </div>
            <div class="bnsp-hero-bottom">
              <div
                v-for="benefit in bnspData.benefits"
                :key="benefit"
                class="bnsp-hb-item"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M9 11l3 3L22 4" />
                </svg>
                {{ benefit }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ KATALOG PROGRAM OFFLINE ═══ -->
      <section class="sec" id="katalog">
        <div class="wrap">
          <span class="lbl">Katalog Program</span>
          <h2 class="sh">14 Program Belajar Offline</h2>
          <p class="ss">
            Semua program dilaksanakan tatap muka intensif. Kelas dibuka setelah
            kuota waiting list terpenuhi — daftar minat sekarang untuk
            mendapatkan informasi pertama.
          </p>

          <!-- FILTER TABS -->
          <div class="filter-tabs">
            <a
              v-for="cat in categories"
              :key="cat"
              href="javascript:void(0)"
              class="ftab"
              :class="{ active: selectedCategory === cat }"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </a>
          </div>

          <!-- LOADING STATE -->
          <div v-if="isLoading" class="prog-loading">
            <div class="pl-spinner"></div>
            <p>Memuat katalog program...</p>
          </div>

          <!-- EMPTY STATE -->
          <div v-else-if="filteredPrograms.length === 0" class="prog-empty">
            <div class="pe-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M21 8V4H3v4m18 0H3m18 0v12H3V8" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 15v2m0-10v2" />
              </svg>
            </div>
            <h3>Belum ada program di kategori ini</h3>
            <p>
              Silakan pilih kategori lain atau hubungi kami untuk informasi
              program custom sesuai kebutuhan organisasi Anda.
            </p>
            <button
              @click="selectedCategory = 'Semua Program'"
              class="btn-reset-filter"
            >
              Lihat Semua Program
            </button>
          </div>

          <div v-else class="prog-grid">
            <div
              v-for="prog in filteredPrograms"
              :key="prog.id"
              class="prog-card"
              :class="{ 'prog-card-sig': prog.is_signature }"
            >
              <div class="pc-head">
                <div class="pc-top">
                  <div class="pc-cat-code">
                    <div
                      class="pc-cat"
                      :class="{ 'pc-cat-sig': prog.is_signature }"
                    >
                      {{
                        prog.is_signature
                          ? "★ Program Signature"
                          : prog.category
                      }}
                    </div>
                    <div class="pc-code">{{ prog.code }}</div>
                  </div>
                  <span
                    class="pc-tag"
                    :class="prog.is_signature ? 'tag-sig' : 'tag-wl'"
                  >
                    {{ prog.is_signature ? "Signature" : "Daftar Minat" }}
                  </span>
                </div>
                <div class="pc-title">{{ prog.title }}</div>
                <div class="pc-desc">{{ prog.desc }}</div>
                <div class="pc-outcomes">
                  <h4>
                    {{
                      prog.is_signature
                        ? "Framework Eksklusif DKN"
                        : "Key Outcomes"
                    }}
                  </h4>
                  <div
                    v-for="(outcome, idx) in prog.outcomes"
                    :key="idx"
                    class="pc-outcome"
                    :class="{ 'pc-outcome-sig': prog.is_signature }"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    {{ outcome }}
                  </div>
                </div>
              </div>
              <div class="pc-meta">
                <div class="pc-m">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {{ prog.duration }}
                </div>
                <div class="pc-m">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  {{ prog.target }}
                </div>
              </div>
              <div class="pc-footer">
                <div class="pc-price-note">Harga akan diumumkan</div>
                <!-- :href="
                    prog.button_link.includes('wa.me')
                      ? prog.button_link
                      : '/program#daftar-waiting-list'
                  " -->
                <a
                  href="#daftar-waiting-list"
                  rel="noopener"
                  :target="
                    prog.button_link.includes('wa.me') ? '_blank' : '_self'
                  "
                  class="btn-minat"
                  :class="{ 'btn-minat-gold': prog.is_signature }"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    />
                  </svg>
                  {{ prog.button_name }}
                </a>
              </div>
            </div>
          </div>

          <!-- WAITING LIST FORM -->
          <div class="wl-banner" id="daftar-waiting-list">
            <div>
              <h2 class="wl-h">
                Daftar Waiting List —<br />Anda yang Pertama Tahu
              </h2>
              <p class="wl-p">
                Semua program dibuka setelah kuota waiting list terpenuhi.
                Daftar sekarang dan tim DKN akan menghubungi Anda langsung
                ketika kelas siap dibuka — lengkap dengan informasi tanggal,
                lokasi, dan harga.
              </p>
            </div>
            <div class="wl-form">
              <div class="wl-form-lbl">Form Waiting List Program</div>

              <div v-if="submitted" class="success-message">
                <div class="sm-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Pendaftaran Berhasil!</h3>
                <p>
                  Terima kasih telah mendaftar. Tim DKN akan menghubungi Anda
                  segera melalui WhatsApp atau Email ketika kuota kelas
                  terpenuhi.
                </p>
                <button @click="submitted = false" class="btn-reset">
                  Daftar program lain
                </button>
              </div>

              <form v-else @submit.prevent="handleSubmit" class="form-row">
                <input
                  v-model="form.nama"
                  class="finput"
                  type="text"
                  placeholder="Nama lengkap"
                  required
                />
                <input
                  v-model="form.email"
                  class="finput"
                  type="email"
                  placeholder="Email aktif"
                  required
                />
                <input
                  v-model="form.whatsapp"
                  class="finput"
                  type="tel"
                  placeholder="Nomor WhatsApp"
                  required
                />
                <select v-model="form.program" class="finput fselect" required>
                  <option value="">Pilih program yang diminati...</option>
                  <option>Sertifikasi Kepemimpinan BNSP</option>
                  <option v-for="prog in programs" :key="prog.id">
                    {{ prog.is_signature ? "★ " : "" }}{{ prog.title }}
                  </option>
                </select>
                <button class="btn-submit" :disabled="loading">
                  <template v-if="loading">
                    <svg
                      class="ani-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      width="14"
                      height="14"
                    >
                      <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                    Memproses...
                  </template>
                  <template v-else>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      width="14"
                      height="14"
                    >
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    Daftar Waiting List Sekarang
                  </template>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- CORPORATE CTA -->
      <section class="sec-sm">
        <div class="wrap">
          <div class="corp-strip">
            <div class="cs-left">
              <h2>
                Program ini Bisa Diselenggarakan In-House untuk Organisasi Anda
              </h2>
              <p>
                Semua program LPK DKN dapat dikustomisasi dan diselenggarakan
                langsung di tempat Anda — jadwal fleksibel, konten disesuaikan
                industri dan level jabatan, dan ROI yang terukur.
              </p>
            </div>
            <a href="/contact" class="btn-outline-dark">
              Minta Proposal In-House
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                width="14"
                height="14"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
    <WhatsAppFab />
  </div>
</template>

<script setup lang="ts">
import { useProfileStore } from "~/stores/profileStore";
import { useProgramStore } from "~/stores/programStore";
import { useBnspStore } from "~/stores/bnspStore";

useSeoMeta({
  title:
    "Program Pelatihan DKN Indonesia - Pengembangan Kompetensi SDM Terlengkap",
  description:
    "Program Pelatihan DKN Indonesia - Pengembangan Kompetensi SDM terlengkap dengan harga terjangkau. Dapatkan sertifikat resmi dan tingkatkan kinerja tim Anda sekarang!",
});

const profileStore = useProfileStore();
const { profile } = storeToRefs(profileStore);

const programStore = useProgramStore();
const {
  categories,
  selectedCategory,
  programs,
  filteredPrograms,
  isLoading,
  error,
} = storeToRefs(programStore);

const bnspStore = useBnspStore();
const { bnspData } = storeToRefs(bnspStore);

onMounted(() => {
  profileStore.fetchProfile();
  programStore.fetchPrograms();
  bnspStore.fetchBnspData();
});

const submitted = ref(false);
const loading = ref(false);
const config = useRuntimeConfig();

const form = ref({
  nama: "",
  email: "",
  whatsapp: "",
  program: "",
});

const handleSubmit = async () => {
  loading.value = true;
  try {
    await $fetch("waiting-list", {
      method: "POST",
      baseURL: config.public.apiBaseUrl,
      body: form.value,
    });
    submitted.value = true;
    form.value = {
      nama: "",
      email: "",
      whatsapp: "",
      program: "",
    };
  } catch (err) {
    alert(
      "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.",
    );
  } finally {
    loading.value = false;
  }
};

useHead({
  htmlAttrs: {
    lang: "id",
  },
});
</script>

<style scoped>
/* PAGE HERO */
.page-hero {
  background: var(--midnight);
  padding: 72px 52px;
  position: relative;
  overflow: hidden;
}
.ph-grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
}
.ph-glow {
  position: absolute;
  top: -150px;
  right: -100px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(196, 146, 58, 0.09) 0%,
    transparent 70%
  );
  pointer-events: none;
}
.ph-inner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(196, 146, 58, 0.12);
  border: 1px solid rgba(196, 146, 58, 0.28);
  color: var(--gold3);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 5px 14px 5px 10px;
  border-radius: 50px;
  margin-bottom: 20px;
}
.pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold3);
}
.ph-h {
  font-family: var(--serif);
  font-size: 46px;
  line-height: 1.1;
  color: #fff;
  font-weight: 600;
  margin-bottom: 12px;
}
.ph-h em {
  color: var(--gold2);
  font-style: italic;
}
.ph-sub {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.56);
  line-height: 1.75;
  font-weight: 300;
}
.ph-stats {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-top: 32px;
  flex-wrap: wrap;
}
.ph-stat {
  text-align: center;
}
.ph-stat-n {
  font-family: var(--serif);
  font-size: 32px;
  color: var(--gold2);
  font-weight: 600;
  line-height: 1;
}
.ph-stat-l {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 4px;
}
.ph-stat-sep {
  width: 1px;
  background: rgba(255, 255, 255, 0.12);
  align-self: stretch;
}
/* SECTION */
.sec {
  padding: 72px 52px;
}
.sec-sm {
  padding: 52px 52px;
}
.wrap {
  max-width: 1100px;
  margin: 0 auto;
}
.bg-mist {
  background: var(--mist);
}
.bg-deep {
  background: var(--deep);
}
.bg-gold {
  background: var(--gold-pale);
}
.lbl {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--teal2);
  display: block;
  margin-bottom: 10px;
}
.lbl-gold {
  color: var(--gold);
}
.sh {
  font-family: var(--serif);
  font-size: 36px;
  line-height: 1.15;
  font-weight: 600;
  margin-bottom: 10px;
}
.sh-w {
  color: #fff;
}
.ss {
  font-size: 15px;
  color: var(--slate);
  line-height: 1.75;
  font-weight: 300;
}
/* BNSP HERO CARD */
.bnsp-hero {
  background: linear-gradient(140deg, var(--navy), #0d1e35);
  border: 1px solid rgba(196, 146, 58, 0.25);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;
}
.bnsp-hero-top {
  padding: 44px 52px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 56px;
  align-items: center;
}
.bnsp-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(196, 146, 58, 0.13);
  border: 1px solid rgba(196, 146, 58, 0.3);
  color: var(--gold3);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 4px 12px 4px 9px;
  border-radius: 50px;
  margin-bottom: 14px;
}
.bnsp-hero h2 {
  font-family: var(--serif);
  font-size: 32px;
  color: #fff;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 12px;
}
.bnsp-hero h2 em {
  color: var(--gold2);
  font-style: italic;
}
.bnsp-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.56);
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 20px;
}
.bnsp-units {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 22px;
}
.bnsp-unit {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.72);
}
.bnsp-unit-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(196, 146, 58, 0.2);
  border: 1px solid rgba(196, 146, 58, 0.35);
  color: var(--gold2);
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bnsp-info-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 28px;
}
.bnsp-info-row {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
}
.bnsp-ir {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.bnsp-ir-ico {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(196, 146, 58, 0.15);
  border: 1px solid rgba(196, 146, 58, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bnsp-ir-ico svg {
  width: 16px;
  height: 16px;
}
.bnsp-ir-lbl {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 2px;
}
.bnsp-ir-val {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
}
.bnsp-ir-sub {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 1px;
}
.bnsp-price-note {
  background: rgba(196, 146, 58, 0.08);
  border: 1px solid rgba(196, 146, 58, 0.18);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: var(--gold3);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.bnsp-price-note svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.btn-gold-full {
  width: 100%;
  background: var(--gold);
  color: var(--midnight);
  border: none;
  padding: 13px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  font-family: var(--sans);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
}
.btn-gold-full:hover {
  background: var(--gold2);
}
.btn-gold-full svg {
  width: 14px;
  height: 14px;
}
.bnsp-hero-bottom {
  padding: 20px 52px;
  background: rgba(196, 146, 58, 0.06);
  border-top: 1px solid rgba(196, 146, 58, 0.15);
  display: flex;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
}
.bnsp-hb-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.5);
}
.bnsp-hb-item svg {
  width: 14px;
  height: 14px;
  color: var(--gold2);
}
/* FILTER TABS */
.filter-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 36px;
  margin-bottom: 28px;
}
.ftab {
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  background: #fff;
  color: var(--slate);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}
.ftab:hover,
.ftab.active {
  background: var(--ink);
  color: #fff;
  border-color: var(--ink);
}
/* PROGRAM CARD */
.prog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.prog-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 1px 3px rgba(20, 34, 56, 0.05),
    0 4px 16px rgba(20, 34, 56, 0.05);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.18s,
    box-shadow 0.18s;
}
.prog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 24px rgba(20, 34, 56, 0.1);
}
.prog-card-sig {
  border-color: rgba(196, 146, 58, 0.3);
  box-shadow:
    0 1px 3px rgba(196, 146, 58, 0.08),
    0 4px 16px rgba(196, 146, 58, 0.08);
}
.pc-head {
  padding: 24px 26px 0;
}
.pc-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}
.pc-cat-code {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.pc-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--teal2);
}
.pc-cat-sig {
  color: var(--gold);
}
.pc-code {
  font-size: 10px;
  color: var(--slate);
}
.pc-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 50px;
  flex-shrink: 0;
}
.tag-wl {
  background: rgba(34, 160, 148, 0.1);
  color: var(--teal);
  border: 1px solid rgba(34, 160, 148, 0.18);
}
.tag-sig {
  background: rgba(196, 146, 58, 0.1);
  color: var(--gold);
  border: 1px solid rgba(196, 146, 58, 0.2);
}
.pc-title {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.28;
  margin-bottom: 10px;
}
.pc-desc {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.65;
  margin-bottom: 14px;
}
.pc-outcomes {
  background: var(--mist);
  border-radius: 8px;
  padding: 14px 16px;
  margin-bottom: 0;
}
.pc-outcomes h4 {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--slate);
  margin-bottom: 8px;
}
.pc-outcome {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 12.5px;
  color: var(--ink);
  margin-bottom: 5px;
  line-height: 1.45;
}
.pc-outcome:last-child {
  margin-bottom: 0;
}
.pc-outcome svg {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--teal2);
}
.pc-outcome-sig svg {
  color: var(--gold);
}
.pc-meta {
  padding: 12px 26px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  border-top: 1px solid var(--border);
}
.pc-m {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--slate);
}
.pc-m svg {
  width: 12px;
  height: 12px;
}
.pc-footer {
  padding: 14px 26px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.pc-price-note {
  font-size: 12.5px;
  color: var(--slate);
  font-style: italic;
}
.btn-minat {
  background: none;
  color: var(--teal2);
  border: 1.5px solid var(--teal2);
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--sans);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-minat:hover {
  background: var(--teal2);
  color: #fff;
}
.btn-minat svg {
  width: 13px;
  height: 13px;
}
.btn-minat-gold {
  border-color: var(--gold);
  color: var(--gold);
}
.btn-minat-gold:hover {
  background: var(--gold);
  color: var(--midnight);
}
/* WL BANNER */
.wl-banner {
  background: var(--midnight);
  border-radius: 16px;
  padding: 44px 52px;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 48px;
  align-items: center;
  margin-top: 32px;
}
.wl-h {
  font-family: var(--serif);
  font-size: 28px;
  color: #fff;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 10px;
}
.wl-p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.7;
  font-weight: 300;
}
.wl-form {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 26px;
}
.wl-form-lbl {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 14px;
}
.form-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.finput {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--sans);
  outline: none;
  transition: border 0.2s;
  width: 100%;
}
.finput:focus {
  border-color: var(--teal2);
}
.finput::placeholder {
  color: rgba(255, 255, 255, 0.28);
}
.fselect {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
}
.btn-submit {
  width: 100%;
  background: var(--teal2);
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--sans);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
}
.btn-submit:hover {
  background: var(--teal);
}
.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-submit svg {
  width: 14px;
  height: 14px;
}
.success-message {
  text-align: center;
  padding: 10px 0;
}
.sm-ico {
  width: 48px;
  height: 48px;
  background: rgba(34, 160, 148, 0.15);
  color: var(--teal2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.sm-ico svg {
  width: 22px;
  height: 22px;
}
.success-message h3 {
  font-family: var(--serif);
  font-size: 20px;
  color: #fff;
  margin-bottom: 8px;
}
.success-message p {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  margin-bottom: 20px;
}
.btn-reset {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-reset:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}
.ani-spin {
  animation: ani-spin 1s linear infinite;
}
@keyframes ani-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* CORP CTA */
.corp-strip {
  background: var(--gold-pale);
  border: 1px solid rgba(196, 146, 58, 0.2);
  border-radius: 16px;
  padding: 40px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.cs-left h2 {
  font-family: var(--serif);
  font-size: 26px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
}
.cs-left p {
  font-size: 14px;
  color: var(--slate);
  line-height: 1.65;
}
.btn-outline-dark {
  background: none;
  color: var(--ink);
  border: 1.5px solid var(--ink);
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-outline-dark:hover {
  background: var(--ink);
  color: #fff;
}
/* FOOTER */
footer {
  background: var(--midnight);
  padding: 56px 52px 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.ft {
  max-width: 1100px;
  margin: 0 auto;
}
.ft-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.ft-brand p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.38);
  line-height: 1.8;
  margin-top: 14px;
  margin-bottom: 20px;
}
.ft-socials {
  display: flex;
  gap: 8px;
}
.fs-btn {
  width: 32px;
  height: 32px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
}
.fs-btn svg {
  width: 13px;
  height: 13px;
}
.ft-col h5 {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.26);
  margin-bottom: 14px;
}
.ft-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.ft-col ul li a {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.44);
  text-decoration: none;
  transition: color 0.2s;
}
.ft-col ul li a:hover {
  color: #fff;
}
.ft-contact strong {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.22);
  display: block;
  margin-bottom: 2px;
}
.ft-contact p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.44);
  line-height: 2;
}
.ft-bottom {
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.ft-bottom p {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.2);
}
.ft-legal {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.ft-legal span {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.2);
}
.wa-fab {
  position: fixed;
  bottom: 26px;
  right: 26px;
  z-index: 999;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.28);
  transition: transform 0.2s;
}
.wa-fab:hover {
  transform: scale(1.08);
}
.wa-fab svg {
  width: 26px;
  height: 26px;
}
/* LOADING & EMPTY STATE */
.prog-loading {
  text-align: center;
  padding: 60px 0;
}
.pl-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(34, 160, 148, 0.1);
  border-top-color: var(--teal2);
  border-radius: 50%;
  margin: 0 auto 16px;
  animation: ani-spin 0.8s linear infinite;
}
.prog-loading p {
  font-size: 14px;
  color: var(--slate);
}
.prog-empty {
  text-align: center;
  padding: 80px 40px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
}
.pe-icon {
  width: 64px;
  height: 64px;
  background: var(--mist);
  color: var(--slate);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.pe-icon svg {
  width: 32px;
  height: 32px;
}
.prog-empty h3 {
  font-family: var(--serif);
  font-size: 24px;
  color: var(--ink);
  margin-bottom: 12px;
}
.prog-empty p {
  font-size: 15px;
  color: var(--slate);
  max-width: 460px;
  margin: 0 auto 24px;
  line-height: 1.6;
}
.btn-reset-filter {
  background: var(--ink);
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-reset-filter:hover {
  opacity: 0.9;
}
@media (max-width: 900px) {
  nav {
    padding: 0 20px;
  }
  .nav-links,
  .nav-actions {
    display: none;
  }
  .sec,
  .sec-sm {
    padding: 52px 20px;
  }
  .page-hero {
    padding: 52px 20px;
  }
  .ph-h {
    font-size: 34px;
  }
  .ph-stats {
    gap: 20px;
  }
  .bnsp-hero-top {
    grid-template-columns: 1fr;
    padding: 32px;
  }
  .bnsp-hero-bottom {
    padding: 16px 32px;
    gap: 16px;
  }
  .prog-grid {
    grid-template-columns: 1fr;
  }
  .wl-banner {
    grid-template-columns: 1fr;
    padding: 32px;
  }
  .corp-strip {
    flex-direction: column;
    padding: 32px;
  }
  footer {
    padding: 48px 20px 24px;
  }
  .ft-top {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
}
/* @media (max-width:900px) {
  .benefits-strip { grid-template-columns: 1fr; }
  .lms-access-box { grid-template-columns: 1fr; }
  .lms-screen-mock { display: none; }
  .program-card__footer { flex-direction: column; align-items: flex-start; }
} */
</style>
