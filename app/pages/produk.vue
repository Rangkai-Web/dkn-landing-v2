<template>
  <div>
    <AppHeader />

    <main>
      <!-- ═══ SECTION 1: HERO ═══ -->
      <section class="page-hero">
        <div class="page-hero__glow"></div>
        <div class="page-hero__grid"></div>
        <div class="page-hero__inner">
          <div class="chip chip--gold"><div class="chip__dot"></div>Produk Digital DKN</div>
          <h1 class="sec-h sec-h--lg sec-h--white">Buku, E-book &amp; Toolkit</h1>
          <p class="sec-sub sec-sub--white mt-16">
            Produk pengetahuan dari para praktisi DKN — dikemas dalam format yang bisa langsung
            Anda gunakan untuk pengembangan diri dan tim.
          </p>
          <div class="mt-32" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="#buku" class="btn btn--gold btn--lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
              Lihat Buku
            </a>
            <a href="#toolkit" class="btn btn--ghost-w btn--lg">Lihat Toolkit</a>
          </div>
        </div>
      </section>


      <!-- ═══ SECTION 2: DAFTAR PRODUK ═══ -->
      <section class="section bg--mist" id="produk">
        <div class="wrap">
          <span class="sec-label">Semua Produk</span>
          <h2 class="sec-h">Pilih Produk yang Tepat<br>untuk Kebutuhan Anda</h2>
          <p class="sec-sub">Pengetahuan praktis dari praktisi senior DKN — dikemas untuk bisa langsung diterapkan, bukan sekadar dibaca.</p>

          <!-- Filter -->
          <div class="prod-filter mt-32">
            <a href="#" class="prod-filter-btn is-active">Semua Produk</a>
            <a href="#buku" class="prod-filter-btn">Buku</a>
            <a href="#ebook" class="prod-filter-btn">E-book</a>
            <a href="#toolkit" class="prod-filter-btn">Toolkit</a>
          </div>


          <!-- ── BUKU ── -->
          <div id="buku" style="margin-bottom:56px">
            <div class="cat-section-header">
              <div class="cat-section-header__ico" style="background:rgba(20,34,56,.08)"><svg viewBox="0 0 24 24" fill="none" stroke="#142238" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg></div>
              <h3>Buku</h3>
              <span class="tag tag--navy">2 Judul</span>
            </div>

            <!-- Featured Book -->
            <div class="product-featured" style="background:#fff">
              <div class="product-featured__visual" style="background:linear-gradient(135deg,var(--midnight),#1A3050)">
                <div class="product-card__cover-book" style="background:linear-gradient(160deg,#1A3050,#0A1828)">
                  <div class="product-card__cover-book-title">Sales Excellence<br>for Banking</div>
                </div>
              </div>
              <div class="product-featured__body">
                <div class="product-featured__tag">Buku Unggulan · Sales &amp; Marketing</div>
                <div class="product-featured__title">Sales Excellence: Dari Aktivitas ke Konversi</div>
                <div class="product-featured__desc">Panduan komprehensif untuk tenaga penjual di industri perbankan dan keuangan — dari mindset yang benar, pipeline management, teknik membangun kepercayaan nasabah, hingga closing yang konsisten dan terstruktur.</div>
                <div class="product-featured__specs">
                  <div class="product-featured__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>284 halaman</div>
                  <div class="product-featured__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Tersedia fisik &amp; digital</div>
                  <div class="product-featured__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>Ditulis oleh praktisi perbankan 25+ tahun</div>
                </div>
                <div class="product-featured__footer">
                  <div>
                    <div class="product-featured__price">Rp 195.000</div>
                    <div class="product-featured__note">Fisik · Gratis ongkir Jabodetabek</div>
                  </div>
                  <a href="#" class="btn btn--gold btn--lg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>

            <!-- Book 2 -->
            <div class="grid-3">
              <div class="product-card">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                  <div class="product-card__cover-book" style="background:linear-gradient(160deg,#0d3824,#050f0b)">
                    <div class="product-card__cover-book-title">Leader Sejati</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag tag--teal">Buku</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Leadership</div>
                  <div class="product-card__title">Leader Sejati: Memimpin dengan Dampak di Era Modern</div>
                  <div class="product-card__desc">Framework kepemimpinan praktis yang diuji di ratusan tim industri keuangan Indonesia — untuk manajer yang ingin memimpin dengan otoritas dan empati.</div>
                  <div class="product-card__author">
                    <div class="product-card__author-av" style="background:var(--teal)">SR</div>
                    <div>
                      <div class="product-card__author-name">Siti Rahayu, S.E., MM</div>
                      <div class="product-card__author-role">Senior Trainer &amp; HR Consultant</div>
                    </div>
                  </div>
                  <div class="product-card__meta">
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>220 halaman</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Fisik &amp; Digital</div>
                  </div>
                </div>
                <div class="product-card__footer">
                  <div>
                    <div class="product-card__price">Rp 175.000</div>
                    <div class="product-card__price-note">Fisik · Gratis ongkir Jabodetabek</div>
                  </div>
                  <a href="#" class="btn btn--outline-teal btn--sm">Lihat Detail →</a>
                </div>
              </div>

              <!-- Coming soon placeholder -->
              <div class="product-card" style="opacity:.65">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#1a0e00,#2a1500)">
                  <div class="product-card__cover-book" style="background:linear-gradient(160deg,#2a1500,#100800)">
                    <div class="product-card__cover-book-title">Risk &amp;<br>Certification</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag" style="background:rgba(255,255,255,.1);color:rgba(255,255,255,.6);border:none;font-size:10px">Segera</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Risk Management</div>
                  <div class="product-card__title">Panduan Sertifikasi Manajemen Risiko Perbankan</div>
                  <div class="product-card__desc">Panduan persiapan LSPP berbasis pengalaman nyata — pola soal, strategi waktu, dan pemahaman konseptual. Segera tersedia.</div>
                </div>
                <div class="product-card__footer" style="background:var(--mist)">
                  <span class="tag tag--teal">Segera Tersedia</span>
                  <a href="#" class="btn btn--outline-dark btn--sm">Beritahu Saya</a>
                </div>
              </div>
            </div>
          </div>


          <!-- ── E-BOOK ── -->
          <div id="ebook" style="margin-bottom:56px">
            <div class="cat-section-header">
              <div class="cat-section-header__ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
              <h3>E-book</h3>
              <span class="tag tag--free">Akses Instan</span>
            </div>

            <div class="grid-3">

              <div class="product-card">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#060e28,#0a1a40)">
                  <div class="product-card__cover-ebook" style="background:rgba(34,160,148,.15);border:1px solid rgba(34,160,148,.25)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <div class="product-card__cover-ebook-title">Sales Playbook Banking</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag tag--free" style="font-size:10px">E-book</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Sales &amp; Marketing</div>
                  <div class="product-card__title">Sales Playbook: 30 Teknik Closing yang Berhasil di Industri Perbankan</div>
                  <div class="product-card__desc">Kompilasi 30 teknik closing yang sudah terbukti digunakan oleh tim sales terbaik di industri perbankan nasional — langsung bisa diterapkan.</div>
                  <div class="product-card__meta">
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>68 halaman</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Format PDF</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>Akses instan</div>
                  </div>
                </div>
                <div class="product-card__footer">
                  <div>
                    <div class="product-card__price">Rp 79.000</div>
                    <div class="product-card__price-note">Unduh setelah pembayaran</div>
                  </div>
                  <a href="#" class="btn btn--gold btn--sm">Lihat Detail</a>
                </div>
              </div>

              <div class="product-card">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#1a0800,#2a1000)">
                  <div class="product-card__cover-ebook" style="background:rgba(196,146,58,.15);border:1px solid rgba(196,146,58,.25)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D9AA55" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    <div class="product-card__cover-ebook-title">Leadership Handbook</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag tag--free" style="font-size:10px">E-book</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Leadership</div>
                  <div class="product-card__title">New Supervisor Handbook: Panduan Praktis 90 Hari Pertama</div>
                  <div class="product-card__desc">Panduan langkah demi langkah untuk supervisor baru — checklist, template one-on-one, dan framework delegasi yang bisa dipakai mulai hari pertama menjabat.</div>
                  <div class="product-card__meta">
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>52 halaman</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Format PDF</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>Akses instan</div>
                  </div>
                </div>
                <div class="product-card__footer">
                  <div>
                    <div class="product-card__price">Rp 59.000</div>
                    <div class="product-card__price-note">Unduh setelah pembayaran</div>
                  </div>
                  <a href="#" class="btn btn--gold btn--sm">Lihat Detail</a>
                </div>
              </div>

              <div class="product-card">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                  <div class="product-card__cover-ebook" style="background:rgba(26,122,110,.2);border:1px solid rgba(26,122,110,.3)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1A7A6E" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                    <div class="product-card__cover-ebook-title">LSPP Study<br>Guide</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag tag--free" style="font-size:10px">E-book</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Risk &amp; Certification</div>
                  <div class="product-card__title">LSPP Study Guide: Ringkasan Materi &amp; Strategi Ujian Level 1</div>
                  <div class="product-card__desc">Ringkasan materi ujian LSPP Level 1 dalam format yang mudah dipahami — dilengkapi tips strategi ujian dari praktisi yang sudah lulus.</div>
                  <div class="product-card__meta">
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>88 halaman</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Format PDF</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>Akses instan</div>
                  </div>
                </div>
                <div class="product-card__footer">
                  <div>
                    <div class="product-card__price">Rp 89.000</div>
                    <div class="product-card__price-note">Unduh setelah pembayaran</div>
                  </div>
                  <a href="#" class="btn btn--gold btn--sm">Lihat Detail</a>
                </div>
              </div>

            </div>
          </div>


          <!-- ── TOOLKIT ── -->
          <div id="toolkit">
            <div class="cat-section-header">
              <div class="cat-section-header__ico" style="background:rgba(139,92,246,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div>
              <h3>Toolkit &amp; Template</h3>
              <span class="tag tag--teal">Siap Pakai</span>
            </div>

            <div class="grid-3">

              <div class="product-card">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#0d0618,#160828)">
                  <div class="product-card__cover-toolkit" style="background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.25)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="1.5" width="28" height="28"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                    <div class="product-card__cover-toolkit-title">Sales Manager Kit</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag tag--teal" style="font-size:10px">Toolkit</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Sales Management</div>
                  <div class="product-card__title">Sales Manager Toolkit: Template Coaching &amp; Monitoring Tim</div>
                  <div class="product-card__desc">Paket lengkap untuk manajer sales: template one-on-one, scorecard tim, pipeline tracker, dan script coaching — format Excel + Google Sheets.</div>
                  <div class="product-card__meta">
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Excel + Google Sheets</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>12 template siap pakai</div>
                  </div>
                </div>
                <div class="product-card__footer">
                  <div>
                    <div class="product-card__price">Rp 149.000</div>
                    <div class="product-card__price-note">Unduh setelah pembayaran</div>
                  </div>
                  <a href="#" class="btn btn--gold btn--sm">Lihat Detail</a>
                </div>
              </div>

              <div class="product-card">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#1a0800,#2a1200)">
                  <div class="product-card__cover-toolkit" style="background:rgba(196,146,58,.15);border:1px solid rgba(196,146,58,.25)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D9AA55" stroke-width="1.5" width="28" height="28"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></svg>
                    <div class="product-card__cover-toolkit-title">Leadership Toolkit</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag tag--gold" style="font-size:10px">Toolkit</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Leadership</div>
                  <div class="product-card__title">Leadership Toolkit: Framework &amp; Template untuk Pemimpin Baru</div>
                  <div class="product-card__desc">Kumpulan framework, checklist, dan template siap pakai untuk supervisor dan manajer — dari delegasi, feedback, hingga membangun kepercayaan tim.</div>
                  <div class="product-card__meta">
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>PDF + Canva template</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>8 framework siap pakai</div>
                  </div>
                </div>
                <div class="product-card__footer">
                  <div>
                    <div class="product-card__price">Rp 119.000</div>
                    <div class="product-card__price-note">Unduh setelah pembayaran</div>
                  </div>
                  <a href="#" class="btn btn--gold btn--sm">Lihat Detail</a>
                </div>
              </div>

              <div class="product-card">
                <div class="product-card__cover" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                  <div class="product-card__cover-toolkit" style="background:rgba(34,160,148,.15);border:1px solid rgba(34,160,148,.25)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="1.5" width="28" height="28"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                    <div class="product-card__cover-toolkit-title">Training Design Kit</div>
                  </div>
                  <div class="product-card__type-badge"><span class="tag tag--teal" style="font-size:10px">Toolkit</span></div>
                </div>
                <div class="product-card__body">
                  <div class="product-card__cat">Training Design</div>
                  <div class="product-card__title">Training Design Kit: Template Merancang Program Pelatihan yang Efektif</div>
                  <div class="product-card__desc">Template TNA, desain kurikulum, lesson plan, dan evaluasi pembelajaran — untuk HR dan trainer yang ingin merancang program training yang terukur.</div>
                  <div class="product-card__meta">
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Word + Excel</div>
                    <div class="product-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>10 template TNA &amp; desain</div>
                  </div>
                </div>
                <div class="product-card__footer">
                  <div>
                    <div class="product-card__price">Rp 129.000</div>
                    <div class="product-card__price-note">Unduh setelah pembayaran</div>
                  </div>
                  <a href="#" class="btn btn--gold btn--sm">Lihat Detail</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <!-- ═══ SECTION 3: CTA PROGRAM BELAJAR ═══ -->
      <section class="section bg--white">
        <div class="wrap">
          <div class="program-cta-banner">
            <div>
              <h2>Ingin Belajar Lebih Mendalam<br>dan <em>Mendapat Sertifikat Resmi?</em></h2>
              <p class="mt-12">Produk DKN adalah titik awal yang baik. Untuk pembelajaran terstruktur dengan evaluasi, pendampingan, dan sertifikat penyelesaian program yang dapat diverifikasi — lihat Program Belajar Bersertifikat kami.</p>
            </div>
            <div class="program-cta-banner__right">
              <a href="program.html" class="btn btn--gold btn--lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                Lihat Program Belajar
              </a>
              <div class="program-cta-banner__note">
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                Sertifikat penyelesaian · Evaluasi pembelajaran · Akses LMS
              </div>
              <a href="webinar.html" class="btn btn--ghost-w btn--md" style="margin-top:2px">
                Atau mulai dari webinar gratis →
              </a>
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
  title: 'Produk - DKN Indonesia',
  description: 'Produk DKN Digital untuk membantu pengembangan soft skill dan kepemimpinan',
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

/* CATEGORY FILTER */
.prod-filter { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; }
.prod-filter-btn { padding: 8px 18px; border-radius: 50px; font-size: 13px; font-weight: 600; background: var(--mist); color: var(--slate); border: 1px solid var(--border); cursor: pointer; transition: all .2s; text-decoration: none; }
.prod-filter-btn:hover, .prod-filter-btn.is-active { background: var(--ink); color: #fff; border-color: var(--ink); }

/* PRODUCT CARD */
.product-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  transition: transform .18s, box-shadow .18s;
}
.product-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-h); }

.product-card__cover {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.product-card__cover-book {
  width: 120px; height: 160px;
  border-radius: 4px 10px 10px 4px;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
  box-shadow: 6px 6px 20px rgba(0,0,0,.25), -2px 0 6px rgba(0,0,0,.12);
  position: relative;
}
.product-card__cover-book::before {
  content: '';
  position: absolute; left: 0; top: 4px; bottom: 4px;
  width: 8px; border-radius: 2px 0 0 2px;
  background: rgba(0,0,0,.2);
}
.product-card__cover-book-title {
  font-family: var(--serif);
  font-size: 13px; font-weight: 600; color: #fff;
  text-align: center; line-height: 1.35; z-index: 1;
}
.product-card__cover-ebook {
  width: 110px; height: 150px;
  border-radius: 8px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 14px;
  box-shadow: 4px 4px 16px rgba(0,0,0,.2);
  gap: 8px;
}
.product-card__cover-ebook svg { width: 28px; height: 28px; }
.product-card__cover-ebook-title {
  font-family: var(--serif);
  font-size: 11px; font-weight: 600; color: #fff;
  text-align: center; line-height: 1.35;
}
.product-card__cover-toolkit {
  width: 120px; height: 90px;
  border-radius: 10px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 14px; gap: 8px;
  box-shadow: 4px 4px 16px rgba(0,0,0,.18);
}
.product-card__cover-toolkit svg { width: 28px; height: 28px; }
.product-card__cover-toolkit-title { font-size: 11px; font-weight: 700; color: #fff; text-align: center; }

.product-card__type-badge { position: absolute; top: 12px; right: 12px; }
.product-card__body { padding: 22px 24px; flex: 1; display: flex; flex-direction: column; }
.product-card__cat { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--teal2); margin-bottom: 6px; }
.product-card__title { font-family: var(--serif); font-size: 20px; font-weight: 600; color: var(--ink); line-height: 1.28; margin-bottom: 10px; }
.product-card__desc { font-size: 13px; color: var(--slate); line-height: 1.65; flex: 1; margin-bottom: 16px; }
.product-card__meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; padding-top: 14px; border-top: 1px solid var(--border); }
.product-card__meta-item { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--slate); }
.product-card__meta-item svg { width: 12px; height: 12px; }
.product-card__author { display: flex; align-items: center; gap: 8px; padding-bottom: 16px; border-bottom: 1px solid var(--border); margin-bottom: 16px; }
.product-card__author-av { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: #fff; }
.product-card__author-name { font-size: 12.5px; font-weight: 600; color: var(--ink); }
.product-card__author-role { font-size: 11px; color: var(--slate); }
.product-card__footer { padding: 16px 24px; border-top: 1px solid var(--border); background: var(--mist); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.product-card__price { font-family: var(--serif); font-size: 24px; color: var(--ink); font-weight: 600; }
.product-card__price-free { font-size: 16px; font-weight: 700; color: var(--teal2); }
.product-card__price-note { font-size: 11px; color: var(--slate); margin-top: 1px; }

/* PRODUCT FEATURED (horizontal) */
.product-featured {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  overflow: hidden;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 320px 1fr;
  margin-bottom: 32px;
}
.product-featured:hover { box-shadow: var(--shadow-h); }
.product-featured__visual {
  display: flex; align-items: center; justify-content: center;
  padding: 40px;
}
.product-featured__body { padding: 40px 40px 40px 32px; display: flex; flex-direction: column; justify-content: center; }
.product-featured__tag { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--gold2); margin-bottom: 10px; }
.product-featured__title { font-family: var(--serif); font-size: 30px; font-weight: 600; color: var(--ink); line-height: 1.2; margin-bottom: 12px; }
.product-featured__desc { font-size: 15px; color: var(--slate); line-height: 1.72; font-weight: 300; margin-bottom: 22px; }
.product-featured__specs { display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 24px; }
.product-featured__spec { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--slate); }
.product-featured__spec svg { width: 14px; height: 14px; color: var(--teal2); }
.product-featured__footer { display: flex; align-items: center; gap: 16px; }
.product-featured__price { font-family: var(--serif); font-size: 28px; color: var(--ink); font-weight: 600; }
.product-featured__note { font-size: 12px; color: var(--slate); margin-top: 2px; }

/* CATEGORY SECTION HEADER */
.cat-section-header {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 24px; padding-bottom: 14px;
  border-bottom: 2px solid var(--border);
}
.cat-section-header__ico { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
.cat-section-header__ico svg { width: 18px; height: 18px; }
.cat-section-header h3 { font-size: 18px; font-weight: 700; color: var(--ink); }
.cat-section-header .tag { align-self: center; }

/* PROGRAM CTA BANNER */
.program-cta-banner {
  background: var(--midnight);
  border-radius: var(--r-xl);
  padding: 52px 56px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}
.program-cta-banner h2 { font-family: var(--serif); font-size: 32px; color: #fff; font-weight: 600; line-height: 1.2; margin-bottom: 10px; }
.program-cta-banner h2 em { color: var(--gold2); font-style: italic; }
.program-cta-banner p { font-size: 15px; color: rgba(255,255,255,.52); line-height: 1.7; font-weight: 300; }
.program-cta-banner__right { display: flex; flex-direction: column; gap: 12px; align-items: flex-end; }
.program-cta-banner__note { font-size: 12px; color: rgba(255,255,255,.28); display: flex; align-items: center; gap: 5px; }
.program-cta-banner__note svg { width: 12px; height: 12px; }

@media (max-width: 900px) {
  .product-featured { grid-template-columns: 1fr; }
  .product-featured__visual { padding: 32px; height: 200px; }
  .product-featured__body { padding: 28px; }
  .program-cta-banner { grid-template-columns: 1fr; }
  .program-cta-banner__right { align-items: flex-start; }
}
</style>
