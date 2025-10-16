import { e as createComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro, k as renderHead, l as renderComponent, n as renderSlot } from '../chunks/astro/server_DB14wPtC.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<header id="navbar" class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"> <!-- Navegaci\xF3n Desktop --> <nav class="bg-slate-700 bg-opacity-40 backdrop-blur-sm shadow-lg flex px-10 gap-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center"> <a href="#hero" class="nav-link px-2 py-2 hover:text-purple-400 font-semibold transition duration-200">Sobre m\xED</a> <a href="#projects" class="nav-link px-2 py-2 hover:text-purple-400 font-semibold transition duration-200">Proyectos</a> <a href="#contact" class="nav-link px-2 py-2 hover:text-purple-400 font-semibold transition duration-200">Contacto</a> </nav> </header> <script lang="js">
// Obtener todos los enlaces de navegaci\xF3n con la clase .nav-link
const navLinks = document.querySelectorAll('.nav-link');

// Funci\xF3n para detectar la secci\xF3n visible
function setActiveLink() {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;

  // Iterar a trav\xE9s de cada enlace y su secci\xF3n correspondiente
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href')); // Obtener la secci\xF3n vinculada
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Verificar si la secci\xF3n est\xE1 parcialmente visible (pudiendo estar un poco m\xE1s arriba o abajo)
    if (scrollPosition >= sectionTop - windowHeight / 3 && scrollPosition < sectionTop + sectionHeight - windowHeight / 3) {
      link.classList.add('text-purple-400'); // A\xF1adir la clase 'text-purple-400' al enlace
      //link.classList.remove('text-gray-600'); // Eliminar el color por defecto
    } else {
      link.classList.remove('text-purple-400'); // Remover la clase 'text-purple-400' del enlace
      //link.classList.add('text-gray-600'); // Volver al color por defecto
    }
  });
}

// Llamar a la funci\xF3n al hacer scroll
window.addEventListener('scroll', setActiveLink);

// Llamar a la funci\xF3n cuando se cargue la p\xE1gina, en caso de que se cargue en una secci\xF3n ya visible
document.addEventListener('DOMContentLoaded', setActiveLink);

<\/script>`])), maybeRenderHead());
}, "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#1a1a2e] text-[#d1d1d6] py-10 px-6 sm:px-6 md:px-8 lg:px-16"> <div class="max-w-7xl mx-auto text-center"> <p class="text-sm">© 2025 Desarrollado por
<a href="https://www.linkedin.com/in/jose-roberto-salas-hernandez/" class="text-[#8ab4f8]">José Roberto</a> </p></div> </footer>`;
}, "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, children } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Ingeniero en Sistemas Computacionales con experiencia en desarrollo web on el conocimiento en la metodología ágil scrum"><meta name="robots" content="index, follow"><meta name="theme-color" content="#09f"><!-- Color al navegador en la parte de arriba --><meta property="og:title" content="Portafolio de un Ingeniero en Sistemas"><meta property="og:description" content="Portafolio web de José con experiencia en desarrollo web con conocimiento en la metodología ágil scrum"><meta property="og:image" content="/images/portafolio-preview-preview.jpeg"><meta property="og:image:alt" content="Imagen del portafolio web de José"><meta property="og:type" content="website"><!-- <link rel="alternate" href="https://joseshportafolio.vercel.app/en" hreflang="en-GB"> --><!-- <link rel="canonical" href="https://joseshportafolio.vercel.app"> --><link rel="icon" type="image/svg+xml" href="favicon.svg"><!-- Icono en la pestaña de la página --><title>${title}</title>${renderHead()}</head> <body> <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="mt-20 scroll-mt-20 md:flex-row items-center md:items-start justify-center max-w-6xl mx-auto px-6 py-16 md:py-52 gap-8" id="hero"> <!-- Imagen arriba a la derecha --> <div class="mw-full md:w-auto flex items-center justify-center md:justify-start mb-10"> <img src="src/assets/perfil.jpeg" alt="Foto de perfil de José Roberto" class="w-20 h-20 rounded-full border-2 border-purple-400 object-cover"> <span class="ml-7 bg-gray-800 text-white border-2 border-green-400 text-sm rounded-xl px-3 py-1 md:ml-5 mt-2 md:mt-0"> <a href="https://www.linkedin.com/in/jose-roberto-salas-hernandez/" target="_blank"> Disponible para trabajar </a> </span> </div> <!-- Texto debajo --> <div class="w-full md:w-auto text-center md:text-left"> <h1 class="text-4xl font-extrabold text-white flex items-center gap-4 flex-wrap justify-center  md:justify-start">
Hola, soy José Roberto
</h1> <p class="mt-4 text-gray-300 text-xl max-w-2xl mx-auto md:mx-0">
Ingeniero en Sistemas Computacionales con experiencia en
<span class="text-yellow-300 font-semibold">desarrollo web</span>, con el conocimiento en la metodología
<span class="text-yellow-300 font-semibold"> ágil scrum</span>.
</p> <!-- Links --> <div class="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"> <!-- LinkedIn --> <a href="https://www.linkedin.com/in/jose-roberto-salas-hernandez/" target="_blank" class="flex items-center gap-2 bg-gray-300 transition-all duration-300 transform hover:-translate-y-1 rounded-full px-4 py-2 text-black font-semibold shadow-md"> <img src="https://img.icons8.com/ios-filled/24/0E76A8/linkedin.png" alt="LinkedIn">
LinkedIn
</a> <!-- GitHub --> <a href="https://github.com/robertoshd" target="_blank" class="flex items-center gap-2 bg-gray-300 transition-all duration-300 transform hover:-translate-y-1 rounded-full px-4 py-2 text-black font-semibold shadow-md"> <img src="https://img.icons8.com/material-rounded/24/000000/github.png" alt="GitHub">
GitHub
</a> <!-- Email --> <a href="mailto:joserobertoshdz1423@gmail.com?Subject=Consulta%20sobre%20trabajo" class="flex items-center gap-2 bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 rounded-full px-4 py-2 text-white font-semibold shadow-md"> <img src="https://img.icons8.com/ios-glyphs/24/ffffff/new-post.png" alt="Email">
Contáctame
</a> </div> <!-- Tecnologías --> <div class="mt-8"> <!-- <p class="text-purple-400 font-semibold mb-3">Tecnologías:</p>  --> <div class="flex items-center gap-6 flex-wrap justify-center md:justify-start"> <p class="text-purple-400  font-semibold">Frontend</p> <div class="flex items-center gap-x-2 bg-gray-900 border-2 border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML"> <span>HTML</span> </div> <div class="flex items-center gap-x-2 bg-gray-900 border-2 border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS"> <span>CSS</span> </div> <div class="flex items-center gap-x-2 bg-gray-900 border-2 border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://logo.svgcdn.com/l/astro-icon.svg" alt="Astro"> <span>Astro</span> </div> <div class="flex items-center gap-x-2 bg-gray-900 border-2 border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript"> <span>JavaScript</span> </div> </div> <div class="flex items-center gap-6 flex-wrap py-6 justify-center md:justify-start"> <p class="text-purple-400 font-semibold">Backend</p> <div class="flex items-center gap-x-2 bg-gray-900 border-2 border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://cdn.simpleicons.org/php/777BB4" alt="PHP"> <span>PHP</span> </div> <div class="flex items-center gap-x-2 bg-gray-900 border-2 border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python"> <span>Python</span> </div> </div> <div class="flex items-center gap-6 flex-wrap justify-center md:justify-start"> <p class="text-purple-400 font-semibold">Herramientas</p> <div class="flex items-center gap-x-2 bg-gray-900 border-2 border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://cdn.simpleicons.org/git" alt="Git"> <span>Git</span> </div> <div class="flex items-center gap-x-2 bg-gray-900 border-2  border-gray-400 rounded-full px-4 py-2 text-sm text-white font-medium shadow-md"> <img class="w-4 h-4" src="https://img.icons8.com/material-rounded/24/ffffff/github.png" alt="Git"> <span>GitHub</span> </div> </div> </div> </div> </section>`;
}, "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/components/Hero.astro", void 0);

function Modal({ isOpen, onClose, project }) {
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    if (project?.images?.length > 0) {
      setSelectedImage(project.images[0]);
    } else {
      setSelectedImage("");
    }
  }, [project]);
  if (!isOpen || !project) return null;
  return /* @__PURE__ */ jsx("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx("button", { className: "modal-close", onClick: onClose, "aria-label": "Cerrar modal", children: "×" }),
    selectedImage && /* @__PURE__ */ jsx(
      "img",
      {
        src: selectedImage,
        alt: project.title,
        className: "modal-main-image"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "modal-gallery", children: project.images?.map((img, index) => /* @__PURE__ */ jsx(
      "img",
      {
        src: img,
        alt: `${project.title} imagen ${index + 1}`,
        className: `modal-thumb ${selectedImage === img ? "selected" : ""}`,
        onClick: () => setSelectedImage(img)
      },
      index
    )) }),
    /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx("span", { class: "text-yellow-500 font-bold", children: project.title }) }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("span", { class: "text-purple-500", children: "Descripción:" }),
      " ",
      project.description
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("span", { class: "text-purple-500", children: "Problemática:" }),
      " ",
      project.problem
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("span", { class: "text-purple-500", children: "Solución:" }),
      " ",
      project.solution
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("span", { class: "text-purple-500", children: "Diseño:" }),
      " ",
      project.design
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("span", { class: "text-purple-500", children: "Resultados:" }),
      " ",
      project.results
    ] })
  ] }) });
}

// src/data/projectsData.js

const projects = [
  {
    title: "Landing Pages Codemadi",
    date: "Agosto 2025",
    description: "Desarrollo de una pagina web responsiva, para una startup que recien comienza.",
    problem: "La startup necesitaba presencia online rápida y adaptable a móviles.",
    solution: "Diseñamos una landing page responsiva con contenido claro y llamado a la acción.",
    design: "Estilo minimalista con colores corporativos y tipografía legible.",
    results: "Incremento del 40% en consultas y mejor posicionamiento SEO.",
    image: "images/landing-codemadi-preview1.webp",
    images: [
      "images/landing-pages-1.png",
      "images/landing-pages-2.png",
      "images/landing-pages-3.png",
      "images/landing-pages-4.png"
    ],
    technologies: [
      { name: 'Astro', icon: 'https://logo.svgcdn.com/l/astro-icon.svg'},
      { name: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000' },
    ],
    url: "https://codemadi.vercel.app/"
  },

  {
    title: "Landing Pages Veterinaria",
    date: "Agosto 2025",
    description: "Desarrollo de una landing pages responsiva, con descripción y servicios que ofrece.",
    problem: "El cliente quería destacar los servicios veterinarios en su localidad.",
    solution: "Diseñamos una landing que destaca cada servicio con testimonios reales.",
    design: "Profesional y amigable para los amantes de mascotas.",
    results: "Incremento del 50% en citas reservadas online.",
    image: "images/landing-veterinaria-preview1.webp",
    images: [
      "images/landing-veterinaria-1.png",
      "images/landing-veterinaria-2.png",
      "images/landing-veterinaria-3.png",
      "images/landing-veterinaria-4.png"
    ],
    technologies: [
      { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
      { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    ],
    url: "https://github.com/robertoshd/landing-pages-veterinaria-astro"
  },

  {
    title: "Plantilla Menu Digital",
    date: "Agosto 2025",
    description: "Desarrollo de un menú digital para negocios que se dedican a la venta de bebidas frías.",
    problem: "Los clientes necesitaban acceder rápido al menú desde sus teléfonos.",
    solution: "Creamos un menú digital intuitivo con acceso QR y diseño limpio.",
    design: "Diseño moderno y fácil de navegar.",
    results: "Aumento del 30% en pedidos durante el primer mes.",
    image: "images/plantilla-frapes-preview1.webp",
    images: [
      "images/menu-frapes-1.png",
      "images/menu-frapes-2.png",
      "images/menu-frapes-3.png"
    ],
    technologies: [
      { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
      { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
      { name: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000' },
    ],
    url: "https://github.com/robertoshd/menu-digital-plantilla-frapes"
  }
];

function ProjectGalleryReact() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };
  return /* @__PURE__ */ jsxs("section", { className: "projects py-20 md:py-52 mt-auto text-white mx-6 sm:mx-6 md:mx-8 lg:mx-80", id: "projects", children: [
    /* @__PURE__ */ jsxs("h2", { className: "flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined", children: [
      /* @__PURE__ */ jsxs("svg", { class: "size-7", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M7 8l-4 4l4 4" }),
        /* @__PURE__ */ jsx("path", { d: "M17 8l4 4l-4 4" }),
        /* @__PURE__ */ jsx("path", { d: "M14 4l-4 16" })
      ] }),
      "Proyectos"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto", children: projects.map((project, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "project-card bg-[#1a1a2e] rounded-xl border border-[#2c2c40] overflow-hidden shadow-2xl",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: project.image,
              alt: project.title,
              className: "project-image w-full h-64 object-cover"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "project-info p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: project.title }),
            /* @__PURE__ */ jsx("h3", { className: "text-gray-500 text-sm text-justify mb-4", children: project.date }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-base text-justify mb-4", children: project.description }),
            /* @__PURE__ */ jsx("div", { className: "project-tech-icons flex space-x-3 mb-4 ", children: project.technologies.map((tech, index2) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-x-2 bg-gray-800 border-2 border-cyan-800 rounded-full  px-2 py-1 text-xs shadow-md",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: tech.icon,
                      alt: tech.name,
                      title: tech.name,
                      className: "w-5 h-5"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: tech.name })
                ]
              },
              index2
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-4", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: project.link,
                  className: "w-1/2 project-btn bg-[#8a3ffc] text-white font-bold py-2 px-4 rounded-lg text-center transition duration-200 hover:bg-[#6e2bd8] no-underline cursor-pointer",
                  onClick: () => handleCardClick(project),
                  children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-evenly", children: [
                    /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "icon icon-tabler icons-tabler-outline icon-tabler-eye", children: [
                      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                      /* @__PURE__ */ jsx("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
                      /* @__PURE__ */ jsx("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })
                    ] }),
                    "Ver más"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: project.url,
                  className: "w-1/2 project-btn bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg text-center transition duration-200 hover:bg-gray-300 no-underline cursor-pointer",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-evenly", children: [
                    /* @__PURE__ */ jsxs("svg", { class: "size-4", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                      /* @__PURE__ */ jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
                      /* @__PURE__ */ jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
                    ] }),
                    "Preview"
                  ] })
                }
              )
            ] })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx(Modal, { isOpen: !!selectedProject, onClose: closeModal, project: selectedProject })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="contact text-white py-20 md:py-52 m-auto mx-6 sm:mx-6 md:mx-8 lg:mx-80" id="contact"> <!-- T\xEDtulo principal --> <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path></svg>
Contacto</h2> <!-- Contenedor con flex para alinear texto + card --> <div class="flex flex-col lg:flex-row gap-12 items-start justify-between"> <!-- Texto a la izquierda --> <div class="lg:w-1/2 text-justify"> <h3 class="text-2xl text-yellow-300 font-semibold mb-4"><span class="text-yellow-300">\xBFTienes alguna duda o propuesta?</span></h3> <p class="text-lg text-gray-300">
Completa el formulario y me pondr\xE9 en contacto contigo lo antes posible. Tambi\xE9n puedes escribirme directamente a mi correo electr\xF3nico si lo prefieres,
<a href="mailto:joserobertoshdz1423@gmail.com?Subject=Consulta%20sobre%20trabajo"> <span class="text-yellow-300">aqu\xED</span> </a>.
</p> <img src="images/laptop.webp" alt="Foto de perfil de Jos\xE9 Roberto" class="w-full h-full rounded-xl mt-10"> </div> <!-- Formulario (card) a la derecha --> <div class="contact-card w-full lg:w-3/5 bg-[#1a1a2e] p-8 rounded-lg border border-[#2c2c40] shadow-lg"> <form class="contact-form flex flex-col gap-4" id="contact-form"> <!--QUITAR POST PORQUE ASTRO NO ES BACKEND --> <label for="name" class="text-left text-lg font-semibold text-[#bfbff2]">Nombre:</label> <input type="text" id="name" name="name" required class="w-full p-3 bg-[#2e2e4d] text-[#d1d1d6] rounded-lg border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8a3ffc] transition-shadow duration-300"> <label for="email" class="text-left text-lg font-semibold text-[#bfbff2]">Correo electr\xF3nico:</label> <input type="email" id="email" name="email" required class="w-full p-3 bg-[#2e2e4d] text-[#d1d1d6] rounded-lg border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8a3ffc] transition-shadow duration-300"> <label for="message" class="text-left text-lg font-semibold text-[#bfbff2]">Mensaje:</label> <textarea id="message" name="message" rows="5" required class="w-full p-3 bg-[#2e2e4d] text-[#d1d1d6] rounded-lg border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8a3ffc] transition-shadow duration-300"></textarea> <button type="submit" class="w-full py-3 bg-[#8a3ffc] text-[#f0f0f5] font-semibold text-lg rounded-lg hover:bg-[#6e2bd8] transition duration-300">
Enviar mensaje
</button> </form> <div id="message-alert" class="hidden items-center p-4 mt-8 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert"> <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path> </svg> <span class="sr-only">Info</span> <div> <span class="font-medium">\xA1Hubo error al enviar el correo!</span> Verifica que tus datos esten correctos
</div> </div> <div id="message-send" class="hidden items-center p-4 mt-8 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert"> <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path> </svg> <span class="sr-only">Info</span> <div> <span class="font-medium">\xA1Correo enviado con exito!</span> Gracias por ponerte en contacto
</div> </div> </div> </div></section> <script lang="js">
  document.addEventListener('DOMContentLoaded', () => { // Agrega escucha evento del document con DOM
    
    const form = document.getElementById("contact-form"); // Constante que contiene lo que el usuario ingreso en el formulario con el id 'contact-form'
    const messageSend = document.getElementById("message-send");
    const messageAlert = document.getElementById("message-alert");
    
    if (!form) return; // El formulario es diferente de vac\xEDo que retorne

    form.addEventListener('submit', async (e) => { // Agrega escucha evento a trav\xE9s de un submit (bot\xF3n) de manera asincrona
      e.preventDefault();

      const formData = new FormData(form); // Constante con los datos de form con la funci\xF3n FormData()

      try {
        const res = await fetch('/api/contact', { // Requiere una petici\xF3n al endpoint en js
          method: 'POST',
          body: formData,
        });

        if (res.ok) { // Si la respuesta del servidor es 400
          messageSend.style.display = "flex"; // Mostrar mensaje enviado
          form.reset(); // Resetea los campos del formulario
        } else {
          const data = await res.json(); // Muestra un error en el formulario
          alert('Error: ' + (data.error || 'No se pudo enviar el mensaje'));
          messageAlert.style.display = "flex";
        }

      } catch (error) {
        alert('Error al enviar el mensaje');
        console.error(error);
      }
  
    });
  });
<\/script>`])), maybeRenderHead());
}, "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Portafolio de Jos\xE9 Salas - Ingeniero en Sistemas con experiencia en Desarrollo Web";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Projects", ProjectGalleryReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/components/Projects.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/Roberto/Desktop/Astro/my-portfolio-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
