<template>
  <div>
    <AppHeader />

    <main>
      <!-- HERO -->
      <section class="page-hero">
        <div class="ph-grid"></div>
        <div class="ph-glow"></div>
        <div class="ph-inner">
          <div class="pill">
            <div class="pill-dot"></div>
            Respons dalam 1 Hari Kerja
          </div>
          <h1 class="ph-h">
            Konsultasi Corporate<br /><em>dengan Tim DKN</em>
          </h1>
          <p class="ph-sub">
            Ceritakan kebutuhan pengembangan SDM organisasi Anda. Tim konsultan
            senior DKN akan merespons dalam satu hari kerja dengan proposal yang
            relevan.
          </p>
          <div class="ph-channels">
            <div class="ch-pill">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                /></svg
              >Form Online
            </div>
            <div class="ch-pill">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                /></svg
              >WhatsApp Direct
            </div>
            <div class="ch-pill">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" /></svg
              >Email
            </div>
          </div>
        </div>
      </section>

      <!-- MAIN LAYOUT -->
      <div class="contact-layout">
        <!-- FORM -->
        <form
          v-if="!isSuccess"
          @submit.prevent="handleSubmit"
          class="form-section"
        >
          <h2>Ceritakan Kebutuhan <em>Organisasi Anda</em></h2>
          <p>
            Isi form di bawah ini dan tim DKN akan menghubungi Anda dalam 1 hari
            kerja dengan proposal awal yang relevan — tidak ada komitmen apapun
            di tahap ini.
          </p>

          <div class="form-card">
            <div class="form-row">
              <div class="form-section-title">Informasi Kontak Anda</div>

              <div class="fg">
                <label class="flbl">Nama Lengkap <span>*</span></label>
                <input
                  v-model="form.nama"
                  class="finput"
                  type="text"
                  placeholder="Nama lengkap Anda"
                  required
                />
              </div>
              <div class="fg">
                <label class="flbl">Jabatan / Posisi <span>*</span></label>
                <input
                  v-model="form.jabatan"
                  class="finput"
                  type="text"
                  placeholder="Jabatan Anda saat ini"
                  required
                />
              </div>
              <div class="fg">
                <label class="flbl">Nomor WhatsApp <span>*</span></label>
                <input
                  v-model="form.whatsapp"
                  class="finput"
                  type="tel"
                  placeholder="+62 ..."
                  required
                />
              </div>
              <div class="fg">
                <label class="flbl">Email Kantor</label>
                <input
                  v-model="form.email"
                  class="finput"
                  type="email"
                  placeholder="email@perusahaan.com"
                />
              </div>

              <div class="form-section-title">Informasi Organisasi</div>

              <div class="fg">
                <label class="flbl"
                  >Nama Perusahaan / Institusi <span>*</span></label
                >
                <input
                  v-model="form.perusahaan"
                  class="finput"
                  type="text"
                  placeholder="PT / Lembaga / Bank ..."
                  required
                />
              </div>
              <div class="fg">
                <label class="flbl">Jenis Organisasi <span>*</span></label>
                <select
                  v-model="form.jenis_organisasi"
                  class="finput fselect"
                  required
                >
                  <option value="">Pilih jenis organisasi...</option>
                  <option>Bank Umum (BUMN)</option>
                  <option>Bank Pembangunan Daerah (BPD)</option>
                  <option>Bank Perkreditan Rakyat (BPR / BPR Syariah)</option>
                  <option>Bank Swasta Nasional</option>
                  <option>Perusahaan Multifinance / Leasing</option>
                  <option>Perusahaan Asuransi</option>
                  <option>BUMN Non-Bank</option>
                  <option>Perusahaan Swasta (Non-Bank)</option>
                  <option>Instansi Pemerintah / Dinas</option>
                  <option>Universitas / Lembaga Pendidikan</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div class="fg">
                <label class="flbl">Estimasi Jumlah Peserta</label>
                <select v-model="form.jumlah_peserta" class="finput fselect">
                  <option value="">Pilih estimasi peserta...</option>
                  <option>Kurang dari 15 orang</option>
                  <option>15–30 orang</option>
                  <option>30–60 orang</option>
                  <option>60–100 orang</option>
                  <option>Lebih dari 100 orang</option>
                  <option>Belum ditentukan</option>
                </select>
              </div>
              <div class="fg">
                <label class="flbl">Target Level Peserta</label>
                <select v-model="form.level_peserta" class="finput fselect">
                  <option value="">Pilih level peserta...</option>
                  <option>Staff / Officer</option>
                  <option>Supervisor / Team Leader</option>
                  <option>Manager / Assistant Manager</option>
                  <option>Senior Manager / AVP</option>
                  <option>VP / Director</option>
                  <option>Mixed / Lintas Level</option>
                </select>
              </div>

              <div class="form-section-title">Kebutuhan Pelatihan</div>

              <div class="fg fg-full">
                <label class="flbl"
                  >Layanan yang Dibutuhkan <span>*</span></label
                >
                <select v-model="form.layanan" class="finput fselect" required>
                  <option value="">Pilih jenis layanan...</option>
                  <option>
                    Corporate Training In-House (Program Standar DKN)
                  </option>
                  <option>
                    Corporate Training Customized (Desain dari Nol)
                  </option>
                  <option>Advisory &amp; Konsultasi Strategis SDM</option>
                  <option>Assessment Center</option>
                  <option>Training Needs Analysis (TNA)</option>
                  <option>Sertifikasi BNSP (LSP SIK)</option>
                  <option>Webinar Korporat (Online)</option>
                  <option>Tidak yakin — mohon bantu rekomendasikan</option>
                </select>
              </div>

              <div class="fg fg-full">
                <label class="flbl">Topik / Area yang Ingin Dibahas</label>
                <select v-model="form.topik" class="finput fselect">
                  <option value="">Pilih topik prioritas...</option>
                  <option>Leadership &amp; Management</option>
                  <option>
                    Sales &amp; Marketing (termasuk Smart Selling with AI)
                  </option>
                  <option>Banking Strategy &amp; Credit</option>
                  <option>Risk Management</option>
                  <option>Soft Skills (SKKNI)</option>
                  <option>Service Excellence</option>
                  <option>Collection &amp; Recovery</option>
                  <option>Corporate Finance &amp; Strategy</option>
                  <option>AI Productivity untuk Perbankan</option>
                  <option>
                    Program Signature DKN (Integrated Banking / Ecosystem /
                    Funding)
                  </option>
                  <option>Lainnya / Tidak yakin</option>
                </select>
              </div>

              <div class="fg fg-full">
                <label class="flbl"
                  >Ceritakan Tantangan atau Kebutuhan Spesifik Anda</label
                >
                <textarea
                  v-model="form.kebutuhan"
                  class="finput ftextarea"
                  placeholder="Contoh: Tim RM kami kesulitan cross-selling produk DPK kepada nasabah kredit. Kami butuh program 1-2 hari yang bisa langsung diterapkan dengan hasil terukur dalam 90 hari ke depan..."
                ></textarea>
              </div>

              <div class="fg">
                <label class="flbl">Estimasi Waktu Pelaksanaan</label>
                <select v-model="form.waktu" class="finput fselect">
                  <option value="">Pilih estimasi waktu...</option>
                  <option>1–2 minggu ke depan (Segera)</option>
                  <option>1 bulan ke depan</option>
                  <option>2–3 bulan ke depan</option>
                  <option>3–6 bulan ke depan</option>
                  <option>Masih eksplorasi / belum pasti</option>
                </select>
              </div>
              <div class="fg">
                <label class="flbl">Lokasi Pelaksanaan (jika offline)</label>
                <input
                  v-model="form.lokasi"
                  class="finput"
                  type="text"
                  placeholder="Kota / Provinsi"
                />
              </div>

              <div class="checkbox-row">
                <input
                  class="finput-check"
                  type="checkbox"
                  id="agree"
                  required
                  checked
                />
                <label for="agree"
                  >Saya setuju untuk dihubungi oleh tim DKN melalui WhatsApp
                  atau email untuk diskusi lebih lanjut mengenai kebutuhan
                  pelatihan yang disampaikan.</label
                >
              </div>

              <button type="submit" class="btn-submit" :disabled="isSending">
                <svg
                  v-if="!isSending"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                <span v-if="isSending">Mengirim Pesan...</span>
                <span v-else
                  >Kirim — Tim DKN akan Merespons dalam 1 Hari Kerja</span
                >
              </button>

              <div class="form-note">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--slate)"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Konsultasi awal gratis · Tanpa komitmen · Data Anda aman
              </div>
            </div>
          </div>
        </form>
        <div v-else class="success-section">
          <div class="success-card">
            <div class="sc-ico">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2>Pesan Terkirim!</h2>
            <p>
              Terima kasih telah menghubungi DKN Digital. Konsultan kami akan
              merespons permintaan Anda dalam maksimal 1 hari kerja.
            </p>
            <button @click="isSuccess = false" class="btn-back">
              Kirim Form Lain
            </button>
          </div>
        </div>

        <!-- SIDEBAR -->
        <div class="sidebar">
          <!-- DIRECT CHANNELS -->
          <div class="contact-card">
            <div class="cc-title">Hubungi Langsung</div>
            <div class="cc-channels">
              <!-- <a :href="`https://wa.me/${profile?.contact?.whatsapp_number}?text=Halo+DKN%2C+saya+ingin+berdiskusi+tentang+kebutuhan+corporate+training+untuk+organisasi+saya`" target="_blank" rel="noopener" class="cc-ch"> -->
              <NuxtLink
                :to="`https://wa.me/${profile?.contact?.whatsapp_number}?text=${encodeURIComponent(
                  'Halo DKN, saya ingin berdiskusi tentang kebutuhan corporate training untuk organisasi saya',
                )}`"
                target="_blank"
                rel="noopener"
                class="cc-ch"
                @click="pushEvent('wa_click', { source: 'contact_sidebar' })"
              >
                <div
                  class="cc-ch-ico"
                  style="background: rgba(37, 211, 102, 0.15)"
                >
                  <svg viewBox="0 0 24 24" fill="#25D366">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.99 2C6.473 2 2 6.473 2 11.99c0 1.776.46 3.447 1.263 4.913L2.05 21.95l5.173-1.195A9.94 9.94 0 0011.99 22c5.516 0 9.99-4.474 9.99-9.99C21.98 6.473 17.506 2 11.99 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="cc-ch-lbl">WhatsApp</div>
                  <div class="cc-ch-val">
                    +{{ profile?.contact?.whatsapp_number }}
                  </div>
                  <div class="cc-ch-sub">Respons cepat jam kerja</div>
                </div>
              </NuxtLink>
              <a :href="`mailto:${profile?.contact?.email}`" class="cc-ch">
                <div
                  class="cc-ch-ico"
                  style="background: rgba(34, 160, 148, 0.15)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22A094"
                    stroke-width="2"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div class="cc-ch-lbl">Email</div>
                  <div class="cc-ch-val">{{ profile?.contact?.email }}</div>
                  <div class="cc-ch-sub">
                    Untuk proposal &amp; dokumen resmi
                  </div>
                </div>
              </a>
              <a href="https://www.dkn.digital" target="_blank" class="cc-ch">
                <div
                  class="cc-ch-ico"
                  style="background: rgba(196, 146, 58, 0.15)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D9AA55"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path
                      d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="cc-ch-lbl">Website</div>
                  <div class="cc-ch-val">www.dkn.digital</div>
                  <div class="cc-ch-sub">Informasi program &amp; webinar</div>
                </div>
              </a>
            </div>
          </div>

          <!-- LAYANAN -->
          <div class="layanan-card">
            <div class="lc-title">Layanan yang Tersedia</div>
            <div class="lc-items">
              <div class="lc-item">
                <div class="lc-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--teal2)"
                    stroke-width="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <div class="lc-item-title">Corporate Training In-House</div>
                  <div class="lc-item-desc">
                    Program standar DKN atau desain kustom, dilaksanakan di
                    tempat Anda
                  </div>
                </div>
              </div>
              <div class="lc-item">
                <div class="lc-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gold)"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <div>
                  <div class="lc-item-title">
                    Advisory &amp; Konsultasi Strategis
                  </div>
                  <div class="lc-item-desc">
                    Pendampingan TNA, desain kurikulum, dan evaluasi dampak
                    pelatihan
                  </div>
                </div>
              </div>
              <div class="lc-item">
                <div class="lc-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#378ADD"
                    stroke-width="2"
                  >
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                </div>
                <div>
                  <div class="lc-item-title">Sertifikasi BNSP</div>
                  <div class="lc-item-desc">
                    Program sertifikasi kompetensi kepemimpinan bermitra LSP SIK
                  </div>
                </div>
              </div>
              <div class="lc-item">
                <div class="lc-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8B5CF6"
                    stroke-width="2"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  </svg>
                </div>
                <div>
                  <div class="lc-item-title">Assessment Center</div>
                  <div class="lc-item-desc">
                    Penilaian kompetensi untuk keputusan talent, promosi, dan
                    gap analysis
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- PROSES -->
          <div class="process-card">
            <div class="pc-title">Proses Konsultasi DKN</div>
            <div class="process-steps">
              <div class="ps">
                <div class="ps-line"></div>
                <div class="ps-num">1</div>
                <div class="ps-body">
                  <div class="ps-title">Anda Mengisi Form</div>
                  <div class="ps-desc">
                    Ceritakan kebutuhan, tantangan, dan konteks organisasi Anda
                  </div>
                </div>
              </div>
              <div class="ps">
                <div class="ps-line"></div>
                <div class="ps-num">2</div>
                <div class="ps-body">
                  <div class="ps-title">Tim DKN Merespons</div>
                  <div class="ps-desc">
                    Dalam 1 hari kerja, konsultan senior kami menghubungi Anda
                  </div>
                </div>
              </div>
              <div class="ps">
                <div class="ps-line"></div>
                <div class="ps-num">3</div>
                <div class="ps-body">
                  <div class="ps-title">Diskusi Kebutuhan</div>
                  <div class="ps-desc">
                    Sesi diskusi via Zoom atau WhatsApp untuk memahami konteks
                    lebih dalam
                  </div>
                </div>
              </div>
              <div class="ps">
                <div class="ps-num">4</div>
                <div class="ps-body" style="padding-bottom: 0">
                  <div class="ps-title">Proposal Relevan</div>
                  <div class="ps-desc">
                    Kami menyiapkan proposal program yang sesuai dengan
                    kebutuhan dan anggaran Anda
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <section class="faq-sec">
        <div class="faq-inner">
          <span class="lbl">FAQ</span>
          <h2 class="sh">Pertanyaan yang Sering Ditanyakan</h2>

          <div class="faq-list">
            <div
              v-for="faq in faqs"
              :key="faq.id"
              class="faq-item"
              :class="{ active: activeFaq === faq.id }"
            >
              <div class="faq-q" @click="toggleFaq(faq.id)">
                {{ faq.question }}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div v-show="activeFaq === faq.id" class="faq-a">
                {{ faq.answer }}
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
import { useProfileStore } from "~/stores/profileStore";
import { useFaqStore } from "~/stores/faqStore";
import { storeToRefs } from "pinia";

const { pushEvent } = useAnalytics();

useSeoMeta({
  title: "Konsultasi Corporate — DKN Indonesia",
  description:
    "Konsultasi corporate training dan advisory DKN Indonesia — diskusikan kebutuhan pengembangan SDM organisasi Anda.",
});

const form = ref({
  nama: "",
  jabatan: "",
  whatsapp: "",
  email: "",
  perusahaan: "",
  jenis_organisasi: "",
  jumlah_peserta: "",
  level_peserta: "",
  layanan: "",
  topik: "",
  kebutuhan: "",
  waktu: "",
  lokasi: "",
});
const isSending = ref(false);
const isSuccess = ref(false);
const config = useRuntimeConfig();

const handleSubmit = async () => {
  isSending.value = true;
  try {
    await $fetch("contact", {
      method: "POST",
      baseURL: config.public.apiBaseUrl,
      body: form.value,
    });
    isSuccess.value = true;
    pushEvent("form_submit", { form: "contact" });
    // Reset form
    Object.keys(form.value).forEach((key) => {
      (form.value as any)[key] = "";
    });
  } catch (err) {
    console.error(err);
    alert(
      "Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.",
    );
  } finally {
    isSending.value = false;
  }
};

useHead({
  htmlAttrs: {
    lang: "id",
  },
});

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

const faqStore = useFaqStore();
const { faqs, isLoading: isFaqLoading } = storeToRefs(faqStore);

const activeFaq = ref<number | null>(null);
const toggleFaq = (id: number) => {
  activeFaq.value = activeFaq.value === id ? null : id;
};

onMounted(() => {
  store.fetchProfile();
  faqStore.fetchFaqs();
});
</script>

<style scoped>
/* HERO */
.page-hero {
  background: var(--midnight);
  padding: 80px 52px;
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
}
/* HERO CHANNEL PILLS */
.ph-channels {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 28px;
  flex-wrap: wrap;
}
.ch-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.72);
}
.ch-pill svg {
  width: 14px;
  height: 14px;
}
/* MAIN LAYOUT */
.contact-layout {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 52px;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 64px;
  align-items: start;
}
/* FORM */
.form-section h2 {
  font-family: var(--serif);
  font-size: 32px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: 8px;
}
.form-section h2 em {
  color: var(--teal2);
  font-style: italic;
}
.form-section p {
  font-size: 14.5px;
  color: var(--slate);
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 32px;
}
.form-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px;
  box-shadow:
    0 1px 3px rgba(20, 34, 56, 0.05),
    0 8px 32px rgba(20, 34, 56, 0.07);
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.form-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.fg {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.fg-full {
  grid-column: span 2;
}
.flbl {
  font-size: 12px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: 0.3px;
}
.flbl span {
  color: #e53935;
  margin-left: 2px;
}
.finput {
  background: var(--mist);
  border: 1.5px solid var(--border);
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 14px;
  color: var(--ink);
  font-family: var(--sans);
  outline: none;
  transition: border 0.2s;
  width: 100%;
}
.finput:focus {
  border-color: var(--teal2);
  background: #fff;
}
.finput::placeholder {
  color: var(--slate);
  opacity: 0.6;
}
.fselect {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(20,34,56,0.5)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
}
.ftextarea {
  resize: vertical;
  min-height: 110px;
}
.form-section-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--teal2);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 14px;
  margin-top: 4px;
  grid-column: span 2;
}
.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  grid-column: span 2;
}
.finput-check {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  flex-shrink: 0;
  accent-color: var(--teal2);
}
.checkbox-row label {
  font-size: 13px;
  color: var(--slate);
  line-height: 1.55;
  cursor: pointer;
}
.btn-submit {
  width: 100%;
  background: var(--teal2);
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  font-family: var(--sans);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  grid-column: span 2;
  margin-top: 4px;
}
.btn-submit:hover {
  background: var(--teal);
  transform: translateY(-1px);
}
.btn-submit svg {
  width: 16px;
  height: 16px;
}
.form-note {
  font-size: 12px;
  color: var(--slate);
  text-align: center;
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.form-note svg {
  width: 12px;
  height: 12px;
}
/* SIDEBAR */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
/* CONTACT CARD */
.contact-card {
  background: var(--midnight);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.07);
}
.cc-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 18px;
}
.cc-channels {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.cc-ch {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}
.cc-ch:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
}
.cc-ch-ico {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cc-ch-ico svg {
  width: 18px;
  height: 18px;
}
.cc-ch-lbl {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 2px;
}
.cc-ch-val {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}
.cc-ch-sub {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 1px;
}
/* LAYANAN CARD */
.layanan-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(20, 34, 56, 0.05);
}
.lc-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 16px;
}
.lc-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.lc-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.lc-ico {
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: var(--mist);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.lc-ico svg {
  width: 14px;
  height: 14px;
}
.lc-item-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 2px;
}
.lc-item-desc {
  font-size: 12px;
  color: var(--slate);
  line-height: 1.5;
}
/* PROCESS CARD */
.process-card {
  background: var(--mist);
  border-radius: 14px;
  padding: 28px;
}
.pc-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--teal2);
  margin-bottom: 16px;
}
.process-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.ps {
  display: flex;
  gap: 14px;
  position: relative;
}
.ps-line {
  position: absolute;
  left: 15px;
  top: 30px;
  bottom: -4px;
  width: 1px;
  background: var(--border);
}
.ps:last-child .ps-line {
  display: none;
}
.ps-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--teal2);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
.ps-body {
  padding-bottom: 18px;
}
.ps-title {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 3px;
}
.ps-desc {
  font-size: 12.5px;
  color: var(--slate);
  line-height: 1.5;
}
/* FAQ */
.faq-sec {
  background: var(--mist);
  padding: 72px 52px;
}
.faq-inner {
  max-width: 860px;
  margin: 0 auto;
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
.faq-list {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.faq-item {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(20, 34, 56, 0.04);
}
.faq-q {
  padding: 20px 24px;
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  user-select: none;
}
.faq-q:hover {
  background: var(--mist);
}
.faq-q svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transition: transform 0.2s;
  color: var(--teal2);
}
.faq-item.active .faq-q svg {
  transform: rotate(180deg);
}

.faq-a {
  padding: 0 24px 20px;
  font-size: 14px;
  color: var(--slate);
  line-height: 1.75;
  font-weight: 300;
}

/* SUCCESS STATE */
.success-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
.success-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(20, 34, 56, 0.05);
}
.sc-ico {
  width: 64px;
  height: 64px;
  background: rgba(34, 160, 148, 0.1);
  color: var(--teal2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}
.sc-ico svg {
  width: 30px;
  height: 30px;
}
.success-card h2 {
  font-family: var(--serif);
  font-size: 32px;
  color: var(--ink);
  margin-bottom: 16px;
}
.success-card p {
  color: var(--slate);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 32px;
}
.btn-back {
  background: var(--ink);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-back:hover {
  opacity: 0.9;
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
  .contact-layout {
    grid-template-columns: 1fr;
    padding: 52px 20px;
    gap: 32px;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .fg-full,
  .checkbox-row,
  .btn-submit,
  .form-note,
  .form-section-title {
    grid-column: span 1;
  }
  .faq-sec {
    padding: 52px 20px;
  }
  footer {
    padding: 48px 20px 24px;
  }
  .ft-top {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
}

/* @media (max-width:900px) {
  .page-hero { padding: 80px 20px 60px; }
  .contact-layout { grid-template-columns: 1fr; }
  .form-row-2 { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr 1fr; }
  .process-conn { display: none; }
  .contact-form-card {
    padding: 24px;
  }
} */
</style>
