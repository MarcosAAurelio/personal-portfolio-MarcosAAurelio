const projects = [
  {
    title: { pt: "Análise do Brasileirão", en: "Brasileirão Data Analysis" },
    description: {
      pt: "Aplicação Java para leitura de CSV, cálculo de pontuação, saldo de gols e estatísticas de desempenho.",
      en: "Java application for CSV parsing, score calculation, goal difference and performance statistics.",
    },
    tags: ["Java", "CSV", "Algoritmos"],
    symbol: "BR/",
    color: "linear-gradient(135deg, #14532d, #16a34a)",
    url: "https://github.com/MarcosAAurelio",
  },
  {
    title: { pt: "Aplicação Desktop", en: "Desktop Application" },
    description: {
      pt: "Sistema desktop modular com interface JavaFX, padrão MVC e manipulação de eventos em tempo real.",
      en: "Modular desktop system with a JavaFX interface, MVC pattern and real-time event handling.",
    },
    tags: ["Java", "JavaFX", "MVC"],
    symbol: "JFX",
    color: "linear-gradient(135deg, #4c1d95, #8b5cf6)",
    url: "https://github.com/MarcosAAurelio",
  },
  {
    title: { pt: "Conversor de Moedas", en: "Currency Converter" },
    description: {
      pt: "Utilitário em C com estruturas de dados, alocação dinâmica, ponteiros e algoritmos de busca e ordenação.",
      en: "C utility using data structures, dynamic allocation, pointers, searching and sorting algorithms.",
    },
    tags: ["C", "Estruturas de Dados", "Algoritmos"],
    symbol: "C$",
    color: "linear-gradient(135deg, #9f1239, #f43f5e)",
    url: "https://github.com/MarcosAAurelio",
  },
];

const grid = document.querySelector("#project-grid");

function renderProjects(language) {
  grid.innerHTML = "";
  projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card reveal";
  article.style.setProperty("--project-bg", project.color);
  article.innerHTML = `
    <a href="${project.url}" target="_blank" rel="noreferrer" aria-label="${language === "pt" ? "Abrir projeto" : "Open project"} ${project.title[language]}">
      <div class="project-visual"><span class="project-symbol">${project.symbol}</span></div>
      <div class="project-content">
        <div class="project-top">
          <div>
            <span class="project-index">${language === "pt" ? "PROJETO" : "PROJECT"} 0${index + 1}</span>
            <h3>${project.title[language]}</h3>
          </div>
          <span class="project-arrow">↗</span>
        </div>
        <p>${project.description[language]}</p>
        <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </a>`;
  grid.appendChild(article);
  observer.observe(article);
  });
}

const translations = {
  pt: {
    navAbout: "Sobre", navExperience: "Experiência", navProjects: "Projetos", navContact: "Contato",
    availability: "Aberto a oportunidades em desenvolvimento",
    heroTitle: "Software bem pensado, <span>problemas bem resolvidos.</span>",
    heroDescription: "Olá, sou <strong>Marcos Aurélio</strong> — estudante de Engenharia de Software que une experiência corporativa em TI à vontade de construir soluções úteis e eficientes.",
    viewProjects: "Ver projetos", letsTalk: "Vamos conversar", aboutEyebrow: "01 / SOBRE",
    aboutTitle: "Curioso por natureza.<br />Analítico na prática.",
    aboutP1: "Sou estudante de Engenharia de Software na Universidade Católica de Brasília, com experiência prática corporativa como Analista de Suporte N1 na Viveo.",
    aboutP2: "Tenho perfil analítico e criativo, adaptação rápida a novas tecnologias e interesse especial em backend, segurança da informação e desenvolvimento de software.",
    statProjects: "Projetos em destaque", statSemester: "Semestre da graduação", statEnglish: "Inglês",
    experienceEyebrow: "02 / EXPERIÊNCIA", experienceTitle: "Onde tecnologia encontra pessoas.",
    experiencePeriod: "AGO 2025 — AGO 2026", experienceRole: "Jovem Aprendiz em TI · Analista de Suporte N1",
    experienceDescription: "Atendimento presencial e remoto, triagem e acompanhamento de chamados, diagnóstico de incidentes e suporte à configuração de estações de trabalho, sistemas e periféricos.",
    projectsEyebrow: "03 / PROJETOS", projectsTitle: "Projetos que contam minha evolução.",
    projectsDescription: "Aplicações acadêmicas criadas para transformar conceitos de engenharia de software em soluções que funcionam.",
    contactEyebrow: "04 / CONTATO", contactTitle: "Vamos tirar uma ideia<br /><span>do papel?</span>",
    contactDescription: "Estou aberto a estágios, oportunidades em desenvolvimento de software e boas conversas sobre tecnologia.",
    copyEmail: "Copiar e-mail", copiedEmail: "E-mail copiado!", footerText: "Projetado e desenvolvido com curiosidade.",
  },
  en: {
    navAbout: "About", navExperience: "Experience", navProjects: "Projects", navContact: "Contact",
    availability: "Open to software development opportunities",
    heroTitle: "Thoughtful software, <span>well-solved problems.</span>",
    heroDescription: "Hi, I'm <strong>Marcos Aurélio</strong> — a Software Engineering student combining hands-on corporate IT experience with the drive to build useful, efficient solutions.",
    viewProjects: "View projects", letsTalk: "Let's talk", aboutEyebrow: "01 / ABOUT",
    aboutTitle: "Curious by nature.<br />Analytical in practice.",
    aboutP1: "I study Software Engineering at the Catholic University of Brasília and have hands-on corporate experience as an N1 Support Analyst at Viveo.",
    aboutP2: "I have an analytical and creative mindset, adapt quickly to new technologies, and am especially interested in backend development, information security and software engineering.",
    statProjects: "Featured projects", statSemester: "University semester", statEnglish: "English level",
    experienceEyebrow: "02 / EXPERIENCE", experienceTitle: "Where technology meets people.",
    experiencePeriod: "AUG 2025 — AUG 2026", experienceRole: "IT Apprentice · N1 Support Analyst",
    experienceDescription: "On-site and remote support, ticket triage and follow-up, incident diagnosis, and support for workstation, system and peripheral configuration.",
    projectsEyebrow: "03 / PROJECTS", projectsTitle: "Projects that show my growth.",
    projectsDescription: "Academic applications built to turn software engineering concepts into solutions that work.",
    contactEyebrow: "04 / CONTACT", contactTitle: "Let's bring an idea<br /><span>to life?</span>",
    contactDescription: "I'm open to internships, software development opportunities and good conversations about technology.",
    copyEmail: "Copy email", copiedEmail: "Email copied!", footerText: "Designed and developed with curiosity.",
  },
};

let currentLanguage = localStorage.getItem("portfolio-language") || "pt";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translations[language][element.dataset.i18nHtml];
  });
  const languageButton = document.querySelector(".language-toggle");
  languageButton.textContent = language === "pt" ? "EN" : "PT";
  languageButton.setAttribute("aria-label", language === "pt" ? "Switch to English" : "Mudar para português");
  localStorage.setItem("portfolio-language", language);
  renderProjects(language);
}

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) root.dataset.theme = savedTheme;

themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", root.dataset.theme);
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector(".language-toggle").addEventListener("click", () => applyLanguage(currentLanguage === "pt" ? "en" : "pt"));

const copyButton = document.querySelector(".copy-email");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
  } catch {
    const input = document.createElement("textarea");
    input.value = copyButton.dataset.email;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  copyButton.textContent = translations[currentLanguage].copiedEmail;
  setTimeout(() => { copyButton.textContent = translations[currentLanguage].copyEmail; }, 1800);
});

applyLanguage(currentLanguage);
document.querySelector("#year").textContent = new Date().getFullYear();
