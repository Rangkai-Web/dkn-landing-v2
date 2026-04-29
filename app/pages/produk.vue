<script setup lang="ts">
import { useProductStore } from '~/stores/productStore';

const productStore = useProductStore();
const { productsByType, featuredProduct, isLoading } = storeToRefs(productStore);

onMounted(() => {
  productStore.fetchProducts();
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

          <!-- Loading State -->
          <div v-if="isLoading" class="loading-state py-64 text-center">
            <div class="loader-spinner"></div>
            <p class="mt-16 color-slate">Memuat daftar produk...</p>
          </div>

          <div v-else>
            <!-- ── BUKU ── -->
            <div v-if="productsByType.buku.length > 0 || featuredProduct" id="buku" style="margin-bottom:56px">
              <div class="cat-section-header">
                <div class="cat-section-header__ico" style="background:rgba(20,34,56,.08)"><svg viewBox="0 0 24 24" fill="none" stroke="#142238" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg></div>
                <h3>Buku</h3>
                <span class="tag tag--navy">{{ productsByType.buku.length + (featuredProduct?.type === 'buku' ? 1 : 0) }} Judul</span>
              </div>

              <!-- Featured Product -->
              <div v-if="featuredProduct" class="product-featured" style="background:#fff">
                <div class="product-featured__visual" :style="{ background: featuredProduct.type === 'buku' ? 'linear-gradient(135deg,var(--midnight),#1A3050)' : 'linear-gradient(135deg,#060e28,#0a1a40)' }">
                  <div v-if="featuredProduct.image" class="product-featured__img-wrap">
                    <img :src="featuredProduct.image" :alt="featuredProduct.title" class="product-featured__img">
                  </div>
                  <div v-else class="product-card__cover-book" style="background:linear-gradient(160deg,#1A3050,#0A1828)">
                    <div class="product-card__cover-book-title">{{ featuredProduct.title }}</div>
                  </div>
                </div>
                <div class="product-featured__body">
                  <div class="product-featured__tag">Produk Unggulan · {{ featuredProduct.type.toUpperCase() }}</div>
                  <div class="product-featured__title">{{ featuredProduct.title }}</div>
                  <div class="product-featured__desc">{{ featuredProduct.description }}</div>
                  <div class="product-featured__specs">
                    <div v-for="meta in featuredProduct.meta" :key="meta" class="product-featured__spec">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                      {{ meta }}
                    </div>
                  </div>
                  <div class="product-featured__footer">
                    <div>
                      <div class="product-featured__price">{{ featuredProduct.price }}</div>
                      <div class="product-featured__note" v-if="featuredProduct.type === 'buku'">Fisik · Gratis ongkir Jabodetabek</div>
                      <div class="product-featured__note" v-else>Akses Instan Digital</div>
                    </div>
                    <a :href="featuredProduct.link" target="_blank" class="btn btn--gold btn--lg">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                      Lihat Detail
                    </a>
                  </div>
                </div>
              </div>

              <!-- Books List -->
              <div class="grid-3">
                <div v-for="prod in productsByType.buku" :key="prod.id" class="product-card">
                  <div class="product-card__cover" style="background:linear-gradient(135deg,#071a12,#0d3824)">
                    <img v-if="prod.image" :src="prod.image" :alt="prod.title" class="product-card__img">
                    <div v-else class="product-card__cover-book" style="background:linear-gradient(160deg,#0d3824,#050f0b)">
                      <div class="product-card__cover-book-title">{{ prod.title }}</div>
                    </div>
                    <div class="product-card__type-badge"><span class="tag tag--teal">Buku</span></div>
                  </div>
                  <div class="product-card__body">
                    <div class="product-card__cat">Kategori</div>
                    <div class="product-card__title">{{ prod.title }}</div>
                    <div class="product-card__desc">{{ prod.description }}</div>
                    <div v-if="prod.author" class="product-card__author">
                      <div class="product-card__author-av" style="background:var(--teal)">{{ prod.author.initials }}</div>
                      <div>
                        <div class="product-card__author-name">{{ prod.author.name }}</div>
                        <div class="product-card__author-role">{{ prod.author.role }}</div>
                      </div>
                    </div>
                    <div class="product-card__meta">
                      <div v-for="meta in prod.meta" :key="meta" class="product-card__meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                        {{ meta }}
                      </div>
                    </div>
                  </div>
                  <div class="product-card__footer">
                    <div>
                      <div class="product-card__price">{{ prod.price }}</div>
                      <div class="product-card__price-note">Fisik · Gratis ongkir</div>
                    </div>
                    <a :href="prod.link" target="_blank" class="btn btn--outline-teal btn--sm">Lihat Detail →</a>
                  </div>
                </div>
              </div>
            </div>


            <!-- ── E-BOOK ── -->
            <div v-if="productsByType.ebook.length > 0" id="ebook" style="margin-bottom:56px">
              <div class="cat-section-header">
                <div class="cat-section-header__ico" style="background:rgba(34,160,148,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
                <h3>E-book</h3>
                <span class="tag tag--free">Akses Instan</span>
              </div>

              <div class="grid-3">
                <div v-for="prod in productsByType.ebook" :key="prod.id" class="product-card">
                  <div class="product-card__cover" style="background:linear-gradient(135deg,#060e28,#0a1a40)">
                    <img v-if="prod.image" :src="prod.image" :alt="prod.title" class="product-card__img">
                    <div v-else class="product-card__cover-ebook" style="background:rgba(34,160,148,.15);border:1px solid rgba(34,160,148,.25)">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#22A094" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                      <div class="product-card__cover-ebook-title">{{ prod.title }}</div>
                    </div>
                    <div class="product-card__type-badge"><span class="tag tag--free" style="font-size:10px">E-book</span></div>
                  </div>
                  <div class="product-card__body">
                    <div class="product-card__cat">Pengetahuan Praktis</div>
                    <div class="product-card__title">{{ prod.title }}</div>
                    <div class="product-card__desc">{{ prod.description }}</div>
                    <div class="product-card__meta">
                      <div v-for="meta in prod.meta" :key="meta" class="product-card__meta-item">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                        {{ meta }}
                      </div>
                    </div>
                  </div>
                  <div class="product-card__footer">
                    <div>
                      <div class="product-card__price">{{ prod.price }}</div>
                      <div class="product-card__price-note">Unduh setelah pembayaran</div>
                    </div>
                    <a :href="prod.link" target="_blank" class="btn btn--gold btn--sm">Lihat Detail</a>
                  </div>
                </div>
              </div>
            </div>


            <!-- ── TOOLKIT ── -->
            <div v-if="productsByType.toolkit.length > 0" id="toolkit">
              <div class="cat-section-header">
                <div class="cat-section-header__ico" style="background:rgba(139,92,246,.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div>
                <h3>Toolkit &amp; Template</h3>
                <span class="tag tag--teal">Siap Pakai</span>
              </div>

              <div class="grid-3">
                <div v-for="prod in productsByType.toolkit" :key="prod.id" class="product-card">
                  <div class="product-card__cover" style="background:linear-gradient(135deg,#0d0618,#160828)">
                    <img v-if="prod.image" :src="prod.image" :alt="prod.title" class="product-card__img">
                    <div v-else class="product-card__cover-toolkit" style="background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.25)">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="1.5" width="28" height="28"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                      <div class="product-card__cover-toolkit-title">{{ prod.title }}</div>
                    </div>
                    <div class="product-card__type-badge"><span class="tag tag--teal" style="font-size:10px">Toolkit</span></div>
                  </div>
                  <div class="product-card__body">
                    <div class="product-card__cat">Template Digital</div>
                    <div class="product-card__title">{{ prod.title }}</div>
                    <div class="product-card__desc">{{ prod.description }}</div>
                    <div class="product-card__meta">
                      <div v-for="meta in prod.meta" :key="meta" class="product-card__meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                        {{ meta }}
                      </div>
                    </div>
                  </div>
                  <div class="product-card__footer">
                    <div>
                      <div class="product-card__price">{{ prod.price }}</div>
                      <div class="product-card__price-note">Unduh setelah pembayaran</div>
                    </div>
                    <a :href="prod.link" target="_blank" class="btn btn--gold btn--sm">Lihat Detail</a>
                  </div>
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
              <NuxtLink to="/program" class="btn btn--gold btn--lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                Lihat Program Belajar
              </NuxtLink>
              <div class="program-cta-banner__note">
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
                Sertifikat penyelesaian · Evaluasi pembelajaran · Akses LMS
              </div>
              <NuxtLink to="/webinar" class="btn btn--ghost-w btn--md" style="margin-top:2px">
                Atau mulai dari webinar gratis →
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
    <WhatsAppFab />
  </div>
</template>


<style scoped>
/* ── PROGRAM PAGE SPECIFIC ─── */
.product-card__img, .product-featured__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
}
.product-featured__img-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border);
  border-top-color: var(--gold2);
  border-radius: 50%;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

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
