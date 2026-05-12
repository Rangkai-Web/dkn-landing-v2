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
            Live Zoom · YouTube · Bersertifikat
          </div>
          <h1 class="ph-h">Webinar DKN —<br /><em>Gratis dan Berbayar</em></h1>
          <p class="ph-sub">
            Tonton recording gratis di YouTube, ikuti webinar live Zoom tanpa
            biaya, atau daftar webinar berbayar lengkap dengan materi dan
            sertifikat keikutsertaan.
          </p>
          <div class="ph-btns">
            <a
              href="#recording"
              class="cta-A"
              :class="{ active: activeSection === 'recording' }"
              @click="activeSection = 'recording'"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Tonton Recording
            </a>
            <a
              href="#gratis"
              class="cta-ghost"
              :class="{ active: activeSection === 'gratis' }"
              @click="activeSection = 'gratis'"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Webinar Gratis
            </a>
            <a
              href="#berbayar"
              class="cta-ghost"
              :class="{ active: activeSection === 'berbayar' }"
              @click="activeSection = 'berbayar'"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 11l3 3L22 4" />
              </svg>
              Webinar Berbayar
            </a>
          </div>
        </div>
      </section>

      <!-- TAB NAV -->
      <div class="tab-nav">
        <div class="tab-nav-inner">
          <a
            href="#recording"
            class="tab"
            :class="{ active: activeSection === 'recording' }"
            @click="activeSection = 'recording'"
            >🎬 Recording Tersedia</a
          >
          <a
            href="#gratis"
            class="tab"
            :class="{ active: activeSection === 'gratis' }"
            @click="activeSection = 'gratis'"
            >✦ Webinar Gratis</a
          >
          <a
            href="#berbayar"
            class="tab"
            :class="{ active: activeSection === 'berbayar' }"
            @click="activeSection = 'berbayar'"
            >★ Webinar Berbayar</a
          >
        </div>
      </div>

      <!-- ═══ ZONA 1: RECORDING KPI ═══ -->
      <section class="sec bg-mist" id="recording">
        <div class="wrap">
          <span class="lbl">Recording Tersedia Sekarang</span>
          <h2 class="sh">Tonton Gratis di YouTube DKN</h2>
          <p class="ss">
            Rekaman webinar yang telah berlangsung tersedia gratis untuk semua
            orang. Tidak perlu daftar — langsung tonton di channel YouTube DKN.
          </p>

          <div style="margin-top: 40px">
            <div class="rec-featured">
              <div class="rec-thumb">
                <div class="rec-thumb-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22A094"
                    stroke-width="1.5"
                    width="28"
                    height="28"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div class="rec-yt-badge">
                  <svg viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  YouTube
                </div>
              </div>
              <div class="rec-body">
                <div class="rec-tag">
                  Leadership &amp; Performance Management
                </div>
                <div class="rec-title">
                  Webinar KPI: Membangun Sistem Pengukuran Kinerja yang Efektif
                  untuk Tim Anda
                </div>
                <div class="rec-desc">
                  Bagaimana merancang KPI yang benar-benar mengukur apa yang
                  penting — bukan sekadar angka yang mudah dicapai. Dipandu oleh
                  praktisi senior perbankan nasional.
                </div>
                <div class="rec-meta">
                  <div class="rec-m">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" /></svg
                    >Tersedia di YouTube
                  </div>
                  <div class="rec-m">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" /></svg
                    >Supervisor, Manager, Team Leader
                  </div>
                  <div class="rec-m">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      /></svg
                    >Gratis — Tanpa Daftar
                  </div>
                </div>
                <div class="rec-actions">
                  <a
                    href="https://youtu.be/lUfkloObIGM"
                    target="_blank"
                    rel="noopener"
                    class="btn-yt"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      width="14"
                      height="14"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Tonton di YouTube DKN
                  </a>
                  <a href="#gratis" class="btn-outline-w">
                    Daftar Notifikasi Webinar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Cara mengakses -->
          <div class="how-grid">
            <div class="how-card">
              <div class="how-num">01</div>
              <h3>Tonton Langsung di YouTube</h3>
              <p>
                Semua recording webinar DKN tersedia gratis di channel YouTube.
                Klik tombol di atas dan tonton langsung — tanpa perlu daftar
                akun apapun.
              </p>
            </div>
            <div class="how-card">
              <div class="how-num">02</div>
              <h3>Daftar Akun untuk Notifikasi</h3>
              <p>
                Ingin tahu jadwal webinar live berikutnya? Daftar akun DKN
                gratis dan kami kirimkan informasi webinar mendatang via
                WhatsApp atau email.
              </p>
            </div>
            <div class="how-card">
              <div class="how-num">03</div>
              <h3>Ingin Sertifikat?</h3>
              <p>
                Peserta yang mengikuti webinar live dan membutuhkan sertifikat
                keikutsertaan dapat mengaksesnya sebagai add-on berbayar setelah
                webinar selesai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ ZONA 2: WEBINAR GRATIS ═══ -->
      <section class="sec" id="gratis">
        <div class="wrap">
          <span class="lbl">Webinar Gratis</span>
          <h2 class="sh">Webinar Live — Gratis untuk Semua</h2>
          <p class="ss">
            Ikuti webinar live via Zoom tanpa biaya apapun. Materi dari praktisi
            senior, sesi tanya jawab langsung, dan recording tersedia di YouTube
            setelah acara.
          </p>

          <div class="cert-info" style="margin-top: 28px; margin-bottom: 8px">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--teal2)"
              stroke-width="2"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <p>
              <strong>Sertifikat Partisipasi:</strong> Peserta webinar live yang
              menginginkan sertifikat keikutsertaan dapat memperolehnya sebagai
              add-on berbayar. Recording tersedia gratis di YouTube untuk semua
              peserta.
            </p>
          </div>

          <!-- WEBINAR GRATIS CARDS — COMING SOON -->
          <div class="wg-grid">
            <div
              v-for="webinar in freeWebinars"
              :key="webinar.id"
              class="wg-card"
            >
              <div class="wg-thumb" :style="{ background: webinar.gradient }">
                <!-- Dynamic Icons -->
                <svg
                  v-if="webinar.icon === 'users'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(34,160,148,.5)"
                  stroke-width="1.5"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                <svg
                  v-else-if="webinar.icon === 'graduation-cap'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(26,122,110,.5)"
                  stroke-width="1.5"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <svg
                  v-else-if="webinar.icon === 'activity'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(196,146,58,.5)"
                  stroke-width="1.5"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <svg
                  v-else-if="webinar.icon === 'zap'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(55,138,221,.5)"
                  stroke-width="1.5"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <svg
                  v-else-if="webinar.icon === 'shield'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(139,92,246,.5)"
                  stroke-width="1.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <svg
                  v-else-if="webinar.icon === 'heart'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(26,160,100,.5)"
                  stroke-width="1.5"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>

                <span class="wg-coming-tag">Segera Hadir</span>
              </div>
              <div class="wg-body">
                <div class="wg-cat">{{ webinar.cat }} · {{ webinar.code }}</div>
                <div class="wg-title">
                  {{ webinar.title }}
                </div>
                <div class="wg-desc">
                  {{ webinar.desc }}
                </div>
                <div class="wg-target">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  {{ webinar.target }}
                </div>
                <div
                  style="
                    background: rgba(196, 146, 58, 0.08);
                    border: 1px solid rgba(196, 146, 58, 0.18);
                    border-radius: 8px;
                    padding: 11px 14px;
                    font-size: 12.5px;
                    color: var(--ink);
                    margin-bottom: 12px;
                  "
                >
                  <strong
                    style="
                      display: block;
                      font-size: 11px;
                      color: var(--gold);
                      letter-spacing: 0.5px;
                      text-transform: uppercase;
                      margin-bottom: 3px;
                    "
                  >
                    Format
                  </strong>
                  {{ webinar.format }}
                </div>
              </div>
              <div class="wg-footer">
                <a
                  :href="webinar.waUrl"
                  target="_blank"
                  rel="noopener"
                  class="btn-minat"
                  style="width: 100%; justify-content: center"
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
                  Beritahu Saya
                </a>
                <div class="wg-free-note">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                  Gratis · Recording di YouTube
                </div>
              </div>
            </div>
          </div>


          <!-- Interest banner -->
          <div class="interest-banner">
            <div>
              <div class="pill pill-gold" style="margin-bottom: 16px">
                <div class="pill-dot pill-dot-gold"></div>
                Daftar Akun Gratis
              </div>
              <h2 class="ib-h">
                Jangan Lewatkan<br /><em>Webinar Berikutnya</em>
              </h2>
              <p class="ib-p">
                Daftar akun DKN secara gratis. Kami kirimkan notifikasi jadwal
                webinar, topik baru, dan informasi program via WhatsApp atau
                email — tidak ada spam.
              </p>
            </div>
            <div class="ib-form">
              <div v-if="!isSuccess">
                <div class="ib-form-lbl">Daftar Notifikasi Webinar</div>
                <form @submit.prevent="handleSubmit" class="form-row">
                  <input
                    v-model="form.nama"
                    class="finput"
                    type="text"
                    placeholder="Nama lengkap Anda"
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
                  <select v-model="form.topik" class="finput fselect">
                    <option value="">Topik yang diminati...</option>
                    <option>Leadership &amp; Management</option>
                    <option>Sales &amp; Marketing</option>
                    <option>Soft Skills (SKKNI)</option>
                    <option>Banking &amp; Risk</option>
                    <option>Semua Topik</option>
                  </select>
                  <button type="submit" class="btn-submit" :disabled="isSending">
                    <svg
                      v-if="!isSending"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      width="14"
                      height="14"
                    >
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    <span v-if="isSending">Mendaftar...</span>
                    <span v-else>Daftar Webinar Gratis</span>
                  </button>
                </form>
              </div>
              <div v-else class="ib-success">
                <div class="sc-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Terima Kasih!</h3>
                <p>
                  Data Anda telah tersimpan. Kami akan mengirimkan notifikasi jadwal
                  webinar terbaru melalui WhatsApp atau Email Anda.
                </p>
                <button @click="isSuccess = false" class="btn-reset">
                  Daftar Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ ZONA 3: WEBINAR BERBAYAR ═══ -->
      <section class="sec bg-mist" id="berbayar">
        <div class="wrap">
          <span class="lbl">Webinar Berbayar</span>
          <h2 class="sh">Webinar Intensif — Materi &amp; Sertifikat Lengkap</h2>
          <p class="ss">
            Lebih dari sekadar menonton — akses materi terstruktur, rekaman
            eksklusif, dan sertifikat keikutsertaan resmi via Zoom bersama
            praktisi senior.
          </p>

          <div class="cert-info" style="margin-top: 24px">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--teal2)"
              stroke-width="2"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <p>
              <strong>Sudah termasuk:</strong> Akses rekaman eksklusif, materi
              PDF, dan sertifikat keikutsertaan resmi yang dapat diverifikasi
              dan dibagikan secara profesional.
            </p>
          </div>

          <div class="wb-grid" id="berbayar">
            <div
              v-for="webinar in paidWebinars"
              :key="webinar.id"
              class="wb-card"
            >
              <div class="wb-head">
                <div class="wb-head-tag">{{ webinar.tag }}</div>
                <div class="wb-head-title">
                  {{ webinar.title }}
                </div>
                <div class="wb-head-desc">
                  {{ webinar.desc }}
                </div>
                <div class="wb-outcomes">
                  <h4>{{ webinar.id === 3 ? "4 Modul Terintegrasi" : "Yang Akan Anda Kuasai" }}</h4>
                  <div
                    v-for="outcome in webinar.outcomes"
                    :key="outcome"
                    class="wb-outcome"
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
              <div class="wb-meta">
                <div v-for="m in webinar.meta" :key="m.text" class="wb-m">
                  <svg
                    v-if="m.icon === 'clock'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <svg
                    v-else-if="m.icon === 'video'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M15 10l-4 4 6 6-8-16-2 8z" />
                  </svg>
                  <svg
                    v-else-if="m.icon === 'users'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  <svg
                    v-else-if="m.icon === 'award'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                  {{ m.text }}
                </div>
              </div>
              <div class="wb-footer">
                <div class="wb-price-row">
                  <div class="wb-price-lbl">Investasi</div>
                  <div class="wb-price-coming">{{ webinar.price }}</div>
                </div>
                <a
                  :href="webinar.waUrl"
                  target="_blank"
                  rel="noopener"
                  class="btn-minat"
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
                  Daftar Minat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- NEXT STEP -->
      <section class="sec">
        <div class="wrap">
          <div class="next-step">
            <div class="ns-left">
              <h2>Siap Belajar Lebih Mendalam?</h2>
              <p>
                Webinar adalah langkah awal yang tepat. Untuk kompetensi yang
                lebih terstruktur dan sertifikat BNSP yang diakui nasional,
                lihat Program Belajar offline DKN.
              </p>
            </div>
            <a href="/program" class="btn-gold">
              Lihat Program Belajar
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                width="15"
                height="15"
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
useSeoMeta({
  title: "Webinar Gratis — DKN Indonesia",
  description:
    "Webinar gratis DKN Indonesia — ikuti sesi live dan dapatkan sertifikat partisipasi.",
  ogTitle: "Webinar Gratis — DKN Indonesia",
  ogDescription:
    "Webinar gratis DKN Indonesia — ikuti sesi live dan dapatkan sertifikat partisipasi.",
  ogImage: "/favicon.ico",
  ogUrl: "https://dkn.digital/webinar",
  ogType: "website",
  ogSiteName: "DKN Indonesia",
  twitterCard: "summary_large_image",
  author: "PT Dayaguna Kompetensi Nusantara",
});

useHead({
  htmlAttrs: {
    lang: "id",
  },
});

const form = ref({
  nama: "",
  email: "",
  whatsapp: "",
  topik: "",
});

const isSending = ref(false);
const isSuccess = ref(false);

const activeSection = ref("recording");

const freeWebinars = [
  {
    id: 1,
    cat: "Leadership",
    code: "LPK-DKN-LEAD-01",
    title: "START 90™: Cara Supervisor Baru Tidak Gagal di 90 Hari Pertama",
    desc: "Framework terbukti untuk supervisor baru — membangun kredibilitas, menghindari 5 jebakan fatal, dan memimpin dengan percaya diri sejak hari pertama.",
    target: "Supervisor Baru, Team Leader, Middle Manager",
    format: "90 Menit · 6 Sesi Interaktif · Via Zoom",
    gradient: "linear-gradient(135deg, var(--midnight), #1a3050)",
    icon: "users",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+notifikasi+webinar+START+90+DKN",
  },
  {
    id: 2,
    cat: "Career Development",
    code: "LPK-DKN-LEAD-06",
    title: "From Campus to Career: Blueprint Profesional untuk Fresh Graduate",
    desc: "Menjembatani gap antara dunia kampus dan dunia kerja — reality check, mindset shift, First 90 Days Blueprint, dan 7 kesalahan fatal fresh graduate.",
    target: "Mahasiswa Tingkat Akhir, Fresh Graduate",
    format: "90–120 Menit · Via Zoom",
    gradient: "linear-gradient(135deg, #071a12, #0d3824)",
    icon: "graduation-cap",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+notifikasi+webinar+From+Campus+to+Career+DKN",
  },
  {
    id: 3,
    cat: "Sales Management",
    code: "LPK-DKN-SALE-03",
    title: "Building a Sales Culture: Tim Penjualan yang Sehat dan Konsisten",
    desc: "Membangun budaya sales berbasis kepercayaan — visi tim, psychological safety, EQ sebagai fondasi coaching, dan sistem accountability yang konsisten.",
    target: "Sales Manager, Team Leader",
    format: "175 Menit · Via Zoom",
    gradient: "linear-gradient(135deg, #1a0e00, #2a1500)",
    icon: "activity",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+notifikasi+webinar+Building+Sales+Culture+DKN",
  },
  {
    id: 4,
    cat: "Soft Skills",
    code: "LPK-DKN-SOFT-01 · SKKNI No. 234/2020",
    title: "Mengembangkan Kemampuan Berinisiatif dalam Bekerja",
    desc: "Inisiatif bukan sifat bawaan — ini keterampilan yang bisa dilatih. 4 elemen kompetensi berbasis SKKNI untuk membangun kebiasaan bertindak mandiri yang berdampak.",
    target: "Karyawan semua level, lintas industri",
    format: "150–170 Menit · Via Zoom",
    gradient: "linear-gradient(135deg, #060e28, #0a1a40)",
    icon: "zap",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+notifikasi+webinar+Inisiatif+Kerja+DKN",
  },
  {
    id: 5,
    cat: "Soft Skills",
    code: "LPK-DKN-SOFT-02 · SKKNI No. 234/2020",
    title: "Membangun Integritas sebagai Tenaga Kerja Profesional",
    desc: "Integritas bukan sekadar jujur — ini kompetensi profesional yang terukur. Segitiga integritas, 4 komponen, kode etik, dan dampak nyata dalam lingkungan perbankan.",
    target: "Karyawan semua level, khususnya perbankan",
    format: "155 Menit · Via Zoom",
    gradient: "linear-gradient(135deg, #0a0a1a, #14143a)",
    icon: "shield",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+notifikasi+webinar+Integritas+DKN",
  },
  {
    id: 6,
    cat: "Soft Skills",
    code: "LPK-DKN-SOFT-03 · SKKNI No. 234/2020",
    title: "Membangun Kemampuan Pengelolaan Emosi di Tempat Kerja",
    desc: "EQ adalah prediktor terkuat keunggulan kinerja. 5 dimensi kecerdasan emosional berbasis SKKNI — dari identifikasi pemicu hingga personal EQ Action Plan.",
    target: "Karyawan semua level yang berinteraksi dengan orang lain",
    format: "175 Menit · Via Zoom",
    gradient: "linear-gradient(135deg, #001a0a, #002a10)",
    icon: "heart",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+notifikasi+webinar+Pengelolaan+Emosi+DKN",
  },
];


const paidWebinars = [
  {
    id: 1,
    tag: "Sales & AI · LPK-DKN-SALE-02",
    title: "Smart Selling with AI for Financial Products",
    desc: "Mengintegrasikan consultative selling dengan AI tools untuk melipatgandakan produktivitas sales perbankan. SPIN Selling + Trusted Advisor + AI Prompt Engineering dalam satu program intensif.",
    outcomes: [
      "Trust-based consultative selling dengan SPIN Selling",
      "Value proposition, cross-selling, dan closing high-value",
      "Hands-on AI tools dan prompting untuk produktivitas 50%+",
    ],
    meta: [
      { icon: "clock", text: "1 Hari Penuh · 6 Modul" },
      { icon: "video", text: "Via Zoom" },
      { icon: "users", text: "Sales Officer, RM, Funding Officer" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Webinar+Smart+Selling+with+AI+DKN",
  },
  {
    id: 2,
    tag: "Strategy Execution · LPK-DKN-LEAD-05",
    title: "Why Good Strategies Fail in Execution",
    desc: "Hanya 9% eksekutif merasa strategi dieksekusi secara konsisten. Webinar eksekutif 2 jam ini membedah kesenjangan kritis kepemimpinan dan cara membangun ritme eksekusi nyata.",
    outcomes: [
      "Identifikasi 5 penyebab sistemik kegagalan eksekusi",
      "4 Disciplines of Execution (4DX) secara praktis",
      "Personal execution plan 30 hari yang siap dieksekusi",
    ],
    meta: [
      { icon: "clock", text: "120 Menit · Webinar Eksekutif" },
      { icon: "video", text: "Via Zoom" },
      { icon: "users", text: "Middle Manager, semua industri" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Webinar+Why+Good+Strategies+Fail+DKN",
  },
  {
    id: 3,
    tag: "Leadership · LPK-DKN-LEAD-03 · 4 Modul Terintegrasi",
    title: "Seri Leadership Efektif untuk Praktisi",
    desc: "Perjalanan pengembangan kepemimpinan komprehensif — dari memimpin diri sendiri hingga memimpin secara strategis. 4 modul terintegrasi, tersedia dalam format webinar bersertifikat.",
    outcomes: [
      "Modul 1: Memimpin Diri Sendiri — integritas, EQ, growth mindset",
      "Modul 2: Memimpin Tim — situational leadership, coaching GROW",
      "Modul 3 & 4: Mengelola Kinerja + Kepemimpinan Strategis",
    ],
    meta: [
      { icon: "clock", text: "120 Menit (4×30) · Via Zoom" },
      { icon: "award", text: "Bersertifikat" },
      { icon: "users", text: "Semua level profesional" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Seri+Leadership+Efektif+DKN",
  },
  {
    id: 4,
    tag: "Banking Operations · LPK-DKN-BANK-03",
    title: "Communication Skill for Auditor",
    desc: "Keunggulan teknis audit saja tidak cukup. Program virtual classroom ini membekali auditor dengan structured questioning, framework 4C, dan teknik mengelola resistensi auditee.",
    outcomes: [
      "Funnel technique & active listening 3 level",
      "Framework 4C: Clear, Concise, Constructive, Complete",
      "De-escalation dalam percakapan audit yang sulit",
    ],
    meta: [
      { icon: "clock", text: "150 Menit · 4 Sesi" },
      { icon: "video", text: "Virtual Classroom" },
      { icon: "users", text: "Junior–Senior Auditor Perbankan" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Communication+for+Auditor+DKN",
  },
  {
    id: 5,
    tag: "Leadership · LPK-DKN-LEAD-01",
    title: "Intensif START 90™: Sertifikasi Supervisor Baru",
    desc: "Program intensif 2 hari untuk memastikan supervisor baru memiliki fondasi kepemimpinan yang kuat dan strategi eksekusi 90 hari pertama.",
    outcomes: [
      "Framework 90 Hari Pertama",
      "Teknik Delegasi & Monitoring",
      "Personal Leadership Roadmap",
    ],
    meta: [
      { icon: "clock", text: "2 Hari Intensif" },
      { icon: "award", text: "E-Certificate & Materi" },
      { icon: "users", text: "Supervisor & Team Leader" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Webinar+Intensif+START+90+DKN",
  },
  {
    id: 6,
    tag: "Career Development · LPK-DKN-LEAD-06",
    title: "Professional Excellence: Blueprint Fresh Graduate",
    desc: "Membangun karakter dan kompetensi profesional yang dicari perusahaan besar. Program sertifikasi kesiapan kerja standar industri.",
    outcomes: [
      "Professional Ethics & Etiquette",
      "Analytical Thinking Foundation",
      "Career Acceleration Blueprint",
    ],
    meta: [
      { icon: "clock", text: "180 Menit" },
      { icon: "award", text: "Sertifikat Kesiapan Kerja" },
      { icon: "users", text: "Fresh Graduate & Mahasiswa" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Professional+Excellence+DKN",
  },
  {
    id: 7,
    tag: "Sales Management · LPK-DKN-SALE-03",
    title: "Mastering Sales Culture & Performance",
    desc: "Strategi manajerial untuk membangun tim penjualan yang resilien, berorientasi target, dan memiliki ritme kerja yang konsisten.",
    outcomes: [
      "Building High-Performance Culture",
      "Sales Coaching GROW Model",
      "Accountability System Setup",
    ],
    meta: [
      { icon: "clock", text: "1 Hari Intensif" },
      { icon: "video", text: "Virtual Classroom" },
      { icon: "users", text: "Sales Manager & Director" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Sales+Culture+Webinar+DKN",
  },
  {
    id: 8,
    tag: "Soft Skills · LPK-DKN-SOFT-01",
    title: "Sertifikasi Kompetensi: Inisiatif di Tempat Kerja",
    desc: "Webinar berbasis standar SKKNI untuk mengukur dan meningkatkan proaktivitas karyawan dalam memberikan solusi bagi perusahaan.",
    outcomes: [
      "4 Elemen Kompetensi SKKNI",
      "Problem Identification Matrix",
      "Self-Management & Initiative",
    ],
    meta: [
      { icon: "clock", text: "170 Menit" },
      { icon: "award", text: "Sertifikat Berbasis SKKNI" },
      { icon: "users", text: "Staf & Profesional" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Sertifikasi+Inisiatif+DKN",
  },
  {
    id: 9,
    tag: "Soft Skills · LPK-DKN-SOFT-02",
    title: "Ethics & Integrity for Professional Banking",
    desc: "Membangun standar moral dan kepatuhan yang tinggi di lingkungan perbankan melalui studi kasus nyata dan framework integritas.",
    outcomes: [
      "Segitiga Integritas Perbankan",
      "Analisis Risiko Etika",
      "Professional Code of Conduct",
    ],
    meta: [
      { icon: "clock", text: "155 Menit" },
      { icon: "award", text: "Sertifikat Kepatuhan" },
      { icon: "users", text: "Praktisi Perbankan" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Ethics+Banking+Webinar+DKN",
  },
  {
    id: 10,
    tag: "Soft Skills · LPK-DKN-SOFT-03",
    title: "Emotional Intelligence for Workplace Success",
    desc: "Gunakan kecerdasan emosional untuk meningkatkan kolaborasi tim, mengelola stres, dan membangun hubungan profesional yang bermakna.",
    outcomes: [
      "5 Dimensi EQ Daniel Goleman",
      "Conflict Resolution Strategy",
      "Workplace Empathy Framework",
    ],
    meta: [
      { icon: "clock", text: "175 Menit" },
      { icon: "video", text: "Via Zoom" },
      { icon: "users", text: "Semua Level Profesional" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+EQ+Workplace+DKN",
  },
  {
    id: 11,
    tag: "Performance Management · LPK-DKN-LEAD-02",
    title: "Sertifikasi KPI: Membangun Sistem Pengukuran Kinerja",
    desc: "Bagaimana merancang KPI yang benar-benar mengukur apa yang penting — bukan sekadar angka yang mudah dicapai. Dipandu oleh praktisi senior perbankan nasional.",
    outcomes: [
      "Merancang KPI berbasis strategi bisnis",
      "Teknik pengukuran kinerja yang objektif",
      "Dashboard monitoring & feedback loop",
    ],
    meta: [
      { icon: "clock", text: "120 Menit Intensif" },
      { icon: "award", text: "Sertifikat KPI Specialist" },
      { icon: "users", text: "Supervisor, Manager, Team Leader" },
    ],
    price: "Harga segera diumumkan",
    waUrl:
      "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Sertifikasi+KPI+DKN",
  },
];



const handleSubmit = async () => {
  if (!form.value.nama || !form.value.email || !form.value.whatsapp) {
    alert("Mohon lengkapi data Anda.");
    return;
  }

  isSending.value = true;
  try {
    await $fetch("/api/webinar", {
      method: "POST",
      body: form.value,
    });
    isSuccess.value = true;
    // Reset form
    form.value = {
      nama: "",
      email: "",
      whatsapp: "",
      topik: "",
    };
  } catch (err) {
    console.error(err);
    alert(
      "Gagal mendaftar. Silakan coba lagi atau hubungi kami via WhatsApp.",
    );
  } finally {
    isSending.value = false;
  }
};

</script>

<style scoped>
/* LAYOUT */
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
    rgba(34, 160, 148, 0.09) 0%,
    transparent 70%
  );
  pointer-events: none;
}
.ph-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 160, 148, 0.12);
  border: 1px solid rgba(34, 160, 148, 0.28);
  color: var(--teal2);
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
  background: var(--teal2);
}
.pill-gold {
  background: rgba(196, 146, 58, 0.13);
  border-color: rgba(196, 146, 58, 0.3);
  color: var(--gold3);
}
.pill-dot-gold {
  background: var(--gold3);
  animation: pdot 1.8s infinite;
}
@keyframes pdot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.8);
  }
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
  color: var(--teal2);
  font-style: italic;
}
.ph-sub {
  font-size: 15.5px;
  color: rgba(255, 255, 255, 0.56);
  line-height: 1.75;
  font-weight: 300;
}
.ph-btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}
.cta-A {
  background: var(--gold);
  color: var(--midnight);
  padding: 13px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.cta-A:hover {
  background: var(--gold2);
  transform: translateY(-1px);
}
.cta-A svg {
  width: 15px;
  height: 15px;
}
.cta-ghost {
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 13px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.cta-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}
.cta-ghost.active {
  background: var(--gold);
  color: var(--midnight);
  border-color: var(--gold);
  font-weight: 800;
}
.cta-A.active {
  background: var(--gold);
  box-shadow: 0 0 20px rgba(196, 146, 58, 0.3);
}
/* TAB NAV */
.tab-nav {
  background: #fff;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 68px;
  z-index: 90;
}
.tab-nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding: 0 52px;
}
.tab {
  padding: 18px 24px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--slate);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  white-space: nowrap;
}
.tab:hover {
  color: var(--ink);
}
.tab.active {
  color: var(--teal2);
  border-bottom-color: var(--teal2);
}
/* SECTION */
.sec {
  padding: 72px 52px;
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
.lbl {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--teal2);
  display: block;
  margin-bottom: 10px;
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
/* RECORDING CARD */
.rec-featured {
  background: var(--midnight);
  border-radius: 16px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 340px 1fr;
}
.rec-thumb {
  height: 100%;
  min-height: 260px;
  background: linear-gradient(135deg, #0a1520, #142238);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.rec-thumb-ico {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(34, 160, 148, 0.15);
  border: 1px solid rgba(34, 160, 148, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.rec-thumb-ico svg {
  width: 28px;
  height: 28px;
}
.rec-yt-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: #ff0000;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.rec-yt-badge svg {
  width: 12px;
  height: 12px;
}
.rec-body {
  padding: 40px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.rec-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 10px;
}
.rec-title {
  font-family: var(--serif);
  font-size: 26px;
  color: #fff;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 12px;
}
.rec-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 24px;
}
.rec-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.rec-m {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.45);
}
.rec-m svg {
  width: 13px;
  height: 13px;
}
.rec-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.btn-yt {
  background: #ff0000;
  color: #fff;
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.btn-yt:hover {
  background: #cc0000;
}
.btn-yt svg {
  width: 14px;
  height: 14px;
}
.btn-outline-w {
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.btn-outline-w:hover {
  background: rgba(255, 255, 255, 0.12);
}
/* HOW IT WORKS */
.how-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}
.how-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 26px;
  box-shadow: 0 1px 3px rgba(20, 34, 56, 0.05);
}
.how-num {
  font-family: var(--serif);
  font-size: 36px;
  font-weight: 600;
  color: var(--teal2);
  line-height: 1;
  margin-bottom: 12px;
}
.how-card h3 {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}
.how-card p {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.65;
}
/* WEBINAR GRATIS CARDS */
.wg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}
.wg-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 1px 3px rgba(20, 34, 56, 0.06),
    0 4px 16px rgba(20, 34, 56, 0.05);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.18s,
    box-shadow 0.18s;
}
.wg-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 24px rgba(20, 34, 56, 0.1);
}
.wg-thumb {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.wg-thumb svg {
  width: 40px;
  height: 40px;
}
.wg-coming-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(6, 12, 24, 0.7);
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.wg-body {
  padding: 20px 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.wg-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 7px;
}
.wg-title {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.3;
  margin-bottom: 10px;
}
.wg-desc {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 14px;
}
.wg-target {
  font-size: 11.5px;
  color: var(--slate);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}
.wg-target svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}
.wg-footer {
  padding: 14px 22px;
  border-top: 1px solid var(--border);
  background: var(--mist);
}
.wg-free-note {
  font-size: 12px;
  color: var(--teal);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}
.wg-free-note svg {
  width: 12px;
  height: 12px;
}
/* INTEREST FORM CARD */
.interest-banner {
  background: var(--midnight);
  border-radius: 16px;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 48px;
  align-items: center;
  margin-top: 32px;
}
.ib-h {
  font-family: var(--serif);
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 10px;
}
.ib-h em {
  color: var(--gold2);
  font-style: italic;
}
.ib-p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.7;
  font-weight: 300;
}
.ib-form {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 28px;
}
.ib-form-lbl {
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
  margin-top: 4px;
}
.btn-submit:hover {
  background: var(--gold2);
}
.btn-submit svg {
  width: 14px;
  height: 14px;
}
.ib-success {
  text-align: center;
  padding: 10px 0;
}
.sc-ico {
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
.sc-ico svg {
  width: 20px;
  height: 20px;
}
.ib-success h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 8px;
}
.ib-success p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13.5px;
  line-height: 1.6;
  margin-bottom: 20px;
}
.btn-reset {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-reset:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* BERBAYAR SECTION */
.wb-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
}
.wb-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 1px 3px rgba(20, 34, 56, 0.06),
    0 4px 16px rgba(20, 34, 56, 0.05);
  display: flex;
  flex-direction: column;
}
.wb-head {
  padding: 28px 28px 0;
}
.wb-head-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 8px;
}
.wb-head-title {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.28;
  margin-bottom: 10px;
}
.wb-head-desc {
  font-size: 13.5px;
  color: var(--slate);
  line-height: 1.65;
  margin-bottom: 16px;
}
.wb-outcomes {
  background: var(--mist);
  margin: 0 28px;
  border-radius: 8px;
  padding: 16px;
}
.wb-outcomes h4 {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--slate);
  margin-bottom: 10px;
}
.wb-outcome {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12.5px;
  color: var(--ink);
  margin-bottom: 6px;
  line-height: 1.45;
}
.wb-outcome:last-child {
  margin-bottom: 0;
}
.wb-outcome svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--teal2);
}
.wb-meta {
  padding: 16px 28px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  border-top: 1px solid var(--border);
}
.wb-m {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--slate);
}
.wb-m svg {
  width: 12px;
  height: 12px;
}
.wb-footer {
  padding: 16px 28px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.wb-price-row {
  display: flex;
  flex-direction: column;
}
.wb-price-lbl {
  font-size: 11px;
  color: var(--slate);
}
.wb-price-val {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 600;
  color: var(--ink);
}
.wb-price-coming {
  font-size: 13px;
  font-weight: 700;
  color: var(--slate);
  font-style: italic;
}
.btn-minat {
  background: none;
  color: var(--teal2);
  border: 1.5px solid var(--teal2);
  padding: 10px 20px;
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
}
.btn-minat:hover {
  background: var(--teal2);
  color: #fff;
}
.btn-minat svg {
  width: 13px;
  height: 13px;
}
/* CERT BANNER */
.cert-info {
  background: var(--teal-pale);
  border: 1px solid rgba(34, 160, 148, 0.2);
  border-radius: 12px;
  padding: 20px 26px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}
.cert-info svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.cert-info p {
  font-size: 13.5px;
  color: var(--teal);
  line-height: 1.6;
}
.cert-info strong {
  color: var(--teal2);
  font-weight: 700;
}
/* NEXT STEP */
.next-step {
  background: var(--gold-pale);
  border-radius: 16px;
  padding: 44px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border: 1px solid rgba(196, 146, 58, 0.18);
}
.ns-left h2 {
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
}
.ns-left p {
  font-size: 14px;
  color: var(--slate);
  line-height: 1.65;
}
.btn-gold {
  background: var(--gold);
  color: var(--midnight);
  padding: 13px 26px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-gold:hover {
  background: var(--gold2);
  transform: translateY(-1px);
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
@media (max-width: 900px) {
  nav {
    padding: 0 20px;
  }
  .nav-links,
  .nav-actions {
    display: none;
  }
  .sec {
    padding: 52px 20px;
  }
  .page-hero {
    padding: 52px 20px;
  }
  .ph-h {
    font-size: 34px;
  }
  .how-grid,
  .wg-grid,
  .wb-grid {
    grid-template-columns: 1fr;
  }
  .rec-featured {
    grid-template-columns: 1fr;
  }
  .rec-thumb {
    height: 200px;
  }
  .rec-body {
    padding: 28px;
  }
  .interest-banner {
    grid-template-columns: 1fr;
  }
  .tab-nav-inner {
    padding: 0 20px;
    overflow-x: auto;
  }
  .next-step {
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
  .page-hero { padding: 80px 20px 60px; }
  .rec-member-banner { flex-direction: column; }
  .rec-member-banner__right { align-items: flex-start; }
  .rec-card { flex-direction: column; }
  .rec-card__thumb { width: 100%; height: 140px; }
  .rec-card__meta { flex-direction: column; align-items: flex-start; }
} */
</style>
