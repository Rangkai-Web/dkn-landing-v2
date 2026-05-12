export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Resend API Key is not configured",
    });
  }

  const { nama, email, whatsapp, topik } = body;

  const htmlContent = `
    <h2>Pendaftaran Notifikasi Webinar Baru</h2>
    <p>Seseorang telah mendaftar untuk notifikasi webinar di website DKN Digital.</p>
    
    <h3>Informasi Pendaftar</h3>
    <ul>
      <li><strong>Nama:</strong> ${nama}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>WhatsApp:</strong> ${whatsapp}</li>
      <li><strong>Topik yang Diminati:</strong> ${topik || "Semua Topik"}</li>
    </ul>

    <hr />
    <p><small>Email ini dikirim secara otomatis dari formulir webinar DKN Landing Page v2.</small></p>
  `;

  try {
    const response = await $fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: {
        from: "DKN Digital <onboarding@resend.dev>",
        to: ["info@dkn.digital"],
        reply_to: email,
        subject: `[Notifikasi Webinar] ${nama}`,
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
