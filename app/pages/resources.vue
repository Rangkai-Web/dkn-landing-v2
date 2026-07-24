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
            Knowledge Hub · Katalog · Insight
          </div>
          <h1 class="ph-h">Resources &amp;<br /><em>Insights DKN</em></h1>
          <p class="ph-sub">
            Temukan program yang tepat, baca insight dari praktisi, dan jelajahi
            katalog lengkap layanan DKN — semuanya di satu tempat.
          </p>
          <div class="ph-btns">
            <a href="#router" class="cta-A">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                />
              </svg>
              Jelajahi Sekarang
            </a>
            <a href="#insight" class="cta-ghost">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              Baca Insight
            </a>
          </div>
        </div>
      </section>

      <!-- TAB NAV -->
      <div class="tab-nav">
        <div class="tab-nav-inner">
          <a
            href="#router"
            @click="activeTab = '#router'"
            class="tnav-tab"
            :class="{ active: activeTab === '#router' }"
            >🗺 Cari Program</a
          >
          <a
            href="#artikel"
            @click="activeTab = '#artikel'"
            class="tnav-tab"
            :class="{ active: activeTab === '#artikel' }"
            >📝 Artikel</a
          >
          <a
            href="#insight"
            @click="activeTab = '#insight'"
            class="tnav-tab"
            :class="{ active: activeTab === '#insight' }"
            >💡 Insight Bisnis</a
          >
          <a
            href="#katalog"
            @click="activeTab = '#katalog'"
            class="tnav-tab"
            :class="{ active: activeTab === '#katalog' }"
            >📋 Katalog Lengkap</a
          >
        </div>
      </div>

      <!-- ═══ ZONA 1: ROUTER / CARI PROGRAM ═══ -->
      <section class="sec bg-mist" id="router">
        <div class="wrap">
          <span class="lbl">Mulai dari Sini</span>
          <h2 class="sh">Anda Sedang Mencari Apa?</h2>
          <p class="ss">
            Resources ini adalah pintu masuk ke seluruh ekosistem belajar DKN.
            Pilih jalur yang paling sesuai dengan kebutuhan Anda.
          </p>

          <div class="router-grid">
            <!-- Jalur 1: Webinar -->
            <a href="/webinar" class="router-card rc-bg1">
              <img
                src="/img/others/program-webinar.jpg"
                style="margin-bottom: 20px; border-radius: 8px; height: 160px; object-fit: cover;"
                alt="Program Webinar"
              />
              <div class="rc-num">1</div>
              <div class="rc-ico" style="background: rgba(34, 160, 148, 0.15)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22A094"
                  stroke-width="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <div class="rc-lbl">Jalur 1 · Mulai Gratis</div>
              <div class="rc-title">Webinar Live &amp; Recording</div>
              <div class="rc-desc">
                Belum siap komitmen program berbayar? Ikuti webinar live gratis
                via Zoom, atau tonton recording di YouTube DKN — tanpa daftar,
                tanpa biaya.
              </div>
              <div class="rc-tags">
                <span class="rc-tag">Live Zoom</span>
                <span class="rc-tag">YouTube Recording</span>
                <span class="rc-tag">Gratis</span>
              </div>
              <div class="rc-btn">
                Lihat Jadwal Webinar
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <!-- Jalur 2: Program Belajar -->
            <a href="/program" class="router-card rc-bg2">
              <img
                src="/img/others/program-belajar.jpg"
                style="margin-bottom: 20px; border-radius: 8px; height: 160px; object-fit: cover;"
                alt="Program Belajar"
              />
              <div class="rc-num">2</div>
              <div class="rc-ico" style="background: rgba(196, 146, 58, 0.15)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D9AA55"
                  stroke-width="2"
                >
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                  />
                </svg>
              </div>
              <div class="rc-lbl">Jalur 2 · Bersertifikat</div>
              <div class="rc-title">Program Belajar Tatap Muka</div>
              <div class="rc-desc">
                Pelatihan offline intensif 1–2 hari dengan sertifikat
                keikutsertaan — termasuk Sertifikasi BNSP bermitra LSP SIK.
                Daftar waiting list sekarang.
              </div>
              <div class="rc-tags">
                <span class="rc-tag">Tatap Muka</span>
                <span class="rc-tag">Sertifikat</span>
                <span class="rc-tag">BNSP</span>
                <span class="rc-tag">Waiting List</span>
              </div>
              <div class="rc-btn">
                Lihat 14 Program
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <!-- Jalur 3: Corporate -->
            <a href="/contact" class="router-card rc-bg3">
              <img
                src="/img/others/program-corporate.jpg"
                style="margin-bottom: 20px; border-radius: 8px; height: 160px; object-fit: cover;"
                alt="Program Corporate"
              />
              <div class="rc-num">3</div>
              <div class="rc-ico" style="background: rgba(139, 92, 246, 0.15)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A78BFA"
                  stroke-width="2"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div class="rc-lbl">Jalur 3 · Untuk Organisasi</div>
              <div class="rc-title">Layanan Corporate &amp; Advisory</div>
              <div class="rc-desc">
                Butuh program untuk tim atau perusahaan? In-house training yang
                dikustomisasi, advisory strategis SDM, atau assessment center —
                konsultasi awal gratis.
              </div>
              <div class="rc-tags">
                <span class="rc-tag">In-House</span>
                <span class="rc-tag">Advisory</span>
                <span class="rc-tag">Assessment</span>
              </div>
              <div class="rc-btn">
                Konsultasi Gratis
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- ═══ ZONA 2: ARTIKEL ═══ -->
      <section class="sec" id="artikel">
        <div class="wrap">
          <span class="lbl">Artikel dari Praktisi</span>
          <h2 class="sh">Baca, Pelajari, Terapkan</h2>
          <p class="ss">
            Insight dari pengalaman nyata lapangan — ditulis agar langsung
            relevan dengan tantangan yang Anda hadapi sehari-hari.
          </p>

          <!-- FEATURED -->
          <!-- <div class="art-featured">
            <div
              class="art-thumb"
              style="
                background: linear-gradient(135deg, var(--midnight), #0f2540);
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(34,160,148,.5)"
                stroke-width="1.2"
                width="56"
                height="56"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div class="art-body">
              <div class="art-meta-row">
                <span class="art-cat">Sales Performance</span>
                <span class="art-date"
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" /></svg
                  >Maret 2026</span
                >
                <span class="art-read"
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" /></svg
                  >8 menit baca</span
                >
              </div>
              <div class="art-title">
                Mengapa Sales Aktif Tinggi tapi Closing Tetap Rendah? Ini Akar
                Masalahnya
              </div>
              <div class="art-summary">
                Banyak tim sales bekerja keras — meeting penuh, telepon tidak
                berhenti, pipeline terlihat panjang. Tapi angka closing tidak
                bergerak. Ada lima penyebab struktural yang sering diabaikan
                oleh manajer dan cara memperbaikinya secara sistematis.
              </div>
              <div class="art-author-row">
                <div
                  class="art-av"
                  style="
                    background: linear-gradient(
                      135deg,
                      var(--navy),
                      var(--teal)
                    );
                  "
                >
                  OS
                </div>
                <div>
                  <div class="art-author-name">Ony Suryono Widodo, ST, MMT</div>
                  <div class="art-author-role">
                    Co-Founder &amp; Senior Consultant · LPK DKN
                  </div>
                </div>
              </div>
              <a href="/webinar" class="btn-teal">
                Artikel Segera Tersedia
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div> -->

          <!-- LOADING STATE -->
          <div v-if="articleLoading" class="loading-state">
            <div class="loader"></div>
            <p>Memuat artikel terbaik untuk Anda...</p>
          </div>

          <!-- EMPTY STATE -->
          <div v-else-if="!articles.length" class="empty-state">
            <div class="empty-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                />
              </svg>
            </div>
            <h3>Belum Ada Artikel</h3>
            <p>
              Kami sedang menyiapkan materi edukasi berkualitas untuk Anda.
              Silakan kembali lagi nanti.
            </p>
          </div>

          <!-- ARTIKEL GRID 3 COL -->
          <div v-else class="art-grid" style="margin-top: 2rem">
            <div
              v-for="art in articles"
              :key="art.id"
              :id="`artikel-${art.id}`"
              class="art-card"
            >
              <div
                class="art-card-thumb"
                :style="`background: ${getArticleMeta(art.category).grad}`"
              >
                <img
                  v-if="art.image_full_url"
                  :src="art.image_full_url || '/img/others/placeholder.jpg'"
                  :alt="art.title"
                  class="art-card-img"
                />
                <svg
                  v-else
                  viewBox="0 0 24 24"
                  fill="none"
                  :stroke="getArticleMeta(art.category).ico"
                  stroke-width="1.5"
                  width="40"
                  height="40"
                >
                  <g v-if="getArticleMeta(art.category).icon === 'user'">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path
                      d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    />
                  </g>
                  <path
                    v-else-if="getArticleMeta(art.category).icon === 'zap'"
                    d="M22 12h-4l-3 9L9 3l-3 9H2"
                  />
                  <g v-else-if="getArticleMeta(art.category).icon === 'trend'">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </g>
                  <path
                    v-else
                    d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                  />
                </svg>
                <div v-if="art.image_full_url" class="art-card-scrim"></div>
                <div
                  class="art-card-badge"
                  :style="
                    art.image_full_url
                      ? {
                          background: 'rgba(0, 0, 0, 0.55)',
                          color: '#fff',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                        }
                      : {
                          background: getArticleMeta(art.category).badgeBg,
                          color: getArticleMeta(art.category).badgeColor,
                          border: `1px solid ${getArticleMeta(art.category).badgeBorder}`,
                        }
                  "
                >
                  {{ art.category }}
                </div>
              </div>
              <div class="art-card-body">
                <div class="art-card-date">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" /></svg
                  >{{ art.date }}
                </div>
                <div class="art-card-title">
                  {{ art.title }}
                </div>
                <div class="art-card-summary">
                  {{ art.summary }}
                </div>
                <div class="flex gap-2 items-center">
                  <a
                    :href="art.file_full_url"
                    class="btn-teal"
                    style="width: fit-content"
                    target="_blank"
                    download
                  >
                    Download File
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    v-if="isSafeHttpUrl(art.cta_url)"
                    :href="art.cta_url"
                    class="btn-minat"
                    style="width: fit-content"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="
                      pushEvent('cta_click', {
                        source: 'artikel',
                        id: art.id,
                        title: art.title,
                      })
                    "
                  >
                    Kunjungi
                  </a>
                </div>
              </div>
              <div class="art-card-footer">
                <div class="art-card-author">
                  <div
                    class="art-card-av"
                    style="
                      background: linear-gradient(
                        135deg,
                        var(--navy),
                        var(--teal)
                      );
                    "
                  >
                    {{ art.author_initial }}
                  </div>
                  <div>
                    <div class="art-card-name">{{ art.author_name }}</div>
                    <div class="art-card-role">{{ art.author_role }}</div>
                  </div>
                </div>
                <div class="art-card-readtime">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" /></svg
                  >{{ art.read_time }}
                </div>
              </div>
            </div>
          </div>

          <a
            href=""
            class="view-all-strip"
            style="pointer-events: none; opacity: 0.6"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path
                d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
              />
            </svg>
            Artikel lainnya sedera tersedia — pantau terus DKN
          </a>
        </div>
      </section>

      <!-- ═══ ZONA 3: INSIGHT BISNIS ═══ -->
      <section class="sec bg-deep" id="insight">
        <div class="wrap">
          <span class="lbl" style="color: var(--teal2)"
            >Insight Bisnis &amp; SDM</span
          >
          <h2 class="sh sh-w">Perspektif dari Dalam Industri</h2>
          <p class="ss" style="color: rgba(255, 255, 255, 0.5)">
            Analisis mendalam tentang tren SDM, dinamika industri keuangan, dan
            strategi pengembangan organisasi dari praktisi senior DKN.
          </p>

          <!-- LOADING STATE -->
          <div v-if="insightLoading" class="loading-state">
            <div class="loader"></div>
            <p>Menganalisis tren bisnis terbaru...</p>
          </div>

          <!-- EMPTY STATE -->
          <div v-else-if="!insights.length" class="empty-state">
            <div class="empty-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                />
              </svg>
            </div>
            <h3>Belum Ada Insight Bisnis</h3>
            <p>
              Tim ahli kami sedang melakukan riset pasar mendalam. Nantikan
              analisis strategis kami segera.
            </p>
          </div>

          <div v-else class="insight-grid">
            <div v-for="ins in insights" :key="ins.id" class="insight-card">
              <img
                :src="ins.image_full_url || '/img/others/placeholder.jpg'"
                style="margin-bottom: 20px; border-radius: 8px; height: 160px; object-fit: contain;"
                alt="Program Webinar"
              />
              <div
                class="ic-ico"
                :style="`background: ${getInsightMeta(ins.icon_type).bg}`"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  :stroke="getInsightMeta(ins.icon_type).color"
                  stroke-width="2"
                >
                  <polyline
                    v-if="ins.icon_type === 'trend'"
                    points="23 6 13.5 15.5 8.5 10.5 1 18"
                  />
                  <g v-else-if="ins.icon_type === 'user'">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </g>
                  <path
                    v-else-if="ins.icon_type === 'shield'"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                  <g v-else-if="ins.icon_type === 'monitor'">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </g>
                  <path
                    v-else-if="ins.icon_type === 'zap'"
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  />
                  <g v-else-if="ins.icon_type === 'info'">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </g>
                </svg>
              </div>
              <div class="ic-cat">{{ ins.category }}</div>
              <div class="ic-title">
                {{ ins.title }}
              </div>
              <div class="ic-desc">
                {{ ins.description }}
              </div>
              <a
                v-if="ins.button_link || ins.button_text"
                :href="ins.button_link || 'javascript:void(0)'"
                class="btn-ic"
              >
                {{ ins.button_text || "Pelajari Lebih Lanjut" }}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ ZONA 4: KATALOG PROGRAM ═══ -->
      <section class="sec" id="katalog">
        <div class="wrap">
          <span class="lbl">Katalog Program DKN</span>
          <h2 class="sh">Temukan Program yang Tepat</h2>
          <p class="ss">
            Semua program tersedia dalam format webinar (online) atau program
            belajar tatap muka (waiting list). Klik untuk detail selengkapnya.
          </p>

          <div class="katalog-grid">
            <!-- LOADING STATE -->
            <div v-if="programLoading" class="kat-loading">
              <div class="kat-spinner"></div>
              <p>Memuat katalog program...</p>
            </div>

            <!-- EMPTY STATE -->
            <div v-else-if="programs.length === 0" class="kat-empty">
              <div class="ke-ico">
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
              <h3>Katalog belum tersedia</h3>
              <p>
                Maaf, saat ini belum ada data program yang tersedia dalam
                katalog kami.
              </p>
            </div>

            <!-- PROGRAM LIST -->
            <template v-else>
              <a
                v-for="prog in programs"
                :key="prog.id"
                :href="
                  prog.button_link.includes('wa.me')
                    ? prog.button_link
                    : '/program#daftar-waiting-list'
                "
                :target="
                  prog.button_link.includes('wa.me') ? '_blank' : '_self'
                "
                class="kat-card"
                :style="
                  prog.is_signature
                    ? 'border-color:rgba(196,146,58,0.3);background:var(--gold-pale)'
                    : ''
                "
                @click="
                  prog.button_link.includes('wa.me')
                    ? pushEvent('wa_click', {
                        source: 'katalog_program',
                        id: prog.id,
                        title: prog.title,
                      })
                    : null
                "
              >
                
                <img
                  :src="prog.image_full_url || '/img/others/placeholder.jpg'"
                  style="margin-bottom: 20px; border-radius: 8px; height: 140px; width: 140px; object-fit: contain;"
                  alt="Program Webinar"
                />
                <div class="kat-info">
                  <div style="display: flex; align-items: center; gap: 8px">
                    <div
                      class="kat-ico"
                      :style="`background: ${getProgramMeta(prog.category, prog.is_signature).bg}`"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        :stroke="
                          getProgramMeta(prog.category, prog.is_signature).color
                        "
                        stroke-width="2"
                      >
                        <!-- Signature Icon -->
                        <polygon
                          v-if="
                            getProgramMeta(prog.category, prog.is_signature)
                              .icon === 'signature'
                          "
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                        <!-- User/Leadership Icon -->
                        <g
                          v-else-if="
                            getProgramMeta(prog.category, prog.is_signature)
                              .icon === 'user'
                          "
                        >
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </g>
                        <!-- Zap/Sales Icon -->
                        <path
                          v-else-if="
                            getProgramMeta(prog.category, prog.is_signature)
                              .icon === 'zap'
                          "
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                        />
                        <!-- Check/Banking Icon -->
                        <path
                          v-else-if="
                            getProgramMeta(prog.category, prog.is_signature)
                              .icon === 'check'
                          "
                          d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3"
                        />
                        <!-- Trend/Finance Icon -->
                        <polyline
                          v-else-if="
                            getProgramMeta(prog.category, prog.is_signature)
                              .icon === 'trend'
                          "
                          points="23 6 13.5 15.5 8.5 10.5 1 18"
                        />
                        <!-- Default Icon -->
                        <path
                          v-else
                          d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                        />
                      </svg>
                    </div>
                    <div
                      class="kat-cat"
                      :style="prog.is_signature ? 'color:var(--gold)' : ''"
                    >
                      {{ prog.is_signature ? "★ " : "" }}{{ prog.category }}
                    </div>
                  </div>
                  <div class="kat-title">{{ prog.title }}</div>
                  <div class="kat-desc">{{ prog.desc }}</div>
                </div>
                <div
                  class="kat-arrow"
                  :style="
                    prog.is_signature ? 'background:rgba(196,146,58,0.15)' : ''
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    :stroke="prog.is_signature ? 'var(--gold)' : 'currentColor'"
                    stroke-width="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </template>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 48px">
            <a
              href="/file/katalog-program.pptx"
              class="btn-teal"
              style="width: fit-content"
              target="_blank"
              download
            >
              Download Katalog Program
            </a>
          </div>
        </div>
      </section>

      <!-- ═══ CTA WEBINAR GRATIS ═══ -->
      <section class="sec-sm bg-mist">
        <div class="wrap">
          <div class="wb-banner">
            <div>
              <div
                style="
                  display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  background: rgba(196, 146, 58, 0.13);
                  border: 1px solid rgba(196, 146, 58, 0.3);
                  color: var(--gold3);
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1.2px;
                  text-transform: uppercase;
                  padding: 5px 14px 5px 10px;
                  border-radius: 50px;
                  margin-bottom: 18px;
                "
              >
                <div
                  style="
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--gold3);
                    animation: pdot 1.8s infinite;
                  "
                ></div>
                Gratis · Live Zoom · Recording YouTube
              </div>
              <!-- <style>@keyframes pdot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}</style> -->
              <h2>
                Mulai dari Webinar Gratis —<br /><em
                  >Tidak Ada Risiko, Langsung Relevan</em
                >
              </h2>
              <p style="margin-top: 10px">
                Ikuti webinar live gratis DKN via Zoom. Dapatkan wawasan nyata
                dari praktisi senior, dan tonton recording gratis di YouTube —
                tanpa perlu daftar apapun.
              </p>
            </div>
            <div class="wb-banner-right">
              <a href="/webinar" class="btn-gold">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  width="14"
                  height="14"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Lihat Jadwal Webinar
              </a>
              <div class="wb-note">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,.3)"
                  stroke-width="2"
                >
                  <path d="M9 11l3 3L22 4" />
                </svg>
                Gratis · Tidak ada komitmen · Recording di YouTube
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
import { useTrainingStore } from "~/stores/trainingStore";
import { useProgramStore } from "~/stores/programStore";
import { useArticleStore } from "~/stores/articleStore";
import { useInsightStore } from "~/stores/insightStore";
import { storeToRefs } from "pinia";

const { pushEvent } = useAnalytics();

const activeTab = ref("#router");

useSeoMeta({
  title: "Resources - DKN Indonesia",
  description: "Resources DKN Digital",
});

// Trainings Store Logic
const trainingStore = useTrainingStore();
const { trainings: allTrainingsData, isLoading: trainingLoading } =
  storeToRefs(trainingStore);

// Programs Store Logic
const programStore = useProgramStore();
const {
  programs,
  isLoading: programLoading,
  error: programError,
} = storeToRefs(programStore);

// Articles Store Logic
const articleStore = useArticleStore();
const {
  articles,
  isLoading: articleLoading,
  error: articleError,
} = storeToRefs(articleStore);

// Insights Store Logic
const insightStore = useInsightStore();
const {
  insights,
  isLoading: insightLoading,
  error: insightError,
} = storeToRefs(insightStore);

onMounted(async () => {
  const hash = window.location.hash;
  let targetCardId: string | null = null;

  if (hash) {
    const cardMatch = hash.match(/^#artikel-(\d+)$/);
    if (cardMatch) {
      activeTab.value = "#artikel";
      targetCardId = hash.slice(1);
    } else {
      activeTab.value = hash;
    }
  }

  // trainingStore.fetchTrainings();
  await Promise.all([
    programStore.fetchPrograms(),
    articleStore.fetchArticles(),
    insightStore.fetchInsights(),
  ]);

  if (targetCardId) {
    await nextTick();
    document.getElementById(targetCardId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

const displayLimit = ref(10);
const isLoadingMore = ref(false);

const trainings = computed(() =>
  allTrainingsData.value.slice(0, displayLimit.value),
);
const hasMore = computed(
  () => allTrainingsData.value.length > displayLimit.value,
);

const loadMore = async () => {
  isLoadingMore.value = true;
  // Artificial delay to show loading state as requested
  await new Promise((resolve) => setTimeout(resolve, 800));
  displayLimit.value += 10;
  isLoadingMore.value = false;
};

const getCategoryStyles = (category: string) => {
  const cat = category ? category.toLowerCase() : "";
  if (cat.includes("banking"))
    return { bg: "rgba(34, 160, 148, 0.1)", color: "#22A094", type: "pulse" };
  if (cat.includes("leadership"))
    return { bg: "rgba(196, 146, 58, 0.1)", color: "#C4923A", type: "user" };
  if (cat.includes("finance") || cat.includes("risk"))
    return { bg: "rgba(55, 138, 221, 0.1)", color: "#378ADD", type: "check" };
  if (cat.includes("strategy") || cat.includes("business"))
    return { bg: "rgba(139, 92, 246, 0.1)", color: "#8B5CF6", type: "trend" };
  if (cat.includes("marketing") || cat.includes("sales"))
    return {
      bg: "rgba(226, 75, 74, 0.1)",
      color: "#D63F3E",
      type: "megaphone",
    };
  return { bg: "rgba(26, 122, 110, 0.1)", color: "#1A7A6E", type: "default" };
};

const submitted = ref(false);

const getProgramMeta = (category: string, isSignature: boolean) => {
  if (isSignature) {
    return {
      bg: "rgba(196, 146, 58, 0.15)",
      color: "#C4923A",
      icon: "signature",
    };
  }
  const cat = category.toLowerCase();
  if (cat.includes("leadership"))
    return { bg: "rgba(55, 138, 221, 0.1)", color: "#378ADD", icon: "user" };
  if (cat.includes("sales") || cat.includes("service"))
    return { bg: "rgba(34, 160, 148, 0.1)", color: "#22A094", icon: "zap" };
  if (cat.includes("banking") || cat.includes("risk"))
    return { bg: "rgba(139, 92, 246, 0.1)", color: "#8B5CF6", icon: "check" };
  if (cat.includes("strategy") || cat.includes("finance"))
    return { bg: "rgba(196, 146, 58, 0.1)", color: "#C4923A", icon: "trend" };
  return { bg: "rgba(26, 122, 110, 0.1)", color: "#1A7A6E", icon: "default" };
};

const getArticleMeta = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes("leadership"))
    return {
      grad: "linear-gradient(135deg, #071a12, #0d3824)",
      ico: "rgba(26,122,110,.6)",
      badgeBg: "rgba(34, 160, 148, 0.15)",
      badgeColor: "var(--teal2)",
      badgeBorder: "rgba(34, 160, 148, 0.25)",
      icon: "user",
    };
  if (cat.includes("sales"))
    return {
      grad: "linear-gradient(135deg, #1a0e00, #2a1800)",
      ico: "rgba(196,146,58,.6)",
      badgeBg: "rgba(196, 146, 58, 0.15)",
      badgeColor: "var(--gold2)",
      badgeBorder: "rgba(196, 146, 58, 0.25)",
      icon: "zap",
    };
  if (cat.includes("finance"))
    return {
      grad: "linear-gradient(135deg, #06101c, #0e243c)",
      ico: "rgba(55,138,221,.6)",
      badgeBg: "rgba(55, 138, 221, 0.15)",
      badgeColor: "#7ec8f7",
      badgeBorder: "rgba(55, 138, 221, 0.25)",
      icon: "trend",
    };
  return {
    grad: "linear-gradient(135deg, #071a12, #0d3824)",
    ico: "rgba(26,122,110,.6)",
    badgeBg: "rgba(34, 160, 148, 0.15)",
    badgeColor: "var(--teal2)",
    badgeBorder: "rgba(34, 160, 148, 0.25)",
    icon: "default",
  };
};

const getInsightMeta = (type?: string) => {
  if (!type) return { bg: "rgba(34, 160, 148, 0.15)", color: "#22A094" };
  switch (type) {
    case "trend":
      return { bg: "rgba(34, 160, 148, 0.15)", color: "#22A094" };
    case "user":
      return { bg: "rgba(196, 146, 58, 0.15)", color: "#D9AA55" };
    case "shield":
      return { bg: "rgba(139, 92, 246, 0.15)", color: "#A78BFA" };
    case "monitor":
      return { bg: "rgba(55, 138, 221, 0.15)", color: "#7EC8F7" };
    case "zap":
      return { bg: "rgba(34, 160, 148, 0.15)", color: "#22A094" };
    case "info":
      return { bg: "rgba(196, 146, 58, 0.15)", color: "#D9AA55" };
    default:
      return { bg: "rgba(34, 160, 148, 0.15)", color: "#22A094" };
  }
};

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
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(34, 160, 148, 0.08) 0%,
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
  font-size: 15px;
  color: rgba(255, 255, 255, 0.56);
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 28px;
}
.ph-btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
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
.tnav-tab {
  padding: 18px 22px;
  font-size: 13px;
  font-weight: 600;
  color: var(--slate);
  border-bottom: 2px solid transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
}
.tnav-tab:hover {
  color: var(--ink);
}
.tnav-tab.active {
  color: var(--teal2);
  border-bottom-color: var(--teal2);
}

/* SECTIONS */
.sec {
  padding: 72px 52px;
}
.sec-sm {
  padding: 48px 52px;
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

/* ═══ ROUTER SECTION ═══ */
.router-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}
.router-card {
  border-radius: 16px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.18s,
    box-shadow 0.18s;
  text-decoration: none;
}
.router-card:hover {
  transform: translateY(-3px);
}
.rc-bg1 {
  background: linear-gradient(140deg, var(--midnight), #0f2540);
  border: 1px solid rgba(34, 160, 148, 0.22);
}
.rc-bg2 {
  background: linear-gradient(140deg, #0d1800, #1c3200);
  border: 1px solid rgba(196, 146, 58, 0.22);
}
.rc-bg3 {
  background: linear-gradient(140deg, #100820, #1e0f40);
  border: 1px solid rgba(139, 92, 246, 0.22);
}
.rc-num {
  font-family: var(--serif);
  font-size: 80px;
  color: rgba(255, 255, 255, 0.03);
  font-weight: 600;
  position: absolute;
  top: 8px;
  right: 18px;
  line-height: 1;
  user-select: none;
}
.rc-ico {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  flex-shrink: 0;
}
.rc-ico svg {
  width: 22px;
  height: 22px;
}
.rc-lbl {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.rc-bg1 .rc-lbl {
  color: var(--teal2);
}
.rc-bg2 .rc-lbl {
  color: var(--gold2);
}
.rc-bg3 .rc-lbl {
  color: #a78bfa;
}
.rc-title {
  font-family: var(--serif);
  font-size: 23px;
  color: #fff;
  font-weight: 600;
  line-height: 1.22;
  margin-bottom: 10px;
}
.rc-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 22px;
}
.rc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}
.rc-tag {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 50px;
}
.rc-bg1 .rc-tag {
  background: rgba(34, 160, 148, 0.13);
  color: var(--teal2);
  border: 1px solid rgba(34, 160, 148, 0.22);
}
.rc-bg2 .rc-tag {
  background: rgba(196, 146, 58, 0.13);
  color: var(--gold2);
  border: 1px solid rgba(196, 146, 58, 0.22);
}
.rc-bg3 .rc-tag {
  background: rgba(139, 92, 246, 0.13);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.22);
}
.rc-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.2s;
  align-self: flex-start;
}
.rc-bg1 .rc-btn {
  background: rgba(34, 160, 148, 0.15);
  color: var(--teal2);
  border: 1px solid rgba(34, 160, 148, 0.25);
}
.rc-bg1 .rc-btn:hover {
  background: var(--teal2);
  color: #fff;
}
.rc-bg2 .rc-btn {
  background: rgba(196, 146, 58, 0.15);
  color: var(--gold2);
  border: 1px solid rgba(196, 146, 58, 0.25);
}
.rc-bg2 .rc-btn:hover {
  background: var(--gold);
  color: var(--midnight);
}
.rc-bg3 .rc-btn {
  background: rgba(139, 92, 246, 0.15);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.25);
}
.rc-bg3 .rc-btn:hover {
  background: #8b5cf6;
  color: #fff;
}
.rc-btn svg {
  width: 13px;
  height: 13px;
}

/* ═══ ARTIKEL SECTION ═══ */
/* Featured article */
.art-featured {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 340px 1fr;
  box-shadow:
    0 2px 8px rgba(20, 34, 56, 0.06),
    0 8px 32px rgba(20, 34, 56, 0.07);
  margin-bottom: 24px;
  margin-top: 36px;
  transition: box-shadow 0.18s;
}
.art-featured:hover {
  box-shadow: 0 4px 40px rgba(20, 34, 56, 0.12);
}
.art-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
}
.art-thumb svg {
  width: 56px;
  height: 56px;
  opacity: 0.6;
}
.art-body {
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.art-meta-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.art-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--teal2);
}
.art-date {
  font-size: 12px;
  color: var(--slate);
  display: flex;
  align-items: center;
  gap: 5px;
}
.art-date svg,
.art-read svg {
  width: 11px;
  height: 11px;
}
.art-read {
  font-size: 12px;
  color: var(--slate);
  display: flex;
  align-items: center;
  gap: 5px;
}
.art-title {
  font-family: var(--serif);
  font-size: 26px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.22;
  margin-bottom: 10px;
}
.art-summary {
  font-size: 14px;
  color: var(--slate);
  line-height: 1.72;
  font-weight: 300;
  margin-bottom: 20px;
}
.art-author-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.art-av {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.art-author-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
}
.art-author-role {
  font-size: 11.5px;
  color: var(--slate);
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
.btn-teal {
  background: var(--teal2);
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.btn-teal:hover {
  background: var(--teal);
}
.btn-teal svg {
  width: 13px;
  height: 13px;
}

/* Article grid */
.art-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.art-card {
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
  scroll-margin-top: 140px;
}
.art-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 24px rgba(20, 34, 56, 0.1);
}
.art-card-thumb {
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.art-card-thumb svg {
  width: 40px;
  height: 40px;
  opacity: 0.55;
}
.art-card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.art-card-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 55%
  );
}
.art-card-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 50px;
  z-index: 1;
}
.art-card-body {
  padding: 20px 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.art-card-date {
  font-size: 11px;
  color: var(--slate);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.art-card-date svg {
  width: 11px;
  height: 11px;
}
.art-card-title {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.28;
  margin-bottom: 9px;
}
.art-card-summary {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 16px;
}
.btn-outline-teal {
  background: none;
  color: var(--teal2);
  border: 1.5px solid var(--teal2);
  padding: 8px 16px;
  border-radius: 7px;
  font-size: 12.5px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;
  align-self: flex-start;
}
.btn-outline-teal:hover {
  background: var(--teal2);
  color: #fff;
}
.art-card-footer {
  padding: 13px 22px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.art-card-author {
  display: flex;
  align-items: center;
  gap: 8px;
}
.art-card-av {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
}
.art-card-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--ink);
}
.art-card-role {
  font-size: 11px;
  color: var(--slate);
}
.art-card-readtime {
  font-size: 11px;
  color: var(--slate);
  display: flex;
  align-items: center;
  gap: 4px;
}
.art-card-readtime svg {
  width: 11px;
  height: 11px;
}

/* Coming soon overlay card */
.art-card-soon {
  opacity: 0.7;
  position: relative;
}
.soon-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 246, 249, 0.7);
  border-radius: 14px;
}
.soon-badge {
  background: var(--ink);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 50px;
}

/* VIEW ALL STRIP */
.view-all-strip {
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  border: 1.5px dashed var(--border);
  border-radius: 12px;
  text-decoration: none;
  color: var(--slate);
  font-size: 13.5px;
  font-weight: 600;
  transition: all 0.2s;
}
.view-all-strip:hover {
  border-color: var(--teal2);
  color: var(--teal2);
  background: var(--teal-pale);
}
.view-all-strip svg {
  width: 14px;
  height: 14px;
}

/* ═══ INSIGHT SECTION ═══ */
.insight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 40px;
}
.insight-card {
  background: var(--deep);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s;
}
.insight-card:hover {
  transform: translateY(-2px);
}
.ic-ico {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.ic-ico svg {
  width: 20px;
  height: 20px;
}
.ic-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 8px;
}
.ic-title {
  font-family: var(--serif);
  font-size: 19px;
  color: #fff;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 10px;
}
.ic-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 18px;
}
.btn-ic {
  background: none;
  color: var(--teal2);
  border: 1px solid rgba(34, 160, 148, 0.3);
  padding: 8px 16px;
  border-radius: 7px;
  font-size: 12.5px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  align-self: flex-start;
}
.btn-ic:hover {
  background: var(--teal2);
  color: #fff;
  border-color: var(--teal2);
}
.btn-ic svg {
  width: 12px;
  height: 12px;
}

/* ═══ KATALOG ROUTER ═══ */
.katalog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 36px;
}
.kat-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 22px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(20, 34, 56, 0.05);
  transition:
    transform 0.15s,
    box-shadow 0.15s;
  text-decoration: none;
}
.kat-card:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 12px rgba(20, 34, 56, 0.1);
}
.kat-ico {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 10px;
}
.kat-ico svg {
  width: 20px;
  height: 20px;
}
.kat-info {
  flex: 1;
}
.kat-cat {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 3px;
}
.kat-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 3px;
}
.kat-desc {
  font-size: 12.5px;
  color: var(--slate);
  line-height: 1.5;
}
.kat-arrow {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: var(--mist);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s;
}
.kat-card:hover .kat-arrow {
  background: var(--teal2);
}
.kat-arrow svg {
  width: 13px;
  height: 13px;
  color: var(--slate);
  transition: color 0.2s;
}
.kat-card:hover .kat-arrow svg {
  color: #fff;
}
.kat-soon {
  background: rgba(34, 160, 148, 0.1);
  color: var(--teal);
  border: 1px solid rgba(34, 160, 148, 0.2);
  font-size: 11px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 50px;
  flex-shrink: 0;
}

/* ═══ WEBINAR CTA BANNER ═══ */
.wb-banner {
  background: linear-gradient(140deg, var(--navy), #0d1e35);
  border-top: 3px solid var(--gold);
  border-radius: 20px;
  padding: 52px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
}
.wb-banner h2 {
  font-family: var(--serif);
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 10px;
}
.wb-banner h2 em {
  color: var(--gold2);
  font-style: italic;
}
.wb-banner p {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.7;
  font-weight: 300;
  max-width: 500px;
}
.wb-banner-right {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  flex-shrink: 0;
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
  white-space: nowrap;
}
.btn-gold:hover {
  background: var(--gold2);
  transform: translateY(-1px);
}
.btn-gold svg {
  width: 14px;
  height: 14px;
}
.wb-note {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.28);
  display: flex;
  align-items: center;
  gap: 5px;
}
.wb-note svg {
  width: 12px;
  height: 12px;
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

/* WA FAB */
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

/* KATALOG LOADING & EMPTY */
.kat-loading {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 0;
}
.kat-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(34, 160, 148, 0.1);
  border-top-color: var(--teal2);
  border-radius: 50%;
  margin: 0 auto 16px;
  animation: ani-spin 0.8s linear infinite;
}
.kat-loading p {
  font-size: 14px;
  color: var(--slate);
}

.kat-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 40px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
}
.ke-ico {
  width: 56px;
  height: 56px;
  background: var(--mist);
  color: var(--slate);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.ke-ico svg {
  width: 28px;
  height: 28px;
}
.kat-empty h3 {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--ink);
  margin-bottom: 8px;
}
.kat-empty p {
  font-size: 14px;
  color: var(--slate);
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
}

@keyframes ani-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 900px) {
  nav {
    padding: 0 20px;
  }
  .nav-links,
  .nav-actions {
    display: none;
  }
  .page-hero {
    padding: 52px 20px;
  }
  .ph-h {
    font-size: 32px;
  }
  .sec,
  .sec-sm {
    padding: 52px 20px;
  }
  .router-grid,
  .art-grid,
  .insight-grid {
    grid-template-columns: 1fr;
  }
  .katalog-grid {
    grid-template-columns: 1fr;
  }
  .art-featured {
    grid-template-columns: 1fr;
  }
  .art-thumb {
    height: 180px;
  }
  .art-body {
    padding: 28px;
  }
  .wb-banner {
    flex-direction: column;
    padding: 36px;
  }
  .wb-banner-right {
    align-items: flex-start;
  }
  .tab-nav-inner {
    padding: 0 20px;
    overflow-x: auto;
  }
  footer {
    padding: 48px 20px 24px;
  }
  .ft-top {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
}
/* @media (max-width: 900px) {
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

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(34, 160, 148, 0.1);
  border-top: 3px solid var(--teal);
  border-radius: 50%;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}

.btn-loader {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;
  vertical-align: middle;
} */

/* @keyframes spin {
  to { transform: rotate(360deg); }
} */
</style>
