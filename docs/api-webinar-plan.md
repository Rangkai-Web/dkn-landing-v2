# Perencanaan API Webinar & Form Admin Panel

Dokumen ini merangkum struktur JSON untuk 3 API yang dibutuhkan pada halaman Webinar (`app/pages/webinar.vue`) dan rekomendasi struktur form di admin panel backend.

---

## 1. API List Recording (Recording YouTube)

**Endpoint:** `GET /api/webinars/recordings`

Digunakan pada `<!-- ═══ ZONA 1: RECORDING KPI ═══ -->` untuk merender carousel list rekaman webinar.

### Contoh JSON Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "tag": "Leadership & Performance Management",
      "title": "Webinar KPI: Membangun Sistem Pengukuran Kinerja yang Efektif untuk Tim Anda",
      "desc": "Bagaimana merancang KPI yang benar-benar mengukur apa yang penting — bukan sekadar angka yang mudah dicapai. Dipandu oleh praktisi senior perbankan nasional.",
      "target": "Supervisor, Manager, Team Leader",
      "url": "https://youtu.be/lUfkloObIGM",
      "icon": "activity"
    }
  ]
}
```

### Struktur Form Admin Panel (Recording)

- **Tag / Kategori** (Input Text / Select) - misal: `Leadership & Performance Management`
- **Judul Recording** (Input Text) - misal: `Webinar KPI: Membangun Sistem...`
- **Deskripsi Singkat** (Textarea) - Maksimal 2-3 kalimat.
- **Target Audiens** (Input Text) - misal: `Supervisor, Manager, Team Leader`
- **URL YouTube** (Input URL) - Link ke video YouTube.
- **Pilihan Icon SVG** (Select / Radio) - Memilih icon untuk thumbnail (misal: `activity`, `users`, `bar-chart`, dll).

---

## 2. API List Webinar Gratis

**Endpoint:** `GET /api/webinars/free`

Digunakan pada `<!-- ═══ ZONA 2: WEBINAR GRATIS ═══ -->` yang saat ini datanya berasal dari variable `freeWebinars`.

### Contoh JSON Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "cat": "Leadership",
      "code": "LPK-DKN-LEAD-01",
      "title": "START 90™: Cara Supervisor Baru Tidak Gagal di 90 Hari Pertama",
      "desc": "Framework terbukti untuk supervisor baru — membangun kredibilitas, menghindari 5 jebakan fatal, dan memimpin dengan percaya diri sejak hari pertama.",
      "target": "Supervisor Baru, Team Leader, Middle Manager",
      "format": "90 Menit · 6 Sesi Interaktif · Via Zoom",
      "gradient": "linear-gradient(135deg, var(--midnight), #1a3050)",
      "icon": "users",
      "waUrl": "https://wa.me/6281343583568?text=Saya+ingin+daftar+notifikasi+webinar+START+90+DKN",
      "button_name": "Daftar Minat"
    }
  ]
}
```

### Struktur Form Admin Panel (Webinar Gratis)

- **Kategori (cat)** (Input Text) - misal: `Leadership`
- **Kode Program (code)** (Input Text) - misal: `LPK-DKN-LEAD-01`
- **Judul Webinar** (Input Text)
- **Deskripsi** (Textarea)
- **Target Audiens** (Input Text) - misal: `Supervisor Baru...`
- **Format** (Input Text) - misal: `90 Menit · Via Zoom`
- **Warna Gradient Latar** (Color Picker / Text) - Digunakan untuk styling card.
- **Icon** (Select) - misal: `users`, `graduation-cap`, `shield`.
- **URL WhatsApp Pendaftaran** (Input URL) - Link WA dengan pre-filled text.
- **Nama Tombol** (Input Text) - misal: `Daftar Notifikasi`

---

## 3. API List Webinar Berbayar

**Endpoint:** `GET /api/webinars/paid`

Digunakan pada `<!-- ═══ ZONA 3: WEBINAR BERBAYAR ═══ -->` yang datanya berasal dari `paidWebinars`.

### Contoh JSON Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "tag": "Sales & AI · LPK-DKN-SALE-02",
      "title": "Smart Selling with AI for Financial Products",
      "desc": "Mengintegrasikan consultative selling dengan AI tools untuk melipatgandakan produktivitas sales perbankan. SPIN Selling + Trusted Advisor + AI Prompt Engineering dalam satu program intensif.",
      "outcomes": [
        "Trust-based consultative selling dengan SPIN Selling",
        "Value proposition, cross-selling, dan closing high-value",
        "Hands-on AI tools dan prompting untuk produktivitas 50%+"
      ],
      "meta": [
        { "icon": "clock", "text": "1 Hari Penuh · 6 Modul" },
        { "icon": "video", "text": "Via Zoom" },
        { "icon": "users", "text": "Sales Officer, RM, Funding Officer" }
      ],
      "price": "Harga segera diumumkan",
      "waUrl": "https://wa.me/6281343583568?text=Saya+ingin+daftar+minat+Webinar+Smart+Selling+with+AI+DKN",
      "button_name": "Daftar Minat"
    }
  ]
}
```

### Struktur Form Admin Panel (Webinar Berbayar)

- **Tag / Kode** (Input Text) - misal: `Sales & AI · LPK-DKN-SALE-02`
- **Judul Webinar** (Input Text)
- **Deskripsi** (Textarea)
- **Hasil yang Diharapkan (Outcomes)** (Repeater / Dynamic Array) - Input teks dengan kemampuan tambah/hapus (Add more items).
- **Meta Info** (Repeater / Dynamic Array) - Setiap item memiliki pilihan `Icon` (Select) dan `Text` (Input Text).
- **Harga (Price)** (Input Text) - misal: `Harga segera diumumkan` atau `Rp 500.000`
- **URL WhatsApp Pendaftaran** (Input URL) - Link WA dengan pre-filled text.
- **Nama Tombol** (Input Text) - misal: `Daftar Minat`

Buatkan Menu Webinars dengan 3 sub menu

- Recording Video
- Webinar Gratis
- Webinar Berbayar
