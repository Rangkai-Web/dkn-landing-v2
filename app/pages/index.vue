<template>
  <div>
    <AppHeader />

    <main>
      <section class="hero">
        <div class="hero__bg-grid"></div>
        <div class="hero__glow-r"></div>
        <div class="hero__glow-l"></div>

        <div class="hero__inner">
          <!-- LEFT: copy -->
          <div class="hero__left">
            <div class="chip chip--teal">
              <div class="chip__dot"></div>
              Performance &amp; Capability Partner
            </div>
            <p class="hero__sup">PT Dayaguna Kompetensi Nusantara</p>

            <h1 class="hero__h1">
              Meningkatkan Kompetensi<br />
              <em>Individu dan Organisasi</em><br />
              melalui Webinar, Program,<br />
              dan Solusi SDM
            </h1>

            <p class="hero__sub">
              Akses webinar gratis, program belajar bersertifikat, serta layanan
              corporate training, advisory, dan assessment untuk mendukung
              pengembangan kompetensi secara berkelanjutan.
            </p>

            <div class="hero__btns">
              <!-- CTA 1: Funnel Online -->
              <NuxtLink to="/webinar" class="btn btn--gold btn--lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Ikuti Webinar Gratis
              </NuxtLink>
              <!-- CTA 2: Funnel B2B -->
              <NuxtLink to="/contact" class="btn btn--ghost-w btn--lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  />
                </svg>
                Diskusikan Kebutuhan Training
              </NuxtLink>
            </div>

            <div class="hero__trust">
              <div class="hero__trust-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  width="12"
                  height="12"
                  aria-hidden="true"
                >
                  <path d="M9 11l3 3L22 4" />
                </svg>
                Praktisi Senior Industri
              </div>
              <div class="hero__trust-sep"></div>
              <div class="hero__trust-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M9 11l3 3L22 4" />
                </svg>
                Sertifikat Resmi
              </div>
              <div class="hero__trust-sep"></div>
              <div class="hero__trust-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M9 11l3 3L22 4" />
                </svg>
                Platform LMS Terintegrasi
              </div>
            </div>
          </div>

          <!-- RIGHT: stats card -->
          <div class="hero__right">
            <div class="hero__card">
              <div class="hero__card-label">Keunggulan Platform DKN</div>
              <div class="hero__stats">
                <div class="hero__stat">
                  <div class="hero__stat-n">20+</div>
                  <div class="hero__stat-l">
                    Tahun pengalaman industri perbankan &amp; keuangan
                  </div>
                </div>
                <div class="hero__stat">
                  <div class="hero__stat-n">500+</div>
                  <div class="hero__stat-l">
                    Profesional yang telah dikembangkan
                  </div>
                </div>
                <div class="hero__stat-wide">
                  <div class="hero__stat-wide-ico">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#22A094" 
                      stroke-width="2.5"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <div class="hero__stat-wide-t">Platform LMS Aktif</div>
                    <div class="hero__stat-wide-s">
                      Continuous learning ecosystem
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FUNNEL STRIP -->
        <div class="hero__funnel">
          <div class="hero__funnel-inner wrap">
            <div class="hero__funnel-step">
              <div class="hf-ico" style="background: rgba(34, 160, 148, 0.15)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22A094"
                  stroke-width="2"
                  width="17"
                  height="17"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <div>
                <div class="hf-num">STEP 1</div>
                <div class="hf-title">Webinar Gratis</div>
                <div class="hf-sub">Wawasan + sertifikat partisipasi</div>
              </div>
            </div>
            <div class="hero__funnel-arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div class="hero__funnel-step">
              <div class="hf-ico" style="background: rgba(196, 146, 58, 0.12)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D9AA55"
                  stroke-width="2"
                  width="17"
                  height="17"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                  />
                </svg>
              </div>
              <div>
                <div class="hf-num">STEP 2</div>
                <div class="hf-title">Program Belajar</div>
                <div class="hf-sub">Terstruktur + sertifikat penyelesaian</div>
              </div>
            </div>
            <div class="hero__funnel-arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div class="hero__funnel-step">
              <div class="hf-ico" style="background: rgba(255, 255, 255, 0.08)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.55)"
                  stroke-width="2"
                  width="17"
                  height="17"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <div class="hf-num">STEP 3</div>
                <div class="hf-title">Layanan Corporate</div>
                <div class="hf-sub">Solusi pengembangan organisasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg--mist" id="layanan">
        <div class="wrap">
          <span class="sec-label">Layanan Utama</span>
          <h2 class="sec-h">Lima Pilar Layanan DKN</h2>
          <p class="sec-sub">
            Solusi pengembangan kompetensi yang menyeluruh — dari individu
            hingga seluruh organisasi Anda.
          </p>

          <div class="layanan-grid mt-48">
            <!-- 1. Corporate Training -->
            <div class="layanan-card">
              <div class="layanan-card__top-accent"></div>
              <div class="layanan-card__ico">
                <div class="icon-wrap icon-wrap--teal">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22A094"
                    stroke-width="2"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
              </div>
              <h3>Corporate Training</h3>
              <p>
                Program pelatihan in-house yang dikustomisasi untuk kebutuhan
                tim dan industri Anda.
              </p>
              <NuxtLink
                to="/contact"
                class="btn btn--outline-teal btn--sm"
                >Pelajari Lebih Lanjut</NuxtLink
              >
            </div>

            <!-- 2. Advisory -->
            <div class="layanan-card">
              <div class="layanan-card__top-accent"></div>
              <div class="layanan-card__ico">
                <div class="icon-wrap icon-wrap--gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4923A"
                    stroke-width="2"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
              </div>
              <h3>Advisory</h3>
              <p>
                Pendampingan strategis transformasi SDM dari assessment hingga
                implementasi terukur.
              </p>
              <NuxtLink
                to="/contact"
                class="btn btn--outline-teal btn--sm"
                >Pelajari Lebih Lanjut</NuxtLink
              >
            </div>

            <!-- 3. Digital Learning -->
            <div class="layanan-card">
              <div class="layanan-card__top-accent"></div>
              <div class="layanan-card__ico">
                <div
                  class="icon-wrap"
                  style="
                    background: rgba(55, 138, 221, 0.1);
                    border: 1px solid rgba(55, 138, 221, 0.18);
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#378ADD"
                    stroke-width="2"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
              </div>
              <h3>Digital Learning</h3>
              <p>
                Platform LMS Moodle terintegrasi untuk pembelajaran
                berkelanjutan dan terukur.
              </p>
              <NuxtLink to="/program" class="btn btn--outline-teal btn--sm"
                >Pelajari Lebih Lanjut</NuxtLink
              >
            </div>

            <!-- 4. Certification -->
            <div class="layanan-card">
              <div class="layanan-card__top-accent"></div>
              <div class="layanan-card__ico">
                <div
                  class="icon-wrap"
                  style="
                    background: rgba(26, 138, 126, 0.1);
                    border: 1px solid rgba(26, 138, 126, 0.18);
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1A8A7E"
                    stroke-width="2"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path
                      d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                    />
                  </svg>
                </div>
              </div>
              <h3>Certification</h3>
              <p>
                Persiapan sertifikasi profesional bidang manajemen risiko,
                keuangan, dan asuransi.
              </p>
              <NuxtLink to="/program" class="btn btn--outline-teal btn--sm"
                >Pelajari Lebih Lanjut</NuxtLink
              >
            </div>

            <!-- 5. Assessment Center -->
            <div class="layanan-card">
              <div class="layanan-card__top-accent"></div>
              <div class="layanan-card__ico">
                <div
                  class="icon-wrap"
                  style="
                    background: rgba(139, 92, 246, 0.1);
                    border: 1px solid rgba(139, 92, 246, 0.18);
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8B5CF6"
                    stroke-width="2"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
              </div>
              <h3>Assessment Center</h3>
              <p>
                Penilaian kompetensi objektif untuk keputusan talent, promosi,
                dan pengembangan karir.
              </p>
              <NuxtLink
                to="/contact"
                class="btn btn--outline-teal btn--sm"
                >Pelajari Lebih Lanjut</NuxtLink
              >
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════
     SECTION 3 — WEBINAR GRATIS
     Entry point funnel online
═══════════════════════════════════════ -->
      <section class="section bg--white">
        <div class="wrap">
          <div class="webinar-sec">
            <!-- LEFT: copy -->
            <div>
              <div class="chip chip--alert">
                <div class="chip__dot chip__dot--pulse"></div>
                Webinar Live — Slot Terbatas
              </div>
              <h2 class="wb__title">
                Mulai dari Webinar Gratis —<br />
                <em>Wawasan Nyata, Sertifikat Resmi</em>
              </h2>
              <p class="wb__desc">
                Ikuti sesi webinar live bersama praktisi senior DKN. Dapatkan
                insight mendalam seputar sales, kepemimpinan, sertifikasi, dan
                pengembangan karir profesional.
              </p>
              <div class="wb__benefits">
                <div class="wb__benefit">
                  <div class="wb__check">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#22A094"
                      stroke-width="2.5"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span
                    >Sesi live interaktif bersama praktisi industri
                    berpengalaman</span
                  >
                </div>
                <div class="wb__benefit">
                  <div class="wb__check">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#22A094"
                      stroke-width="2.5"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span
                    >Materi dan slide dibagikan pasca webinar kepada semua
                    peserta</span
                  >
                </div>
                <div class="wb__benefit">
                  <div class="wb__check">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#22A094"
                      stroke-width="2.5"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span
                    >Tanya jawab langsung di akhir sesi sesuai kondisi lapangan
                    Anda</span
                  >
                </div>
              </div>
              <div class="wb__cert">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path
                    d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                  />
                </svg>
                <p style="flex-basis: fit-content;">
                  Peserta webinar live mendapatkan sertifikat partisipasi resmi
                </p>
              </div>
              <div class="mt-32">
                <NuxtLink to="/webinar" class="btn btn--gold btn--lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  Daftar Webinar Gratis
                </NuxtLink>
              </div>
            </div>

            <!-- RIGHT: mini event card -->
            <div class="wb__mini-card">
              <div class="wb__mini-tag">Webinar Berikutnya</div>
              <div class="wb__mini-title">
                Sales Mastery: Dari Aktivitas Tinggi ke Closing Konsisten
              </div>
              <div class="wb__mini-meta">
                <div class="wb__mini-meta-row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D9AA55"
                    stroke-width="2"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <strong>Sabtu, 25 Januari 2025</strong>
                </div>
                <div class="wb__mini-meta-row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D9AA55"
                    stroke-width="2"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  09.00 – 11.00 WIB (2 jam)
                </div>
                <div class="wb__mini-meta-row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D9AA55"
                    stroke-width="2"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path d="M15 10l-4 4 6 6-8-16-2 8z" />
                  </svg>
                  Zoom · Link dikirim H-1
                </div>
              </div>
              <div class="wb__divider"></div>
              <div class="wb__slot-row">
                <div class="wb__slot-bar"><div class="wb__slot-fill"></div></div>
                <span class="wb__slot-txt">72% terisi</span>
              </div>
              <NuxtLink to="/webinar" class="btn btn--gold btn--block btn--md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Amankan Slot Saya
              </NuxtLink>
              <div class="wb__mini-note">
                ✓ Gratis &nbsp;·&nbsp; ✓ Sertifikat &nbsp;·&nbsp; ✓ Materi
                dibagikan
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════
     SECTION 4 — PROGRAM BELAJAR BERSERTIFIKAT
     Premium — pathway dari webinar
═══════════════════════════════════════ -->
      <section class="section bg--gold" id="program">
        <div class="wrap">
          <div class="program-sec-header">
            <!-- LEFT: value prop -->
            <div>
              <span class="sec-label sec-label--gold"
                >Program Belajar Bersertifikat</span
              >
              <h2 class="sec-h">Belajar Terstruktur.<br />Hasil yang Bisa Dibuktikan.</h2>
              <p class="sec-sub" style="margin-bottom: 28px">
                Program belajar berbayar DKN dirancang untuk menghasilkan
                kompetensi nyata — bukan sekadar pengetahuan, tapi kemampuan
                yang benar-benar bisa diterapkan.
              </p>
              <div class="program-features">
                <div class="program-feature">
                  <div
                    class="pf-ico"
                    style="background: rgba(20, 34, 56, 0.08); border-radius: 8px"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1A2E4A"
                      stroke-width="2"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                      <path
                        d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="pf-title">Materi Terstruktur</div>
                    <div class="pf-desc">
                      Kurikulum bertahap yang dirancang oleh praktisi industri,
                      bukan akademisi.
                    </div>
                  </div>
                </div>
                <div class="program-feature">
                  <div
                    class="pf-ico"
                    style="background: rgba(20, 34, 56, 0.08); border-radius: 8px"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1A2E4A"
                      stroke-width="2"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path
                        d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="pf-title">Evaluasi Pembelajaran</div>
                    <div class="pf-desc">
                      Kuis, studi kasus, dan penilaian formatif untuk memastikan
                      pemahaman mendalam.
                    </div>
                  </div>
                </div>
                <div class="program-feature">
                  <div
                    class="pf-ico"
                    style="background: rgba(20, 34, 56, 0.08); border-radius: 8px"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1A2E4A"
                      stroke-width="2"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div>
                    <div class="pf-title">Sertifikat Penyelesaian Program</div>
                    <div class="pf-desc">
                      Sertifikat digital yang dapat diverifikasi, dibagikan ke
                      LinkedIn, dan diakui industri.
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-32">
                <NuxtLink to="/program" class="btn btn--outline-dark btn--lg">
                  Lihat Semua Program Belajar
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>

            <!-- RIGHT: program mini-list -->
            <div>
              <div class="program-preview">
                <div class="prog-card-mini">
                  <div class="prog-card-mini__left">
                    <div
                      class="prog-card-mini__ico"
                      style="background: rgba(34, 160, 148, 0.1)"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22A094"
                        stroke-width="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <h4>Sales Mastery for Banking</h4>
                      <p>12 modul · 8 jam belajar</p>
                    </div>
                  </div>
                  <div class="prog-card-mini__cta">
                    <span class="tag tag--paid">Berbayar</span>
                  </div>
                </div>

                <div class="prog-card-mini">
                  <div class="prog-card-mini__left">
                    <div
                      class="prog-card-mini__ico"
                      style="background: rgba(196, 146, 58, 0.1)"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C4923A"
                        stroke-width="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <h4>Leadership for Supervisor</h4>
                      <p>10 modul · 6 jam belajar</p>
                    </div>
                  </div>
                  <div class="prog-card-mini__cta">
                    <span class="tag tag--paid">Berbayar</span>
                  </div>
                </div>

                <div class="prog-card-mini">
                  <div class="prog-card-mini__left">
                    <div
                      class="prog-card-mini__ico"
                      style="background: rgba(55, 138, 221, 0.1)"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#378ADD"
                        stroke-width="2"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path d="M9 11l3 3L22 4" />
                        <path
                          d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4>Persiapan Sertifikasi LSPP</h4>
                      <p>16 modul · 12 jam belajar</p>
                    </div>
                  </div>
                  <div class="prog-card-mini__cta">
                    <span class="tag tag--paid">Berbayar</span>
                  </div>
                </div>

                <NuxtLink to="/program" class="prog-more">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Lihat semua program belajar
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════
     SECTION 5 — CTA CORPORATE
     B2B lead generation
═══════════════════════════════════════ -->
      <section class="section bg--white" id="tentang">
        <div class="wrap">
          <div class="corp-cta">
            <div class="corp-cta__left">
              <div class="corp-cta__icon-row">
                <span class="corp-cta__service-tag">Corporate Training</span>
                <span class="corp-cta__service-tag">Advisory</span>
                <span class="corp-cta__service-tag">Assessment</span>
              </div>
              <h2>Butuh Solusi Pengembangan SDM<br /><em>untuk Organisasi Anda?</em></h2>
              <p class="mt-16">
                DKN membantu perusahaan perbankan, keuangan, asuransi, dan
                korporasi lainnya merancang program pengembangan kompetensi yang
                disesuaikan dengan kebutuhan nyata bisnis — dari pelatihan
                in-house, advisory strategis, hingga assessment center.
              </p>
            </div>
            <div class="corp-cta__right">
              <NuxtLink to="/contact" class="btn btn--gold btn--lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  />
                </svg>
                Konsultasi Sekarang
              </NuxtLink>
              <div class="corp-cta__note">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,.3)"
                  stroke-width="2"
                  width="13"
                  height="13"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p style="flex-basis: fit-content; text-align: left;">
                  Gratis · Tanpa komitmen · Tim kami menghubungi dalam 1x24 jam
                </p>
              </div>
            </div>
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
  title: "DKN Indonesia — Kompetensi yang Menggerakkan Kinerja",
  description:
    "DKN Indonesia — Webinar gratis, program belajar bersertifikat, dan solusi corporate training & advisory.",
  ogTitle: "DKN Indonesia — Kompetensi yang Menggerakkan Kinerja",
  ogDescription:
    "DKN Indonesia — Webinar gratis, program belajar bersertifikat, dan solusi corporate training & advisory.",
  ogImage: "/favicon.ico",
  ogUrl: "https://dkn.digital",
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
</script>

<style scoped>
/* ── HOMEPAGE SPECIFIC ───────────────────── */

/* === HERO === */
.hero {
  background: var(--midnight);
  padding: 96px 52px 0;
  position: relative;
  overflow: hidden;
}
.hero__bg-grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
}
.hero__glow-r {
  position: absolute;
  top: -200px;
  right: -100px;
  width: 720px;
  height: 720px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(34, 160, 148, 0.09) 0%,
    transparent 70%
  );
  pointer-events: none;
}
.hero__glow-l {
  position: absolute;
  bottom: -160px;
  left: -60px;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(196, 146, 58, 0.05) 0%,
    transparent 68%
  );
  pointer-events: none;
}
.hero__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 56px;
  align-items: end;
  position: relative;
  z-index: 2;
}
.hero__left {
  padding-bottom: 88px;
}
.hero__sup {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.28);
  margin-bottom: 14px;
}
.hero__h1 {
  font-family: var(--serif);
  font-size: 50px;
  line-height: 1.1;
  color: #fff;
  font-weight: 600;
  margin-bottom: 18px;
}
.hero__h1 em {
  color: var(--teal2);
  font-style: italic;
}
.hero__sub {
  font-size: 16px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 520px;
}
.hero__btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.hero__trust {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.hero__trust-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
}
.hero__trust-item svg {
  width: 12px;
  height: 12px;
}
.hero__trust-sep {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
}

/* Hero right: stats card */
.hero__right {
  align-self: end;
}
.hero__card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px 16px 0 0;
  padding: 28px;
}
.hero__card-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.24);
  margin-bottom: 18px;
}
.hero__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.hero__stat {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 18px;
}
.hero__stat-n {
  font-family: var(--serif);
  font-size: 34px;
  color: var(--gold2);
  font-weight: 600;
  line-height: 1;
}
.hero__stat-l {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.38);
  margin-top: 4px;
  line-height: 1.45;
}
.hero__stat-wide {
  grid-column: span 2;
  background: rgba(34, 160, 148, 0.08);
  border: 1px solid rgba(34, 160, 148, 0.17);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.hero__stat-wide-ico {
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: rgba(34, 160, 148, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.hero__stat-wide-ico svg {
  width: 14px;
  height: 14px;
}
.hero__stat-wide-t {
  font-size: 13px;
  font-weight: 600;
  color: var(--teal2);
}
.hero__stat-wide-s {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 2px;
}

/* Funnel strip below hero */
.hero__funnel {
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.hero__funnel-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0;
  padding: 20px 0;
}
.hero__funnel-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
}
.hf-ico {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.hf-ico svg {
  width: 17px;
  height: 17px;
}
.hf-num {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.25);
  margin-bottom: 1px;
  font-weight: 700;
  letter-spacing: 0.8px;
}
.hf-title {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.72);
}
.hf-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 1px;
}
.hero__funnel-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.2);
}
.hero__funnel-arrow svg {
  width: 20px;
  height: 20px;
}

/* === SECTION 2: LAYANAN UTAMA === */
.layanan-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin-top: 48px;
}
.layanan-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  transition: transform 0.18s, box-shadow 0.18s;
}
.layanan-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-h);
}
.layanan-card__top-accent {
  height: 3px;
  border-radius: 2px;
  margin-bottom: 20px;
  background: var(--teal2);
}
.layanan-card__ico {
  margin-bottom: 14px;
}
.layanan-card h3 {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}
.layanan-card p {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 18px;
}
.layanan-card .btn {
  font-size: 12.5px;
  padding: 8px 14px;
  align-self: flex-start;
}

/* Accent color variants for each service */
.layanan-card:nth-child(1) .layanan-card__top-accent {
  background: var(--teal2);
}
.layanan-card:nth-child(2) .layanan-card__top-accent {
  background: var(--gold);
}
.layanan-card:nth-child(3) .layanan-card__top-accent {
  background: #378add;
}
.layanan-card:nth-child(4) .layanan-card__top-accent {
  background: #1a8a7e;
}
.layanan-card:nth-child(5) .layanan-card__top-accent {
  background: #8b5cf6;
}

/* === SECTION 3: WEBINAR === */
.webinar-sec {
  background: linear-gradient(140deg, var(--navy) 0%, #0d1e35 100%);
  border-radius: var(--r-xl);
  border-top: 3px solid var(--gold);
  padding: 56px 52px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 56px;
  align-items: center;
}
.wb__title {
  font-family: var(--serif);
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 12px;
}
.wb__title em {
  color: var(--gold2);
  font-style: italic;
}
.wb__desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.72;
  font-weight: 300;
  margin-bottom: 22px;
}
.wb__benefits {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
}
.wb__benefit {
  display: flex;
  align-items: flex-start;
  gap: 11px;
}
.wb__check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(34, 160, 148, 0.14);
  border: 1px solid rgba(34, 160, 148, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}
.wb__check svg {
  width: 10px;
  height: 10px;
}
.wb__benefit span {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.5;
}
.wb__cert {
  background: rgba(34, 160, 148, 0.08);
  border: 1px solid rgba(34, 160, 148, 0.18);
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 12.5px;
  color: var(--teal2);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 7px;
}
.wb__cert svg {
  width: 14px;
  height: 14px;
}
.wb__mini-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--r-lg);
  padding: 28px;
}
.wb__mini-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold2);
  margin-bottom: 12px;
}
.wb__mini-title {
  font-family: var(--serif);
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 18px;
}
.wb__mini-meta {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 18px;
}
.wb__mini-meta-row {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.58);
}
.wb__mini-meta-row svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}
.wb__mini-meta-row strong {
  color: rgba(255, 255, 255, 0.82);
  font-weight: 600;
}
.wb__divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 16px 0;
}
.wb__slot-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.wb__slot-bar {
  height: 5px;
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  overflow: hidden;
}
.wb__slot-fill {
  height: 100%;
  width: 72%;
  background: linear-gradient(90deg, var(--teal2), var(--gold));
  border-radius: 3px;
}
.wb__slot-txt {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
}
.wb__mini-note {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.28);
  text-align: center;
  margin-top: 10px;
}

/* === SECTION 4: PROGRAM BELAJAR === */
.program-sec-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.program-features {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
}
.program-feature {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.pf-ico {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}
.pf-ico svg {
  width: 16px;
  height: 16px;
}
.pf-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 2px;
}
.pf-desc {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.55;
}
.program-preview {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.prog-card-mini {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: var(--shadow);
  transition: transform 0.15s;
}
.prog-card-mini:hover {
  transform: translateX(4px);
}
.prog-card-mini__left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.prog-card-mini__ico {
  width: 40px;
  height: 40px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.prog-card-mini__ico svg {
  width: 18px;
  height: 18px;
}
.prog-card-mini h4 {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 2px;
}
.prog-card-mini p {
  font-size: 12px;
  color: var(--slate);
}
.prog-card-mini__cta {
  flex-shrink: 0;
}
.prog-more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  border: 1px dashed var(--border);
  border-radius: var(--r-md);
  font-size: 13px;
  color: var(--slate);
  text-decoration: none;
  transition: all 0.2s;
}
.prog-more:hover {
  border-color: var(--teal2);
  color: var(--teal2);
  background: var(--teal-pale);
}

/* === SECTION 5: CORPORATE CTA === */
.corp-cta {
  background: var(--midnight);
  border-radius: var(--r-xl);
  padding: 56px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.corp-cta__left {
  max-width: 560px;
}
.corp-cta__icon-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
.corp-cta__service-tag {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}
.corp-cta h2 {
  font-family: var(--serif);
  font-size: 36px;
  color: #fff;
  font-weight: 600;
  line-height: 1.18;
  margin-bottom: 12px;
}
.corp-cta h2 em {
  color: var(--gold2);
  font-style: italic;
}
.corp-cta p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.72;
  font-weight: 300;
}
.corp-cta__right {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
}
.corp-cta__note {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.28);
  text-align: right;
  display: flex;
  align-items: center;
  gap: 6px;
}
.corp-cta__note svg {
  width: 13px;
  height: 13px;
}

@media (max-width: 1440px) {
  .layanan-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 900px) {
  .corp-cta__icon-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .hero__trust {
    flex-direction: column;
    align-items: baseline;
  }
  .hero__trust-sep {
    display: none;
  }
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .hero__right {
    display: none;
  }
  .hero__left {
    padding-bottom: 64px;
  }
  .hero__h1 {
    font-size: 36px;
  }
  .hero__funnel-inner {
    grid-template-columns: 1fr;
    padding: 16px 20px;
  }
  .hero__funnel-arrow {
    display: none;
  }
  .layanan-grid {
    grid-template-columns: 1fr;
  }
  .webinar-sec {
    grid-template-columns: 1fr;
  }
  .wb__mini-card {
    display: none;
  }
  .program-sec-header {
    grid-template-columns: 1fr;
  }
  .corp-cta {
    flex-direction: column;
  }
  .corp-cta__right {
    align-items: flex-start;
  }
}
</style>