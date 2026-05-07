<script setup lang="ts">
import { useProductStore } from '~/stores/productStore';
import { useProfileStore } from "~/stores/profileStore";

const productStore = useProductStore();
// const { productsByType, featuredProduct, isLoading } = storeToRefs(productStore);

const store = useProfileStore();
const { profile } = storeToRefs(store);

onMounted(() => {
  productStore.fetchProducts();
  store.fetchProfile();
});

useSeoMeta({
  title: 'Produk - DKN Indonesia',
  description: 'Produk DKN Digital untuk membantu pengembangan soft skill dan kepemimpinan',
});

useHead({
  htmlAttrs: {
    lang: "id",
  },
});
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <!-- HERO -->
      <section class="page-hero">
        <div class="ph-grid"></div>
        <div class="ph-glow"></div>
        <div class="ph-inner">
          <div class="pill"><div class="pill-dot"></div>2 Buku · Terbit 2026</div>
          <h1 class="ph-h">Karya Pengetahuan<br><em>dari Praktisi</em></h1>
          <p class="ph-sub">Dua buku yang lahir dari pengalaman nyata lapangan dan penelitian mendalam — tersedia di Gramedia dan Lynk.id DKN.</p>
        </div>
      </section>


      <!-- ══ BUKU A: EFISIENSI YANG TERSEMBUNYI ══ -->
      <section class="sec" id="buku-efisiensi">
        <div class="wrap">
          <span class="lbl">Buku Pertama</span>
          <h2 class="sh">Efisiensi yang Tersembunyi</h2>
          <p class="ss">Dua dekade, 105 bank, sejumlah fakta yang terabaikan — ditulis oleh Dr. Ade Salman Alfarisi dari Universitas Padjadjaran.</p>

          <div class="buku-card">
            <div class="buku-cover-panel">
              <div class="bcp-glow-gold"></div>
              <img src="/img/others/buku_ades.jpeg" alt="Efisiensi yang Tersembunyi" class="buku-img">
              <div class="price-badge price-badge-gold">Rp 98.000</div>
            </div>
            <div class="buku-info">
              <div class="author-row">
                <div class="author-av" style="background:linear-gradient(135deg,var(--navy),var(--teal))">AS</div>
                <div>
                  <div class="author-name">Dr. Ade Salman Alfarisi</div>
                  <div class="author-cred">SE, MM, CFRP · Co-Founder &amp; Principal Consultant LPK DKN</div>
                </div>
              </div>
              <div class="buku-judul"><em style="color:var(--gold2)">Efisiensi yang Tersembunyi</em></div>
              <div class="buku-subtitle">Mengungkap Bank Syariah dan Bank Konvensional dalam Satu Ekosistem Keuangan · Dua Dekade, 105 Bank, Sejumlah Fakta yang Terabaikan</div>
              <p class="buku-desc">Buku ini lahir dari lebih dari dua dekade penelitian atas 105 bank di Indonesia. Mengungkap pola tersembunyi yang membedakan bank tumbuh dari bank stagnan — dan mengapa sebagian besar bank gagal melihatnya meskipun datanya ada di depan mata mereka. Disajikan dengan bahasa yang jernih dan kaya studi kasus nyata dari perbankan Indonesia.</p>
              <div class="buku-meta-grid">
                <div class="bm-item"><div class="bm-lbl">Penerbit</div><div class="bm-val">Rajagrafindo Persada</div></div>
                <div class="bm-item"><div class="bm-lbl">Tahun Terbit</div><div class="bm-val">2026</div></div>
                <div class="bm-item"><div class="bm-lbl">ISBN</div><div class="bm-val">978-623-08-2192-9</div></div>
                <div class="bm-item"><div class="bm-lbl">Halaman · Ukuran</div><div class="bm-val">158 hal · 15 × 23 cm</div></div>
              </div>
              <div class="harga-block">
                <div class="harga-lbl">Harga</div>
                <div class="harga-val" style="color:var(--gold2)">Rp 98.000</div>
                <div class="harga-note">*Harga sewaktu-waktu dapat berubah · Tersedia di Gramedia &amp; Lynk.id DKN</div>
              </div>
              <div class="cta-row">
                <a href="https://www.gramedia.com" target="_blank" rel="noopener" class="btn-buy-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                  Beli di Gramedia
                </a>
                <a href="https://lynk.id/dknindonesia" target="_blank" rel="noopener" class="btn-lynk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                  Beli via Lynk.id DKN
                </a>
              </div>
              <div class="trust-row">
                <div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Pengiriman ke seluruh Indonesia</div>
                <div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Pembelian instansi tersedia</div>
              </div>
            </div>
          </div>

          <!-- DETAIL A -->
          <div class="detail-grid">
            <div class="detail-box">
              <div class="db-lbl" style="color:var(--gold)">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                Daftar Isi
              </div>
              <div class="toc-list">
                <div class="toc-item"><div class="toc-n">Bab 1</div><div class="toc-t">Sistem Perbankan dan Prinsip Syariah: Antara Ide dan Realita</div></div>
                <div class="toc-item"><div class="toc-n">Bab 2</div><div class="toc-t">Pembiayaan dan Uang Beredar: Antara Kredit dan Transaksi Riil</div></div>
                <div class="toc-item"><div class="toc-n">Bab 3</div><div class="toc-t">Mengapa Struktur Modal Bank Itu Penting?</div></div>
                <div class="toc-item"><div class="toc-n">Bab 4</div><div class="toc-t">Return on Equity (ROE): Kinerja dan Permasalahannya</div></div>
                <div class="toc-item"><div class="toc-n">Bab 5</div><div class="toc-t">Efisiensi: Ukuran Tak Terlihat</div></div>
                <div class="toc-item"><div class="toc-n">Bab 6</div><div class="toc-t">Agency Cost: Ketika Modal Jadi Bumerang</div></div>
                <div class="toc-item"><div class="toc-n">Bab 7</div><div class="toc-t">20 Tahun Struktur Modal: Apa yang Kita Pelajari?</div></div>
                <div class="toc-item"><div class="toc-n">Bab 8</div><div class="toc-t">Refleksi Global dan Tantangan Kontemporer Perbankan</div></div>
                <div class="toc-item"><div class="toc-n">Bab 9</div><div class="toc-t">Penutup</div></div>
              </div>
            </div>
            <div>
              <div class="detail-box">
                <div class="db-lbl" style="color:var(--gold)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  Buku Ini untuk Siapa
                </div>
                <div class="audience-list">
                  <div class="al-item"><div class="al-ico" style="background:rgba(196,146,58,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div class="al-text"><strong>Pemimpin Bank &amp; Direksi</strong> yang ingin memahami akar stagnansi pertumbuhan dan menemukan leverage point yang selama ini tersembunyi</div></div>
                  <div class="al-item"><div class="al-ico" style="background:rgba(196,146,58,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div class="al-text"><strong>Bankir Senior &amp; Middle Management</strong> yang berperan dalam strategi, kredit, dan operasional perbankan</div></div>
                  <div class="al-item"><div class="al-ico" style="background:rgba(196,146,58,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg></div><div class="al-text"><strong>Akademisi &amp; Peneliti Perbankan</strong> yang mencari data empiris jangka panjang berbasis riset lapangan</div></div>
                  <div class="al-item"><div class="al-ico" style="background:rgba(196,146,58,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="al-text"><strong>Regulator &amp; Pengambil Kebijakan</strong> yang membutuhkan perspektif lapangan tentang dinamika efisiensi bank</div></div>
                </div>
              </div>
              <div class="author-detail-box">
                <div class="adb-row">
                  <div class="adb-av" style="background:linear-gradient(135deg,var(--navy),var(--teal))">AS</div>
                  <div><div class="adb-name">Dr. Ade Salman Alfarisi</div><div class="adb-cred">SE, MM, CFRP · Co-Founder &amp; Principal Consultant LPK DKN</div></div>
                </div>
                <p class="adb-desc">Doktor Keuangan dari Universitas Padjadjaran dengan 30+ tahun pengalaman di perbankan konvensional dan syariah. Selama dua dekade terakhir, beliau menjalankan penelitian sistematis atas 105 bank Indonesia — menghasilkan temuan yang kini terdokumentasi dalam buku ini.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- ══ BUKU B: LEARNING BUSINESS PARTNER ══ -->
      <section class="sec bg-mist" id="buku-lbp">
        <div class="wrap">
          <span class="lbl" style="color:var(--teal2)">Buku Kedua</span>
          <h2 class="sh">Learning Business Partner</h2>
          <p class="ss">Manifesto baru tentang bagaimana pembelajaran organisasi menjadi mesin penggerak strategi bisnis yang sesungguhnya.</p>

          <div class="buku-card buku-card-teal">
            <div class="buku-cover-panel">
              <div class="bcp-glow-teal"></div>
              <img src="/img/others/buku_sumedi_LBP1.jpeg" alt="Learning Business Partner — Sumedi" class="buku-img">
              <div class="price-badge price-badge-teal">Rp 95.000</div>
            </div>
            <div class="buku-info">
              <div class="author-row">
                <div class="author-av" style="background:linear-gradient(135deg,var(--navy),var(--teal2))">SM</div>
                <div>
                  <div class="author-name">Sumedi, S.P., M.M., M.Sc.</div>
                  <div class="author-cred">Praktisi &amp; Konsultan Learning &amp; Development</div>
                </div>
              </div>
              <div class="buku-judul"><em style="color:var(--teal2)">Learning Business Partner</em></div>
              <div class="buku-subtitle">Penggerak Strategi dan Kinerja Bisnis yang Unggul</div>
              <p class="buku-desc">Di era yang serba cepat dan penuh ketidakpastian ini, satu pertanyaan besar mengemuka: bagaimana jika pembelajaran di organisasi bukan sekadar pelatihan, tetapi menjadi mesin penggerak strategi bisnis yang sesungguhnya? Premisnya sederhana namun kuat — organisasi yang paling tangguh bukanlah yang terbesar, melainkan yang paling cepat belajar dan beradaptasi. Di sinilah lahir peran baru yang relevan dengan zaman: Learning Business Partner, sosok yang mampu menjembatani dunia pembelajaran dengan kinerja bisnis yang nyata.</p>
              <div class="harga-block">
                <div class="harga-lbl">Harga</div>
                <div class="harga-val" style="color:var(--teal2)">Rp 95.000</div>
                <div class="harga-note">Tersedia di Gramedia &amp; Lynk.id DKN</div>
              </div>
              <div class="cta-row">
                <a href="https://www.gramedia.com" target="_blank" rel="noopener" class="btn-buy-teal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                  Beli di Gramedia
                </a>
                <a href="https://lynk.id/dknindonesia" target="_blank" rel="noopener" class="btn-lynk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                  Beli via Lynk.id DKN
                </a>
              </div>
              <div class="trust-row">
                <div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Pengiriman ke seluruh Indonesia</div>
                <div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Pembelian instansi tersedia</div>
              </div>
            </div>
          </div>

          <!-- DETAIL B -->
          <div class="detail-grid">
            <div class="detail-box">
              <div class="db-lbl" style="color:var(--teal2)">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                Buku Ini untuk Siapa
              </div>
              <div class="audience-list">
                <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div class="al-text"><strong>Profesional HR &amp; L&D</strong> yang ingin bertransformasi menjadi Learning Business Partner yang strategis dan berdampak nyata bagi bisnis</div></div>
                <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div><div class="al-text"><strong>Pemimpin Tim &amp; Manajer</strong> yang percaya bahwa belajar adalah investasi terbaik organisasi dan ingin mengubah cara tim mereka berkembang</div></div>
                <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div><div class="al-text"><strong>Konsultan &amp; Praktisi Organisasi</strong> yang mendampingi proses transformasi budaya belajar di institusi dan perusahaan</div></div>
                <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div class="al-text"><strong>Siapapun yang percaya</strong> bahwa belajar adalah investasi terbaik sebuah organisasi — buku ini mengubah cara Anda melihat dan bertindak</div></div>
              </div>
            </div>
            <div>
              <div class="detail-box">
                <div class="db-lbl" style="color:var(--teal2)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                  Yang Akan Anda Dapatkan
                </div>
                <div class="audience-list">
                  <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg></div><div class="al-text">Kerangka kerja dan metodologi yang dapat <strong>langsung diterapkan</strong> — bukan sekadar teori akademis</div></div>
                  <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg></div><div class="al-text">Cara menjembatani <strong>kesenjangan teori dan realitas lapangan</strong> dalam desain program learning</div></div>
                  <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg></div><div class="al-text">Perubahan paradigma tentang <strong>peran pembelajaran</strong> sebagai penggerak strategi organisasi modern</div></div>
                  <div class="al-item"><div class="al-ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg></div><div class="al-text">Studi kasus nyata dan panduan praktis yang terbukti efektif di organisasi Indonesia</div></div>
                </div>
              </div>
              <div class="author-detail-box" style="border-color:rgba(34,160,148,.18)">
                <div class="adb-row">
                  <div class="adb-av" style="background:linear-gradient(135deg,var(--navy),var(--teal2))">SM</div>
                  <div><div class="adb-name">Sumedi, S.P., M.M., M.Sc.</div><div class="adb-cred">Praktisi &amp; Konsultan Learning &amp; Development</div></div>
                </div>
                <p class="adb-desc">Lebih dari sekadar buku tentang pelatihan — <em>Learning Business Partner</em> adalah sebuah manifesto tentang bagaimana pembelajaran dapat menciptakan nilai, mendorong perubahan, dan membentuk masa depan organisasi. Setiap halaman akan mengubah cara Anda melihat peran pembelajaran, dan yang lebih penting, mengubah cara Anda bertindak. Jadilah bagian dari generasi pemimpin pembelajaran yang tidak hanya melatih, tetapi benar-benar menggerakkan bisnis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- ══ PEMBELIAN & SPEAKER ══ -->
      <section class="sec" id="pembelian">
        <div class="wrap">
          <span class="lbl">Cara Mendapatkan</span>
          <h2 class="sh">Informasi Pembelian</h2>
          <p class="ss">Kedua buku tersedia di Gramedia seluruh Indonesia dan via Lynk.id DKN. Untuk pembelian instansi, hubungi tim DKN langsung.</p>

          <div class="beli-grid">
            <div class="beli-item">
              <div class="beli-emoji">📚</div>
              <div class="beli-body"><strong>Gramedia</strong><p>Tersedia di seluruh toko buku Gramedia Indonesia dan Gramedia.com</p></div>
            </div>
            <div class="beli-item">
              <div class="beli-emoji">🔗</div>
              <div class="beli-body"><strong>Lynk.id DKN</strong><p>Pembelian langsung via halaman resmi DKN — pengiriman ke seluruh Indonesia</p></div>
            </div>
            <div class="beli-item">
              <div class="beli-emoji">🏢</div>
              <div class="beli-body"><strong>Pembelian Instansi</strong><p>Untuk pembelian partai besar (perusahaan, universitas, lembaga), hubungi tim DKN untuk harga khusus</p></div>
            </div>
            <div class="beli-item">
              <div class="beli-emoji">💬</div>
              <div class="beli-body"><strong>WhatsApp DKN</strong><p>+{{ profile?.contact?.whatsapp_number }} — untuk pertanyaan, pembelian partai, atau diskusi penggunaan buku dalam program pelatihan</p></div>
            </div>
          </div>

          <div class="speaker-banner">
            <div class="sb-left">
              <h3>Ingin Penulis Hadir sebagai <em>Pembicara?</em></h3>
              <p>Kedua penulis tersedia sebagai pembicara untuk seminar, webinar, dan forum organisasi — membawakan insight mendalam dari buku masing-masing secara langsung dan interaktif. Hubungi tim DKN untuk informasi ketersediaan dan detail selengkapnya.</p>
            </div>
            <NuxtLink
              :to="`https://wa.me/${profile?.contact?.whatsapp_number?.trim()}?text=${encodeURIComponent(
                'Halo DKN, saya ingin berdiskusi tentang kebutuhan corporate training untuk organisasi saya'
              )}`"
              target="_blank"
              rel="noopener"
              class="btn-wa"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              Hubungi Tim DKN
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
    <WhatsAppFab />
  </div>
</template>


<style scoped>
/* HERO */
.page-hero{background:var(--midnight);padding:80px 52px;position:relative;overflow:hidden}
.ph-grid{position:absolute;inset:0;opacity:.03;background-image:linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px);background-size:60px 60px}
.ph-glow{position:absolute;top:-180px;left:50%;transform:translateX(-50%);width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(196,146,58,.08) 0%,transparent 70%);pointer-events:none}
.ph-inner{max-width:700px;margin:0 auto;text-align:center;position:relative;z-index:2}
.pill{display:inline-flex;align-items:center;gap:8px;background:rgba(196,146,58,.12);border:1px solid rgba(196,146,58,.28);color:var(--gold3);font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:5px 14px 5px 10px;border-radius:50px;margin-bottom:20px}
.pill-dot{width:6px;height:6px;border-radius:50%;background:var(--gold3)}
.ph-h{font-family:var(--serif);font-size:46px;line-height:1.1;color:#fff;font-weight:600;margin-bottom:12px}
.ph-h em{color:var(--gold2);font-style:italic}
.ph-sub{font-size:15px;color:rgba(255,255,255,.56);line-height:1.75;font-weight:300}
/* SECTIONS */
.sec{padding:72px 52px}
.sec-sm{padding:48px 52px}
.wrap{max-width:1100px;margin:0 auto}
.bg-mist{background:var(--mist)}
.lbl{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:10px}
.sh{font-family:var(--serif);font-size:36px;line-height:1.15;font-weight:600;margin-bottom:10px}
.ss{font-size:15px;color:var(--slate);line-height:1.75;font-weight:300}
/* BUKU CARD */
.buku-card{border-radius:24px;overflow:hidden;border:1px solid rgba(196,146,58,.22);margin-top:40px;display:grid;grid-template-columns:380px 1fr;background:linear-gradient(140deg,var(--midnight),#0D1E35)}
.buku-card-teal{border-color:rgba(34,160,148,.22);background:linear-gradient(140deg,#071020,#0a1e30)}
.buku-cover-panel{display:flex;align-items:center;justify-content:center;padding:52px 40px;position:relative;overflow:hidden;min-height:480px}
.bcp-glow-gold{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(196,146,58,.14) 0%,transparent 65%)}
.bcp-glow-teal{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(34,160,148,.12) 0%,transparent 65%)}
.buku-img{width:220px;object-fit:contain;border-radius:6px;box-shadow:8px 16px 48px rgba(0,0,0,.65);position:relative;z-index:2;transition:transform .3s}
.buku-img:hover{transform:scale(1.03) translateY(-4px)}
.price-badge{position:absolute;top:24px;right:20px;z-index:3;font-size:13px;font-weight:800;padding:7px 16px;border-radius:50px;letter-spacing:.3px}
.price-badge-gold{background:var(--gold);color:var(--midnight);box-shadow:0 4px 16px rgba(196,146,58,.4)}
.price-badge-teal{background:var(--teal2);color:#fff;box-shadow:0 4px 16px rgba(34,160,148,.4)}
/* BUKU INFO */
.buku-info{padding:52px 48px;display:flex;flex-direction:column;justify-content:center}
.author-row{display:flex;align-items:center;gap:12px;margin-bottom:22px}
.author-av{width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:16px;font-weight:600;color:#fff;flex-shrink:0}
.author-name{font-size:14px;font-weight:700;color:rgba(255,255,255,.85)}
.author-cred{font-size:12px;color:rgba(255,255,255,.4);margin-top:1px}
.buku-judul{font-family:var(--serif);font-size:32px;color:#fff;font-weight:600;line-height:1.15;margin-bottom:6px}
.buku-subtitle{font-size:14px;color:rgba(255,255,255,.45);margin-bottom:22px;font-style:italic}
.buku-desc{font-size:14px;color:rgba(255,255,255,.6);line-height:1.8;font-weight:300;margin-bottom:24px}
.buku-meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:24px}
.bm-item{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px}
.bm-lbl{font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.28);margin-bottom:2px}
.bm-val{font-size:13px;font-weight:600;color:rgba(255,255,255,.75)}
.harga-block{margin-bottom:24px}
.harga-lbl{font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:4px}
.harga-val{font-family:var(--serif);font-size:36px;font-weight:600;line-height:1}
.harga-note{font-size:11px;color:rgba(255,255,255,.28);margin-top:3px}
.cta-row{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px}
.btn-buy-gold{background:var(--gold);color:var(--midnight);padding:13px 24px;border-radius:9px;font-size:13.5px;font-weight:800;text-decoration:none;display:inline-flex;align-items:center;gap:9px;transition:all .2s}
.btn-buy-gold:hover{background:var(--gold2);transform:translateY(-1px)}
.btn-buy-teal{background:var(--teal2);color:#fff;padding:13px 24px;border-radius:9px;font-size:13.5px;font-weight:800;text-decoration:none;display:inline-flex;align-items:center;gap:9px;transition:all .2s}
.btn-buy-teal:hover{background:var(--teal);transform:translateY(-1px)}
.btn-lynk{background:rgba(255,255,255,.08);color:rgba(255,255,255,.85);border:1px solid rgba(255,255,255,.18);padding:13px 24px;border-radius:9px;font-size:13.5px;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:9px;transition:all .2s}
.btn-lynk:hover{background:rgba(255,255,255,.13)}
.trust-row{display:flex;gap:16px;flex-wrap:wrap}
.trust-item{display:flex;align-items:center;gap:6px;font-size:12px;color:rgba(255,255,255,.3)}
.trust-item svg{width:12px;height:12px}
/* DETAIL GRID */
.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:28px}
.detail-box{background:#fff;border:1px solid var(--border);border-radius:14px;padding:28px;box-shadow:0 1px 3px rgba(20,34,56,.05)}
.db-lbl{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;display:flex;align-items:center;gap:8px}
.db-lbl svg{width:14px;height:14px}
.toc-list{display:flex;flex-direction:column;gap:7px}
.toc-item{display:flex;align-items:flex-start;gap:12px;padding:9px 12px;background:var(--mist);border-radius:7px}
.toc-n{font-size:11px;font-weight:700;color:var(--teal2);min-width:38px;flex-shrink:0}
.toc-t{font-size:13px;color:var(--ink);line-height:1.4}
.audience-list{display:flex;flex-direction:column;gap:10px}
.al-item{display:flex;align-items:flex-start;gap:10px}
.al-ico{width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.al-ico svg{width:13px;height:13px}
.al-text{font-size:13.5px;color:var(--ink);line-height:1.5;padding-top:4px}
.author-detail-box{background:var(--midnight);border-radius:14px;padding:28px;margin-top:20px;border:1px solid rgba(255,255,255,.07)}
.adb-row{display:flex;align-items:flex-start;gap:14px;margin-bottom:14px}
.adb-av{width:48px;height:48px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:20px;font-weight:600;color:#fff;flex-shrink:0}
.adb-name{font-family:var(--serif);font-size:18px;color:#fff;font-weight:600;margin-bottom:2px}
.adb-cred{font-size:12px;color:rgba(255,255,255,.45);font-style:italic}
.adb-desc{font-size:13.5px;color:rgba(255,255,255,.52);line-height:1.72;font-weight:300}
/* PEMBELIAN */
.beli-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:32px}
.beli-item{display:flex;align-items:flex-start;gap:12px;background:#fff;border:1px solid var(--border);border-radius:10px;padding:16px;box-shadow:0 1px 3px rgba(20,34,56,.04)}
.beli-emoji{font-size:22px;flex-shrink:0;margin-top:2px}
.beli-body strong{display:block;font-size:12px;font-weight:700;color:var(--teal2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}
.beli-body p{font-size:13px;color:var(--slate);line-height:1.55}
/* SPEAKER */
.speaker-banner{background:var(--midnight);border-radius:20px;padding:44px 52px;display:flex;align-items:center;justify-content:space-between;gap:32px;margin-top:48px;border:1px solid rgba(255,255,255,.07)}
.sb-left h3{font-family:var(--serif);font-size:26px;color:#fff;font-weight:600;line-height:1.2;margin-bottom:8px}
.sb-left h3 em{color:var(--teal2);font-style:italic}
.sb-left p{font-size:14px;color:rgba(255,255,255,.5);line-height:1.7;max-width:540px}
.btn-wa{background:var(--teal2);color:#fff;padding:13px 24px;border-radius:9px;font-size:13.5px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:9px;transition:all .2s;flex-shrink:0;white-space:nowrap}
.btn-wa:hover{background:var(--teal)}
.btn-wa svg{width:14px;height:14px}
/* FOOTER */
footer{background:var(--midnight);padding:56px 52px 28px;border-top:1px solid rgba(255,255,255,.05)}
.ft{max-width:1100px;margin:0 auto}
.ft-top{display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:48px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.07)}
.ft-brand p{font-size:13px;color:rgba(255,255,255,.38);line-height:1.8;margin-top:14px;margin-bottom:20px}
.ft-socials{display:flex;gap:8px}
.fs-btn{width:32px;height:32px;border-radius:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);display:flex;align-items:center;justify-content:center}
.fs-btn svg{width:13px;height:13px}
.ft-col h5{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.26);margin-bottom:14px}
.ft-col ul{list-style:none;display:flex;flex-direction:column;gap:9px}
.ft-col ul li a{font-size:13px;color:rgba(255,255,255,.44);text-decoration:none;transition:color .2s}
.ft-col ul li a:hover{color:#fff}
.ft-contact strong{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.22);display:block;margin-bottom:2px}
.ft-contact p{font-size:13px;color:rgba(255,255,255,.44);line-height:2}
.ft-bottom{padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.ft-bottom p{font-size:11.5px;color:rgba(255,255,255,.2)}
.ft-legal{display:flex;gap:14px;flex-wrap:wrap}
.ft-legal span{font-size:11px;color:rgba(255,255,255,.2)}
.wa-fab{position:fixed;bottom:26px;right:26px;z-index:999;width:52px;height:52px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,.28);transition:transform .2s}
.wa-fab:hover{transform:scale(1.08)}
.wa-fab svg{width:26px;height:26px}
@media(max-width:900px){
  nav{padding:0 20px}.nav-links,.nav-actions{display:none}
  .sec,.sec-sm{padding:52px 20px}.page-hero{padding:52px 20px}.ph-h{font-size:32px}
  .buku-card{grid-template-columns:1fr}
  .buku-cover-panel{min-height:280px;padding:36px}
  .buku-info{padding:32px}
  .buku-judul{font-size:26px}
  .buku-meta-grid,.detail-grid,.beli-grid{grid-template-columns:1fr}
  .speaker-banner{flex-direction:column;padding:32px}
  footer{padding:48px 20px 24px}.ft-top{grid-template-columns:1fr 1fr;gap:28px}
}

/* @media (max-width: 900px) {
  .product-featured { grid-template-columns: 1fr; }
  .product-featured__visual { padding: 32px; height: 200px; }
  .product-featured__body { padding: 28px; }
  .program-cta-banner { grid-template-columns: 1fr; }
  .program-cta-banner__right { align-items: flex-start; }
} */
</style>
