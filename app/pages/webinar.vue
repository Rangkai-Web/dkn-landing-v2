<template>
  <div>
    <AppHeader />

    <main>
      <!-- PAGE HERO -->
      <section class="page-hero">
        <div class="page-hero__glow"></div>
        <div class="page-hero__grid"></div>
        <div class="page-hero__inner">
          <div class="chip chip--teal"><div class="chip__dot"></div>Gratis &amp; Bersertifikat</div>
          <h1 class="sec-h sec-h--lg sec-h--white">Webinar Gratis DKN</h1>
          <p class="sec-sub sec-sub--white mt-16">
            Ikuti sesi live bersama praktisi senior, dapatkan wawasan mendalam,
            dan raih sertifikat partisipasi resmi — tanpa biaya apapun.
          </p>
          <div class="mt-32" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="#live" class="btn btn--gold btn--lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Lihat Jadwal Webinar Live
            </a>
            <a href="#rekaman" class="btn btn--ghost-w btn--lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Akses Rekaman
            </a>
          </div>
        </div>
      </section>

      <!-- BAGIAN 1 — WEBINAR LIVE GRATIS -->
      <section class="section bg--mist" id="live">
        <div class="wrap">
          <span class="sec-label">Jadwal Webinar Live</span>
          <h2 class="sec-h">Webinar Live Terbaru</h2>
          <p class="sec-sub">Daftar sekarang untuk sesi live berikutnya. Tempat terbatas — peserta live mendapatkan sertifikat partisipasi resmi.</p>

          <!-- WEBINAR GRID — 3 kolom -->
          <div class="grid-3 mt-48">
            <!-- WEBINAR CARD 1 -->
            <div class="webinar-card">
              <div class="webinar-card__thumb" style="background:linear-gradient(135deg,var(--midnight),#142238)">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(34,160,148,.5)" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <div class="webinar-card__live-badge"><div class="webinar-card__live-dot"></div>LIVE</div>
                <div class="webinar-card__free-badge"><span class="tag tag--free">Gratis</span></div>
              </div>
              <div class="webinar-card__body">
                <div class="webinar-card__cat">Sales Performance</div>
                <div class="webinar-card__title">Sales Mastery: Dari Aktivitas Tinggi ke Closing yang Konsisten</div>
                <div class="webinar-card__meta">
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span><strong>Sabtu, 25 Januari 2025</strong></span></div>
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>09.00 – 11.00 WIB (2 jam)</span></div>
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l-4 4 6 6-8-16-2 8z"/></svg><span>Zoom · Link dikirim H-1</span></div>
                </div>
                <div class="webinar-card__divider"></div>
                <div class="webinar-card__speaker">
                  <div class="webinar-card__speaker-av" style="background:var(--navy)">DK</div>
                  <div>
                    <div class="webinar-card__speaker-name">Drs. Darmawan Kusuma, MM</div>
                    <div class="webinar-card__speaker-role">Founder &amp; Principal Consultant DKN</div>
                  </div>
                </div>
                <div class="webinar-card__slot">
                  <div class="webinar-card__slot-row">Slot tersedia<span>72% terisi</span></div>
                  <div class="slot-bar"><div class="slot-fill" style="width:72%"></div></div>
                </div>
              </div>
              <div class="webinar-card__footer">
                <a href="https://lynk.id/dkn-webinar" target="_blank" rel="noopener" class="btn btn--gold btn--block btn--md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  Daftar Webinar
                </a>
                <div class="webinar-card__cert-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>Peserta live mendapat sertifikat partisipasi</div>
              </div>
            </div>

            <!-- WEBINAR CARD 2 -->
            <div class="webinar-card">
              <div class="webinar-card__thumb" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(26,122,110,.5)" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                <div class="webinar-card__live-badge"><div class="webinar-card__live-dot"></div>LIVE</div>
                <div class="webinar-card__free-badge"><span class="tag tag--free">Gratis</span></div>
              </div>
              <div class="webinar-card__body">
                <div class="webinar-card__cat">Leadership</div>
                <div class="webinar-card__title">Supervisor Baru: Framework 90 Hari Pertama yang Efektif</div>
                <div class="webinar-card__meta">
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span><strong>Sabtu, 8 Februari 2025</strong></span></div>
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>09.00 – 11.00 WIB (2 jam)</span></div>
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l-4 4 6 6-8-16-2 8z"/></svg><span>Zoom · Link dikirim H-1</span></div>
                </div>
                <div class="webinar-card__divider"></div>
                <div class="webinar-card__speaker">
                  <div class="webinar-card__speaker-av" style="background:var(--teal)">SR</div>
                  <div>
                    <div class="webinar-card__speaker-name">Siti Rahayu, S.E., MM</div>
                    <div class="webinar-card__speaker-role">Senior Trainer &amp; HR Consultant DKN</div>
                  </div>
                </div>
                <div class="webinar-card__slot">
                  <div class="webinar-card__slot-row">Slot tersedia<span>45% terisi</span></div>
                  <div class="slot-bar"><div class="slot-fill" style="width:45%"></div></div>
                </div>
              </div>
              <div class="webinar-card__footer">
                <a href="https://lynk.id/dkn-webinar-2" target="_blank" rel="noopener" class="btn btn--gold btn--block btn--md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  Daftar Webinar
                </a>
                <div class="webinar-card__cert-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>Peserta live mendapat sertifikat partisipasi</div>
              </div>
            </div>

            <!-- WEBINAR CARD 3 -->
            <div class="webinar-card">
              <div class="webinar-card__thumb" style="background:linear-gradient(135deg,#1a0e00,#2a1500)">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(196,146,58,.5)" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                <div class="webinar-card__live-badge"><div class="webinar-card__live-dot"></div>LIVE</div>
                <div class="webinar-card__free-badge"><span class="tag tag--free">Gratis</span></div>
              </div>
              <div class="webinar-card__body">
                <div class="webinar-card__cat">Risk Management</div>
                <div class="webinar-card__title">Strategi Persiapan Sertifikasi LSPP yang Paling Efektif</div>
                <div class="webinar-card__meta">
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span><strong>Sabtu, 22 Februari 2025</strong></span></div>
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>09.00 – 11.00 WIB (2 jam)</span></div>
                  <div class="webinar-card__meta-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l-4 4 6 6-8-16-2 8z"/></svg><span>Zoom · Link dikirim H-1</span></div>
                </div>
                <div class="webinar-card__divider"></div>
                <div class="webinar-card__speaker">
                  <div class="webinar-card__speaker-av" style="background:var(--gold)">AH</div>
                  <div>
                    <div class="webinar-card__speaker-name">Agus Hardianto, CFP&reg;</div>
                    <div class="webinar-card__speaker-role">Expert Partner — Risk &amp; Certification</div>
                  </div>
                </div>
                <div class="webinar-card__slot">
                  <div class="webinar-card__slot-row">Slot tersedia<span>28% terisi</span></div>
                  <div class="slot-bar"><div class="slot-fill" style="width:28%"></div></div>
                </div>
              </div>
              <div class="webinar-card__footer">
                <a href="https://lynk.id/dkn-webinar-3" target="_blank" rel="noopener" class="btn btn--gold btn--block btn--md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  Daftar Webinar
                </a>
                <div class="webinar-card__cert-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>Peserta live mendapat sertifikat partisipasi</div>
              </div>
            </div>
          </div>

          <!-- Sertifikat Info Banner -->
          <div class="cert-banner">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            <p><strong>Tentang Sertifikat Partisipasi:</strong> Peserta yang mengikuti webinar live secara penuh akan mendapatkan sertifikat partisipasi digital yang dapat diverifikasi dan dibagikan secara profesional. Sertifikat dikirimkan via email maksimal 1x24 jam setelah webinar selesai.</p>
          </div>
        </div>
      </section>

      <!-- BAGIAN 2 — REKAMAN WEBINAR -->
      <section class="section bg--white" id="rekaman">
        <div class="wrap">
          <span class="sec-label">Rekaman Webinar</span>
          <h2 class="sec-h">Akses Rekaman Webinar Gratis</h2>
          <p class="sec-sub">Rekaman webinar tersedia gratis untuk anggota terdaftar. Login atau daftar akun untuk mulai menonton.</p>

          <div class="mt-48" style="display:flex;flex-direction:column;gap:14px">
            <!-- REC 1 — ACCESSIBLE -->
            <div class="rec-card">
              <div class="rec-card__thumb" style="background:linear-gradient(135deg,var(--midnight),#1A3050)">
                <div class="rec-card__play">
                  <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              </div>
              <div class="rec-card__info">
                <div class="rec-card__cat">Sales Performance</div>
                <div class="rec-card__title">Mengapa Sales Aktif tapi Closing Tetap Rendah? Akar Masalah dan Solusinya</div>
                <div class="rec-card__meta">
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>1 jam 52 menit</div>
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>18 Desember 2024</div>
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Darmawan Kusuma, MM</div>
                </div>
                <div class="rec-card__actions">
                  <span class="tag tag--free">Anggota</span>
                  <a href="#" class="btn btn--teal btn--sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Akses Rekaman
                  </a>
                </div>
              </div>
            </div>

            <!-- REC 2 — LOCKED -->
            <div class="rec-card">
              <div class="rec-card__thumb" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                <div class="rec-card__play">
                  <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div class="rec-card__locked">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" width="22" height="22"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                </div>
              </div>
              <div class="rec-card__info">
                <div class="rec-card__cat">Leadership</div>
                <div class="rec-card__title">Tiga Gaya Kepemimpinan yang Paling Dibutuhkan Perbankan 2025</div>
                <div class="rec-card__meta">
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>2 jam 08 menit</div>
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>14 November 2024</div>
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Siti Rahayu, MM</div>
                </div>
                <div class="rec-card__actions">
                  <span class="tag tag--free">Anggota</span>
                  <a href="#" class="btn btn--outline-teal btn--sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    Login untuk Akses
                  </a>
                </div>
              </div>
            </div>

            <!-- REC 3 — LOCKED -->
            <div class="rec-card">
              <div class="rec-card__thumb" style="background:linear-gradient(135deg,#1a0e00,#2a1500)">
                <div class="rec-card__play">
                  <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div class="rec-card__locked">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" width="22" height="22"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                </div>
              </div>
              <div class="rec-card__info">
                <div class="rec-card__cat">Risk &amp; Certification</div>
                <div class="rec-card__title">Persiapan Sertifikasi LSPP Manajemen Risiko Level 1 — Panduan Lengkap</div>
                <div class="rec-card__meta">
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>2 jam 35 menit</div>
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>5 Oktober 2024</div>
                  <div class="rec-card__meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Agus Hardianto, CFP&reg;</div>
                </div>
                <div class="rec-card__actions">
                  <span class="tag tag--free">Anggota</span>
                  <a href="#" class="btn btn--outline-teal btn--sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    Login untuk Akses
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Member CTA -->
          <div class="rec-member-banner">
            <div>
              <h3>Akses Semua Rekaman — Gratis untuk Anggota</h3>
              <p>Daftar akun anggota DKN Indonesia secara gratis dan nikmati akses ke seluruh rekaman webinar yang telah dipublikasikan. Tidak ada biaya berlangganan untuk rekaman webinar.</p>
            </div>
            <div class="rec-member-banner__right">
              <a href="#" class="btn btn--gold btn--lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Daftar Akun Gratis
              </a>
              <div class="rec-member-banner__note">✓ Gratis selamanya &nbsp;·&nbsp; ✓ Akses rekaman lengkap</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Next step CTA -->
      <section class="section--sm bg--mist">
        <div class="wrap" style="text-align:center">
          <span class="sec-label" style="display:block;text-align:center">Langkah Berikutnya</span>
          <h2 class="sec-h" style="font-size:28px;margin-bottom:10px">Siap Belajar Lebih Dalam?</h2>
          <p class="sec-sub" style="margin:0 auto 28px;max-width:460px;text-align:center">
            Webinar memberikan wawasan awal. Program belajar bersertifikat DKN
            memberikan kompetensi yang terstruktur dan dapat dibuktikan.
          </p>
          <NuxtLink to="/program" class="btn btn--outline-dark btn--lg">
            Lihat Program Belajar Bersertifikat
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
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
  description: "Webinar gratis DKN Indonesia — ikuti sesi live dan dapatkan sertifikat partisipasi.",
  ogTitle: "Webinar Gratis — DKN Indonesia",
  ogDescription: "Webinar gratis DKN Indonesia — ikuti sesi live dan dapatkan sertifikat partisipasi.",
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
</script>

<style scoped>
/* ── WEBINAR PAGE SPECIFIC ─── */

/* BAGIAN 1: LIVE WEBINARS */
.webinar-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 0;
  overflow: hidden;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  transition: transform .18s, box-shadow .18s;
}
.webinar-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-h); }

.webinar-card__thumb {
  height: 160px;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.webinar-card__live-badge {
  position: absolute; top: 12px; left: 12px;
  background: rgba(226,75,74,.9); color: #fff;
  font-size: 10px; font-weight: 700; letter-spacing: .8px;
  text-transform: uppercase; padding: 3px 10px;
  border-radius: 50px; display: flex; align-items: center; gap: 5px;
}
.webinar-card__live-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #fff; animation: livePulse 1.4s infinite;
}
@keyframes livePulse { 0%,100%{opacity:1} 50%{opacity:.35} }

.webinar-card__free-badge {
  position: absolute; top: 12px; right: 12px;
}
.webinar-card__body { padding: 22px 24px; flex: 1; display: flex; flex-direction: column; }
.webinar-card__cat { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--teal2); margin-bottom: 8px; }
.webinar-card__title { font-family: var(--serif); font-size: 20px; color: var(--ink); font-weight: 600; line-height: 1.28; margin-bottom: 14px; }
.webinar-card__meta { display: flex; flex-direction: column; gap: 7px; margin-bottom: 16px; }
.webinar-card__meta-row { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--slate); }
.webinar-card__meta-row svg { width: 13px; height: 13px; flex-shrink: 0; color: var(--teal2); }
.webinar-card__meta-row strong { color: var(--ink); font-weight: 600; }
.webinar-card__divider { height: 1px; background: var(--border); margin: 14px 0; }
.webinar-card__speaker { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.webinar-card__speaker-av {
  width: 34px; height: 34px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--serif); font-size: 13px; font-weight: 600;
  color: #fff; flex-shrink: 0;
}
.webinar-card__speaker-name { font-size: 13px; font-weight: 600; color: var(--ink); }
.webinar-card__speaker-role { font-size: 11px; color: var(--slate); }
.webinar-card__slot { margin-bottom: 16px; }
.webinar-card__slot-row { display: flex; justify-content: space-between; font-size: 11px; color: var(--slate); margin-bottom: 5px; }
.webinar-card__slot-row span { font-weight: 700; color: var(--teal2); }
.slot-bar { background: var(--mist); border-radius: 3px; height: 5px; overflow: hidden; }
.slot-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--teal2), var(--gold)); }
.webinar-card__footer { padding: 0 24px 22px; display: flex; flex-direction: column; gap: 8px; }
.webinar-card__cert-note { font-size: 11.5px; color: var(--teal2); font-weight: 600; display: flex; align-items: center; gap: 6px; }
.webinar-card__cert-note svg { width: 12px; height: 12px; }

/* Cert info banner */
.cert-banner {
  background: var(--teal-pale);
  border: 1px solid rgba(34,160,148,.2);
  border-radius: var(--r-lg);
  padding: 22px 28px;
  display: flex; align-items: center; gap: 18px;
  margin-top: 40px;
}
.cert-banner svg { width: 28px; height: 28px; flex-shrink: 0; }
.cert-banner p { font-size: 14.5px; color: var(--teal); line-height: 1.6; }
.cert-banner p strong { font-weight: 700; color: var(--teal2); }

/* BAGIAN 2: RECORDINGS */
.rec-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 22px 24px;
  display: flex; align-items: flex-start; gap: 18px;
  box-shadow: var(--shadow);
  transition: transform .15s;
}
.rec-card:hover { transform: translateX(4px); }
.rec-card__thumb {
  width: 110px; height: 72px; border-radius: 8px;
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  position: relative;
}
.rec-card__play {
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255,255,255,.2); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
}
.rec-card__play svg { width: 14px; height: 14px; }
.rec-card__locked {
  position: absolute; inset: 0; border-radius: 8px;
  background: rgba(6,12,24,.55); backdrop-filter: blur(2px);
  display: flex; align-items: center; justify-content: center;
}
.rec-card__locked svg { width: 22px; height: 22px; }
.rec-card__info { flex: 1; }
.rec-card__cat { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--teal2); margin-bottom: 5px; }
.rec-card__title { font-size: 14.5px; font-weight: 700; color: var(--ink); margin-bottom: 6px; line-height: 1.35; }
.rec-card__meta { display: flex; align-items: center; gap: 14px; font-size: 12px; color: var(--slate); margin-bottom: 10px; }
.rec-card__meta-item { display: flex; align-items: center; gap: 5px; }
.rec-card__meta-item svg { width: 12px; height: 12px; }
.rec-card__actions { display: flex; align-items: center; gap: 10px; }
.rec-member-banner {
  background: var(--midnight);
  border-radius: var(--r-lg);
  padding: 36px 40px;
  display: flex; align-items: center; justify-content: space-between; gap: 32px;
  margin-top: 40px;
}
.rec-member-banner h3 { font-family: var(--serif); font-size: 26px; color: #fff; font-weight: 600; margin-bottom: 8px; }
.rec-member-banner p { font-size: 14px; color: rgba(255,255,255,.55); line-height: 1.65; }
.rec-member-banner__right { flex-shrink: 0; display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
.rec-member-banner__note { font-size: 12px; color: rgba(255,255,255,.28); }

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
.page-hero h1 {
  margin-bottom: 16px;
}
.page-hero p {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width:900px) {
  .page-hero { padding: 80px 20px 60px; }
  .rec-member-banner { flex-direction: column; }
  .rec-member-banner__right { align-items: flex-start; }
  .rec-card { flex-direction: column; }
  .rec-card__thumb { width: 100%; height: 140px; }
}
</style>
