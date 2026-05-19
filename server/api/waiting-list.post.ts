export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Resend API Key is not configured",
    });
  }

  const { nama, email, whatsapp, program } = body;

  const htmlContent = `
    <h2>Pendaftaran Waiting List Program Baru</h2>
    <p>Seseorang telah mendaftar untuk waiting list program di website DKN Digital.</p>
    
    <h3>Informasi Pendaftar</h3>
    <ul>
      <li><strong>Nama:</strong> ${nama}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>WhatsApp:</strong> ${whatsapp}</li>
      <li><strong>Program yang Diminati:</strong> ${program}</li>
    </ul>

    <hr />
    <p><small>Email ini dikirim secara otomatis dari formulir waiting list DKN Landing Page v2.</small></p>
  `;

  try {
    const response = await $fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: {
        from: config.resendFromEmail,
        to: [config.resendToEmail],
        reply_to: email,
        subject: `[Waiting List Program] ${program} - ${nama}`,
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
