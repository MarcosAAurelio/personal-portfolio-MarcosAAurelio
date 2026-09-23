const translations = {
  pt: {
    role: "Engenharia de Software", showContacts: "Mostrar contatos", hideContacts: "Ocultar contatos",
    emailLabel: "E-MAIL", phoneLabel: "TELEFONE", locationLabel: "LOCALIZAÇÃO", educationLabel: "FORMAÇÃO",
    location: "Brasília, DF, Brasil", university: "Universidade Católica de Brasília",
    navAbout: "Sobre", navExperience: "Experiência", navProjects: "Projetos", navContact: "Contato",
    aboutTitle: "Sobre mim",
    aboutP1: "Olá! Meu nome é Marcos Aurélio, estudante de Engenharia de Software na Universidade Católica de Brasília. Gosto de transformar ideias em soluções úteis, com atenção à lógica, à experiência de uso e aos detalhes.",
    aboutP2: "Minha experiência em suporte de TI na Viveo me aproximou dos desafios reais das pessoas. Hoje, sigo aprofundando meus conhecimentos em desenvolvimento de software, backend e segurança da informação.",
    downloadResume: "Baixar currículo",
    whatIDo: "O que eu faço", skillsTitle: "Tecnologias",
    featureDevTitle: "Desenvolvimento de software", featureDevText: "Projetos em Java, C, C# e Python, com foco em soluções claras e funcionais.",
    featureSupportTitle: "Suporte de TI", featureSupportText: "Diagnóstico de incidentes, atendimento e acompanhamento de chamados.",
    featureDataTitle: "Dados e lógica", featureDataText: "Manipulação de dados, SQL e algoritmos para resolver problemas de forma estruturada.",
    featureLearnTitle: "Aprendizado contínuo", featureLearnText: "Estudo de backend, segurança da informação e boas práticas de engenharia.",
    experienceTitle: "Experiência", educationTitle: "Formação", degree: "Engenharia de Software",
    degreeDescription: "4º semestre da graduação, com estudos em programação, estruturas de dados e desenvolvimento de sistemas.",
    schoolTitle: "Ensino Fundamental e Médio",
    schoolDescription: "Estudei no Colégio Militar de Brasília, concluindo o ensino fundamental e o ensino médio.",
    workTitle: "Experiência profissional", experienceRole: "Estagiário em TI · Analista de Suporte N1",
    experiencePeriod: "Ago 2025 — Ago 2026",
    experienceDescription: "Atendimento presencial e remoto, triagem e acompanhamento de chamados, diagnóstico de incidentes e suporte à configuração de estações de trabalho, sistemas e periféricos.",
    focusTitle: "Áreas de interesse", security: "Segurança da informação", softwareDevelopment: "Desenvolvimento de software",
    languagesTitle: "Idiomas", englishLevel: "Inglês · B2",
    projectsTitle: "Projetos", projectsLead: "Uma seleção de trabalhos acadêmicos que mostram meu aprendizado em programação e resolução de problemas.",
    allGitHub: "Ver meu perfil no GitHub",
    contactTitle: "Contato", contactLead: "Estou aberto a estágios, oportunidades em desenvolvimento de software e conversas sobre tecnologia. Vamos conversar?",
    getInTouch: "Entre em contato", contactPrompt: "Escolha o canal que preferir. Responderei assim que possível.",
    sendEmail: "Enviar e-mail", whatsapp: "Conversar pelo WhatsApp", copyEmail: "Copiar e-mail", copiedEmail: "E-mail copiado!",
    copyFailed: "Não foi possível copiar", lightTheme: "Ativar tema claro", darkTheme: "Ativar tema escuro",
    projectType: "Projeto acadêmico",
  },
  en: {
    role: "Software Engineering", showContacts: "Show contacts", hideContacts: "Hide contacts",
    emailLabel: "EMAIL", phoneLabel: "PHONE", locationLabel: "LOCATION", educationLabel: "EDUCATION",
    location: "Brasília, DF, Brazil", university: "Catholic University of Brasília",
    navAbout: "About", navExperience: "Experience", navProjects: "Projects", navContact: "Contact",
    aboutTitle: "About me",
    aboutP1: "Hi! My name is Marcos Aurélio, a Software Engineering student at the Catholic University of Brasília. I enjoy turning ideas into useful solutions, with attention to logic, user experience and detail.",
    aboutP2: "My IT support experience at Viveo brought me closer to people's real challenges. I continue to deepen my knowledge of software development, backend and information security.",
    downloadResume: "Download resume",
    whatIDo: "What I do", skillsTitle: "Technologies",
    featureDevTitle: "Software development", featureDevText: "Projects in Java, C, C# and Python, focused on clear, functional solutions.",
    featureSupportTitle: "IT support", featureSupportText: "Incident diagnosis, user support and ticket follow-up.",
    featureDataTitle: "Data and logic", featureDataText: "Data handling, SQL and algorithms to solve problems in a structured way.",
    featureLearnTitle: "Continuous learning", featureLearnText: "Studying backend, information security and sound engineering practices.",
    experienceTitle: "Experience", educationTitle: "Education", degree: "Software Engineering",
    degreeDescription: "Fourth semester of the degree, studying programming, data structures and systems development.",
    schoolTitle: "Elementary and High School",
    schoolDescription: "I studied at Colégio Militar de Brasília, completing both elementary and high school.",
    workTitle: "Professional experience", experienceRole: "IT Intern · Level 1 Support Analyst",
    experiencePeriod: "Aug 2025 — Aug 2026",
    experienceDescription: "On-site and remote support, ticket triage and follow-up, incident diagnosis, and help configuring workstations, systems and peripherals.",
    focusTitle: "Areas of interest", security: "Information security", softwareDevelopment: "Software development",
    languagesTitle: "Languages", englishLevel: "English · B2",
    projectsTitle: "Projects", projectsLead: "A selection of academic work showing my progress in programming and problem solving.",
    allGitHub: "Visit my GitHub profile",
    contactTitle: "Contact", contactLead: "I'm open to internships, software development opportunities and conversations about technology. Let's talk.",
    getInTouch: "Get in touch", contactPrompt: "Choose your preferred channel. I'll respond as soon as I can.",
    sendEmail: "Send email", whatsapp: "Chat on WhatsApp", copyEmail: "Copy email", copiedEmail: "Email copied!",
    copyFailed: "Could not copy", lightTheme: "Switch to light theme", darkTheme: "Switch to dark theme",
    projectType: "Academic project",
  },
};

const projects = [
  {
    title: { pt: "Análise do Brasileirão", en: "Brasileirão Analysis" },
    description: {
      pt: "Aplicação Java para leitura de CSV, cálculo de pontuação, saldo de gols e estatísticas de desempenho.",
      en: "Java application for reading CSV files and calculating points, goal difference and performance statistics.",
    },
    tags: "Java · CSV · Algoritmos", symbol: "BR", color: "linear-gradient(135deg, #235743, #0c2a24)",
  },
  {
    title: { pt: "Aplicação Desktop", en: "Desktop Application" },
    description: {
      pt: "Sistema desktop modular com interface JavaFX, padrão MVC e manipulação de eventos.",
      en: "Modular desktop application with a JavaFX interface, MVC pattern and event handling.",
    },
    tags: "Java · JavaFX · MVC", symbol: "JFX", color: "linear-gradient(135deg, #51436f, #262139)",
  },
  {
    title: { pt: "Conversor de Moedas", en: "Currency Converter" },
    description: {
      pt: "Utilitário em C com estruturas de dados, alocação dinâmica, ponteiros e algoritmos.",
      en: "C utility using data structures, dynamic allocation, pointers and algorithms.",
    },
    tags: "C · Estruturas de Dados", symbol: "C$", color: "linear-gradient(135deg, #814c47, #3a2427)",
  },
];

const root = document.documentElement;
const avatar = document.querySelector(".avatar");
const avatarPhoto = document.querySelector(".avatar-photo");
const profilePhotoModal = document.getElementById("profile-photo-modal");
const profilePhotoClose = profilePhotoModal?.querySelector(".photo-modal-close");
const languageButton = document.querySelector(".language-toggle");
const themeButton = document.querySelector(".theme-toggle");
const expandButton = document.querySelector(".profile-expand");
const details = document.querySelector(".profile-details");
const tabLinks = [...document.querySelectorAll("[data-tab]")];
const panels = [...document.querySelectorAll(".panel")];
const contentCard = document.querySelector(".content-card");
const copyButton = document.querySelector(".copy-email");
const previewOptions = new URLSearchParams(location.search);
const panelTransitionTimers = new WeakMap();
let panelTransitionSerial = 0;

if (avatar && avatarPhoto) {
  const markAvatarPhoto = () => avatar.classList.add("has-photo");
  if (avatarPhoto.complete && avatarPhoto.naturalWidth > 0) {
    markAvatarPhoto();
  } else {
    avatarPhoto.addEventListener("load", markAvatarPhoto, { once: true });
    avatarPhoto.addEventListener("error", () => avatar.classList.remove("has-photo"), { once: true });
  }
}

if (avatar && profilePhotoModal) {
  const openProfilePhoto = () => {
    profilePhotoModal.classList.add("open");
    profilePhotoModal.setAttribute("aria-hidden", "false");
  };
  const closeProfilePhoto = () => {
    profilePhotoModal.classList.remove("open");
    profilePhotoModal.setAttribute("aria-hidden", "true");
  };

  avatar.addEventListener("click", openProfilePhoto);
  profilePhotoClose?.addEventListener("click", closeProfilePhoto);
  profilePhotoModal.addEventListener("click", (event) => {
    if (event.target === profilePhotoModal) closeProfilePhoto();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && profilePhotoModal.classList.contains("open")) closeProfilePhoto();
  });
}

let language = previewOptions.get("lang") === "en" ? "en" : previewOptions.get("lang") === "pt"
  ? "pt" : localStorage.getItem("portfolio-language") === "en" ? "en" : "pt";
let theme = previewOptions.get("theme") === "light" ? "light" : previewOptions.get("theme") === "dark"
  ? "dark" : localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  grid.replaceChildren(...projects.map((project) => {
    const article = document.createElement("article");
    article.className = "project-card";
    const art = document.createElement("div");
    art.className = "project-art";
    art.style.setProperty("--project-bg", project.color);
    const symbol = document.createElement("span");
    symbol.textContent = project.symbol;
    art.append(symbol);
    const title = document.createElement("h3");
    title.textContent = project.title[language];
    const description = document.createElement("p");
    description.textContent = project.description[language];
    const tags = document.createElement("div");
    tags.className = "project-tags";
    tags.textContent = project.tags;
    article.append(art, title, description, tags);
    return article;
  }));
}

function updateThemeControl() {
  root.dataset.theme = theme;
  const label = translations[language][theme === "dark" ? "lightTheme" : "darkTheme"];
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#121212" : "#f4f1eb";
}

function applyLanguage(next) {
  language = next;
  root.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  languageButton.textContent = language === "pt" ? "EN" : "PT";
  languageButton.setAttribute("aria-label", language === "pt" ? "Switch to English" : "Mudar para português");
  const contactsLabel = translations[language][expandButton.getAttribute("aria-expanded") === "true" ? "hideContacts" : "showContacts"];
  expandButton.setAttribute("aria-label", contactsLabel);
  expandButton.querySelector("span").textContent = contactsLabel;
  document.title = language === "pt" ? "Marcos Aurélio | Engenharia de Software" : "Marcos Aurélio | Software Engineering";
  document.querySelector('meta[name="description"]').content = language === "pt"
    ? "Portfólio de Marcos Aurélio, estudante de Engenharia de Software. Experiência, habilidades, projetos e contato."
    : "Portfolio of Marcos Aurélio, Software Engineering student. Experience, skills, projects and contact.";
  const message = language === "pt"
    ? "Olá, Marcos! Vi seu portfólio e gostaria de conversar."
    : "Hi Marcos! I saw your portfolio and would like to talk.";
  document.querySelector(".whatsapp-link").href = `https://wa.me/5561991594621?text=${encodeURIComponent(message)}`;
  renderProjects();
  updateThemeControl();
  localStorage.setItem("portfolio-language", language);
}

function activatePanel(id, updateHash = true) {
  if (!panels.some((panel) => panel.id === id)) id = "sobre";

  const transitionSerial = ++panelTransitionSerial;

  if (contentCard) {
    contentCard.classList.remove("is-switching");
    void contentCard.offsetWidth;
    contentCard.classList.add("is-switching");
    window.setTimeout(() => {
      if (transitionSerial === panelTransitionSerial) contentCard.classList.remove("is-switching");
    }, 720);
  }

  panels.forEach((panel) => {
    const isActive = panel.id === id;
    const wasDisplayed = !panel.hidden;
    const previousTimer = panelTransitionTimers.get(panel);
    if (previousTimer) window.clearTimeout(previousTimer);

    if (isActive) {
      panel.hidden = false;
      panel.classList.remove("visible", "is-exit");
      panel.style.pointerEvents = "auto";
      panel.offsetWidth;
      window.requestAnimationFrame(() => {
        if (transitionSerial === panelTransitionSerial) panel.classList.add("visible");
      });
    } else if (wasDisplayed) {
      panel.hidden = false;
      panel.classList.remove("visible");
      panel.classList.add("is-exit");
      panel.style.pointerEvents = "none";
      const timer = window.setTimeout(() => {
        if (transitionSerial !== panelTransitionSerial) return;
        panel.hidden = true;
        panel.classList.remove("is-exit");
      }, 360);
      panelTransitionTimers.set(panel, timer);
    } else {
      panel.hidden = true;
      panel.classList.remove("visible", "is-exit");
      panel.style.pointerEvents = "none";
    }
  });

  tabLinks.forEach((link) => {
    const active = link.dataset.tab === id;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (updateHash) history.replaceState(null, "", `#${id}`);
  window.scrollTo({ top: 0, behavior: "instant" });
}

tabLinks.forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  activatePanel(link.dataset.tab);
}));
window.addEventListener("hashchange", () => activatePanel(location.hash.slice(1), false));
languageButton.addEventListener("click", () => applyLanguage(language === "pt" ? "en" : "pt"));
themeButton.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", theme);
  updateThemeControl();
});
expandButton.addEventListener("click", () => {
  const open = expandButton.getAttribute("aria-expanded") !== "true";
  expandButton.setAttribute("aria-expanded", String(open));
  expandButton.setAttribute("aria-label", translations[language][open ? "hideContacts" : "showContacts"]);
  expandButton.querySelector("span").textContent = translations[language][open ? "hideContacts" : "showContacts"];
  details.classList.toggle("open", open);
});
copyButton.addEventListener("click", async () => {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(copyButton.dataset.email);
    else {
      const input = document.createElement("textarea");
      input.value = copyButton.dataset.email;
      document.body.append(input);
      input.select();
      if (!document.execCommand("copy")) throw new Error("Copy failed");
      input.remove();
    }
    copyButton.textContent = translations[language].copiedEmail;
  } catch {
    copyButton.textContent = translations[language].copyFailed;
  }
  setTimeout(() => { copyButton.textContent = translations[language].copyEmail; }, 1800);
});

document.querySelector("#year").textContent = new Date().getFullYear();
applyLanguage(language);
activatePanel(previewOptions.get("tab") || location.hash.slice(1), false);
