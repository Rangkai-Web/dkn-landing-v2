export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Resend API Key is not configured",
    });
  }

  const {
    nama,
    jabatan,
    whatsapp,
    email,
    perusahaan,
    jenis_organisasi,
    jumlah_peserta,
    level_peserta,
    layanan,
    topik,
    kebutuhan,
    waktu,
    lokasi,
  } = body;

  const htmlContent = `
    <h2>Detail Konsultasi Corporate Baru</h2>
    <p>Seseorang telah mengisi formulir konsultasi di website DKN Digital.</p>
    
    <h3>Informasi Kontak</h3>
    <ul>
      <li><strong>Nama:</strong> ${nama}</li>
      <li><strong>Jabatan:</strong> ${jabatan}</li>
      <li><strong>WhatsApp:</strong> ${whatsapp}</li>
      <li><strong>Email:</strong> ${email}</li>
    </ul>

    <h3>Informasi Organisasi</h3>
    <ul>
      <li><strong>Perusahaan/Institusi:</strong> ${perusahaan}</li>
      <li><strong>Jenis Organisasi:</strong> ${jenis_organisasi}</li>
      <li><strong>Estimasi Peserta:</strong> ${jumlah_peserta}</li>
      <li><strong>Target Level:</strong> ${level_peserta}</li>
    </ul>

    <h3>Kebutuhan Pelatihan</h3>
    <ul>
      <li><strong>Layanan:</strong> ${layanan}</li>
      <li><strong>Topik Utama:</strong> ${topik}</li>
      <li><strong>Waktu Pelaksanaan:</strong> ${waktu}</li>
      <li><strong>Lokasi:</strong> ${lokasi}</li>
    </ul>

    <h3>Pesan / Tantangan Spesifik</h3>
    <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
      ${kebutuhan || "-"}
    </p>

    <hr />
    <p><small>Email ini dikirim secara otomatis dari formulir kontak DKN Landing Page v2.</small></p>
  `;

  try {
    const response = await $fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: {
        // Catatan: Ganti ke 'system@dkn.digital' setelah domain diverifikasi di Resend
        from: "DKN Digital <onboarding@resend.dev>",
        to: ["info@dkn.digital"],
        reply_to: email,
        subject: `[Konsultasi Corporate] ${perusahaan} - ${nama}`,
        html: htmlContent,
      },
    });

    return { success: true, data: response };
  } catch (error: any) {
    console.error("Resend API Error:", error.data || error.message);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Failed to send email",
    });
  }
});
