import nodemailer from 'nodemailer';
export const prerender = false;

export async function POST({ request }) {
  const formData = await request.formData();

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Todos los campos son requeridos' }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" ${import.meta.env.EMAIL_USER}`,
      to: import.meta.env.EMAIL_USER, // Sustituir por mi correo en import.meta
      subject: "CORREO DESDE EL FORMULARIO",
      text: `Correo: ${email}\n\nMensaje:\n${message}`,
      replyTo: email, // Correo del usuario
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), {
      status: 500,
    });
  }
}
