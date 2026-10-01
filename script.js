const translations = {
  pt: {
    role: "Engenharia de Software", showContacts: "Mostrar contatos", hideContacts: "Ocultar contatos",
    emailLabel: "E-MAIL", phoneLabel: "TELEFONE", locationLabel: "LOCALIZAÇÃO", educationLabel: "FORMAÇÃO",
    location: "Brasília, DF, Brasil", university: "Universidade Católica de Brasília",
    navAbout: "Sobre", navExperience: "Experiência", navProjects: "Projetos", navContact: "Contato",
    aboutTitle: "Sobre mim",
    aboutP1: "Meu nome é Marcos Aurélio e estudo Engenharia de Software na Universidade Católica de Brasília. Gosto de programar e de pensar em como as pessoas vão usar o que desenvolvo.",
    aboutP2: "Atualmente atuo com suporte de TI, atendendo usuários e acompanhando chamados. Busco ampliar minha atuação em desenvolvimento full-stack e segurança da informação e estou aberto a novas oportunidades na área de tecnologia.",
    downloadResume: "Baixar currículo",
    whatIDo: "O que eu faço", skillsTitle: "Tecnologias e ferramentas",
    skillsLanguages: "Linguagens e web", skillsInterfaces: "Frameworks e interfaces",
    skillsDataCloud: "Dados e nuvem", skillsTools: "Ferramentas",
    featureDevTitle: "Desenvolvimento de software", featureDevText: "Projetos em Java, C, JavaScript, C# e SQL.",
    featureSupportTitle: "Suporte de TI", featureSupportText: "Diagnóstico de incidentes, atendimento e acompanhamento de chamados.",
    featureDataTitle: "Dados e lógica", featureDataText: "Uso SQL e algoritmos para organizar dados e resolver problemas.",
    featureLearnTitle: "Aprendizado contínuo", featureLearnText: "Sou desenvolvedor full-stack e estudo segurança da informação e práticas de engenharia de software.",
    experienceTitle: "Experiência", educationTitle: "Formação", degree: "Engenharia de Software",
    degreeDescription: "4º semestre da graduação, com estudos em programação, estruturas de dados e desenvolvimento de sistemas.",
    schoolTitle: "Ensino Fundamental e Médio",
    schoolDescription: "Estudei no Colégio Militar de Brasília, concluindo o ensino fundamental e o ensino médio.",
    workTitle: "Experiência profissional", experienceRole: "Estagiário em TI · Analista de Suporte N1",
    experiencePeriod: "Ago 2025 — no momento",
    experienceDescription: "Atendimento presencial e remoto, triagem e acompanhamento de chamados, diagnóstico de incidentes e suporte à configuração de estações de trabalho, sistemas e periféricos.",
    focusTitle: "Áreas de interesse", security: "Segurança da informação", softwareDevelopment: "Desenvolvimento de software",
    languagesTitle: "Idiomas", englishLevel: "Inglês · B2",
    projectsTitle: "Projetos", projectsLead: "Projetos em Java com aplicações web e desktop.",
    allGitHub: "Ver meu perfil no GitHub",
    contactTitle: "Contato", contactLead: "Tenho interesse em estágios e vagas de desenvolvimento de software. Também gosto de conversar sobre tecnologia.",
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
    aboutP1: "My name is Marcos Aurélio, and I'm a Software Engineering student at the Catholic University of Brasília. I enjoy programming and thinking about how people will use what I build.",
    aboutP2: "I currently work in IT support, helping users and tracking support tickets. I'm looking to expand my work in full-stack development and information security and am open to new opportunities in technology.",
    downloadResume: "Download resume",
    whatIDo: "What I do", skillsTitle: "Technologies and tools",
    skillsLanguages: "Languages and web", skillsInterfaces: "Frameworks and interfaces",
    skillsDataCloud: "Data and cloud", skillsTools: "Tools",
    featureDevTitle: "Software development", featureDevText: "Projects in Java, C, JavaScript, C# and SQL.",
    featureSupportTitle: "IT support", featureSupportText: "Incident diagnosis, user support and ticket follow-up.",
    featureDataTitle: "Data and logic", featureDataText: "I use SQL and algorithms to organize data and solve problems.",
    featureLearnTitle: "Continuous learning", featureLearnText: "I'm a full-stack developer and study information security and software engineering practices.",
    experienceTitle: "Experience", educationTitle: "Education", degree: "Software Engineering",
    degreeDescription: "Fourth semester of the degree, studying programming, data structures and systems development.",
    schoolTitle: "Elementary and High School",
    schoolDescription: "I studied at Colégio Militar de Brasília, completing both elementary and high school.",
    workTitle: "Professional experience", experienceRole: "IT Intern · Level 1 Support Analyst",
    experiencePeriod: "Aug 2025 — Present",
    experienceDescription: "On-site and remote support, ticket triage and follow-up, incident diagnosis, and help configuring workstations, systems and peripherals.",
    focusTitle: "Areas of interest", security: "Information security", softwareDevelopment: "Software development",
    languagesTitle: "Languages", englishLevel: "English · B2",
    projectsTitle: "Projects", projectsLead: "Java projects covering web and desktop applications.",
    allGitHub: "Visit my GitHub profile",
    contactTitle: "Contact", contactLead: "I'm interested in internships and software development roles. I'm also happy to talk about technology.",
    getInTouch: "Get in touch", contactPrompt: "Choose your preferred channel. I'll respond as soon as I can.",
    sendEmail: "Send email", whatsapp: "Chat on WhatsApp", copyEmail: "Copy email", copiedEmail: "Email copied!",
    copyFailed: "Could not copy", lightTheme: "Switch to light theme", darkTheme: "Switch to dark theme",
    projectType: "Academic project",
  },
};

const projects = [
  {
    title: { pt: "Conversor de Moedas", en: "Currency Converter" },
    description: {
      pt: "Aplicação Java com API REST para conversão de moedas, gráficos de cotações e histórico por sessão.",
      en: "Java application with a REST API for currency conversion, exchange-rate charts and session history.",
    },
    tags: { pt: "Java · Spring Boot · JPA · Thymeleaf · H2 · PostgreSQL", en: "Java · Spring Boot · JPA · Thymeleaf · H2 · PostgreSQL" },
    website: "https://conversor-de-moedas.pages.dev/",
    repository: "https://github.com/MarcosAAurelio/Conversor-de-moedas",
    images: [
      { src: "assets/projects/conversor-escuro.png", alt: { pt: "Conversor de moedas no tema escuro", en: "Currency converter in dark theme" } },
      { src: "assets/projects/conversor-sobre-claro.png", alt: { pt: "Página Sobre do conversor no tema claro", en: "Converter About page in light theme" } },
      { src: "assets/projects/conversor-historico-claro.png", alt: { pt: "Histórico de conversões no tema claro", en: "Conversion history in light theme" } },
      { src: "assets/projects/conversor-mobile-escuro.png", alt: { pt: "Conversor de moedas no celular, no tema escuro", en: "Mobile currency converter in dark theme" } },
    ],
  },

  {
    title: { pt: "Calculadora POO", en: "OOP Calculator" },
    description: {
      pt: "Calculadora desktop em Java Swing com operações básicas, separação entre interface e cálculos e tratamento de entradas inválidas.",
      en: "Java Swing desktop calculator with basic operations, separate interface and calculation logic, and invalid input handling.",
    },
    tags: { pt: "Java · Swing · POO", en: "Java · Swing · OOP" },
    repository: "https://github.com/MarcosAAurelio/Calculadora_POO",
    symbol: "±", color: "linear-gradient(135deg, #51436f, #262139)",
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

function getPreference(parameter, storageKey, allowedValues, fallback) {
  const previewValue = previewOptions.get(parameter);
  if (allowedValues.includes(previewValue)) return previewValue;

  const savedValue = localStorage.getItem(storageKey);
  return allowedValues.includes(savedValue) ? savedValue : fallback;
}

let language = getPreference("lang", "portfolio-language", ["pt", "en"], "pt");
let theme = getPreference("theme", "portfolio-theme", ["dark", "light"], "dark");

function updateContactsLabel() {
  const key = expandButton.getAttribute("aria-expanded") === "true" ? "hideContacts" : "showContacts";
  const label = translations[language][key];
  expandButton.setAttribute("aria-label", label);
  expandButton.querySelector("span").textContent = label;
}

const projectImageDialog = document.createElement("dialog");
projectImageDialog.className = "project-image-dialog";
const enlargedProjectImage = document.createElement("img");
const closeProjectImage = document.createElement("button");
closeProjectImage.type = "button";
closeProjectImage.className = "project-image-close";
closeProjectImage.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg>';
const previousProjectImage = document.createElement("button");
const nextProjectImage = document.createElement("button");
const enlargedImageStatus = document.createElement("span");
enlargedImageStatus.className = "project-zoom-status";
enlargedImageStatus.setAttribute("aria-live", "polite");
previousProjectImage.type = nextProjectImage.type = "button";
previousProjectImage.className = "project-zoom-nav project-zoom-previous";
nextProjectImage.className = "project-zoom-nav project-zoom-next";
previousProjectImage.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>';
nextProjectImage.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';
let moveEnlargedImage = null;
let enlargedImageRequest = 0;
previousProjectImage.addEventListener("click", (event) => {
  event.stopPropagation();
  moveEnlargedImage?.(-1);
});
nextProjectImage.addEventListener("click", (event) => {
  event.stopPropagation();
  moveEnlargedImage?.(1);
});
projectImageDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    moveEnlargedImage?.(event.key === "ArrowLeft" ? -1 : 1);
  }
});
projectImageDialog.append(closeProjectImage, enlargedProjectImage, previousProjectImage, nextProjectImage, enlargedImageStatus);
document.body.append(projectImageDialog);
closeProjectImage.addEventListener("click", () => projectImageDialog.close());
projectImageDialog.addEventListener("click", (event) => {
  if (event.target === projectImageDialog) projectImageDialog.close();
});
projectImageDialog.addEventListener("close", () => {
  root.classList.remove("project-image-open");
  enlargedImageRequest++;
  moveEnlargedImage = null;
});

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  grid.replaceChildren(...projects.map((project) => {
    const article = document.createElement("article");
    article.className = "project-card";
    const art = document.createElement("div");
    art.className = "project-art";
    if (project.images?.length) {
      art.classList.add("project-gallery");
      const image = document.createElement("img");
      image.className = "project-image";
      image.loading = "lazy";
      const zoom = document.createElement("button");
      zoom.type = "button";
      zoom.className = "project-image-zoom";
      zoom.setAttribute("aria-haspopup", "dialog");
      zoom.setAttribute("aria-label", language === "pt" ? "Ampliar imagem do projeto" : "Enlarge project image");
      zoom.append(image);
      zoom.addEventListener("click", () => {
        moveEnlargedImage = moveImage;
        showEnlargedImage();
        for (const photo of project.images) {
          const preload = new Image();
          preload.src = photo.src;
        }
        closeProjectImage.setAttribute("aria-label", language === "pt" ? "Fechar imagem ampliada" : "Close enlarged image");
        previousProjectImage.setAttribute("aria-label", language === "pt" ? "Foto anterior" : "Previous photo");
        nextProjectImage.setAttribute("aria-label", language === "pt" ? "Próxima foto" : "Next photo");
        previousProjectImage.hidden = nextProjectImage.hidden = project.images.length < 2;
        projectImageDialog.showModal();
        root.classList.add("project-image-open");
      });
      let currentImage = 0;
      const status = document.createElement("span");
      status.className = "project-image-status";
      status.setAttribute("aria-live", "polite");
      const showEnlargedImage = async () => {
        const request = ++enlargedImageRequest;
        const photo = project.images[currentImage];
        const position = currentImage;
        const readyImage = new Image();
        readyImage.src = photo.src;
        try {
          await readyImage.decode();
        } catch {
          // Keep the current image visible if the next file cannot be loaded.
          return;
        }
        if (request !== enlargedImageRequest) return;
        enlargedProjectImage.src = photo.src;
        enlargedProjectImage.alt = photo.alt[language];
        projectImageDialog.setAttribute("aria-label", photo.alt[language]);
        enlargedImageStatus.textContent = `${position + 1} / ${project.images.length}`;
      };
      const showImage = () => {
        image.src = project.images[currentImage].src;
        image.alt = project.images[currentImage].alt[language];
        status.textContent = `${currentImage + 1} / ${project.images.length}`;
      };
      const moveImage = (direction) => {
        currentImage = (currentImage + direction + project.images.length) % project.images.length;
        showImage();
        if (projectImageDialog.open) showEnlargedImage();
      };
      showImage();
      art.append(zoom);
      if (project.images.length > 1) {
        const next = document.createElement("button");
        next.type = "button";
        next.className = "project-next";
        next.setAttribute("aria-label", language === "pt" ? "Próxima foto do Conversor de Moedas" : "Next Currency Converter photo");
        next.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';
        next.addEventListener("click", () => moveImage(1));
        art.append(next, status);
      }
    } else {
      art.style.setProperty("--project-bg", project.color);
      const symbol = document.createElement("span");
      symbol.className = "project-art-icon";
      symbol.textContent = project.symbol;
      art.append(symbol);
    }
    if (project.website || project.repository) {
      const links = document.createElement("div");
      links.className = "project-links";
      for (const [url, label] of [
        [project.website, language === "pt" ? "Ver site" : "Live site"],
        [project.repository, "GitHub"],
      ]) {
        if (!url) continue;
        const link = document.createElement("a");
        link.href = url;
        link.textContent = label;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        links.append(link);
      }
      art.append(links);
    }
    const title = document.createElement("h3");
    title.textContent = project.title[language];
    const description = document.createElement("p");
    description.textContent = project.description[language];
    const tags = document.createElement("div");
    tags.className = "project-tags";
    tags.textContent = project.tags[language];
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
  updateContactsLabel();
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

const siteBrand = document.querySelector(".site-brand");
siteBrand.addEventListener("click", (event) => {
  event.preventDefault();
  activatePanel("sobre");
});

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
  updateContactsLabel();
  details.classList.toggle("open", open);
});
copyButton.addEventListener("click", async () => {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(copyButton.dataset.email);
    else {
      const input = document.createElement("textarea");
      input.value = copyButton.dataset.email;
      document.body.append(input);
      try {
        input.select();
        if (!document.execCommand("copy")) throw new Error("Copy failed");
      } finally {
        input.remove();
      }
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
