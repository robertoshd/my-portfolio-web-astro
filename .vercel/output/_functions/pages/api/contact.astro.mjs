import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Todos los campos son requeridos" }), {
      status: 400
    });
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "joserobertoshdz1423@gmail.com",
      pass: "ywao cpoh yhuo cjmq"
    }
  });
  try {
    await transporter.sendMail({
      from: `"${name}" ${"joserobertoshdz1423@gmail.com"}`,
      to: "joserobertoshdz1423@gmail.com",
      // Sustituir por mi correo en import.meta
      subject: "CORREO DESDE EL FORMULARIO",
      text: `Correo: ${email}

Mensaje:
${message}`,
      replyTo: email
      // Correo del usuario
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return new Response(JSON.stringify({ error: "Error al enviar el mensaje" }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
