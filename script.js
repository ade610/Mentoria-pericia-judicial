const mobileFixStyles = document.createElement("style");
mobileFixStyles.setAttribute("data-mobile-fix", "hero-responsive");
mobileFixStyles.textContent = `
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  @media (max-width: 640px) {
    .site-header {
      position: sticky !important;
      top: 0 !important;
    }

    .nav {
      min-height: 64px !important;
      padding: 8px 0 !important;
    }

    .brand {
      max-width: calc(100% - 62px) !important;
      gap: 10px !important;
      font-size: 0.98rem !important;
      line-height: 1.15 !important;
    }

    .brand-mark {
      width: 42px !important;
      height: 42px !important;
      flex: 0 0 42px !important;
      font-size: 0.76rem !important;
    }

    .menu-toggle {
      width: 54px !important;
      height: 54px !important;
      flex: 0 0 54px !important;
    }

    .hero {
      min-height: auto !important;
      display: block !important;
      padding-top: 26px !important;
      padding-bottom: 92px !important;
      overflow: visible !important;
    }

    .hero .container,
    .container {
      width: calc(100% - 28px) !important;
      max-width: 100% !important;
    }

    .hero-grid {
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 28px !important;
      align-items: start !important;
    }

    .hero-content {
      width: 100% !important;
      max-width: 100% !important;
    }

    .eyebrow {
      font-size: 0.72rem !important;
      line-height: 1.35 !important;
      letter-spacing: 0.16em !important;
      margin-bottom: 12px !important;
    }

    .hero h1,
    h1 {
      max-width: 100% !important;
      font-size: clamp(2.05rem, 11.2vw, 2.85rem) !important;
      line-height: 1.08 !important;
      letter-spacing: 0.01em !important;
      margin-bottom: 20px !important;
      word-break: normal !important;
      overflow-wrap: anywhere !important;
      hyphens: auto !important;
    }

    .hero-subtitle {
      max-width: 100% !important;
      font-size: 1.02rem !important;
      line-height: 1.62 !important;
      margin-bottom: 18px !important;
    }

    .hero-actions {
      width: 100% !important;
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 12px !important;
      margin-top: 24px !important;
    }

    .hero-actions .btn,
    .btn {
      width: 100% !important;
      min-height: 54px !important;
      padding: 14px 18px !important;
      white-space: normal !important;
      text-align: center !important;
      line-height: 1.25 !important;
    }

    .hero-side {
      width: 100% !important;
      max-width: 100% !important;
      gap: 18px !important;
    }

    .hero-photo-frame {
      width: 100% !important;
      min-height: 0 !important;
      max-height: 460px !important;
      aspect-ratio: 4 / 4.8 !important;
      border-radius: 24px !important;
    }

    .hero-card {
      padding: 22px !important;
      border-radius: 22px !important;
    }

    .hero-card h2 {
      font-size: clamp(1.55rem, 8vw, 2rem) !important;
      line-height: 1.12 !important;
      letter-spacing: 0.01em !important;
    }

    .floating-whatsapp {
      right: 12px !important;
      bottom: 12px !important;
      min-height: 48px !important;
      max-width: calc(100% - 24px) !important;
      padding: 0 18px !important;
      font-size: 0.95rem !important;
      z-index: 80 !important;
    }

    .section {
      padding: 58px 0 !important;
    }

    .hotmart-product::before {
      inset: 14px !important;
      border-radius: 22px !important;
    }
  }

  @media (max-width: 390px) {
    .hero h1,
    h1 {
      font-size: 2rem !important;
      line-height: 1.1 !important;
    }

    .hero-subtitle {
      font-size: 0.98rem !important;
    }

    .brand span:last-child {
      font-size: 0.88rem !important;
    }
  }
`;
document.head.appendChild(mobileFixStyles);

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("[data-menu]");
const whatsappForm = document.querySelector("[data-whatsapp-form]");
const whatsappNumber = "5543996015086";

function closeMenu() {
  menu?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menu?.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", Boolean(isOpen));
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

whatsappForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(whatsappForm);
  const nome = data.get("nome")?.toString().trim();
  const profissao = data.get("profissao")?.toString().trim();
  const whatsapp = data.get("whatsapp")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const mensagem = data.get("mensagem")?.toString().trim();

  const text = [
    "Olá, Ademilson Melo. Tenho interesse na promoção de R$ 89,90 para conhecer e entender melhor a área de Perícia Judicial.",
    "",
    `Nome: ${nome}`,
    `Profissão: ${profissao}`,
    `WhatsApp: ${whatsapp}`,
    `E-mail: ${email}`,
    `Mensagem: ${mensagem}`,
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  whatsappForm.reset();
});
