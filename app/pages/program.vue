<template>
  <div>
    <AppHeader />

    <main>
      <!-- PAGE HERO -->
      <section class="page-hero">
        <div class="page-hero__glow"></div>
        <div class="page-hero__grid"></div>
        <div class="page-hero__inner">
          <div class="chip chip--gold"><div class="chip__dot"></div>Program Bersertifikat</div>
          <h1 class="sec-h sec-h--lg sec-h--white">Program Belajar Bersertifikat DKN</h1>
          <p class="sec-sub sec-sub--white mt-16">
            Kurikulum terstruktur, evaluasi pembelajaran menyeluruh, dan sertifikat penyelesaian
            program yang dapat diverifikasi — semua untuk satu tujuan: kompetensi yang nyata.
          </p>
          <div class="mt-32" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="#program-list" class="btn btn--gold btn--lg">Lihat Semua Program</a>
            <a href="#lms" class="btn btn--ghost-w btn--lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              Akses Pembelajaran
            </a>
          </div>
        </div>
      </section>


      <!-- BENEFITS STRIP -->
      <section class="section bg--deep" style="padding-top:48px;padding-bottom:48px">
        <div class="wrap">
          <div class="benefits-strip">
            <div class="benefit-item">
              <div class="benefit-item__ico" style="background:rgba(34,160,148,.12);border:1px solid rgba(34,160,148,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
              </div>
              <div>
                <h4>Materi Terstruktur</h4>
                <p>Kurikulum bertahap yang dirancang oleh praktisi industri, dikemas dalam modul video, bacaan, dan studi kasus nyata.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-item__ico" style="background:rgba(196,146,58,.12);border:1px solid rgba(196,146,58,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D9AA55" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <div>
                <h4>Evaluasi Pembelajaran</h4>
                <p>Kuis formatif, latihan soal, dan penilaian akhir untuk memastikan pemahaman yang mendalam sebelum sertifikat diterbitkan.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-item__ico" style="background:rgba(139,92,246,.12);border:1px solid rgba(139,92,246,.2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <div>
                <h4>Sertifikat Penyelesaian Program</h4>
                <p>Sertifikat digital resmi yang dapat diverifikasi online, dibagikan ke LinkedIn, dan diakui sebagai bukti kompetensi profesional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- PROGRAM LIST -->
      <section class="section bg--mist" id="program-list">
        <div class="wrap">
          <span class="sec-label">Program Tersedia</span>
          <h2 class="sec-h">Pilih Program yang Sesuai<br>dengan Kebutuhan Anda</h2>
          <p class="sec-sub">Setiap program dirancang untuk menghasilkan satu output: kompetensi nyata yang langsung dapat diterapkan di pekerjaan Anda.</p>

          <!-- Filter tabs -->
          <div class="filter-tabs">
            <a href="#" class="filter-tab is-active">Semua Program</a>
            <a href="#" class="filter-tab">Sales &amp; Marketing</a>
            <a href="#" class="filter-tab">Leadership</a>
            <a href="#" class="filter-tab">Risk &amp; Certification</a>
            <a href="#" class="filter-tab">Service Excellence</a>
          </div>

          <!-- Program grid -->
          <div class="grid-3">

            <!-- PROGRAM CARD 1 -->
            <div class="program-card">
              <div class="program-card__head" style="background:linear-gradient(135deg,var(--midnight),#1A3050)">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(34,160,148,.5)" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <div class="program-card__badge"><span class="tag tag--teal">Populer</span></div>
                <div class="program-card__level">Intermediate</div>
              </div>
              <div class="program-card__body">
                <div class="program-card__cat">Sales &amp; Marketing</div>
                <div class="program-card__title">Sales Mastery for Banking Professionals</div>
                <div class="program-card__desc">Kuasai teknik sales yang terstruktur — dari prospecting, membangun kepercayaan nasabah, hingga closing yang konsisten di industri perbankan dan keuangan.</div>
                <div class="program-card__specs">
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>12 modul</div>
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>8 jam belajar</div>
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Self-paced</div>
                </div>
                <div class="program-card__includes">
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Video pembelajaran + materi PDF</div>
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Kuis &amp; studi kasus industri</div>
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Sertifikat penyelesaian program</div>
                </div>
              </div>
              <div class="program-card__footer">
                <div>
                  <div class="program-card__price">Rp 499.000</div>
                  <div class="program-card__price-note">Akses selamanya · 1 kali pembayaran</div>
                </div>
                <a href="#" class="btn btn--gold btn--sm">Daftar Program</a>
              </div>
            </div>

            <!-- PROGRAM CARD 2 -->
            <div class="program-card">
              <div class="program-card__head" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(26,122,110,.5)" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                <div class="program-card__level">Foundation</div>
              </div>
              <div class="program-card__body">
                <div class="program-card__cat">Leadership</div>
                <div class="program-card__title">Leadership for New Supervisors</div>
                <div class="program-card__desc">Framework kepemimpinan praktis untuk supervisor baru — dari membangun otoritas, delegasi efektif, hingga cara memimpin dengan empati dan hasil nyata.</div>
                <div class="program-card__specs">
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>10 modul</div>
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>6 jam belajar</div>
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Self-paced</div>
                </div>
                <div class="program-card__includes">
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Video pembelajaran + template tools</div>
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Simulasi skenario kepemimpinan</div>
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Sertifikat penyelesaian program</div>
                </div>
              </div>
              <div class="program-card__footer">
                <div>
                  <div class="program-card__price">Rp 449.000</div>
                  <div class="program-card__price-note">Akses selamanya · 1 kali pembayaran</div>
                </div>
                <a href="#" class="btn btn--gold btn--sm">Daftar Program</a>
              </div>
            </div>

            <!-- PROGRAM CARD 3 -->
            <div class="program-card">
              <div class="program-card__head" style="background:linear-gradient(135deg,#1a0e00,#2a1500)">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(196,146,58,.5)" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                <div class="program-card__badge"><span class="tag tag--gold">Unggulan</span></div>
                <div class="program-card__level">Advanced</div>
              </div>
              <div class="program-card__body">
                <div class="program-card__cat">Risk &amp; Certification</div>
                <div class="program-card__title">Persiapan Sertifikasi LSPP Level 1 &amp; 2</div>
                <div class="program-card__desc">Program persiapan komprehensif untuk sertifikasi manajemen risiko LSPP — mencakup seluruh materi ujian, latihan soal intensif, dan strategi menghadapi ujian dari praktisi berpengalaman.</div>
                <div class="program-card__specs">
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>18 modul</div>
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>14 jam belajar</div>
                  <div class="program-card__spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Self-paced</div>
                </div>
                <div class="program-card__includes">
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>600+ latihan soal &amp; pembahasan</div>
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Simulasi ujian full-length</div>
                  <div class="program-card__include"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Sertifikat penyelesaian program</div>
                </div>
              </div>
              <div class="program-card__footer">
                <div>
                  <div class="program-card__price">Rp 799.000</div>
                  <div class="program-card__price-note">Akses selamanya · 1 kali pembayaran</div>
                </div>
                <a href="#" class="btn btn--gold btn--sm">Daftar Program</a>
              </div>
            </div>

          </div>

          <!-- Coming soon row -->
          <div style="margin-top:14px;padding:20px 24px;background:#fff;border:1px dashed var(--border);border-radius:var(--r-lg);display:flex;align-items:center;justify-content:space-between;gap:16px">
            <div style="font-size:14px;color:var(--slate)">
              <strong style="color:var(--ink)">Program Service Excellence</strong> &nbsp;·&nbsp; Komunikasi Profesional &amp; Standar Layanan Perbankan — segera tersedia
            </div>
            <span class="tag tag--teal">Segera</span>
          </div>

        </div>
      </section>


      <!-- LMS ACCESS SECTION -->
      <section class="section bg--white" id="lms">
        <div class="wrap">
          <div class="lms-access-box">
            <!-- LEFT: copy -->
            <div>
              <span class="sec-label" style="color:var(--teal2)">Akses Pembelajaran</span>
              <h2 class="sec-h sec-h--white">Belajar Kapan Saja via<br>Platform LMS DKN</h2>
              <p class="sec-sub sec-sub--white" style="margin-bottom:0">
                Setelah mendaftar program, Anda mendapatkan akses penuh ke platform
                Learning Management System (LMS) DKN — berbasis Moodle, dapat diakses
                dari perangkat apapun, kapan saja.
              </p>
              <div class="lms-access-feats">
                <div class="lms-feat"><div class="lms-feat__dot"><svg viewBox="0 0 12 12" fill="none" stroke="#22A094" stroke-width="2.5"><path d="M2 6l3 3 5-5"/></svg></div><span>Akses video, PDF, kuis, dan materi terstruktur per modul</span></div>
                <div class="lms-feat"><div class="lms-feat__dot"><svg viewBox="0 0 12 12" fill="none" stroke="#22A094" stroke-width="2.5"><path d="M2 6l3 3 5-5"/></svg></div><span>Dashboard progres belajar real-time yang selalu tersimpan</span></div>
                <div class="lms-feat"><div class="lms-feat__dot"><svg viewBox="0 0 12 12" fill="none" stroke="#22A094" stroke-width="2.5"><path d="M2 6l3 3 5-5"/></svg></div><span>Sertifikat diterbitkan otomatis setelah menyelesaikan program</span></div>
                <div class="lms-feat"><div class="lms-feat__dot"><svg viewBox="0 0 12 12" fill="none" stroke="#22A094" stroke-width="2.5"><path d="M2 6l3 3 5-5"/></svg></div><span>Akses selamanya — tidak ada batas waktu untuk belajar</span></div>
              </div>
              <div style="display:flex;gap:12px;flex-wrap:wrap">
                <a href="https://elearning.dkn.digital/" target="_blank" class="btn btn--gold btn--lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  Akses Platform LMS
                </a>
                <a href="#program-list" class="btn btn--ghost-w btn--lg">Lihat Program →</a>
              </div>
            </div>

            <!-- RIGHT: LMS mock -->
            <div class="lms-screen-mock">
              <div class="lms-mock-bar">
                <div class="lms-mock-dot" style="background:#E24B4A"></div>
                <div class="lms-mock-dot" style="background:#E8C06A"></div>
                <div class="lms-mock-dot" style="background:#1D9E75"></div>
                <span class="lms-mock-url">lms.dknindonesia.co.id</span>
              </div>
              <div class="lms-mock-body">
                <div class="lms-mock-title">Dashboard Belajar Saya</div>
                <div class="lms-mock-prog-row"><span class="lms-mock-prog-label">Sales Mastery — Level 2</span><span class="lms-mock-prog-label" style="color:var(--teal2)">76%</span></div>
                <div class="lms-mock-bar2"><div class="lms-mock-fill" style="width:76%;background:var(--teal2)"></div></div>
                <div class="lms-mock-prog-row"><span class="lms-mock-prog-label">Persiapan LSPP Level 1</span><span class="lms-mock-prog-label" style="color:var(--gold2)">44%</span></div>
                <div class="lms-mock-bar2"><div class="lms-mock-fill" style="width:44%;background:var(--gold)"></div></div>
                <div class="lms-mock-grid">
                  <div class="lms-mock-mod"><div class="lms-mock-mod-ico" style="background:rgba(34,160,148,.2)"></div><div class="lms-mock-mod-t">Teknik Closing</div><div class="lms-mock-mod-s">8 modul · 2j 30m</div></div>
                  <div class="lms-mock-mod"><div class="lms-mock-mod-ico" style="background:rgba(196,146,58,.2)"></div><div class="lms-mock-mod-t">Leadership Essentials</div><div class="lms-mock-mod-s">6 modul · 1j 45m</div></div>
                  <div class="lms-mock-mod"><div class="lms-mock-mod-ico" style="background:rgba(55,138,221,.2)"></div><div class="lms-mock-mod-t">Latihan Soal LSPP</div><div class="lms-mock-mod-s">12 set · 600 soal</div></div>
                  <div class="lms-mock-mod"><div class="lms-mock-mod-ico" style="background:rgba(255,255,255,.07)"></div><div class="lms-mock-mod-t">Service Excellence</div><div class="lms-mock-mod-s">5 modul · 1j 20m</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Next step CTA -->
      <section class="section--sm bg--mist">
        <div class="wrap" style="text-align:center">
          <span class="sec-label" style="display:block;text-align:center">Butuh Solusi untuk Organisasi?</span>
          <h2 class="sec-h" style="font-size:28px;margin-bottom:10px">Kami Juga Menyediakan<br>Program untuk Perusahaan Anda</h2>
          <p class="sec-sub" style="margin:0 auto 28px;max-width:460px;text-align:center">
            Program belajar individu adalah langkah awal. Untuk pengembangan kompetensi skala organisasi,
            DKN menyediakan layanan corporate training, advisory, dan assessment yang dikustomisasi penuh.
          </p>
          <a href="contact.html" class="btn btn--outline-dark btn--lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            Diskusikan Kebutuhan Corporate
          </a>
        </div>
      </section>
    </main>

    <AppFooter />
    <WhatsAppFab />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Program Pelatihan DKN Indonesia - Pengembangan Kompetensi SDM Terlengkap',
  description: 'Program Pelatihan DKN Indonesia - Pengembangan Kompetensi SDM terlengkap dengan harga terjangkau. Dapatkan sertifikat resmi dan tingkatkan kinerja tim Anda sekarang!',
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

/* BENEFITS STRIP */
.benefits-strip {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: var(--r-lg); overflow: hidden;
  margin-top: 48px;
}
.benefit-item {
  background: var(--deep); padding: 28px 24px;
  display: flex; align-items: flex-start; gap: 16px;
}
.benefit-item__ico {
  width: 40px; height: 40px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.benefit-item__ico svg { width: 18px; height: 18px; }
.benefit-item h4 { font-size: 14.5px; font-weight: 700; color: #fff; margin-bottom: 5px; }
.benefit-item p  { font-size: 13px; color: rgba(255,255,255,.52); line-height: 1.6; }

/* FILTER TABS */
.filter-tabs {
  display: flex; gap: 8px; flex-wrap: wrap;
  margin-top: 40px; margin-bottom: 32px;
}
.filter-tab {
  padding: 8px 18px; border-radius: 50px;
  font-size: 13px; font-weight: 600;
  background: var(--mist); color: var(--slate);
  border: 1px solid var(--border);
  cursor: pointer; transition: all .2s; text-decoration: none;
}
.filter-tab:hover, .filter-tab.is-active {
  background: var(--teal2); color: #fff; border-color: var(--teal2);
}

/* PROGRAM CARD */
.program-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  display: flex; flex-direction: column;
  transition: transform .18s, box-shadow .18s;
}
.program-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-h); }

.program-card__head {
  height: 140px;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.program-card__badge {
  position: absolute; top: 12px; right: 12px;
}
.program-card__level {
  position: absolute; top: 12px; left: 12px;
  background: rgba(6,12,24,.65); color: rgba(255,255,255,.8);
  font-size: 10px; font-weight: 700; letter-spacing: .8px;
  text-transform: uppercase; padding: 3px 10px; border-radius: 50px;
}
.program-card__body { padding: 22px 24px; flex: 1; display: flex; flex-direction: column; }
.program-card__cat { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--teal2); margin-bottom: 7px; }
.program-card__title { font-family: var(--serif); font-size: 20px; color: var(--ink); font-weight: 600; line-height: 1.28; margin-bottom: 10px; }
.program-card__desc { font-size: 13px; color: var(--slate); line-height: 1.65; flex: 1; margin-bottom: 16px; }
.program-card__specs {
  display: flex; gap: 14px; flex-wrap: wrap;
  padding: 12px 0; border-top: 1px solid var(--border);
  margin-bottom: 14px;
}
.program-card__spec { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--slate); }
.program-card__spec svg { width: 12px; height: 12px; }
.program-card__includes { display: flex; flex-direction: column; gap: 5px; margin-bottom: 16px; }
.program-card__include { display: flex; align-items: center; gap: 7px; font-size: 12px; color: var(--slate); }
.program-card__include svg { width: 12px; height: 12px; flex-shrink: 0; color: var(--teal2); }
.program-card__footer { padding: 16px 24px; border-top: 1px solid var(--border); background: var(--mist); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.program-card__price { font-family: var(--serif); font-size: 22px; color: var(--ink); font-weight: 600; }
.program-card__price-note { font-size: 11px; color: var(--slate); margin-top: 1px; }

/* LMS ACCESS SECTION */
.lms-access-box {
  background: var(--midnight);
  border-radius: var(--r-xl);
  padding: 56px 52px;
  display: grid; grid-template-columns: 1fr 380px;
  gap: 56px; align-items: center;
}
.lms-screen-mock {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: var(--r-lg); overflow: hidden;
}
.lms-mock-bar {
  background: rgba(255,255,255,.04);
  padding: 10px 16px;
  display: flex; align-items: center; gap: 6px;
  border-bottom: 1px solid rgba(255,255,255,.05);
}
.lms-mock-dot { width: 8px; height: 8px; border-radius: 50%; }
.lms-mock-url { font-size: 11px; color: rgba(255,255,255,.2); margin-left: 8px; }
.lms-mock-body { padding: 20px; }
.lms-mock-title { font-size: 12px; font-weight: 700; color: rgba(255,255,255,.6); margin-bottom: 14px; }
.lms-mock-prog-row { display: flex; justify-content: space-between; margin-bottom: 4px; }
.lms-mock-prog-label { font-size: 11px; color: rgba(255,255,255,.4); }
.lms-mock-bar2 { height: 4px; background: rgba(255,255,255,.07); border-radius: 2px; margin-bottom: 13px; }
.lms-mock-fill { height: 100%; border-radius: 2px; }
.lms-mock-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px; }
.lms-mock-mod { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.06); border-radius: 8px; padding: 11px; }
.lms-mock-mod-ico { width: 22px; height: 22px; border-radius: 5px; margin-bottom: 6px; }
.lms-mock-mod-t { font-size: 11px; color: rgba(255,255,255,.75); font-weight: 600; margin-bottom: 2px; }
.lms-mock-mod-s { font-size: 10px; color: rgba(255,255,255,.28); }
.lms-access-feats { display: flex; flex-direction: column; gap: 11px; margin: 22px 0 28px; }
.lms-feat { display: flex; align-items: flex-start; gap: 11px; }
.lms-feat__dot { width: 18px; height: 18px; border-radius: 50%; background: rgba(34,160,148,.12); border: 1px solid rgba(34,160,148,.26); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.lms-feat__dot svg { width: 10px; height: 10px; }
.lms-feat span { font-size: 14px; color: rgba(255,255,255,.7); line-height: 1.5; }

@media (max-width:900px) {
  .benefits-strip { grid-template-columns: 1fr; }
  .lms-access-box { grid-template-columns: 1fr; }
  .lms-screen-mock { display: none; }
  .program-card__footer { flex-direction: column; align-items: flex-start; }
}
</style>
