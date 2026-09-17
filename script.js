const projects = [
  {
    title: "Finflow",
    description: "Dashboard financeiro com visão clara de gastos, metas e investimentos.",
    tags: ["React", "TypeScript", "Chart.js"],
    symbol: "F/",
    color: "linear-gradient(135deg, #164e63, #0891b2)",
    url: "#",
  },
  {
    title: "Nexus AI",
    description: "Assistente inteligente para organizar ideias e acelerar tarefas criativas.",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    symbol: "N*",
    color: "linear-gradient(135deg, #4c1d95, #8b5cf6)",
    url: "#",
  },
  {
    title: "Pulse",
    description: "Plataforma social para descobrir eventos, pessoas e lugares na sua cidade.",
    tags: ["Node.js", "PostgreSQL", "React"],
    symbol: "P°",
    color: "linear-gradient(135deg, #9f1239, #f43f5e)",
    url: "#",
  },
];

const grid = document.querySelector("#project-grid");

projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card reveal";
  article.style.setProperty("--project-bg", project.color);
  article.innerHTML = `
    <a href="${project.url}" aria-label="Abrir projeto ${project.title}">
      <div class="project-visual"><span class="project-symbol">${project.symbol}</span></div>
      <div class="project-content">
        <div class="project-top">
          <div>
            <span class="project-index">PROJETO 0${index + 1}</span>
            <h3>${project.title}</h3>
          </div>
          <span class="project-arrow">↗</span>
        </div>
        <p>${project.description}</p>
        <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </a>`;
  grid.appendChild(article);
});

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
document.querySelector("#year").textContent = new Date().getFullYear();
