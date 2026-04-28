<template>
  <div>
    <AppHeader />

    <main>
      <!-- PAGE HERO -->
      <section class="page-hero">
        <div class="page-hero__glow"></div>
        <div class="page-hero__grid"></div>
        <div class="page-hero__inner">
          <div class="chip chip--teal"><div class="chip__dot"></div>Konsultasi B2B</div>
          <h1 class="sec-h sec-h--lg sec-h--white">Konsultasi Corporate DKN</h1>
          <p class="sec-sub sec-sub--white mt-16">
            Diskusikan kebutuhan pengembangan kompetensi organisasi Anda bersama tim konsultan DKN.
            Tidak ada komitmen — hanya percakapan yang bermakna.
          </p>
        </div>
      </section>


      <!-- MAIN CONTACT SECTION -->
      <section class="section bg--mist">
        <div class="wrap">
          <div class="contact-layout">

            <!-- FORM CARD -->
            <div class="contact-form-card">
              <h2>Kirim Permintaan Konsultasi</h2>
              <p>Isi formulir di bawah ini dan tim DKN akan menghubungi Anda dalam 1×24 jam kerja untuk mendiskusikan kebutuhan pelatihan organisasi Anda.</p>

              <!--
                DEVELOPER NOTE:
                - action=""  → sesuaikan ke endpoint backend / form handler
                - method="POST"
                - Add CSRF token if using server-side rendering
                - Consider: Formspree, EmailJS, or custom API endpoint
              -->
              <form v-if="!submitted" class="form-grid" id="consultForm" @submit.prevent="handleSubmit">

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="nama">Nama Lengkap <span style="color:#E24B4A">*</span></label>
                    <input class="form-control" type="text" id="nama" name="nama" placeholder="Nama Anda" required autocomplete="name">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="perusahaan">Nama Perusahaan <span style="color:#E24B4A">*</span></label>
                    <input class="form-control" type="text" id="perusahaan" name="perusahaan" placeholder="PT / CV / Bank ..." required autocomplete="organization">
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="email">Email Bisnis <span style="color:#E24B4A">*</span></label>
                    <input class="form-control" type="email" id="email" name="email" placeholder="nama@perusahaan.com" required autocomplete="email">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="wa">Nomor WhatsApp <span style="color:#E24B4A">*</span></label>
                    <input class="form-control" type="tel" id="wa" name="whatsapp" placeholder="+62 812 XXXX XXXX" required autocomplete="tel">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="jabatan">Jabatan / Posisi</label>
                  <input class="form-control" type="text" id="jabatan" name="jabatan" placeholder="Contoh: HR Manager, Training Manager, Direktur HRD">
                </div>

                <div class="form-group">
                  <label class="form-label" for="layanan">Layanan yang Diminati</label>
                  <select class="form-control form-control--select" id="layanan" name="layanan">
                    <option value="">— Pilih layanan —</option>
                    <option value="corporate-training">Corporate Training (In-house)</option>
                    <option value="advisory">Advisory &amp; Strategic Consulting</option>
                    <option value="digital-learning">Digital Learning / LMS Enterprise</option>
                    <option value="certification">Certification Programs</option>
                    <option value="assessment">Assessment Center</option>
                    <option value="lainnya">Lainnya / Gabungan</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="kebutuhan">Kebutuhan Training <span style="color:#E24B4A">*</span></label>
                  <textarea class="form-control form-control--textarea" id="kebutuhan" name="kebutuhan"
                    placeholder="Ceritakan singkat tentang kebutuhan pengembangan SDM organisasi Anda: topik yang ingin dibahas, jumlah peserta, urgency, atau tantangan spesifik yang dihadapi..." required></textarea>
                </div>

                <div>
                  <button type="submit" class="btn btn--gold btn--lg btn--block text-mist" style="margin-bottom:10px">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    Kirim Permintaan Konsultasi
                  </button>
                  <div class="form-submit-note">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Informasi Anda bersifat rahasia. Tim DKN akan menghubungi dalam 1×24 jam kerja.
                  </div>
                </div>

              </form>

              <!-- Success state (shown after submit via JS) -->
              <div v-if="submitted" class="form-success" id="formSuccess" style="display: block;">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h3>Permintaan Terkirim!</h3>
                <p>Terima kasih. Tim konsultan DKN akan menghubungi Anda melalui WhatsApp atau email dalam 1×24 jam kerja untuk mendiskusikan kebutuhan pelatihan Anda.</p>
              </div>
            </div>


            <!-- SIDEBAR -->
            <div class="contact-sidebar">

              <!-- Contact Info -->
              <div class="contact-info-card">
                <h3>Hubungi Kami Langsung</h3>
                <div class="contact-info-items">
                  <div class="contact-info-item">
                    <div class="ci-ico"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
                    <div>
                      <div class="ci-label">WhatsApp</div>
                      <div class="ci-value"><a :href="`https://wa.me/${profile?.contact?.whatsapp_number}`" target="_blank" rel="noopener">+{{ profile?.contact?.whatsapp_number }}</a></div>
                    </div>
                  </div>
                  <div class="contact-info-item">
                    <div class="ci-ico"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                    <div>
                      <div class="ci-label">Email</div>
                      <div class="ci-value"><a :href="`mailto:${profile?.contact?.email}`">{{ profile?.contact?.email }}</a></div>
                    </div>
                  </div>
                  <div class="contact-info-item">
                    <div class="ci-ico"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                    <div>
                      <div class="ci-label">Kantor</div>
                      <div class="ci-value">{{ profile?.contact?.address }}</div>
                    </div>
                  </div>
                  <div class="contact-info-item">
                    <div class="ci-ico"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                    <div>
                      <div class="ci-label">Jam Operasional</div>
                      <div class="ci-value">Senin – Jumat, 08.00 – 17.00 WIB</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- WA Quick CTA -->
              <a class="wa-cta-card" :href="`https://wa.me/${profile?.contact?.whatsapp_number}?text=Halo%20DKN%2C%20saya%20ingin%20berkonsultasi%20tentang%20kebutuhan%20training%20perusahaan%20kami.`" target="_blank" rel="noopener">
                <div class="wa-cta-card__ico">
                  <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 2C6.473 2 2 6.473 2 11.99c0 1.776.46 3.447 1.263 4.913L2.05 21.95l5.173-1.195A9.94 9.94 0 0011.99 22c5.516 0 9.99-4.474 9.99-9.99C21.98 6.473 17.506 2 11.99 2zm0 18.18c-1.608 0-3.11-.44-4.395-1.203l-.315-.187-3.27.756.783-3.176-.205-.328A8.16 8.16 0 013.82 11.99c0-4.503 3.667-8.17 8.17-8.17 4.503 0 8.17 3.667 8.17 8.17 0 4.503-3.667 8.19-8.17 8.19z"/></svg>
                </div>
                <div>
                  <h4>Chat via WhatsApp</h4>
                  <p>Respons lebih cepat — tim kami siap membantu</p>
                </div>
              </a>

              <!-- Promise Card -->
              <div class="promise-card">
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Yang Anda Dapat
                </h4>
                <div class="promise-items">
                  <div class="promise-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Discovery call 30 menit gratis — tanpa komitmen</div>
                  <div class="promise-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Diagnosis kebutuhan training spesifik organisasi Anda</div>
                  <div class="promise-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Rekomendasi program yang tepat sasaran dan terukur</div>
                  <div class="promise-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/></svg>Proposal harga transparan sesuai kebutuhan</div>
                </div>
              </div>

              <!-- Services Tags -->
              <div class="services-card">
                <h4>Layanan yang Tersedia</h4>
                <div class="services-tags">
                  <span class="tag tag--teal">Corporate Training</span>
                  <span class="tag tag--gold">Advisory</span>
                  <span class="tag tag--teal">Digital Learning</span>
                  <span class="tag tag--navy">Certification</span>
                  <span class="tag tag--navy">Assessment Center</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <!-- PROSES KONSULTASI -->
      <section class="section bg--white">
        <div class="wrap">
          <span class="sec-label">Proses Kami</span>
          <h2 class="sec-h">Bagaimana Proses<br>Konsultasi Berlangsung</h2>
          <p class="sec-sub">Transparan, tidak berbelit, dan fokus pada kebutuhan Anda.</p>

          <div class="process-steps">
            <div class="process-conn"></div>
            <div class="process-step">
              <div class="ps-node ps1">1</div>
              <h4>Kirim Formulir</h4>
              <p>Isi formulir dengan kebutuhan dan kondisi organisasi Anda</p>
            </div>
            <div class="process-step">
              <div class="ps-node ps2">2</div>
              <h4>Tim Menghubungi</h4>
              <p>Konsultan DKN menghubungi dalam 1×24 jam kerja via WA/email</p>
            </div>
            <div class="process-step">
              <div class="ps-node ps3">3</div>
              <h4>Discovery Call</h4>
              <p>Sesi 30 menit untuk memahami kebutuhan dan tantangan Anda</p>
            </div>
            <div class="process-step">
              <div class="ps-node ps4">4</div>
              <h4>Proposal &amp; Solusi</h4>
              <p>Kami presentasikan solusi dan proposal yang disesuaikan</p>
            </div>
          </div>
        </div>
      </section>


      <!-- ALTERNATIVE: Webinar as first step -->
      <section class="section--sm bg--mist">
        <div class="wrap" style="text-align:center">
          <span class="sec-label" style="display:block;text-align:center">Belum Siap Berkonsultasi?</span>
          <h2 class="sec-h" style="font-size:26px;margin-bottom:10px">Mulai dari Webinar Gratis Kami</h2>
          <p class="sec-sub" style="margin:0 auto 24px;max-width:420px;text-align:center">
            Ikuti webinar gratis DKN untuk mendapatkan gambaran pendekatan dan metodologi kami
            sebelum memutuskan untuk berkonsultasi lebih lanjut.
          </p>
          <NuxtLink to="/webinar" class="btn btn--outline-dark btn--lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Lihat Jadwal Webinar Gratis
          </NuxtLink>
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
  title: 'Konsultasi Corporate — DKN Indonesia',
  description: 'Konsultasi corporate training dan advisory DKN Indonesia — diskusikan kebutuhan pengembangan SDM organisasi Anda.',
});

const form = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});
const submitted = ref(false);

const handleSubmit = () => {
  // Logic for form submission would go here
  submitted.value = true;
  const whatsappMessage = `Halo DKN, saya ingin berkonsultasi tentang kebutuhan training perusahaan kami. Berikut adalah detailnya:

Nama: ${form.value.name}
Email: ${form.value.email}
Perusahaan: ${form.value.company}
Kebutuhan: ${form.value.message}`;
  const whatsappUrl = `https://wa.me/${profile.value?.contact.whatsapp_number}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
};

useHead({
  htmlAttrs: {
    lang: "id",
  },
});

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchProfile();
});
</script>

<style scoped>
/* ── CONTACT PAGE SPECIFIC ─── */

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

/* FORM ELEMENTS */
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-label { font-size: 12px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; color: var(--slate); }
.form-control {
  padding: 12px 16px; border: 1px solid var(--border);
  border-radius: var(--r-md); font-size: 14px;
  font-family: var(--sans); color: var(--ink);
  background: #fff; outline: none; transition: border .2s, box-shadow .2s;
  width: 100%;
}
.form-control:focus {
  border-color: var(--teal2);
  box-shadow: 0 0 0 3px rgba(34, 160, 148, 0.1);
}
.form-control--textarea { min-height: 110px; resize: vertical; }
.form-control--select {
  cursor: pointer; appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234E6070' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center;
}

/* FORM LAYOUT */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 60px;
  align-items: start;
}

/* LEFT: form */
.contact-form-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  padding: 40px;
  box-shadow: var(--shadow);
}
.contact-form-card h2 {
  font-family: var(--serif);
  font-size: 28px; font-weight: 600;
  color: var(--ink); margin-bottom: 6px;
}
.contact-form-card > p {
  font-size: 14px; color: var(--slate);
  line-height: 1.65; margin-bottom: 32px;
}
.form-grid { display: flex; flex-direction: column; gap: 18px; }
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

/* Form success state placeholder */
.form-success {
  display: none; /* shown via JS after submit */
  text-align: center; padding: 40px 20px;
}
.form-success svg { width: 56px; height: 56px; margin-bottom: 16px; }
.form-success h3 { font-family: var(--serif); font-size: 24px; color: var(--ink); margin-bottom: 8px; }
.form-success p { font-size: 14px; color: var(--slate); line-height: 1.65; }

.form-submit-note {
  font-size: 12px; color: var(--slate);
  margin-top: 12px; display: flex; align-items: center; gap: 6px;
}
.form-submit-note svg { width: 13px; height: 13px; }

/* RIGHT: info sidebar */
.contact-sidebar { display: flex; flex-direction: column; gap: 16px; }

.contact-info-card {
  background: var(--midnight);
  border-radius: var(--r-lg); padding: 28px;
}
.contact-info-card h3 {
  font-family: var(--serif); font-size: 20px;
  color: #fff; font-weight: 600; margin-bottom: 16px;
}
.contact-info-items { display: flex; flex-direction: column; gap: 14px; }
.contact-info-item { display: flex; align-items: flex-start; gap: 12px; }
.ci-ico {
  width: 36px; height: 36px; border-radius: 8px;
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.1);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.ci-ico svg { width: 16px; height: 16px; }
.ci-label { font-size: 11px; color: rgba(255,255,255,.35); margin-bottom: 2px; font-weight: 600; letter-spacing: .3px; text-transform: uppercase; }
.ci-value { font-size: 13.5px; color: rgba(255,255,255,.75); line-height: 1.5; }
.ci-value a { color: var(--teal2); text-decoration: none; }
.ci-value a:hover { text-decoration: underline; }

/* Promise card */
.promise-card {
  background: var(--gold-pale);
  border: 1px solid rgba(196,146,58,.2);
  border-radius: var(--r-lg); padding: 24px;
}
.promise-card h4 { font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
.promise-card h4 svg { width: 16px; height: 16px; }
.promise-items { display: flex; flex-direction: column; gap: 9px; }
.promise-item { display: flex; align-items: flex-start; gap: 9px; font-size: 13px; color: var(--slate); line-height: 1.5; }
.promise-item svg { width: 14px; height: 14px; flex-shrink: 0; margin-top: 2px; }

/* Services covered */
.services-card {
  background: var(--mist);
  border: 1px solid var(--border);
  border-radius: var(--r-lg); padding: 24px;
}
.services-card h4 { font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: 12px; text-transform: uppercase; letter-spacing: .5px; }
.services-tags { display: flex; flex-wrap: wrap; gap: 7px; }
.services-tags .tag { font-size: 11.5px; padding: 5px 12px; }

/* WA CTA in sidebar */
.wa-cta-card {
  background: #25D366;
  border-radius: var(--r-lg); padding: 20px 22px;
  display: flex; align-items: center; gap: 14px;
  text-decoration: none;
  transition: filter .2s;
}
.wa-cta-card:hover { filter: brightness(1.08); }
.wa-cta-card__ico { flex-shrink: 0; }
.wa-cta-card__ico svg { width: 32px; height: 32px; }
.wa-cta-card h4 { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 2px; }
.wa-cta-card p { font-size: 12px; color: rgba(255,255,255,.8); }

/* Process steps */
.process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; margin-top: 48px; }
.process-conn { position: absolute; top: 22px; left: 10%; right: 10%; height: 2px; background: linear-gradient(90deg, var(--teal2), var(--gold)); z-index: 0; }
.process-step { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 12px; }
.ps-node { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-family: var(--serif); font-size: 18px; font-weight: 600; border: 2.5px solid var(--mist); }
.ps1 { background: var(--teal2); color: #fff; }
.ps2 { background: #1A8A7E; color: #fff; }
.ps3 { background: #C4923A; color: #fff; }
.ps4 { background: var(--gold); color: #fff; }
.process-step h4 { font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 5px; }
.process-step p { font-size: 12px; color: var(--slate); line-height: 1.55; }

@media (max-width:900px) {
  .page-hero { padding: 80px 20px 60px; }
  .contact-layout { grid-template-columns: 1fr; }
  .form-row-2 { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr 1fr; }
  .process-conn { display: none; }
  .contact-form-card {
    padding: 24px;
  }
}
</style>
