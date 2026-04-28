<template>
  <div>
    <AppHeader />

    <main>
      <!-- ═══ SECTION 1: HERO ═══ -->
      <section class="page-hero">
        <div class="page-hero__glow"></div>
        <div class="page-hero__grid"></div>
        <div class="page-hero__inner">
          <div class="chip chip--teal"><div class="chip__dot"></div>Knowledge Hub</div>
          <h1 class="sec-h sec-h--lg sec-h--white">Resources &amp; Insights DKN</h1>
          <p class="sec-sub sec-sub--white mt-16">
            Artikel, insight bisnis, dan materi pembelajaran dari praktisi senior — untuk membantu
            Anda dan organisasi tumbuh secara kompetensi secara berkelanjutan.
          </p>
          <div class="mt-32" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <NuxtLink to="#artikel" class="btn btn--gold btn--lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
              Baca Artikel Terbaru
            </NuxtLink>
            <NuxtLink to="#katalog" class="btn btn--ghost-w btn--lg">Lihat Katalog Training</NuxtLink>
          </div>
        </div>
      </section>


      <!-- ═══ SECTION 2: ARTIKEL TERBARU ═══ -->
      <section class="section bg--mist" id="artikel">
        <div class="wrap">
          <span class="sec-label">Artikel Terbaru</span>
          <h2 class="sec-h">Baca, Pelajari, Terapkan</h2>
          <p class="sec-sub">Artikel dari praktisi industri — ditulis untuk bisa langsung relevan dengan tantangan yang Anda hadapi di lapangan.</p>

          <!-- Category tabs -->
          <div class="section-tabs mt-32">
            <NuxtLink to="/resources" class="section-tab is-active">Semua</NuxtLink>
            <NuxtLink to="/resources?cat=sales" class="section-tab">Sales &amp; Marketing</NuxtLink>
            <NuxtLink to="/resources?cat=leadership" class="section-tab">Leadership</NuxtLink>
            <NuxtLink to="/resources?cat=risk" class="section-tab">Risk Management</NuxtLink>
            <NuxtLink to="/resources?cat=sdm" class="section-tab">Pengembangan SDM</NuxtLink>
            <NuxtLink to="/resources?cat=digital" class="section-tab">Digital Learning</NuxtLink>
          </div>

          <!-- Featured article -->
          <div class="article-featured">
            <div class="article-featured__thumb" style="background:linear-gradient(135deg,var(--midnight),#1A3050)">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(34,160,148,.45)" stroke-width="1.2" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div class="article-featured__body">
              <div class="article-featured__label">Artikel Utama · Sales Performance</div>
              <div class="article-featured__title">Mengapa Sales Aktif Tinggi tapi Closing Tetap Rendah? Ini Akar Masalahnya</div>
              <div class="article-featured__summary">Banyak tim sales bekerja keras — meeting penuh, telepon tidak berhenti, pipeline terlihat panjang. Tapi angka closing tidak bergerak. Artikel ini membahas lima penyebab struktural yang sering diabaikan dan cara memperbaikinya secara sistematis.</div>
              <div class="article-featured__meta">
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>18 Januari 2025</span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>8 menit baca</span>
                <span>Darmawan Kusuma, MM</span>
              </div>
              <NuxtLink to="/resources/article-slug" class="btn btn--teal btn--md justify-center">
                Baca Selengkapnya
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Article grid 3 col -->
          <div class="grid-3">

            <!-- Article 1 -->
            <div class="article-card">
              <div class="article-card__thumb" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(26,122,110,.5)" stroke-width="1.5" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                <div class="article-card__cat-badge"><span class="tag tag--free" style="font-size:10px">Leadership</span></div>
              </div>
              <div class="article-card__body">
                <div class="article-card__date"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>10 Januari 2025</div>
                <div class="article-card__title">Tiga Kesalahan Fatal Supervisor Baru dalam 90 Hari Pertama</div>
                <div class="article-card__summary">Transisi dari top performer ke pemimpin adalah perubahan terbesar dalam karir. Kebanyakan gagal bukan karena tidak kompeten, tapi karena tidak memiliki framework yang tepat.</div>
                <NuxtLink to="/resources/supervisor-errors" class="btn btn--outline-teal btn--sm justify-center">Baca Selengkapnya →</NuxtLink>
              </div>
              <div class="article-card__footer">
                <div class="article-card__author">
                  <div class="article-card__av" style="background:var(--teal)">SR</div>
                  <div>
                    <div class="article-card__author-name">Siti Rahayu, MM</div>
                    <div class="article-card__author-role">Senior Trainer DKN</div>
                  </div>
                </div>
                <div class="article-card__read-time"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>6 mnt</div>
              </div>
            </div>

            <!-- Article 2 -->
            <div class="article-card">
              <div class="article-card__thumb" style="background:linear-gradient(135deg,#1a0e00,#2a1500)">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(196,146,58,.5)" stroke-width="1.5" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                <div class="article-card__cat-badge"><span class="tag tag--gold" style="font-size:10px">Sertifikasi</span></div>
              </div>
              <div class="article-card__body">
                <div class="article-card__date"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>3 Januari 2025</div>
                <div class="article-card__title">Panduan Persiapan LSPP Manajemen Risiko: Strategi yang Jarang Dibahas</div>
                <div class="article-card__summary">Lulus LSPP bukan hanya soal hafal materi. Ada pola ujian, strategi waktu, dan cara berpikir yang harus dikuasai. Berikut panduan dari praktisi yang sudah melewatinya.</div>
                <NuxtLink to="/resources/lspp-risk-guide" class="btn btn--outline-teal btn--sm justify-center">Baca Selengkapnya →</NuxtLink>
              </div>
              <div class="article-card__footer">
                <div class="article-card__author">
                  <div class="article-card__av" style="background:var(--gold)">AH</div>
                  <div>
                    <div class="article-card__author-name">Agus Hardianto, CFP®</div>
                    <div class="article-card__author-role">Expert Partner DKN</div>
                  </div>
                </div>
                <div class="article-card__read-time"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>9 mnt</div>
              </div>
            </div>

            <!-- Article 3 -->
            <div class="article-card">
              <div class="article-card__thumb" style="background:linear-gradient(135deg,#060e28,#0a1a40)">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(55,138,221,.5)" stroke-width="1.5" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                <div class="article-card__cat-badge"><span class="tag tag--teal" style="font-size:10px">Digital Learning</span></div>
              </div>
              <div class="article-card__body">
                <div class="article-card__date"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>28 Desember 2024</div>
                <div class="article-card__title">LMS sebagai Infrastruktur Belajar Korporat: Bukan Fitur, tapi Sistem</div>
                <div class="article-card__summary">Banyak perusahaan memandang LMS sebagai pelengkap pelatihan. Padahal, LMS yang dirancang benar adalah sistem pengelola kompetensi organisasi jangka panjang.</div>
                <NuxtLink to="/resources/lms-corporate" class="btn btn--outline-teal btn--sm justify-center">Baca Selengkapnya →</NuxtLink>
              </div>
              <div class="article-card__footer">
                <div class="article-card__author">
                  <div class="article-card__av" style="background:var(--navy)">DK</div>
                  <div>
                    <div class="article-card__author-name">Darmawan Kusuma, MM</div>
                    <div class="article-card__author-role">Founder DKN</div>
                  </div>
                </div>
                <div class="article-card__read-time"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>7 mnt</div>
              </div>
            </div>

          </div>

          <div class="mt-32" style="text-align:center">
            <NuxtLink to="/resources/articles" class="btn btn--outline-dark btn--lg">
              Lihat Semua Artikel
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </NuxtLink>
          </div>
        </div>
      </section>


      <!-- ═══ SECTION 3: INSIGHT BISNIS ═══ -->
      <section class="section bg--deep" id="insight">
        <div class="wrap">
          <span class="sec-label">Insight Bisnis &amp; SDM</span>
          <h2 class="sec-h sec-h--white">Perspektif dari Dalam Industri</h2>
          <p class="sec-sub sec-sub--white">Analisis mendalam tentang tren SDM, dinamika industri keuangan, dan strategi pengembangan organisasi dari para praktisi senior DKN.</p>

          <div class="grid-3 mt-48">

            <div class="insight-card">
              <div class="insight-card__ico" style="background:rgba(34,160,148,.12);border:1px solid rgba(34,160,148,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2" width="20" height="20" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div class="insight-card__cat">Tren SDM 2025</div>
              <div class="insight-card__title">Kompetensi Apa yang Paling Dicari Industri Perbankan Tahun Ini?</div>
              <div class="insight-card__desc">Pergeseran kebutuhan kompetensi akibat digitalisasi, regulasi OJK terbaru, dan ekspektasi nasabah yang berubah — apa yang harus dipersiapkan profesional keuangan.</div>
              <NuxtLink to="/resources/competency-trends" class="btn btn--outline-teal btn--sm justify-center">Pelajari →</NuxtLink>
            </div>

            <div class="insight-card">
              <div class="insight-card__ico" style="background:rgba(196,146,58,.12);border:1px solid rgba(196,146,58,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D9AA55" stroke-width="2" width="20" height="20" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div class="insight-card__cat">Pengembangan Organisasi</div>
              <div class="insight-card__title">Mengapa Program Training Mahal Tidak Selalu Menghasilkan Perubahan</div>
              <div class="insight-card__desc">Investasi training yang besar sering berakhir tanpa dampak terukur. Ini bukan soal konten — tapi soal desain program dan sistem reinforcement yang gagal dibangun.</div>
              <NuxtLink to="/resources/training-impact" class="btn btn--outline-teal btn--sm justify-center">Pelajari →</NuxtLink>
            </div>

            <div class="insight-card">
              <div class="insight-card__ico" style="background:rgba(139,92,246,.12);border:1px solid rgba(139,92,246,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" width="20" height="20" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <div class="insight-card__cat">Digital Learning</div>
              <div class="insight-card__title">Hybrid Learning sebagai Standar Baru Pengembangan Kompetensi Korporat</div>
              <div class="insight-card__desc">Kombinasi online-offline bukan lagi tren — ini adalah keharusan. Bagaimana merancang sistem hybrid learning yang benar-benar efektif untuk tim Anda.</div>
              <NuxtLink to="/resources/hybrid-learning" class="btn btn--outline-teal btn--sm justify-center">Pelajari →</NuxtLink>
            </div>

            <div class="insight-card">
              <div class="insight-card__ico" style="background:rgba(226,75,74,.1);border:1px solid rgba(226,75,74,.18)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D63F3E" stroke-width="2" width="20" height="20" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div class="insight-card__cat">Risk &amp; Compliance</div>
              <div class="insight-card__title">Dampak Regulasi OJK Terbaru terhadap Kebutuhan Sertifikasi SDM Perbankan</div>
              <div class="insight-card__desc">Perubahan regulasi OJK membawa implikasi langsung pada persyaratan sertifikasi. Apa yang harus dipersiapkan institusi keuangan dan profesionalnya sekarang.</div>
              <NuxtLink to="/resources/ojk-regulation" class="btn btn--outline-teal btn--sm justify-center">Pelajari →</NuxtLink>
            </div>

            <div class="insight-card">
              <div class="insight-card__ico" style="background:rgba(34,160,148,.12);border:1px solid rgba(34,160,148,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2" width="20" height="20" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div class="insight-card__cat">Sales &amp; Performance</div>
              <div class="insight-card__title">Framework Coaching Sales yang Bisa Langsung Diterapkan Manajer</div>
              <div class="insight-card__desc">Manajer yang baik bukan yang paling pintar menjual — tapi yang paling efektif mengembangkan kemampuan tim. Berikut model coaching yang terbukti bekerja.</div>
              <NuxtLink to="/resources/sales-coaching" class="btn btn--outline-teal btn--sm justify-center">Pelajari →</NuxtLink>
            </div>

            <div class="insight-card">
              <div class="insight-card__ico" style="background:rgba(196,146,58,.12);border:1px solid rgba(196,146,58,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D9AA55" stroke-width="2" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
              </div>
              <div class="insight-card__cat">Advisory &amp; Strategi</div>
              <div class="insight-card__title">Assessment Center: Investasi SDM yang Sering Dianggap Remeh</div>
              <div class="insight-card__desc">Keputusan promosi yang salah bisa merugikan organisasi jutaan rupiah dan berbulan-bulan produktivitas. Assessment center yang baik mencegah kesalahan mahal ini.</div>
              <NuxtLink to="/resources/assessment-center" class="btn btn--outline-teal btn--sm justify-center">Pelajari →</NuxtLink>
            </div>

          </div>
        </div>
      </section>


      <!-- ═══ SECTION 4: KATALOG TRAINING ═══ -->
      <section class="section bg--white" id="katalog">
        <div class="wrap">
          <span class="sec-label">Katalog Training</span>
          <h2 class="sec-h">Program Training yang Tersedia</h2>
          <p class="sec-sub">Temukan program yang paling relevan dengan kebutuhan pengembangan Anda atau organisasi Anda.</p>

          <div class="mt-48" style="display:flex;flex-direction:column;gap:14px">

            <div class="katalog-card">
              <div class="katalog-card__ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2" width="22" height="22" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <div class="katalog-card__info">
                <div class="katalog-card__cat">Sales &amp; Marketing</div>
                <div class="katalog-card__title">Sales Mastery for Banking Professionals</div>
                <div class="katalog-card__desc">Teknik sales terstruktur dari prospecting hingga closing — konteks industri perbankan dan keuangan.</div>
              </div>
              <div class="katalog-card__cta"><NuxtLink to="/program" class="btn btn--outline-teal btn--sm">Lihat Detail →</NuxtLink></div>
            </div>

            <div class="katalog-card">
              <div class="katalog-card__ico" style="background:rgba(196,146,58,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#C4923A" stroke-width="2" width="22" height="22" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
              <div class="katalog-card__info">
                <div class="katalog-card__cat">Leadership</div>
                <div class="katalog-card__title">Leadership for New Supervisors</div>
                <div class="katalog-card__desc">Framework kepemimpinan praktis untuk 90 hari pertama sebagai supervisor baru.</div>
              </div>
              <div class="katalog-card__cta"><NuxtLink to="/program" class="btn btn--outline-teal btn--sm">Lihat Detail →</NuxtLink></div>
            </div>

            <div class="katalog-card">
              <div class="katalog-card__ico" style="background:rgba(55,138,221,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#378ADD" stroke-width="2" width="22" height="22" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
              <div class="katalog-card__info">
                <div class="katalog-card__cat">Risk &amp; Certification</div>
                <div class="katalog-card__title">Persiapan Sertifikasi LSPP Manajemen Risiko Level 1 &amp; 2</div>
                <div class="katalog-card__desc">600+ soal latihan, simulasi ujian penuh, dan strategi dari praktisi berpengalaman.</div>
              </div>
              <div class="katalog-card__cta"><NuxtLink to="/program" class="btn btn--outline-teal btn--sm">Lihat Detail →</NuxtLink></div>
            </div>

            <div class="katalog-card">
              <div class="katalog-card__ico" style="background:rgba(139,92,246,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" width="22" height="22" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div>
              <div class="katalog-card__info">
                <div class="katalog-card__cat">Service Excellence</div>
                <div class="katalog-card__title">Service Excellence &amp; Komunikasi Profesional</div>
                <div class="katalog-card__desc">Standar layanan prima dan komunikasi efektif untuk frontliner perbankan — segera tersedia.</div>
              </div>
              <div class="katalog-card__cta"><span class="tag tag--teal" style="padding:8px 14px">Segera Hadir</span></div>
            </div>

            <div class="katalog-card">
              <div class="katalog-card__ico" style="background:rgba(26,122,110,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#1A7A6E" stroke-width="2" width="22" height="22" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
              <div class="katalog-card__info">
                <div class="katalog-card__cat">Corporate Training</div>
                <div class="katalog-card__title">Corporate Training In-House (Custom)</div>
                <div class="katalog-card__desc">Program dikustomisasi penuh untuk kebutuhan spesifik tim dan industri Anda — hubungi tim DKN untuk proposal.</div>
              </div>
              <div class="katalog-card__cta"><NuxtLink to="/contact" class="btn btn--outline-teal btn--sm">Minta Proposal →</NuxtLink></div>
            </div>

          </div>
        </div>
      </section>


      <!-- ═══ SECTION 5: CTA WEBINAR GRATIS ═══ -->
      <section class="section bg--mist">
        <div class="wrap">
          <div class="webinar-cta-banner">
            <div class="webinar-cta-banner__left">
              <div class="chip chip--alert" style="margin-bottom:16px"><div class="chip__dot chip__dot--pulse"></div>Live Webinar — Slot Terbatas</div>
              <h2>Mulai dari Webinar Gratis —<br><em>Tidak Ada Risiko, Langsung Relevan</em></h2>
              <p class="mt-16">Sebelum memutuskan program berbayar, ikuti webinar live gratis DKN. Dapatkan wawasan nyata dari praktisi, sertifikat partisipasi, dan gambaran pendekatan pembelajaran kami.</p>
            </div>
            <div class="webinar-cta-banner__right">
              <NuxtLink to="/webinar" class="btn btn--gold btn--lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="24" height="24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                Ikuti Webinar Gratis
              </NuxtLink>
              <div class="webinar-cta-banner__note">
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="2" width="12" height="12" aria-hidden="true"><path d="M9 11l3 3L22 4"/></svg>
                <p style="flex-basis: fit-content; text-align: left;">
                  Gratis · Sertifikat partisipasi · Materi dibagikan
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
  title: 'Resources - DKN Indonesia',
  description: 'Resources DKN Digital',
});

const submitted = ref(false);

const handleSubmit = () => {
  // Logic for form submission would go here
  submitted.value = true;
};

useHead({
  htmlAttrs: {
    lang: "id",
  },
});
</script>

<style scoped>
/* ── PROGRAM PAGE SPECIFIC ─── */
/* PAGE HERO */
.page-hero {
  background: var(--midnight);
  padding: 100px 24px 80px;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.page-hero__glow {
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34, 160, 148, 0.12) 0%, transparent 70%);
  pointer-events: none;
}
.page-hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 50px 50px;
}
.page-hero__inner {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

/* ARTICLE CARD */
.article-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  transition: transform .18s, box-shadow .18s;
}
.article-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-h); }

.article-card__thumb {
  height: 150px;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.article-card__cat-badge {
  position: absolute; bottom: 12px; left: 12px;
}
.article-card__body { padding: 22px 24px; flex: 1; display: flex; flex-direction: column; }
.article-card__date { font-size: 11px; color: var(--slate); margin-bottom: 8px; display: flex; align-items: center; gap: 5px; }
.article-card__date svg { width: 11px; height: 11px; }
.article-card__title {
  font-family: var(--serif);
  font-size: 20px; font-weight: 600;
  color: var(--ink); line-height: 1.28;
  margin-bottom: 10px;
}
.article-card__summary { font-size: 13px; color: var(--slate); line-height: 1.65; flex: 1; margin-bottom: 18px; }
.article-card__footer {
  padding: 14px 24px;
  border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
}
.article-card__author { display: flex; align-items: center; gap: 8px; }
.article-card__av {
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 700; color: #fff;
}
.article-card__author-name { font-size: 12px; font-weight: 600; color: var(--ink); }
.article-card__author-role { font-size: 11px; color: var(--slate); }
.article-card__read-time { font-size: 11px; color: var(--slate); display: flex; align-items: center; gap: 4px; }
.article-card__read-time svg { width: 11px; height: 11px; }

/* FEATURED ARTICLE (full width) */
.article-featured {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 380px 1fr;
  margin-bottom: 24px;
  transition: box-shadow .18s;
}
.article-featured:hover { box-shadow: var(--shadow-h); }
.article-featured__thumb {
  height: 280px;
  display: flex; align-items: center; justify-content: center;
}
.article-featured__body { padding: 32px 36px; display: flex; flex-direction: column; justify-content: center; }
.article-featured__label { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--teal2); margin-bottom: 8px; }
.article-featured__title { font-family: var(--serif); font-size: 28px; font-weight: 600; color: var(--ink); line-height: 1.22; margin-bottom: 12px; }
.article-featured__summary { font-size: 14.5px; color: var(--slate); line-height: 1.72; font-weight: 300; margin-bottom: 22px; }
.article-featured__meta { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
.article-featured__meta span { font-size: 12px; color: var(--slate); display: flex; align-items: center; gap: 5px; }
.article-featured__meta span svg { width: 12px; height: 12px; }

/* INSIGHT CARD */
.insight-card {
  background: var(--deep);
  border: 1px solid rgba(255,255,255,.07);
  border-radius: var(--r-lg);
  padding: 28px;
  display: flex; flex-direction: column;
  transition: transform .18s;
}
.insight-card:hover { transform: translateY(-2px); }
.insight-card__ico {
  width: 44px; height: 44px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px;
}
.insight-card__ico svg { width: 20px; height: 20px; }
.insight-card__cat { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--teal2); margin-bottom: 8px; }
.insight-card__title { font-family: var(--serif); font-size: 19px; font-weight: 600; color: #fff; line-height: 1.3; margin-bottom: 10px; }
.insight-card__desc { font-size: 13px; color: rgba(255,255,255,.52); line-height: 1.65; flex: 1; margin-bottom: 18px; }

/* KATALOG TRAINING CARD */
.katalog-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 24px;
  box-shadow: var(--shadow);
  display: flex; align-items: flex-start; gap: 18px;
  transition: transform .15s;
}
.katalog-card:hover { transform: translateX(4px); }
.katalog-card__ico {
  width: 48px; height: 48px; border-radius: 11px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.katalog-card__ico svg { width: 22px; height: 22px; }
.katalog-card__info { flex: 1; }
.katalog-card__cat { font-size: 10px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; color: var(--teal2); margin-bottom: 4px; }
.katalog-card__title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 5px; }
.katalog-card__desc { font-size: 13px; color: var(--slate); line-height: 1.55; }
.katalog-card__cta { flex-shrink: 0; align-self: center; }

/* WEBINAR CTA BANNER */
.webinar-cta-banner {
  background: linear-gradient(140deg, var(--navy) 0%, #0D1E35 100%);
  border-top: 3px solid var(--gold);
  border-radius: var(--r-xl);
  padding: 52px 56px;
  display: flex; align-items: center; justify-content: space-between; gap: 36px;
}
.webinar-cta-banner__left { max-width: 540px; }
.webinar-cta-banner__left h2 { font-family: var(--serif); font-size: 32px; color: #fff; font-weight: 600; margin-bottom: 10px; line-height: 1.2; }
.webinar-cta-banner__left h2 em { color: var(--gold2); font-style: italic; }
.webinar-cta-banner__left p { font-size: 15px; color: rgba(255,255,255,.55); line-height: 1.65; font-weight: 300; }
.webinar-cta-banner__right { flex-shrink: 0; display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
.webinar-cta-banner__note { font-size: 12px; color: rgba(255,255,255,.28); display: flex; align-items: center; gap: 5px; }
.webinar-cta-banner__note svg { width: 12px; height: 12px; }

/* SECTION NAV TABS */
.section-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; }
.section-tab { padding: 8px 18px; border-radius: 50px; font-size: 13px; font-weight: 600; background: var(--mist); color: var(--slate); border: 1px solid var(--border); cursor: pointer; transition: all .2s; text-decoration: none; }
.section-tab:hover, .section-tab.is-active { background: var(--teal2); color: #fff; border-color: var(--teal2); }

@media (max-width: 900px) {
  .article-featured { grid-template-columns: 1fr; }
  .article-featured__thumb { height: 200px; }
  .webinar-cta-banner { flex-direction: column; }
  .webinar-cta-banner__right { align-items: flex-start; }
  .katalog-card {
    flex-direction: column;
  }
  .katalog-card__cta {
    align-self: flex-start;
  }
  .article-featured__meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
