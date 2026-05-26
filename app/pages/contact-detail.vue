<template>
  <div>
    <AppHeader />

    <main>
      <!-- ═══ SECTION 1: HERO ═══ -->
      <section class="page-hero">
        <div class="page-hero__glow"></div>
        <div class="page-hero__grid"></div>
        <div class="page-hero__inner">
          <div class="chip chip--teal">
            <div class="chip__dot"></div>
            Hubungi Kami
          </div>
          <h1 class="sec-h sec-h--lg sec-h--white">
            Informasi Kontak DKN Indonesia
          </h1>
          <p class="sec-sub sec-sub--white mt-16">
            Kami siap membantu — baik untuk pertanyaan tentang program,
            konsultasi corporate, maupun kebutuhan informasi lainnya.
          </p>
          <div
            class="mt-32"
            style="
              display: flex;
              gap: 14px;
              justify-content: center;
              flex-wrap: wrap;
            "
          >
            <a
              :href="`https://wa.me/${profile?.contact?.whatsapp_number}?text=Halo%20DKN%2C%20saya%20ingin%20berkonsultasi.`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--gold btn--lg"
              aria-label="Chat via WhatsApp"
            >
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
              Chat WhatsApp Sekarang
            </a>
            <NuxtLink to="/contact" class="btn btn--ghost-w btn--lg"
              >Ajukan Konsultasi Corporate</NuxtLink
            >
          </div>
        </div>
      </section>

      <!-- ═══ SECTION 2: INFORMASI KONTAK ═══ -->
      <section class="section bg--mist">
        <div class="wrap">
          <span class="sec-label">Informasi Kontak</span>
          <h2 class="sec-h">Cara Menghubungi Kami</h2>
          <p class="sec-sub">
            Pilih cara yang paling nyaman bagi Anda. Kami merespons semua
            saluran komunikasi dalam jam kerja.
          </p>

          <div class="contact-info-grid">
            <!-- Kantor -->
            <div class="contact-info-tile">
              <div
                class="contact-info-tile__ico"
                style="
                  background: rgba(34, 160, 148, 0.1);
                  border: 1px solid rgba(34, 160, 148, 0.18);
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22A094"
                  stroke-width="2"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3>Kantor Pusat</h3>
                <div
                  class="contact-info-tile__value"
                  v-html="profile?.contact?.address"
                ></div>
                <div class="contact-info-tile__note">
                  Kunjungan dengan janji — hubungi kami terlebih dahulu
                </div>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="contact-info-tile">
              <div
                class="contact-info-tile__ico"
                style="
                  background: rgba(37, 211, 102, 0.1);
                  border: 1px solid rgba(37, 211, 102, 0.18);
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                  />
                  <path
                    d="M11.99 2C6.473 2 2 6.473 2 11.99c0 1.776.46 3.447 1.263 4.913L2.05 21.95l5.173-1.195A9.94 9.94 0 0011.99 22c5.516 0 9.99-4.474 9.99-9.99C21.98 6.473 17.506 2 11.99 2z"
                  />
                </svg>
              </div>
              <div>
                <h3>WhatsApp</h3>
                <div class="contact-info-tile__value">
                  <a
                    :href="`https://wa.me/${profile?.contact?.whatsapp_number}?text=Halo%20DKN%2C%20saya%20ingin%20berkonsultasi.`"
                    target="_blank"
                    rel="noopener noreferrer"
                    >+{{ profile?.contact?.whatsapp_number }}</a
                  >
                </div>
                <div class="contact-info-tile__note">
                  Respons dalam jam kerja — biasanya &lt; 2 jam
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="contact-info-tile">
              <div
                class="contact-info-tile__ico"
                style="
                  background: rgba(196, 146, 58, 0.1);
                  border: 1px solid rgba(196, 146, 58, 0.18);
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4923A"
                  stroke-width="2"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3>Email Resmi</h3>
                <div class="contact-info-tile__value">
                  <a :href="`mailto:${profile?.contact?.email}`">{{
                    profile?.contact?.email
                  }}</a>
                </div>
                <div class="contact-info-tile__note">
                  Untuk inquiry formal, proposal, dan dokumentasi
                </div>
              </div>
            </div>

            <!-- Jam Operasional -->
            <div class="contact-info-tile">
              <div
                class="contact-info-tile__ico"
                style="
                  background: rgba(20, 34, 56, 0.07);
                  border: 1px solid rgba(20, 34, 56, 0.12);
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#142238"
                  stroke-width="2"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3>Jam Operasional</h3>
                <div class="contact-info-tile__value">Senin – Jumat</div>
                <div class="contact-info-tile__note">
                  08.00 – 17.00 WIB<br />Sabtu – Minggu: Libur (respons WA
                  mungkin terbatas)
                </div>
              </div>
            </div>
          </div>

          <!-- Social media links -->
          <div style="margin-top: 36px">
            <p
              style="
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.8px;
                color: var(--slate);
                margin-bottom: 16px;
              "
            >
              Ikuti Kami di Media Sosial
            </p>
            <div class="social-row">
              <template
                v-for="social in profile?.social_media"
                :key="social.platform"
              >
                <a
                  :href="social.url"
                  class="social-link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Ikuti kami di ${social.platform}`"
                >
                  <div
                    class="social-link-card__ico"
                    :style="`background:${social.url.includes('linkedin') ? '#0A66C2' : social.url.includes('instagram') ? 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)' : social.url.includes('youtube') ? '#FF0000' : social.url.includes('threads') ? '#000' : social.url.includes('facebook') ? '#0A66C2' : '#0A66C2'}`"
                  >
                    <Icon
                      :name="social.icon"
                      size="24"
                      color="white"
                      aria-hidden="true"
                      style="color: #fff"
                    />
                  </div>
                  <div>
                    <h4>
                      {{
                        social.url.includes("linkedin")
                          ? "LinkedIn"
                          : social.url.includes("instagram")
                            ? "Instagram"
                            : social.url.includes("youtube")
                              ? "YouTube"
                              : social.url.includes("threads")
                                ? "Threads"
                                : social.url.includes("facebook")
                                  ? "Facebook"
                                  : "Media Sosial"
                      }}
                    </h4>
                    <p>{{ profile?.site_name }}</p>
                  </div>
                </a>
              </template>
              <!-- <a href="#" class="social-link-card" target="_blank" rel="noopener">
                <div class="social-link-card__ico" style="background:linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <p>@dknindonesia</p>
                </div>
              </a>
              <a href="#" class="social-link-card" target="_blank" rel="noopener">
                <div class="social-link-card__ico" style="background:#FF0000">
                  <svg viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"/></svg>
                </div>
                <div>
                  <h4>YouTube</h4>
                  <p>DKN Indonesia</p>
                </div>
              </a> -->
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ SECTION 3: MAP / LOKASI ═══ -->
      <section class="section bg--white">
        <div class="wrap">
          <span class="sec-label">Lokasi Kami</span>
          <h2 class="sec-h">Temukan Kantor DKN Indonesia</h2>
          <p class="sec-sub">
            Kunjungan langsung tersedia dengan janji sebelumnya. Hubungi kami
            via WhatsApp untuk mengatur jadwal.
          </p>

          <div class="map-wrap mt-48">
            <div class="map-placeholder">
              <iframe
                v-if="profile?.contact?.google_maps_url"
                :src="profile?.contact?.google_maps_url"
                width="100%"
                height="420"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                title="Lokasi Kantor DKN Indonesia di Google Maps"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
              <div v-else class="map-loading">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  width="48"
                  height="48"
                  aria-hidden="true"
                  class="animate-pulse"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p>Memuat peta lokasi...</p>
              </div>
            </div>

            <div class="map-overlay-card">
              <h4>DKN Indonesia</h4>
              <p
                v-html="
                  profile?.contact?.address ||
                  'Jl. Sudirman Kav. 25<br>Jakarta Pusat 10220'
                "
              ></p>
              <a
                :href="`https://maps.google.com/?q=${encodeURIComponent(profile?.contact?.address || 'DKN Indonesia')}`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--teal btn--sm btn--block"
                aria-label="Buka alamat DKN Indonesia di Google Maps"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>

          <!-- Quick FAQ about visiting -->
          <div class="faq-list">
            <div class="faq-item">
              <h4>Apakah bisa berkunjung langsung ke kantor?</h4>
              <p>
                Ya, kunjungan langsung dipersilakan dengan janji sebelumnya.
                Hubungi kami via WhatsApp minimal satu hari kerja sebelumnya
                untuk mengatur jadwal pertemuan.
              </p>
            </div>
            <div class="faq-item">
              <h4>Apakah ada parkir di kantor?</h4>
              <p>
                Tersedia area parkir terbatas di gedung. Kami rekomendasikan
                menggunakan transportasi umum (KRL, MRT, Transjakarta) atau
                layanan ride-hailing untuk kemudahan akses.
              </p>
            </div>
            <div class="faq-item">
              <h4>Bisakah konsultasi dilakukan secara online/virtual?</h4>
              <p>
                Tentu saja. Sebagian besar konsultasi dan discovery call
                dilakukan melalui Zoom atau Google Meet. Hubungi kami dan kami
                akan mengatur sesi virtual yang sesuai jadwal Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ SECTION 4: CTA KONSULTASI ═══ -->
      <section class="section bg--mist">
        <div class="wrap">
          <div class="konsultasi-cta">
            <div>
              <h2>
                Siap Mendiskusikan Kebutuhan<br /><em
                  >Pelatihan Organisasi Anda?</em
                >
              </h2>
              <p class="mt-12">
                Ajukan konsultasi melalui formulir kami dan tim DKN akan
                menghubungi Anda dalam 1×24 jam kerja untuk mendiskusikan
                kebutuhan pengembangan SDM secara lebih mendalam.
              </p>
            </div>
            <div class="konsultasi-cta__right">
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
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                Ajukan Konsultasi
              </NuxtLink>
              <div class="konsultasi-cta__note">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,.3)"
                  stroke-width="2"
                  width="12"
                  height="12"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Gratis · Tanpa komitmen · Respons 1×24 jam
              </div>
              <a
                :href="`https://wa.me/${profile?.contact?.whatsapp_number}?text=Halo%20DKN%2C%20saya%20ingin%20berkonsultasi%20tentang%20kebutuhan%20program%20atau%20pelatihan%20untuk%20instansi/organisasi%20saya.`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--ghost-w btn--md"
                style="margin-top: 2px"
                aria-label="Konsultasi via WhatsApp"
              >
                Atau via WhatsApp →
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
import { useProfileStore } from "~/stores/profileStore";

useSeoMeta({
  title: "Contact Detail - DKN Indonesia",
  description: "Hubungi DKN Digital untuk info lebih lanjut",
});

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchProfile();
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
  background: radial-gradient(
    circle,
    rgba(34, 160, 148, 0.12) 0%,
    transparent 70%
  );
  pointer-events: none;
}
.page-hero__grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 50px 50px;
}
.page-hero__inner {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

/* CONTACT INFO GRID */
.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 48px;
}
.contact-info-tile {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 28px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: flex-start;
  gap: 18px;
}
.contact-info-tile__ico {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.contact-info-tile__ico svg {
  width: 24px;
  height: 24px;
}
.contact-info-tile h3 {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--slate);
  margin-bottom: 8px;
}
.contact-info-tile__value {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.5;
}
.contact-info-tile__value a {
  color: var(--teal2);
  text-decoration: none;
}
.contact-info-tile__value a:hover {
  text-decoration: underline;
}
.contact-info-tile__note {
  font-size: 13px;
  color: var(--slate);
  margin-top: 4px;
  line-height: 1.55;
}

/* SOCIAL LINKS ROW */
.social-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 20px;
}
.social-link-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 20px 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  box-shadow: var(--shadow);
  transition:
    transform 0.15s,
    box-shadow 0.15s;
}
.social-link-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-h);
}
.social-link-card__ico {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.social-link-card__ico svg {
  width: 20px;
  height: 20px;
}
.social-link-card h4 {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 2px;
}
.social-link-card p {
  font-size: 12px;
  color: var(--slate);
}

/* MAP SECTION */
.map-wrap {
  background: var(--mist);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  overflow: hidden;
  position: relative;
}
.map-placeholder {
  height: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: linear-gradient(135deg, #f0f3f8, #e8ecf2);
}
.map-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--slate);
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
/* 
  DEVELOPER NOTE:
  Replace .map-placeholder div with:
  <iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="100%" height="420"
    style="border:0" allowfullscreen loading="lazy">
  </iframe>
*/
.map-overlay-card {
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 18px 22px;
  box-shadow: 0 4px 24px rgba(20, 34, 56, 0.14);
  max-width: 280px;
}
.map-overlay-card h4 {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 5px;
}
.map-overlay-card p {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.55;
  margin-bottom: 12px;
}

/* FAQ QUICK */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
}
.faq-item {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  padding: 18px 22px;
}
.faq-item h4 {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 6px;
}
.faq-item p {
  font-size: 13.5px;
  color: var(--slate);
  line-height: 1.6;
}

/* CTA KONSULTASI */
.konsultasi-cta {
  background: var(--midnight);
  border-radius: var(--r-xl);
  padding: 56px 52px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}
.konsultasi-cta h2 {
  font-family: var(--serif);
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 10px;
}
.konsultasi-cta h2 em {
  color: var(--gold2);
  font-style: italic;
}
.konsultasi-cta p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.7;
  font-weight: 300;
}
.konsultasi-cta__right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
}
.konsultasi-cta__note {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.28);
  display: flex;
  align-items: center;
  gap: 5px;
}
.konsultasi-cta__note svg {
  width: 12px;
  height: 12px;
}

@media (max-width: 900px) {
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
  .social-row {
    grid-template-columns: 1fr;
  }
  .konsultasi-cta {
    grid-template-columns: 1fr;
  }
  .konsultasi-cta__right {
    align-items: flex-start;
  }
  .map-overlay-card {
    position: static;
    margin: 0 16px 16px;
    max-width: 100%;
  }
  .map-wrap {
    border-radius: var(--r-lg);
  }
}
</style>
